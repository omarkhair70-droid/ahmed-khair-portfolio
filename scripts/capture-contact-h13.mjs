import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const out = "artifacts/contact-h13";
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
    const about = document.querySelector(".about");
    const contact = document.querySelector(".contact");
    const title = document.querySelector(".contact-title");
    const titleSpans = Array.from(
      document.querySelectorAll(".contact-title > span"),
    );
    const primary = document.querySelector(".contact-primary");
    const navLinks = Array.from(
      document.querySelectorAll(".contact-nav a"),
    );

    if (
      !(about instanceof HTMLElement) ||
      !(contact instanceof HTMLElement) ||
      !(title instanceof HTMLElement) ||
      !(primary instanceof HTMLAnchorElement)
    ) {
      throw new Error("H13 section selectors missing");
    }

    const contactRect = contact.getBoundingClientRect();

    return {
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      page: {
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        scrollHeight: document.documentElement.scrollHeight,
      },
      aboutBottom: about.offsetTop + about.offsetHeight,
      contactTop: contact.offsetTop,
      contactHeight: contact.offsetHeight,
      contactBottom: contact.offsetTop + contact.offsetHeight,
      contactWidth: Math.round(contactRect.width),
      titleSpans: titleSpans.map((span) => {
        const rect = span.getBoundingClientRect();
        return {
          text: span.textContent?.trim() ?? "",
          left: Math.round(rect.left),
          right: Math.round(rect.right),
          width: Math.round(rect.width),
        };
      }),
      primary: {
        text: primary.textContent?.replace(/\s+/g, " ").trim(),
        href: primary.href,
      },
      nav: navLinks.map((link) => ({
        text: link.textContent?.trim() ?? "",
        href: link.getAttribute("href"),
      })),
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

  if (Math.abs(metrics.aboutBottom - metrics.contactTop) > 1) {
    throw new Error(
      `About -> Contact boundary gap at ${testCase.name}: ${metrics.aboutBottom} vs ${metrics.contactTop}`,
    );
  }

  if (Math.abs(metrics.contactBottom - metrics.page.scrollHeight) > 1) {
    throw new Error(
      `Contact is not the final document frame at ${testCase.name}: ${metrics.contactBottom} vs ${metrics.page.scrollHeight}`,
    );
  }

  if (metrics.titleSpans.length !== 3) {
    throw new Error(
      `Expected 3 closing title lines at ${testCase.name}, got ${metrics.titleSpans.length}`,
    );
  }

  if (!metrics.primary.href.includes("behance.net/ahmedkhairgemy")) {
    throw new Error(`Unexpected H13 primary link at ${testCase.name}`);
  }

  const expectedNav = ["#work", "#about", "#top"];
  const actualNav = metrics.nav.map((item) => item.href);
  for (const expected of expectedNav) {
    if (!actualNav.includes(expected)) {
      throw new Error(
        `Missing closing nav link ${expected} at ${testCase.name}`,
      );
    }
  }

  const positions = [
    Math.max(0, metrics.contactTop - Math.round(testCase.height * 0.5)),
    metrics.contactTop + Math.round(metrics.contactHeight * 0.08),
    metrics.contactTop + Math.round(metrics.contactHeight * 0.32),
    metrics.contactTop + Math.round(metrics.contactHeight * 0.58),
    Math.max(0, metrics.page.scrollHeight - testCase.height),
  ];

  for (let index = 0; index < positions.length; index += 1) {
    await page.evaluate(
      (top) => window.scrollTo({ top, behavior: "auto" }),
      positions[index],
    );
    await page.waitForTimeout(testCase.width > 700 ? 500 : 420);
    await page.screenshot({
      path: path.join(out, `${testCase.name}-h13-${index}.png`),
      fullPage: false,
    });
  }

  await context.close();
}

await browser.close();
