import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const out = "artifacts/home-h14";
await fs.mkdir(out, { recursive: true });

const browser = await chromium.launch({ headless: true });

const cases = [
  {
    name: "desktop-1440",
    width: 1440,
    height: 900,
    baselineHeight: 20064,
    baselineBoch: 5197,
    baselineShamadan: 6581,
    baselineCriminal: 3316,
  },
  {
    name: "desktop-1280",
    width: 1280,
    height: 900,
    baselineHeight: 19771,
    baselineBoch: 4756,
    baselineShamadan: 5995,
    baselineCriminal: 2977,
  },
  {
    name: "mobile-390",
    width: 390,
    height: 844,
    baselineHeight: 15448,
    baselineBoch: 3028,
    baselineShamadan: 3656,
    baselineCriminal: 2342,
  },
  {
    name: "mobile-360",
    width: 360,
    height: 800,
    baselineHeight: 14935,
    baselineBoch: 2879,
    baselineShamadan: 3534,
    baselineCriminal: 2282,
  },
];

const selectors = [
  ["hero", ".hero"],
  ["work", "#work"],
  ["boch", ".scene--boch"],
  ["shamadan", ".scene--shamadan"],
  ["criminal", ".scene--criminal"],
  ["coffee", ".scene--coffee"],
  ["about", ".about"],
  ["contact", ".contact"],
];

for (const testCase of cases) {
  const context = await browser.newContext({
    viewport: { width: testCase.width, height: testCase.height },
  });
  const page = await context.newPage();

  await page.goto("http://127.0.0.1:3000", { waitUntil: "networkidle" });
  await page.waitForTimeout(1900);

  const metrics = await page.evaluate((orderedSelectors) => {
    const sectionMetrics = orderedSelectors.map(([name, selector]) => {
      const el = document.querySelector(selector);
      if (!(el instanceof HTMLElement)) {
        throw new Error(`Missing H14 section: ${selector}`);
      }
      return {
        name,
        selector,
        top: el.offsetTop,
        height: el.offsetHeight,
        bottom: el.offsetTop + el.offsetHeight,
      };
    });

    const mobileMicroSelectors = [
      ".work-index__label",
      ".work-index__number",
      ".work-index__kind",
      ".boch-entry p",
      ".boch-head__meta",
      ".boch-frame figcaption",
      ".boch-act__copy span",
      ".boch-exit__copy",
      ".shamadan-head__meta",
      ".shamadan-frame figcaption",
      ".shamadan-act__copy > span",
      ".shamadan-exit",
      ".criminal-head__meta",
      ".criminal-stage__label",
      ".criminal-frame figcaption",
      ".criminal-exit__meta",
      ".coffee-stage__meta",
      ".coffee-frame figcaption",
      ".coffee-stage__close",
      ".about-entry",
      ".about-kicker",
      ".about-portrait figcaption",
      ".contact-meta",
      ".contact-nav",
    ];

    const micro = mobileMicroSelectors
      .map((selector) => {
        const el = document.querySelector(selector);
        if (!(el instanceof HTMLElement)) return null;
        return {
          selector,
          fontSize: parseFloat(getComputedStyle(el).fontSize),
        };
      })
      .filter(Boolean);

    const bochExit = document.querySelector(".boch-exit");
    const criminalExit = document.querySelector(".criminal-exit");

    return {
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      page: {
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        scrollHeight: document.documentElement.scrollHeight,
      },
      sections: sectionMetrics,
      micro,
      repeatedHandoffs: {
        boch: bochExit?.textContent?.includes("EL SHAMADAN") ?? false,
        criminal:
          criminalExit?.textContent?.includes("ABD ALLAL COFFEE") ?? false,
      },
    };
  }, selectors);

  const byName = Object.fromEntries(
    metrics.sections.map((section) => [section.name, section]),
  );

  await fs.writeFile(
    path.join(out, `${testCase.name}-metrics.json`),
    JSON.stringify(
      {
        ...metrics,
        improvements: {
          page:
            1 - metrics.page.scrollHeight / testCase.baselineHeight,
          boch: 1 - byName.boch.height / testCase.baselineBoch,
          shamadan:
            1 - byName.shamadan.height / testCase.baselineShamadan,
          criminal:
            1 - byName.criminal.height / testCase.baselineCriminal,
        },
      },
      null,
      2,
    ),
  );

  if (metrics.page.scrollWidth > metrics.page.clientWidth + 1) {
    throw new Error(
      `Horizontal overflow at ${testCase.name}: ${metrics.page.scrollWidth} > ${metrics.page.clientWidth}`,
    );
  }

  // Hero includes an authored handoff that visually extends beyond the
  // hero's own layout box, so Hero -> Work is intentionally not a flush
  // section-boundary assertion. Every section from Work onward must join.
  if (byName.work.top <= byName.hero.bottom) {
    throw new Error(
      `Hero handoff collapsed before Work at ${testCase.name}: hero bottom ${byName.hero.bottom}, work top ${byName.work.top}`,
    );
  }

  for (let index = 1; index < metrics.sections.length - 1; index += 1) {
    const current = metrics.sections[index];
    const next = metrics.sections[index + 1];
    if (Math.abs(current.bottom - next.top) > 1) {
      throw new Error(
        `H14 boundary gap ${current.name} -> ${next.name} at ${testCase.name}: ${current.bottom} vs ${next.top}`,
      );
    }
  }

  if (metrics.page.scrollHeight >= testCase.baselineHeight * 0.96) {
    throw new Error(
      `H14 global pacing did not materially improve at ${testCase.name}: ${metrics.page.scrollHeight} vs baseline ${testCase.baselineHeight}`,
    );
  }

  if (byName.boch.height >= testCase.baselineBoch * 0.92) {
    throw new Error(
      `BOCH pacing reduction too small at ${testCase.name}: ${byName.boch.height} vs baseline ${testCase.baselineBoch}`,
    );
  }

  if (byName.shamadan.height >= testCase.baselineShamadan * 0.92) {
    throw new Error(
      `Shamadan pacing reduction too small at ${testCase.name}: ${byName.shamadan.height} vs baseline ${testCase.baselineShamadan}`,
    );
  }

  if (byName.criminal.height >= testCase.baselineCriminal * 0.95) {
    throw new Error(
      `Criminal pacing reduction too small at ${testCase.name}: ${byName.criminal.height} vs baseline ${testCase.baselineCriminal}`,
    );
  }

  if (
    metrics.repeatedHandoffs.boch ||
    metrics.repeatedHandoffs.criminal
  ) {
    throw new Error(
      `Repeated project-title handoff remains at ${testCase.name}: ${JSON.stringify(metrics.repeatedHandoffs)}`,
    );
  }

  if (testCase.width <= 700) {
    const tooSmall = metrics.micro.filter((item) => item.fontSize < 8);
    if (tooSmall.length > 0) {
      throw new Error(
        `Mobile microcopy below 8px at ${testCase.name}: ${tooSmall
          .map((item) => `${item.selector}=${item.fontSize}`)
          .join(", ")}`,
      );
    }
  }

  await page.screenshot({
    path: path.join(out, `${testCase.name}-full.png`),
    fullPage: true,
  });

  const checkpoints = [
    Math.max(0, byName.work.top - Math.round(testCase.height * 0.3)),
    Math.max(0, byName.boch.top - Math.round(testCase.height * 0.25)),
    byName.boch.top + Math.round(byName.boch.height * 0.46),
    Math.max(0, byName.shamadan.top - Math.round(testCase.height * 0.22)),
    byName.shamadan.top + Math.round(byName.shamadan.height * 0.48),
    Math.max(0, byName.criminal.top - Math.round(testCase.height * 0.22)),
    Math.max(0, byName.coffee.top - Math.round(testCase.height * 0.22)),
    Math.max(0, byName.about.top - Math.round(testCase.height * 0.2)),
    Math.max(0, byName.contact.top - Math.round(testCase.height * 0.2)),
  ];

  for (let index = 0; index < checkpoints.length; index += 1) {
    await page.evaluate(
      (top) => window.scrollTo({ top, behavior: "auto" }),
      checkpoints[index],
    );
    await page.waitForTimeout(testCase.width > 700 ? 520 : 430);
    await page.screenshot({
      path: path.join(out, `${testCase.name}-checkpoint-${index}.png`),
      fullPage: false,
    });
  }

  await context.close();
}

for (const reducedCase of [
  { name: "desktop-1440-reduced", width: 1440, height: 900 },
  { name: "mobile-390-reduced", width: 390, height: 844 },
]) {
  const context = await browser.newContext({
    viewport: { width: reducedCase.width, height: reducedCase.height },
    reducedMotion: "reduce",
  });
  const page = await context.newPage();

  await page.goto("http://127.0.0.1:3000", { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);

  const reducedMetrics = await page.evaluate(() => {
    const targets = [
      ".boch-frame--hero",
      ".shamadan-frame--hero",
      ".criminal-frame--hero",
      ".coffee-frame--hero",
      ".about-cutout",
      ".contact-title span",
    ];

    return targets.map((selector) => {
      const el = document.querySelector(selector);
      if (!(el instanceof HTMLElement)) {
        throw new Error(`Missing reduced-motion target: ${selector}`);
      }
      const style = getComputedStyle(el);
      return {
        selector,
        opacity: parseFloat(style.opacity),
        transform: style.transform,
        clipPath: style.clipPath,
      };
    });
  });

  await fs.writeFile(
    path.join(out, `${reducedCase.name}-metrics.json`),
    JSON.stringify(reducedMetrics, null, 2),
  );

  const hidden = reducedMetrics.filter((item) => item.opacity < 0.99);
  if (hidden.length > 0) {
    throw new Error(
      `Reduced-motion content hidden at ${reducedCase.name}: ${hidden
        .map((item) => item.selector)
        .join(", ")}`,
    );
  }

  const about = await page.locator(".about");
  await about.scrollIntoViewIfNeeded();
  await page.waitForTimeout(250);
  await page.screenshot({
    path: path.join(out, `${reducedCase.name}-about.png`),
    fullPage: false,
  });

  await context.close();
}

await browser.close();
