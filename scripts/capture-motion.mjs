import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const out = "artifacts/motion";
await fs.mkdir(out, { recursive: true });

const browser = await chromium.launch({ headless: true });

const cases = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844 },
];

for (const testCase of cases) {
  const videoDir = path.join(out, testCase.name);
  await fs.mkdir(videoDir, { recursive: true });

  const context = await browser.newContext({
    viewport: { width: testCase.width, height: testCase.height },
    recordVideo: {
      dir: videoDir,
      size:
        testCase.name === "desktop"
          ? { width: 960, height: 600 }
          : { width: 390, height: 844 },
    },
  });

  const page = await context.newPage();
  await page.goto("http://127.0.0.1:3000", { waitUntil: "networkidle" });
  await page.waitForTimeout(2200);

  const total = await page.evaluate(
    () => document.documentElement.scrollHeight - window.innerHeight,
  );

  const checkpoints = 22;
  for (let index = 0; index <= checkpoints; index += 1) {
    const top = Math.round((total * index) / checkpoints);
    await page.evaluate((scrollTop) => {
      window.scrollTo({ top: scrollTop, behavior: "auto" });
    }, top);
    await page.waitForTimeout(testCase.name === "desktop" ? 420 : 340);

    if ([0, 4, 8, 12, 16, 20, 22].includes(index)) {
      await page.screenshot({
        path: path.join(out, `${testCase.name}-motion-${String(index).padStart(2, "0")}.png`),
        fullPage: false,
      });
    }
  }

  await page.waitForTimeout(900);
  await context.close();
}

await browser.close();
