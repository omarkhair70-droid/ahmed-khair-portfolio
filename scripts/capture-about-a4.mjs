import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const out = "artifacts/about-a4";
await fs.mkdir(out, { recursive: true });

const browser = await chromium.launch({ headless: true });

for (const testCase of [
  { name: "mobile-390", width: 390, height: 844 },
  { name: "mobile-360", width: 360, height: 800 },
]) {
  const context = await browser.newContext({
    viewport: { width: testCase.width, height: testCase.height },
  });

  const page = await context.newPage();
  await page.goto("http://127.0.0.1:3000/about", { waitUntil: "networkidle" });
  await page.waitForTimeout(900);

  const metrics = await page.evaluate(() => {
    const hero = document.querySelector(".about-page-hero");
    const practice = document.querySelector(".about-page-practice");
    const craft = document.querySelector(".about-page-craft");
    const end = document.querySelector(".about-page-end");
    const portrait = document.querySelector(".about-page-portrait__image");
    const titleLines = Array.from(document.querySelectorAll(".about-page-hero__title span"));
    const practiceLines = Array.from(document.querySelectorAll(".about-page-practice__title span"));
    const navLinks = Array.from(document.querySelectorAll(".about-page-end__nav a"));

    if (
      !(hero instanceof HTMLElement) ||
      !(practice instanceof HTMLElement) ||
      !(craft instanceof HTMLElement) ||
      !(end instanceof HTMLElement) ||
      !(portrait instanceof HTMLImageElement)
    ) {
      throw new Error("A4 selectors missing");
    }

    return {
      viewport: { width: innerWidth, height: innerHeight },
      page: {
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        scrollHeight: document.documentElement.scrollHeight,
      },
      sections: {
        hero: { top: hero.offsetTop, height: hero.offsetHeight },
        practice: { top: practice.offsetTop, height: practice.offsetHeight },
        craft: { top: craft.offsetTop, height: craft.offsetHeight },
        end: { top: end.offsetTop, height: end.offsetHeight },
      },
      portrait: {
        naturalWidth: portrait.naturalWidth,
        naturalHeight: portrait.naturalHeight,
        rect: {
          left: Math.round(portrait.getBoundingClientRect().left),
          right: Math.round(portrait.getBoundingClientRect().right),
          top: Math.round(portrait.getBoundingClientRect().top),
          bottom: Math.round(portrait.getBoundingClientRect().bottom),
          width: Math.round(portrait.getBoundingClientRect().width),
          height: Math.round(portrait.getBoundingClientRect().height),
        },
      },
      titleLines: titleLines.map((el) => {
        const r = el.getBoundingClientRect();
        return {
          text: el.textContent?.trim(),
          left: Math.round(r.left),
          right: Math.round(r.right),
          width: Math.round(r.width),
        };
      }),
      practiceLines: practiceLines.map((el) => {
        const r = el.getBoundingClientRect();
        return {
          text: el.textContent?.trim(),
          left: Math.round(r.left),
          right: Math.round(r.right),
          width: Math.round(r.width),
        };
      }),
      navLinks: navLinks.map((el) => ({
        text: el.textContent?.trim(),
        href: el.getAttribute("href"),
      })),
      smallest: Math.min(
        ...Array.from(document.querySelectorAll(
          ".about-page-hero__meta,.about-page-portrait figcaption,.about-page-hero__index,.about-page-practice__head,.about-page-craft__head,.about-page-work__label,.about-page-work a > span,.about-page-end__meta,.about-page-end__nav"
        )).map((el) => parseFloat(getComputedStyle(el).fontSize)),
      ),
    };
  });

  await fs.writeFile(
    path.join(out, `${testCase.name}-metrics.json`),
    JSON.stringify(metrics, null, 2),
  );

  if (metrics.page.scrollWidth > metrics.page.clientWidth + 1) {
    throw new Error(
      `A4 horizontal overflow at ${testCase.name}: ${metrics.page.scrollWidth} > ${metrics.page.clientWidth}`,
    );
  }

  if (metrics.smallest < 8) {
    throw new Error(`A4 mobile microcopy below 8px at ${testCase.name}: ${metrics.smallest}`);
  }

  for (const line of [...metrics.titleLines, ...metrics.practiceLines]) {
    if (line.left < -1 || line.right > metrics.viewport.width + 1) {
      throw new Error(
        `A4 text clipping at ${testCase.name}: ${line.text} [${line.left}, ${line.right}]`,
      );
    }
  }

  if (
    metrics.portrait.rect.left < -1 ||
    metrics.portrait.rect.right > metrics.viewport.width + 1
  ) {
    throw new Error(
      `A4 portrait exceeds viewport at ${testCase.name}: ${JSON.stringify(metrics.portrait.rect)}`,
    );
  }

  if (!metrics.navLinks.some((link) => link.href === "/#work")) {
    throw new Error(`A4 missing Selected Work closing nav at ${testCase.name}`);
  }

  await page.screenshot({
    path: path.join(out, `${testCase.name}-full.png`),
    fullPage: true,
  });

  const positions = [
    0,
    metrics.sections.practice.top - Math.round(testCase.height * 0.1),
    metrics.sections.craft.top - Math.round(testCase.height * 0.1),
    metrics.sections.end.top - Math.round(testCase.height * 0.1),
  ];

  for (let index = 0; index < positions.length; index += 1) {
    await page.evaluate(
      (top) => window.scrollTo({ top: Math.max(0, top), behavior: "auto" }),
      positions[index],
    );
    await page.waitForTimeout(220);
    await page.screenshot({
      path: path.join(out, `${testCase.name}-a4-${index}.png`),
      fullPage: false,
    });
  }

  await context.close();
}

await browser.close();
