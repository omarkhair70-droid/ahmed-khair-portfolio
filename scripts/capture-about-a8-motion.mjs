import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const out = "artifacts/about-a8-motion";
await fs.mkdir(out, { recursive: true });

const browser = await chromium.launch({ headless: true });

for (const testCase of [
  { name: "desktop-1440", width: 1440, height: 900, video: { width: 960, height: 600 } },
  { name: "mobile-390", width: 390, height: 844, video: { width: 390, height: 844 } },
]) {
  const videoDir = path.join(out, testCase.name);
  await fs.mkdir(videoDir, { recursive: true });

  const context = await browser.newContext({
    viewport: { width: testCase.width, height: testCase.height },
    recordVideo: {
      dir: videoDir,
      size: testCase.video,
    },
  });

  const page = await context.newPage();
  await page.goto("http://127.0.0.1:3000/about", { waitUntil: "networkidle" });

  await page.waitForTimeout(260);
  await page.screenshot({
    path: path.join(out, `${testCase.name}-intro-early.png`),
    fullPage: false,
  });

  await page.waitForTimeout(1500);
  await page.screenshot({
    path: path.join(out, `${testCase.name}-intro-settled.png`),
    fullPage: false,
  });

  const metrics = await page.evaluate(() => {
    const get = (selector) => {
      const el = document.querySelector(selector);
      if (!(el instanceof HTMLElement)) throw new Error(`Missing A8 selector ${selector}`);
      return { top: el.offsetTop, height: el.offsetHeight };
    };

    return {
      page: {
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        scrollHeight: document.documentElement.scrollHeight,
      },
      practice: get(".about-page-practice"),
      craft: get(".about-page-craft"),
      end: get(".about-page-end"),
    };
  });

  if (metrics.page.scrollWidth > metrics.page.clientWidth + 1) {
    throw new Error(
      `A8 horizontal overflow at ${testCase.name}: ${metrics.page.scrollWidth} > ${metrics.page.clientWidth}`,
    );
  }

  const checkpoints = [
    Math.max(0, metrics.practice.top - Math.round(testCase.height * 0.35)),
    metrics.practice.top + Math.round(metrics.practice.height * 0.36),
    Math.max(0, metrics.craft.top - Math.round(testCase.height * 0.25)),
    metrics.craft.top + Math.round(metrics.craft.height * 0.36),
    Math.max(0, metrics.end.top - Math.round(testCase.height * 0.22)),
    Math.max(0, metrics.page.scrollHeight - testCase.height),
  ];

  for (let index = 0; index < checkpoints.length; index += 1) {
    await page.evaluate(
      (top) => window.scrollTo({ top, behavior: "auto" }),
      checkpoints[index],
    );
    await page.waitForTimeout(testCase.width > 700 ? 430 : 330);
    await page.screenshot({
      path: path.join(out, `${testCase.name}-motion-${index}.png`),
      fullPage: false,
    });
  }

  await fs.writeFile(
    path.join(out, `${testCase.name}-metrics.json`),
    JSON.stringify(metrics, null, 2),
  );

  await page.waitForTimeout(500);
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

  await page.goto("http://127.0.0.1:3000/about", { waitUntil: "networkidle" });
  await page.waitForTimeout(500);

  const state = await page.evaluate(() => {
    const selectors = [
      ".about-page-hero__title span",
      ".about-page-portrait__image",
      ".about-page-practice__title span",
      ".about-page-craft__list p",
      ".about-page-end__behance > *",
    ];
    return selectors.map((selector) => {
      const el = document.querySelector(selector);
      if (!(el instanceof HTMLElement)) throw new Error(`Missing reduced target ${selector}`);
      const style = getComputedStyle(el);
      return {
        selector,
        opacity: parseFloat(style.opacity),
        transform: style.transform,
        clipPath: style.clipPath,
      };
    });
  });

  const hidden = state.filter((item) => item.opacity < 0.99);
  if (hidden.length) {
    throw new Error(
      `A8 reduced-motion hidden content at ${reducedCase.name}: ${hidden
        .map((item) => item.selector)
        .join(", ")}`,
    );
  }

  await fs.writeFile(
    path.join(out, `${reducedCase.name}-metrics.json`),
    JSON.stringify(state, null, 2),
  );

  await page.screenshot({
    path: path.join(out, `${reducedCase.name}.png`),
    fullPage: false,
  });

  await context.close();
}

await browser.close();
