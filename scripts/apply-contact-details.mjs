import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const write = (file, text) => fs.writeFileSync(path.join(root, file), text);

function replaceOnce(file, before, after) {
  const source = read(file);
  const first = source.indexOf(before);
  if (first < 0 || source.indexOf(before, first + before.length) >= 0) {
    throw new Error(`Expected exactly one source match in ${file}`);
  }
  write(file, source.slice(0, first) + after + source.slice(first + before.length));
}

function replaceAll(file, before, after) {
  const source = read(file);
  if (!source.includes(before)) throw new Error(`Missing source match in ${file}: ${before}`);
  write(file, source.split(before).join(after));
}

const home = "app/page.tsx";
const about = "app/about/page.tsx";
const motion = "app/about/AboutMotion.tsx";

replaceOnce("app/layout.tsx", 'import "./globals.css";', 'import "./globals.css";\nimport "./contact-details.css";');
replaceOnce(home, 'import Lenis from "lenis";', 'import Lenis from "lenis";\nimport ContactActions from "./ContactActions";');
replaceOnce(about, 'import AboutMotion from "./AboutMotion";', 'import AboutMotion from "./AboutMotion";\nimport ContactActions from "../ContactActions";');

replaceOnce(home, `          <a
            className="contact-primary"
            href="https://www.behance.net/ahmedkhairgemy"
            target="_blank"
            rel="noreferrer"
          >
            <span>Behance</span>
            <span>Open profile ↗</span>
          </a>`, '          <ContactActions variant="home" />');

replaceOnce(about, `        <a
          className="about-page-end__behance"
          href="https://www.behance.net/ahmedkhairgemy"
          target="_blank"
          rel="noreferrer"
        >
          <span>Behance</span>
          <span>Open profile ↗</span>
        </a>`, '        <ContactActions variant="about" />');

replaceOnce(home, '        gsap.from(".contact-nav > *", {', `        gsap.from(".contact-links", {
          y: 10,
          opacity: 0,
          scrollTrigger: {
            trigger: ".contact-links",
            start: "top 94%",
            end: "top 76%",
            scrub: 0.72,
          },
        });

        gsap.from(".contact-nav > *", {`);

replaceAll(motion, "about-page-end__behance", "about-page-end__primary");
replaceOnce(motion, '            ".about-page-end__nav a",', '            ".about-page-end__links",\n            ".about-page-end__nav a",');
replaceOnce(motion, '      gsap.from(".about-page-end__nav a", {', `      gsap.from(".about-page-end__links", {
        y: 10,
        opacity: 0,
        scrollTrigger: {
          trigger: ".about-page-end__links",
          start: "top 94%",
          end: "top 76%",
          scrub: 0.72,
        },
      });

      gsap.from(".about-page-end__nav a", {`);

replaceAll("app/globals.css", "about-page-end__behance", "about-page-end__primary");

const scripts = fs.readdirSync(path.join(root, "scripts"))
  .filter((name) => /^capture-about-.*\.mjs$/.test(name));
for (const name of scripts) {
  const file = `scripts/${name}`;
  const source = read(file);
  if (source.includes("about-page-end__behance")) {
    write(file, source.replaceAll("about-page-end__behance", "about-page-end__primary"));
  }
}

replaceOnce("scripts/capture-contact-h13.mjs", '!metrics.primary.href.includes("behance.net/ahmedkhairgemy")', 'metrics.primary.href !== "mailto:ahmedkhairgemy@gmail.com"');
replaceOnce("scripts/capture-about-a3.mjs", 'metrics.behance?.includes("behance.net/ahmedkhairgemy")', 'metrics.behance?.startsWith("mailto:ahmedkhairgemy@gmail.com")');
replaceOnce("scripts/capture-about-a10.mjs", 'metrics.behance.href.includes("behance.net/ahmedkhairgemy")', 'metrics.behance.href.startsWith("mailto:ahmedkhairgemy@gmail.com")');
replaceOnce("scripts/capture-about-a10.mjs", 'metrics.behance.target !== "_blank"', 'metrics.behance.target !== ""');

for (const file of ["scripts/capture-about-a3.mjs", "scripts/capture-about-a10.mjs"]) {
  let source = read(file);
  source = source.replace(/\bbehance\b/g, "primary");
  source = source.replace(/Behance contract mismatch/g, "primary email contract mismatch");
  source = source.replace(/Behance link mismatch/g, "primary email link mismatch");
  write(file, source);
}

console.log("Applied contact details to Home, About, motion, CSS and existing QA contracts.");
