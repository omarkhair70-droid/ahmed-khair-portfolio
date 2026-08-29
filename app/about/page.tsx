import type { Metadata } from "next";
import AboutMotion from "./AboutMotion";

export const metadata: Metadata = {
  title: "About — Ahmed Khair",
  description:
    "Ahmed Khair is an advertising visual designer in Egypt working across campaigns, posters, product visuals and photo manipulation.",
};

const practice = [
  "Campaign Visuals",
  "Posters",
  "Product Visuals",
  "Photo Manipulation",
];

const craft = [
  "Composition",
  "Image Treatment",
  "Poster Systems",
  "Campaign Variations",
  "Advertising Design",
];

const work = [
  ["01", "BOCH Motor", "/#boch"],
  ["02", "El Shamadan", "/#shamadan"],
  ["03", "Criminal Anbr 6", "/#criminal"],
  ["04", "Abd Allal Coffee", "/#coffee"],
] as const;

export default function AboutPage() {
  return (
    <main className="about-page">
      <AboutMotion />
      <header className="topbar">
        <a href="/" className="topbar__brand" aria-label="Ahmed Khair home">
          AK
        </a>
        <p className="topbar__role">Advertising Visual Designer</p>
        <nav className="topbar__nav" aria-label="Primary navigation">
          <a href="/#work">Work</a>
          <a href="/about" aria-current="page">
            About
          </a>
          <a href="/#contact">Contact</a>
        </nav>
      </header>

      <section className="about-page-hero" aria-labelledby="about-page-title">
        <p className="about-page-hero__meta">
          <span>About / 2026</span>
          <span>Egypt</span>
          <span>Freelancer</span>
        </p>

        <h1 id="about-page-title" className="about-page-hero__title">
          <span>AHMED</span>
          <span>KHAIR</span>
        </h1>

        <figure className="about-page-portrait">
          <div className="about-page-portrait__field" aria-hidden="true" />
          <img
            src="/images/ahmed/ahmed-cutout.png"
            alt="Ahmed Khair"
            className="about-page-portrait__image"
          />
          <figcaption>
            <span>Ahmed Khair</span>
            <span>Egypt</span>
          </figcaption>
        </figure>

        <div className="about-page-hero__statement">
          <p>Advertising Visual Designer</p>
          <p>
            Working across campaigns, posters, product visuals and photo
            manipulation.
          </p>
        </div>

        <p className="about-page-hero__index" aria-hidden="true">
          01 / Person
        </p>
      </section>

      <section className="about-page-practice" aria-labelledby="practice-title">
        <header className="about-page-practice__head">
          <p>02 / Practice</p>
          <p>Selected visual focus</p>
        </header>

        <h2 id="practice-title" className="about-page-practice__title">
          {practice.map((item, index) => (
            <span key={item} className={index % 2 ? "is-offset" : undefined}>
              {item}
            </span>
          ))}
        </h2>

        <p className="about-page-practice__copy">
          Campaigns, posters, product visuals and photo manipulation form the
          core of Ahmed&apos;s selected public work.
        </p>
      </section>

      <section className="about-page-craft" aria-labelledby="craft-title">
        <header className="about-page-craft__head">
          <p id="craft-title">03 / Selected craft</p>
          <p>What the work shows</p>
        </header>

        <div className="about-page-craft__list">
          {craft.map((item, index) => (
            <p key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item}</strong>
            </p>
          ))}
        </div>

        <aside className="about-page-work">
          <p className="about-page-work__label">Selected work</p>
          <nav aria-label="Selected work">
            {work.map(([number, title, href]) => (
              <a href={href} key={title}>
                <span>{number}</span>
                <strong>{title}</strong>
                <span>↗</span>
              </a>
            ))}
          </nav>
        </aside>
      </section>

      <footer className="about-page-end">
        <p className="about-page-end__meta">
          <span>Ahmed Khair</span>
          <span>Advertising Visual Designer</span>
          <span>Egypt / 2026</span>
        </p>

        <a
          className="about-page-end__behance"
          href="https://www.behance.net/ahmedkhairgemy"
          target="_blank"
          rel="noreferrer"
        >
          <span>Behance</span>
          <span>Open profile ↗</span>
        </a>

        <nav className="about-page-end__nav" aria-label="About page closing navigation">
          <a href="/">Home ↑</a>
          <a href="/#work">Selected work ↑</a>
          <a href="/#contact">Contact ↑</a>
          <a href="#about-page-title">Back to top ↑</a>
        </nav>
      </footer>
    </main>
  );
}
