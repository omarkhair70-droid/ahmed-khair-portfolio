import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const out = "artifacts/coffee-h11";
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
    const criminal = document.querySelector(".scene--criminal");
    const coffee = document.querySelector(".scene--coffee");
    const about = document.querySelector(".about");
    const frames = Array.from(
      document.querySelectorAll(".scene--coffee .coffee-frame"),
    );

    if (
      !(criminal instanceof HTMLElement) ||
      !(coffee instanceof HTMLElement) ||
      !(about instanceof HTMLElement)
    ) {
      throw new Error("H11 section selectors missing");
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
      criminalBottom: criminal.offsetTop + criminal.offsetHeight,
      coffeeTop: coffee.offsetTop,
      coffeeHeight: coffee.offsetHeight,
      coffeeBottom: coffee.offsetTop + coffee.offsetHeight,
      aboutTop: about.offsetTop,
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

  if (Math.abs(metrics.criminalBottom - metrics.coffeeTop) > 1) {
    throw new Error(
      `Criminal -> Coffee boundary gap at ${testCase.name}: ${metrics.criminalBottom} vs ${metrics.coffeeTop}`,
    );
  }

  if (Math.abs(metrics.coffeeBottom - metrics.aboutTop) > 1) {
    throw new Error(
      `Coffee -> About boundary gap at ${testCase.name}: ${metrics.coffeeBottom} vs ${metrics.aboutTop}`,
    );
  }

  if (metrics.frames.length !== 2) {
    throw new Error(
      `Expected 2 Coffee frames at ${testCase.name}, got ${metrics.frames.length}`,
    );
  }

  const positions = [
    Math.max(0, metrics.coffeeTop - Math.round(testCase.height * 0.52)),
    metrics.coffeeTop + Math.round(metrics.coffeeHeight * 0.08),
    metrics.coffeeTop + Math.round(metrics.coffeeHeight * 0.28),
    metrics.coffeeTop + Math.round(metrics.coffeeHeight * 0.52),
    metrics.coffeeTop + Math.round(metrics.coffeeHeight * 0.76),
    metrics.coffeeTop + Math.round(metrics.coffeeHeight * 0.92),
  ];

  for (let index = 0; index < positions.length; index += 1) {
    await page.evaluate(
      (top) => window.scrollTo({ top, behavior: "auto" }),
      positions[index],
    );
    await page.waitForTimeout(testCase.width > 700 ? 500 : 420);
    await page.screenshot({
      path: path.join(out, `${testCase.name}-h11-${index}.png`),
      fullPage: false,
    });
  }

  await context.close();
}

await browser.close();
