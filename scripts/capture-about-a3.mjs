import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const out = "artifacts/about-a3";
await fs.mkdir(out, { recursive: true });

const browser = await chromium.launch({ headless: true });

for (const testCase of [
  { name: "desktop-1440", width: 1440, height: 900 },
  { name: "desktop-1280", width: 1280, height: 900 },
]) {
  const context = await browser.newContext({
    viewport: { width: testCase.width, height: testCase.height },
  });

  const page = await context.newPage();
  await page.goto("http://127.0.0.1:3000/about", { waitUntil: "networkidle" });
  await page.waitForTimeout(1200);

  const metrics = await page.evaluate(() => {
    const hero = document.querySelector(".about-page-hero");
    const practice = document.querySelector(".about-page-practice");
    const craft = document.querySelector(".about-page-craft");
    const end = document.querySelector(".about-page-end");
    const portrait = document.querySelector(".about-page-portrait__image");

    if (
      !(hero instanceof HTMLElement) ||
      !(practice instanceof HTMLElement) ||
      !(craft instanceof HTMLElement) ||
      !(end instanceof HTMLElement) ||
      !(portrait instanceof HTMLImageElement)
    ) {
      throw new Error("A3 selectors missing");
    }

    return {
      viewport: { width: window.innerWidth, height: window.innerHeight },
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
        renderedWidth: Math.round(portrait.getBoundingClientRect().width),
        renderedHeight: Math.round(portrait.getBoundingClientRect().height),
      },
      title: document.querySelector("#about-page-title")?.textContent?.replace(/\s+/g, " ").trim(),
      behance: (document.querySelector(".about-page-end__behance") instanceof HTMLAnchorElement)
        ? document.querySelector(".about-page-end__behance").href
        : null,
    };
  });

  await fs.writeFile(
    path.join(out, `${testCase.name}-metrics.json`),
    JSON.stringify(metrics, null, 2),
  );

  if (metrics.page.scrollWidth > metrics.page.clientWidth + 1) {
    throw new Error(
      `A3 horizontal overflow at ${testCase.name}: ${metrics.page.scrollWidth} > ${metrics.page.clientWidth}`,
    );
  }

  if (!metrics.portrait.naturalWidth || !metrics.portrait.naturalHeight) {
    throw new Error(`A3 portrait failed to load at ${testCase.name}`);
  }

  if (!metrics.behance?.includes("behance.net/ahmedkhairgemy")) {
    throw new Error(`A3 Behance link mismatch at ${testCase.name}`);
  }

  await page.screenshot({
    path: path.join(out, `${testCase.name}-full.png`),
    fullPage: true,
  });

  const positions = [
    0,
    metrics.sections.practice.top - Math.round(testCase.height * 0.12),
    metrics.sections.craft.top - Math.round(testCase.height * 0.12),
    metrics.sections.end.top - Math.round(testCase.height * 0.12),
  ];

  for (let index = 0; index < positions.length; index += 1) {
    await page.evaluate(
      (top) => window.scrollTo({ top: Math.max(0, top), behavior: "auto" }),
      positions[index],
    );
    await page.waitForTimeout(250);
    await page.screenshot({
      path: path.join(out, `${testCase.name}-a3-${index}.png`),
      fullPage: false,
    });
  }

  await context.close();
}

await browser.close();
