import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const out = "artifacts/shamadan-h9";
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
    const shamadan = document.querySelector(".scene--shamadan");
    const criminal = document.querySelector(".scene--criminal");
    const frames = Array.from(
      document.querySelectorAll(".scene--shamadan .shamadan-frame"),
    );

    if (
      !(boch instanceof HTMLElement) ||
      !(shamadan instanceof HTMLElement) ||
      !(criminal instanceof HTMLElement)
    ) {
      throw new Error("H9 section selectors missing");
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
      bochBottom: boch.offsetTop + boch.offsetHeight,
      shamadanTop: shamadan.offsetTop,
      shamadanHeight: shamadan.offsetHeight,
      shamadanBottom: shamadan.offsetTop + shamadan.offsetHeight,
      criminalTop: criminal.offsetTop,
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

  if (Math.abs(metrics.bochBottom - metrics.shamadanTop) > 1) {
    throw new Error(
      `BOCH -> Shamadan boundary gap at ${testCase.name}: ${metrics.bochBottom} vs ${metrics.shamadanTop}`,
    );
  }

  if (Math.abs(metrics.shamadanBottom - metrics.criminalTop) > 1) {
    throw new Error(
      `Shamadan -> Criminal boundary gap at ${testCase.name}: ${metrics.shamadanBottom} vs ${metrics.criminalTop}`,
    );
  }

  if (metrics.frames.length !== 5) {
    throw new Error(
      `Expected 5 Shamadan frames at ${testCase.name}, got ${metrics.frames.length}`,
    );
  }

  const positions = [
    Math.max(0, metrics.shamadanTop - Math.round(testCase.height * 0.54)),
    metrics.shamadanTop + Math.round(metrics.shamadanHeight * 0.08),
    metrics.shamadanTop + Math.round(metrics.shamadanHeight * 0.27),
    metrics.shamadanTop + Math.round(metrics.shamadanHeight * 0.49),
    metrics.shamadanTop + Math.round(metrics.shamadanHeight * 0.71),
    metrics.shamadanTop + Math.round(metrics.shamadanHeight * 0.9),
  ];

  for (let index = 0; index < positions.length; index += 1) {
    await page.evaluate(
      (top) => window.scrollTo({ top, behavior: "auto" }),
      positions[index],
    );
    await page.waitForTimeout(testCase.width > 700 ? 500 : 410);
    await page.screenshot({
      path: path.join(
        out,
        `${testCase.name}-h9-${index}.png`,
      ),
      fullPage: false,
    });
  }

  await context.close();
}

await browser.close();
