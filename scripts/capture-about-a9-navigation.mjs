import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const out = "artifacts/about-a9-navigation";
await fs.mkdir(out, { recursive: true });

const browser = await chromium.launch({ headless: true });

async function targetVisibility(page, selector) {
  return page.locator(selector).evaluate((el) => {
    const rect = el.getBoundingClientRect();
    return {
      top: rect.top,
      bottom: rect.bottom,
      height: innerHeight,
      scrollY,
      documentHeight: document.documentElement.scrollHeight,
    };
  });
}

async function waitForVisibleTarget(page, selector, threshold) {
  try {
    await page.waitForFunction(
      ({ selector, threshold }) => {
        const el = document.querySelector(selector);
        if (!(el instanceof HTMLElement)) return false;
        const rect = el.getBoundingClientRect();
        return rect.bottom > 0 && rect.top < innerHeight * threshold;
      },
      { selector, threshold },
      { timeout: 2500 },
    );
  } catch {
    // Preserve the explicit diagnostic assertion below.
  }

  return targetVisibility(page, selector);
}

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
  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(120);

  if (
    (
      await page
        .locator('.topbar__nav a[aria-current="page"]')
        .textContent()
    )?.trim() !== "About"
  ) {
    throw new Error("About current-page state is missing");
  }

  await page.screenshot({
    path: path.join(out, testCase.name + "-about-arrival.png"),
    fullPage: false,
  });

  const work = page.locator('.topbar__nav a[href="/#work"]');
  if (!(await work.isVisible())) {
    throw new Error("About Work route is hidden");
  }

  await work.click();
  await page.waitForURL("**/#work");

  if (new URL(page.url()).hash !== "#work") {
    throw new Error("Work return route failed");
  }

  const workVisibility = await waitForVisibleTarget(page, "#work", 0.35);
  if (
    workVisibility.bottom <= 0 ||
    workVisibility.top >= workVisibility.height * 0.35
  ) {
    throw new Error(
      "Work hash exists but target is not actually visible: " +
        JSON.stringify(workVisibility),
    );
  }

  await page.screenshot({
    path: path.join(out, testCase.name + "-work-return.png"),
    fullPage: false,
  });

  await page.goto("http://127.0.0.1:3000/about", {
    waitUntil: "networkidle",
  });

  const contact = page.locator('.topbar__nav a[href="/#contact"]');
  if (!(await contact.isVisible())) {
    throw new Error("About Contact route is hidden");
  }

  await contact.click();
  await page.waitForURL("**/#contact");

  if (new URL(page.url()).hash !== "#contact") {
    throw new Error("Contact return route failed");
  }

  const contactVisibility = await waitForVisibleTarget(
    page,
    "#contact",
    0.45,
  );
  if (
    contactVisibility.bottom <= 0 ||
    contactVisibility.top >= contactVisibility.height * 0.45
  ) {
    throw new Error(
      "Contact hash exists but target is not actually visible: " +
        JSON.stringify(contactVisibility),
    );
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
