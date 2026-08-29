import fs from "node:fs/promises";
import { chromium } from "playwright";

const out = "artifacts/screenshots";
await fs.mkdir(out, { recursive: true });

const browser = await chromium.launch({ headless: true });

const cases = [
  { name: "desktop", width: 1440, height: 1000, dpr: 1 },
  { name: "desktop-1280", width: 1280, height: 900, dpr: 1 },
  { name: "mobile", width: 390, height: 844, dpr: 1 },
  { name: "mobile-360", width: 360, height: 800, dpr: 1 },
];

for (const testCase of cases) {
  const context = await browser.newContext({
    viewport: { width: testCase.width, height: testCase.height },
    deviceScaleFactor: testCase.dpr,
    reducedMotion: "reduce",
  });

  const page = await context.newPage();
  await page.goto("http://127.0.0.1:3000", { waitUntil: "networkidle" });

  await page.screenshot({
    path: `${out}/${testCase.name}-full.png`,
    fullPage: true,
  });

  for (const [label, selector] of [
    ["hero", "#top"],
    ["work", "#work"],
    ["boch", ".scene--boch"],
    ["shamadan", ".scene--shamadan"],
    ["criminal", ".scene--criminal"],
    ["coffee", ".scene--coffee"],
    ["about", "#about"],
    ["contact", "#contact"],
  ]) {
    const locator = page.locator(selector).first();
    await locator.scrollIntoViewIfNeeded();
    await page.waitForTimeout(80);
    await locator.screenshot({
      path: `${out}/${testCase.name}-${label}.png`,
    });
  }

  await context.close();
}

await browser.close();
