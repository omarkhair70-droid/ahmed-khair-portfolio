import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const out = "artifacts/boch-h8";
await fs.mkdir(out, { recursive: true });

const browser = await chromium.launch({ headless: true });

const cases = [
  { name: "desktop-1440", width: 1440, height: 900 },
  { name: "desktop-1280", width: 1280, height: 900 },
  { name: "mobile-390", width: 390, height: 844 },
  { name: "mobile-360", width: 360, height: 800 },
];

for (const testCase of cases) {
  const context = await browser.newContext({
    viewport: { width: testCase.width, height: testCase.height },
  });

  const page = await context.newPage();
  await page.goto("http://127.0.0.1:3000", { waitUntil: "networkidle" });
  await page.waitForTimeout(1800);

  const metrics = await page.evaluate(() => {
    const boch = document.querySelector(".scene--boch");
    const work = document.querySelector("#work");
    const shamadan = document.querySelector(".scene--shamadan");
    const frames = Array.from(document.querySelectorAll(".scene--boch .boch-frame"));

    if (!(boch instanceof HTMLElement) || !(work instanceof HTMLElement)) {
      throw new Error("H8 selectors missing");
    }

    return {
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      page: {
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
      },
      workBottom: work.offsetTop + work.offsetHeight,
      bochTop: boch.offsetTop,
      bochHeight: boch.offsetHeight,
      shamadanTop: shamadan instanceof HTMLElement ? shamadan.offsetTop : null,
      frames: frames.map((frame) => {
        const img = frame.querySelector("img");
        const rect = frame.getBoundingClientRect();
        return {
          className: frame.className,
          width: Math.round(rect.width),
          height: Math.round(rect.height),
          naturalWidth: img instanceof HTMLImageElement ? img.naturalWidth : null,
          naturalHeight: img instanceof HTMLImageElement ? img.naturalHeight : null,
        };
      }),
    };
  });

  await fs.writeFile(
    path.join(out, `${testCase.name}-metrics.json`),
    JSON.stringify(metrics, null, 2),
  );

  if (metrics.page.scrollWidth > metrics.page.clientWidth + 1) {
    throw new Error(
      `Horizontal overflow at ${testCase.name}: ${metrics.page.scrollWidth} > ${metrics.page.clientWidth}`,
    );
  }

  const positions = [
    Math.max(0, metrics.bochTop - Math.round(testCase.height * 0.58)),
    metrics.bochTop + Math.round(metrics.bochHeight * 0.12),
    metrics.bochTop + Math.round(metrics.bochHeight * 0.35),
    metrics.bochTop + Math.round(metrics.bochHeight * 0.58),
    metrics.bochTop + Math.round(metrics.bochHeight * 0.82),
  ];

  for (let index = 0; index < positions.length; index += 1) {
    await page.evaluate((top) => window.scrollTo({ top, behavior: "auto" }), positions[index]);
    await page.waitForTimeout(testCase.width > 700 ? 520 : 420);
    await page.screenshot({
      path: path.join(out, `${testCase.name}-h8-${index}.png`),
      fullPage: false,
    });
  }

  await context.close();
}

await browser.close();
