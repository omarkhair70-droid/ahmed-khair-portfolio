import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const out = "artifacts/about-a10";
await fs.mkdir(out, { recursive: true });

const browser = await chromium.launch({ headless: true });

const cases = [
  { name: "desktop-1440", width: 1440, height: 900, reduced: true },
  { name: "desktop-1280", width: 1280, height: 900, reduced: false },
  { name: "mobile-390", width: 390, height: 844, reduced: true },
  { name: "mobile-360", width: 360, height: 800, reduced: false },
];

const expectedWork = [
  "/#boch",
  "/#shamadan",
  "/#criminal",
  "/#coffee",
];

const targetIds = ["boch", "shamadan", "criminal", "coffee"];

async function readTargetVisibility(page, id) {
  return page.locator(`#${id}`).evaluate((el) => {
    const rect = el.getBoundingClientRect();
    return {
      top: rect.top,
      bottom: rect.bottom,
      viewportHeight: innerHeight,
      scrollY,
      documentHeight: document.documentElement.scrollHeight,
    };
  });
}

function assertVisibleTarget(result, label, viewportName, threshold = 0.55) {
  if (
    result.bottom <= 0 ||
    result.top >= result.viewportHeight * threshold
  ) {
    throw new Error(
      `${label} is not actually visible at ${viewportName}: ${JSON.stringify(result)}`,
    );
  }
}

for (const testCase of cases) {
  const context = await browser.newContext({
    viewport: { width: testCase.width, height: testCase.height },
  });
  const page = await context.newPage();

  await page.goto("http://127.0.0.1:3000/about", {
    waitUntil: "networkidle",
  });
  await page.waitForTimeout(950);

  const metrics = await page.evaluate(() => {
    const portrait = document.querySelector(".about-page-portrait__image");
    const titleLines = Array.from(
      document.querySelectorAll(".about-page-hero__title span"),
    );
    const topbarLinks = Array.from(
      document.querySelectorAll(".topbar__nav a"),
    );
    const workLinks = Array.from(
      document.querySelectorAll(".about-page-work a"),
    );
    const endLinks = Array.from(
      document.querySelectorAll(".about-page-end__nav a"),
    );
    const behance = document.querySelector(".about-page-end__behance");
    const images = Array.from(document.images);

    if (
      !(portrait instanceof HTMLImageElement) ||
      !(behance instanceof HTMLAnchorElement)
    ) {
      throw new Error("A10 core selectors missing");
    }

    return {
      page: {
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        scrollHeight: document.documentElement.scrollHeight,
      },
      portrait: {
        naturalWidth: portrait.naturalWidth,
        naturalHeight: portrait.naturalHeight,
        rect: {
          left: portrait.getBoundingClientRect().left,
          right: portrait.getBoundingClientRect().right,
          top: portrait.getBoundingClientRect().top,
          bottom: portrait.getBoundingClientRect().bottom,
        },
      },
      titleLines: titleLines.map((line) => {
        const rect = line.getBoundingClientRect();
        return {
          text: line.textContent?.trim() ?? "",
          left: rect.left,
          right: rect.right,
        };
      }),
      topbar: topbarLinks.map((link) => ({
        text: link.textContent?.trim() ?? "",
        href: link.getAttribute("href"),
        current: link.getAttribute("aria-current"),
      })),
      work: workLinks.map((link) => link.getAttribute("href")),
      end: endLinks.map((link) => link.getAttribute("href")),
      behance: {
        href: behance.href,
        target: behance.target,
        rel: behance.rel,
      },
      brokenImages: images
        .filter((image) => !image.complete || image.naturalWidth === 0)
        .map((image) => image.getAttribute("src")),
    };
  });

  await fs.writeFile(
    path.join(out, `${testCase.name}-metrics.json`),
    JSON.stringify(metrics, null, 2),
  );

  if (metrics.page.scrollWidth > metrics.page.clientWidth + 1) {
    throw new Error(
      `A10 horizontal overflow at ${testCase.name}: ${metrics.page.scrollWidth} > ${metrics.page.clientWidth}`,
    );
  }

  if (!metrics.portrait.naturalWidth || !metrics.portrait.naturalHeight) {
    throw new Error(`A10 portrait failed to load at ${testCase.name}`);
  }

  if (
    metrics.portrait.rect.left < -1 ||
    metrics.portrait.rect.right > testCase.width + 1
  ) {
    throw new Error(
      `A10 portrait exceeds viewport at ${testCase.name}: ${JSON.stringify(metrics.portrait.rect)}`,
    );
  }

  for (const line of metrics.titleLines) {
    if (line.left < -1 || line.right > testCase.width + 1) {
      throw new Error(
        `A10 title crop at ${testCase.name}: ${JSON.stringify(line)}`,
      );
    }
  }

  const currentAbout = metrics.topbar.find(
    (link) => link.href === "/about" && link.current === "page",
  );
  if (!currentAbout) {
    throw new Error(`A10 About current-page state missing at ${testCase.name}`);
  }

  for (const href of ["/#work", "/about", "/#contact"]) {
    if (!metrics.topbar.some((link) => link.href === href)) {
      throw new Error(
        `A10 topbar route ${href} missing at ${testCase.name}`,
      );
    }
  }

  if (JSON.stringify(metrics.work) !== JSON.stringify(expectedWork)) {
    throw new Error(
      `A10 selected-work route contract changed at ${testCase.name}: ${JSON.stringify(metrics.work)}`,
    );
  }

  for (const href of ["/", "/#work", "/#contact", "#about-page-title"]) {
    if (!metrics.end.includes(href)) {
      throw new Error(
        `A10 closing route ${href} missing at ${testCase.name}`,
      );
    }
  }

  if (
    !metrics.behance.href.includes("behance.net/ahmedkhairgemy") ||
    metrics.behance.target !== "_blank"
  ) {
    throw new Error(`A10 Behance contract mismatch at ${testCase.name}`);
  }

  if (metrics.brokenImages.length) {
    throw new Error(
      `A10 broken images at ${testCase.name}: ${metrics.brokenImages.join(", ")}`,
    );
  }

  await page.screenshot({
    path: path.join(out, `${testCase.name}-full.png`),
    fullPage: true,
  });

  await page.keyboard.press("Tab");
  await page.waitForTimeout(120);

  const focus = await page.evaluate(() => {
    const active = document.activeElement;
    if (!(active instanceof HTMLElement)) return null;
    const style = getComputedStyle(active);
    return {
      tag: active.tagName,
      text: active.textContent?.trim() ?? "",
      href:
        active instanceof HTMLAnchorElement
          ? active.getAttribute("href")
          : null,
      focusVisible: active.matches(":focus-visible"),
      outlineStyle: style.outlineStyle,
      outlineWidth: style.outlineWidth,
    };
  });

  if (
    !focus ||
    focus.tag !== "A" ||
    !focus.focusVisible ||
    focus.outlineStyle === "none" ||
    Number.parseFloat(focus.outlineWidth) < 2
  ) {
    throw new Error(
      `A10 visible keyboard focus failed at ${testCase.name}: ${JSON.stringify(focus)}`,
    );
  }

  await page.screenshot({
    path: path.join(out, `${testCase.name}-focus.png`),
    fullPage: false,
  });

  await page.evaluate(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "auto",
    });
  });
  await page.waitForTimeout(220);

  const backToTop = page.locator(
    '.about-page-end__nav a[href="#about-page-title"]',
  );
  await backToTop.click();
  await page.waitForTimeout(650);

  const topVisibility = await page.locator("#about-page-title").evaluate((el) => {
    const rect = el.getBoundingClientRect();
    return {
      top: rect.top,
      bottom: rect.bottom,
      viewportHeight: innerHeight,
    };
  });

  if (
    topVisibility.bottom <= 0 ||
    topVisibility.top >= topVisibility.viewportHeight * 0.7
  ) {
    throw new Error(
      `A10 Back to top failed at ${testCase.name}: ${JSON.stringify(topVisibility)}`,
    );
  }

  await page.screenshot({
    path: path.join(out, `${testCase.name}-back-to-top.png`),
    fullPage: false,
  });

  for (const id of targetIds) {
    await page.goto("http://127.0.0.1:3000/about", {
      waitUntil: "networkidle",
    });

    const link = page.locator(`.about-page-work a[href="/#${id}"]`);
    if (!(await link.isVisible())) {
      throw new Error(
        `A10 selected-work link ${id} hidden at ${testCase.name}`,
      );
    }

    await link.click();
    await page.waitForURL(`**/#${id}`);
    await page.waitForTimeout(380);

    const visibility = await readTargetVisibility(page, id);
    assertVisibleTarget(
      visibility,
      `A10 selected-work target #${id}`,
      testCase.name,
    );

    if (id === "boch" || id === "coffee") {
      await page.screenshot({
        path: path.join(
          out,
          `${testCase.name}-selected-${id}.png`,
        ),
        fullPage: false,
      });
    }
  }

  await page.goto("http://127.0.0.1:3000/about", {
    waitUntil: "networkidle",
  });
  const contact = page.locator('.about-page-end__nav a[href="/#contact"]');
  await contact.click();
  await page.waitForURL("**/#contact");
  await page.waitForTimeout(380);

  const contactVisibility = await readTargetVisibility(page, "contact");
  assertVisibleTarget(
    contactVisibility,
    "A10 Contact return",
    testCase.name,
    0.45,
  );

  await page.screenshot({
    path: path.join(out, `${testCase.name}-contact-return.png`),
    fullPage: false,
  });

  await context.close();

  if (testCase.reduced) {
    const reducedContext = await browser.newContext({
      viewport: { width: testCase.width, height: testCase.height },
      reducedMotion: "reduce",
    });
    const reducedPage = await reducedContext.newPage();

    await reducedPage.goto("http://127.0.0.1:3000/about", {
      waitUntil: "networkidle",
    });
    await reducedPage.waitForTimeout(320);

    const reducedMetrics = await reducedPage.evaluate(() => {
      const selectors = [
        ".about-page-hero__title span",
        ".about-page-portrait__image",
        ".about-page-practice__title span",
        ".about-page-craft__list p",
        ".about-page-end__behance",
      ];

      return selectors.map((selector) => {
        const el = document.querySelector(selector);
        if (!(el instanceof HTMLElement)) {
          return { selector, missing: true };
        }
        const style = getComputedStyle(el);
        return {
          selector,
          opacity: style.opacity,
          transform: style.transform,
          visibility: style.visibility,
        };
      });
    });

    for (const item of reducedMetrics) {
      if (
        item.missing ||
        item.visibility === "hidden" ||
        Number.parseFloat(item.opacity) < 0.99 ||
        item.transform !== "none"
      ) {
        throw new Error(
          `A10 reduced-motion target not settled at ${testCase.name}: ${JSON.stringify(item)}`,
        );
      }
    }

    await fs.writeFile(
      path.join(out, `${testCase.name}-reduced-metrics.json`),
      JSON.stringify(reducedMetrics, null, 2),
    );

    await reducedPage.screenshot({
      path: path.join(out, `${testCase.name}-reduced.png`),
      fullPage: false,
    });

    await reducedContext.close();
  }
}

await browser.close();
