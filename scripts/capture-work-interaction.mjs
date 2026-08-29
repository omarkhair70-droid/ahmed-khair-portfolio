import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const out = "artifacts/work-interaction";
await fs.mkdir(out, { recursive: true });

const browser = await chromium.launch({ headless: true });

// Desktop pointer / hover verification.
{
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    recordVideo: {
      dir: path.join(out, "desktop-video"),
      size: { width: 960, height: 600 },
    },
  });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:3000", { waitUntil: "networkidle" });
  await page.waitForTimeout(2200);

  await page.locator("#work").scrollIntoViewIfNeeded();
  await page.waitForTimeout(1800);

  const rows = page.locator(".work-index__row");
  const count = await rows.count();

  for (let index = 0; index < count; index += 1) {
    const row = rows.nth(index);
    const box = await row.boundingBox();
    if (!box) continue;

    await page.mouse.move(
      Math.min(1160, box.x + box.width * 0.63),
      box.y + box.height * 0.52,
      { steps: 10 },
    );
    await page.waitForTimeout(650);

    await page.screenshot({
      path: path.join(out, `desktop-hover-${String(index + 1).padStart(2, "0")}.png`),
      fullPage: false,
    });
  }

  await page.mouse.move(80, 80, { steps: 8 });
  await page.waitForTimeout(500);
  await context.close();
}

// Mobile scroll-focus / touch-state verification.
{
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    recordVideo: {
      dir: path.join(out, "mobile-video"),
      size: { width: 390, height: 844 },
    },
  });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:3000", { waitUntil: "networkidle" });
  await page.waitForTimeout(2200);

  await page.locator("#work").scrollIntoViewIfNeeded();
  await page.waitForTimeout(1600);

  const rows = page.locator(".work-index__row");
  const count = await rows.count();

  for (let index = 0; index < count; index += 1) {
    const row = rows.nth(index);
    await row.scrollIntoViewIfNeeded();
    const box = await row.boundingBox();
    if (!box) continue;

    const targetScroll = await page.evaluate(
      ({ top, height }) =>
        window.scrollY + top + height / 2 - window.innerHeight / 2,
      { top: box.y, height: box.height },
    );

    await page.evaluate((top) => window.scrollTo({ top, behavior: "auto" }), targetScroll);
    await page.waitForTimeout(520);

    await page.screenshot({
      path: path.join(out, `mobile-active-${String(index + 1).padStart(2, "0")}.png`),
      fullPage: false,
    });
  }

  await context.close();
}

await browser.close();
