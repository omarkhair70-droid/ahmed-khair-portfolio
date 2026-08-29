import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const out = "artifacts/about-h12";
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
    const coffee = document.querySelector(".scene--coffee");
    const about = document.querySelector(".about");
    const contact = document.querySelector(".contact");
    const portrait = document.querySelector(".about-portrait");
    const portraitImg = document.querySelector(".about-cutout");
    const title = document.querySelector(".about-copy h2");

    if (
      !(coffee instanceof HTMLElement) ||
      !(about instanceof HTMLElement) ||
      !(contact instanceof HTMLElement) ||
      !(portrait instanceof HTMLElement) ||
      !(portraitImg instanceof HTMLImageElement) ||
      !(title instanceof HTMLElement)
    ) {
      throw new Error("H12 section selectors missing");
    }

    const portraitRect = portrait.getBoundingClientRect();
    const titleRect = title.getBoundingClientRect();

    return {
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      page: {
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
      },
      coffeeBottom: coffee.offsetTop + coffee.offsetHeight,
      aboutTop: about.offsetTop,
      aboutHeight: about.offsetHeight,
      aboutBottom: about.offsetTop + about.offsetHeight,
      contactTop: contact.offsetTop,
      portrait: {
        position: getComputedStyle(portrait).position,
        width: Math.round(portraitRect.width),
        height: Math.round(portraitRect.height),
        left: Math.round(portraitRect.left),
        right: Math.round(portraitRect.right),
        naturalWidth: portraitImg.naturalWidth,
        naturalHeight: portraitImg.naturalHeight,
      },
      title: {
        width: Math.round(titleRect.width),
        left: Math.round(titleRect.left),
        right: Math.round(titleRect.right),
      },
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

  if (Math.abs(metrics.coffeeBottom - metrics.aboutTop) > 1) {
    throw new Error(
      `Coffee -> About boundary gap at ${testCase.name}: ${metrics.coffeeBottom} vs ${metrics.aboutTop}`,
    );
  }

  if (Math.abs(metrics.aboutBottom - metrics.contactTop) > 1) {
    throw new Error(
      `About -> Contact boundary gap at ${testCase.name}: ${metrics.aboutBottom} vs ${metrics.contactTop}`,
    );
  }

  if (!metrics.portrait.naturalWidth || !metrics.portrait.naturalHeight) {
    throw new Error(`Ahmed portrait failed to load at ${testCase.name}`);
  }

  if (
    metrics.portrait.left < -1 ||
    metrics.portrait.right > metrics.viewport.width + 1
  ) {
    throw new Error(
      `About portrait escapes viewport at ${testCase.name}: ${metrics.portrait.left}..${metrics.portrait.right}`,
    );
  }

  if (testCase.width <= 700 && metrics.portrait.position === "absolute") {
    throw new Error(
      `About portrait must remain in mobile document flow at ${testCase.name}`,
    );
  }

  const positions = [
    Math.max(0, metrics.aboutTop - Math.round(testCase.height * 0.5)),
    metrics.aboutTop + Math.round(metrics.aboutHeight * 0.08),
    metrics.aboutTop + Math.round(metrics.aboutHeight * 0.25),
    metrics.aboutTop + Math.round(metrics.aboutHeight * 0.48),
    metrics.aboutTop + Math.round(metrics.aboutHeight * 0.72),
    metrics.aboutTop + Math.round(metrics.aboutHeight * 0.9),
  ];

  for (let index = 0; index < positions.length; index += 1) {
    await page.evaluate(
      (top) => window.scrollTo({ top, behavior: "auto" }),
      positions[index],
    );
    await page.waitForTimeout(testCase.width > 700 ? 500 : 420);
    await page.screenshot({
      path: path.join(out, `${testCase.name}-h12-${index}.png`),
      fullPage: false,
    });
  }

  await context.close();
}

await browser.close();
