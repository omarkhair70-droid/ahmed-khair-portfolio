import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const out = "artifacts/contact-details";
await fs.mkdir(out, { recursive: true });

const expected = {
  email: "mailto:ahmedkhairgemy@gmail.com",
  behance: "https://www.behance.net/ahmedkhairgemy",
  linkedin: "https://www.linkedin.com/in/ahmed-khair-gemy-79a06b3a6",
  whatsapp: "https://wa.me/201157070109",
};

const browser = await chromium.launch({ headless: true });
const cases = [
  { name: "desktop-1440", width: 1440, height: 900 },
  { name: "desktop-1280", width: 1280, height: 900 },
  { name: "mobile-390", width: 390, height: 844 },
  { name: "mobile-360", width: 360, height: 800 },
];

for (const testCase of cases) {
  for (const reduced of [true, false]) {
    const context = await browser.newContext({
      viewport: { width: testCase.width, height: testCase.height },
      reducedMotion: reduced ? "reduce" : "no-preference",
    });
    const page = await context.newPage();

    for (const route of ["/", "/about"]) {
      await page.goto(`http://127.0.0.1:3000${route}`, { waitUntil: "networkidle" });
      await page.evaluate(() => document.fonts.ready);
      const footer = route === "/" ? ".contact" : ".about-page-end";
      const primary = route === "/" ? ".contact-primary" : ".about-page-end__primary";
      const links = route === "/" ? ".contact-links" : ".about-page-end__links";
      const section = page.locator(footer);
      await section.scrollIntoViewIfNeeded();
      await page.waitForTimeout(reduced ? 200 : 1300);

      const metrics = await page.evaluate(({ footer, primary, links }) => {
        const section = document.querySelector(footer);
        const action = document.querySelector(primary);
        const linkElements = Array.from(document.querySelectorAll(`${links} a`));
        if (!(section instanceof HTMLElement) || !(action instanceof HTMLAnchorElement) || linkElements.length !== 3) {
          throw new Error("Contact structure missing");
        }
        const rect = (element) => {
          const r = element.getBoundingClientRect();
          return { left: r.left, right: r.right, top: r.top, bottom: r.bottom, width: r.width, height: r.height };
        };
        return {
          page: { scrollWidth: document.documentElement.scrollWidth, clientWidth: document.documentElement.clientWidth },
          section: rect(section),
          action: { href: action.getAttribute("href"), target: action.target, text: action.textContent, rect: rect(action) },
          links: linkElements.map((link) => ({ href: link.getAttribute("href"), target: link.target, rel: link.rel, text: link.textContent, rect: rect(link) })),
          titleLines: Array.from(document.querySelectorAll(".contact-title > span")).map(rect),
          brokenImages: Array.from(document.images).filter((image) => !image.complete || image.naturalWidth === 0).map((image) => image.getAttribute("src")),
        };
      }, { footer, primary, links });

      if (metrics.page.scrollWidth > metrics.page.clientWidth + 1) throw new Error(`Horizontal overflow: ${route} ${testCase.name}`);
      if (metrics.action.href !== expected.email || metrics.action.target || !metrics.action.text.includes("ahmedkhairgemy@gmail.com")) throw new Error("Primary email contract failed");
      if (metrics.links.some((link, index) => link.href !== [expected.behance, expected.linkedin, expected.whatsapp][index] || link.target !== "_blank" || !link.rel.includes("noopener") || !link.rel.includes("noreferrer"))) throw new Error("External contact link contract failed");
      if (!metrics.links[2].text.includes("+20 115 707 0109")) throw new Error("WhatsApp number missing");
      if (metrics.brokenImages.length) throw new Error(`Broken images: ${metrics.brokenImages.join(", ")}`);
      if (route === "/" && metrics.titleLines.length !== 3) throw new Error("Closing title changed");

      for (const item of [metrics.action, ...metrics.links]) {
        if (item.rect.left < -1 || item.rect.right > testCase.width + 1 || item.rect.height < 44) {
          throw new Error(`Contact target is clipped or too small: ${JSON.stringify(item)}`);
        }
      }
      if (metrics.links[0].rect.top < metrics.action.rect.bottom - 1) throw new Error("Primary and secondary actions overlap");

      if (reduced) {
        const states = await page.locator(`${primary}, ${links}`).evaluateAll((elements) => elements.map((element) => ({ opacity: getComputedStyle(element).opacity, transform: getComputedStyle(element).transform })));
        if (states.some((state) => Number(state.opacity) < .99 || state.transform !== "none")) throw new Error("Reduced-motion contact content is not settled");
      }

      await page.keyboard.press("Tab");
      await page.locator(primary).focus();
      const focus = await page.locator(primary).evaluate((element) => ({ visible: element.matches(":focus-visible"), outline: getComputedStyle(element).outlineWidth }));
      if (!focus.visible || Number.parseFloat(focus.outline) < 2) throw new Error("Primary keyboard focus is not visible");

      const suffix = `${testCase.name}-${route === "/" ? "home" : "about"}-${reduced ? "reduced" : "motion"}`;
      await fs.writeFile(path.join(out, `${suffix}.json`), JSON.stringify(metrics, null, 2));
      await section.screenshot({ path: path.join(out, `${suffix}.png`) });
    }
    await context.close();
  }
}

await browser.close();
console.log("Contact details QA passed: 4 viewports, Home and About, normal and reduced motion.");
