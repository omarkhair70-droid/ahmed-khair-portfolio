import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const out = "artifacts/about-a9-navigation";
await fs.mkdir(out, { recursive: true });

const browser = await chromium.launch({ headless: true });

for (const testCase of [
  { name: "desktop-1440", width: 1440, height: 900 },
  { name: "mobile-390", width: 390, height: 844 },
]) {
  const context = await browser.newContext({
    viewport: { width: testCase.width, height: testCase.height },
  });
  const page = await context.newPage();

  await page.goto("http://127.0.0.1:3000", { waitUntil: "networkidle" });

  const about = page.locator('.topbar__nav a[href="/about"]');
  if ((await about.count()) !== 1 || !(await about.isVisible())) {
    throw new Error("Home About route is missing or hidden");
  }

  await about.click();
  await page.waitForURL("**/about");
  await page.waitForTimeout(350);

  if ((await page.locator('.topbar__nav a[aria-current="page"]').textContent())?.trim() !== "About") {
    throw new Error("About current-page state is missing");
  }

  await page.screenshot({
    path: path.join(out, testCase.name + "-about-arrival.png"),
    fullPage: false,
  });

  const work = page.locator('.topbar__nav a[href="/#work"]');
  if (!(await work.isVisible())) throw new Error("About Work route is hidden");
  await work.click();
  await page.waitForURL("**/#work");

  if (new URL(page.url()).hash !== "#work") {
    throw new Error("Work return route failed");
  }

  await page.screenshot({
    path: path.join(out, testCase.name + "-work-return.png"),
    fullPage: false,
  });

  await page.goto("http://127.0.0.1:3000/about", { waitUntil: "networkidle" });

  const contact = page.locator('.topbar__nav a[href="/#contact"]');
  if (!(await contact.isVisible())) throw new Error("About Contact route is hidden");
  await contact.click();
  await page.waitForURL("**/#contact");

  if (new URL(page.url()).hash !== "#contact") {
    throw new Error("Contact return route failed");
  }

  await page.screenshot({
    path: path.join(out, testCase.name + "-contact-return.png"),
    fullPage: false,
  });

  const dimensions = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));

  if (dimensions.scrollWidth > dimensions.clientWidth + 1) {
    throw new Error("Navigation destination has horizontal overflow");
  }

  await context.close();
}

await browser.close();
