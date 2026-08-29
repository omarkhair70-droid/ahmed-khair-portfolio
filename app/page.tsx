"use client";

import { useEffect } from "react";

const projects = {
  boch: {
    index: "01",
    title: "BOCH Motor",
    kind: "Campaign",
  },
  shamadan: {
    index: "02",
    title: "El Shamadan",
    kind: "Campaign",
  },
  criminal: {
    index: "03",
    title: "Criminal Anbr 6",
    kind: "Poster Study",
  },
  coffee: {
    index: "04",
    title: "Abd Allal Coffee",
    kind: "Compact Campaign",
  },
};

export default function Home() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      document.documentElement.classList.add("reduced-motion");
      return;
    }

    const revealItems = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.visible = "true";
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.16, rootMargin: "0px 0px -7% 0px" }
    );

    revealItems.forEach((item) => observer.observe(item));

    const onScroll = () => {
      const y = window.scrollY;
      document.documentElement.style.setProperty("--scroll-y", String(y));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <main>
      <header className="site-nav" aria-label="Primary navigation">
        <a className="nav-name" href="#top" aria-label="Ahmed Khair — back to top">
          Ahmed Khair
        </a>
        <nav className="nav-links" aria-label="Page sections">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className="hero" aria-labelledby="hero-title">
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">Advertising Visual Designer</p>
          <h1 id="hero-title" className="hero-title" aria-label="Ahmed Khair">
            <span className="hero-line">
              <span className="hero-word hero-word-a">AHMED</span>
            </span>
            <span className="hero-line">
              <span className="hero-word hero-word-b">KHAIR</span>
            </span>
          </h1>
          <div className="hero-bottom">
            <p className="hero-disciplines">
              Campaigns <span>·</span> Posters <span>·</span> Product Visuals
            </p>
            <a className="scroll-cue" href="#work">
              Selected work <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="hero-invader" aria-hidden="true">
          <div className="hero-invader-label">01 / Selected Work</div>
          <img
            src="/images/boch/hero.webp"
            alt=""
            className="hero-invader-image"
            fetchPriority="high"
          />
        </div>
      </section>

      <section id="work" className="work-intro">
        <p className="section-kicker" data-reveal>
          Selected work / 2024—2026
        </p>
        <p className="work-intro-copy" data-reveal>
          A short selection of advertising visuals built around composition,
          product presence and memorable image-making.
        </p>
      </section>

      <section className="project project-boch" aria-labelledby="boch-title">
        <div className="project-meta project-meta-sticky">
          <span className="project-index">{projects.boch.index}</span>
          <div>
            <h2 id="boch-title">{projects.boch.title}</h2>
            <p>{projects.boch.kind}</p>
          </div>
        </div>

        <figure className="frame frame-boch-hero" data-reveal>
          <img
            src="/images/boch/hero.webp"
            alt="BOCH Motor campaign visual featuring an industrial pump presented as a winning athlete."
          />
        </figure>

        <div className="boch-editorial">
          <figure className="frame frame-boch-cinematic" data-reveal>
            <img
              src="/images/boch/cinematic.webp"
              alt="BOCH Motor campaign visual with a pump in a dramatic industrial environment."
            />
          </figure>

          <div className="boch-side">
            <p className="project-note" data-reveal>
              Commercial visuals framed with the confidence of a product
              campaign, not a social-media grid.
            </p>
            <figure className="frame frame-boch-context" data-reveal>
              <img
                src="/images/boch/context.webp"
                alt="BOCH Motor campaign visual showing the product in a strong environmental composition."
              />
            </figure>
          </div>
        </div>

        <figure className="frame frame-boch-support" data-reveal>
          <img
            src="/images/boch/support.webp"
            alt="Supporting BOCH Motor campaign visual."
          />
        </figure>
      </section>

      <section className="transition transition-shamadan" aria-hidden="true">
        <span>02</span>
        <p>Energy shift</p>
      </section>

      <section className="project project-shamadan" aria-labelledby="shamadan-title">
        <div className="shamadan-heading" data-reveal>
          <span className="project-index">{projects.shamadan.index}</span>
          <div>
            <h2 id="shamadan-title">{projects.shamadan.title}</h2>
            <p>{projects.shamadan.kind}</p>
          </div>
        </div>

        <figure className="frame frame-shamadan-hero" data-reveal>
          <img
            src="/images/shamadan/hero.webp"
            alt="El Shamadan campaign visual with chocolate products spinning in a colorful composition."
          />
        </figure>

        <div className="shamadan-sequence">
          <figure className="frame shamadan-flatlay" data-reveal>
            <img
              src="/images/shamadan/premium-flatlay.webp"
              alt="El Shamadan premium product flat-lay campaign visual."
            />
          </figure>

          <figure className="frame shamadan-splash" data-reveal>
            <img
              src="/images/shamadan/light-splash.webp"
              alt="El Shamadan product visual with a bright splash composition."
            />
          </figure>

          <figure className="frame shamadan-family" data-reveal>
            <img
              src="/images/shamadan/product-family.webp"
              alt="El Shamadan campaign visual featuring a family of products."
            />
          </figure>

          <figure className="frame shamadan-playful" data-reveal>
            <img
              src="/images/shamadan/playful.webp"
              alt="Playful El Shamadan advertising visual."
            />
          </figure>
        </div>
      </section>

      <section className="cinema-cut" aria-hidden="true">
        <div className="cinema-line" />
        <span>From colour into silence.</span>
      </section>

      <section className="project project-criminal" aria-labelledby="criminal-title">
        <div className="criminal-copy" data-reveal>
          <span className="project-index">{projects.criminal.index}</span>
          <h2 id="criminal-title">{projects.criminal.title}</h2>
          <p>{projects.criminal.kind}</p>
          <p className="criminal-note">
            A monochrome interruption between commercial campaigns.
          </p>
        </div>

        <div className="criminal-stage">
          <figure className="frame criminal-poster" data-reveal>
            <img
              src="/images/criminal-anbr-6/hero.webp"
              alt="Criminal Anbr 6 monochrome film poster study featuring a silhouetted figure on stairs."
            />
          </figure>
          <figure className="frame criminal-alt" data-reveal>
            <img
              src="/images/criminal-anbr-6/alternate.webp"
              alt="Alternate Criminal Anbr 6 poster study."
            />
          </figure>
        </div>
      </section>

      <section className="warm-shift" aria-hidden="true">
        <span>04</span>
      </section>

      <section className="project project-coffee" aria-labelledby="coffee-title">
        <div className="coffee-heading" data-reveal>
          <span className="project-index">{projects.coffee.index}</span>
          <div>
            <h2 id="coffee-title">{projects.coffee.title}</h2>
            <p>{projects.coffee.kind}</p>
          </div>
        </div>

        <figure className="frame coffee-hero" data-reveal>
          <img
            src="/images/abd-allal/hero.webp"
            alt="Abd Allal Coffee campaign visual with product packaging, coffee cups and beans."
          />
        </figure>

        <div className="coffee-tail">
          <figure className="frame coffee-support" data-reveal>
            <img
              src="/images/abd-allal/support.webp"
              alt="Supporting Abd Allal Coffee campaign visual."
            />
          </figure>
          <p className="coffee-note" data-reveal>
            Two selected executions. Kept compact on purpose.
          </p>
        </div>
      </section>

      <section id="about" className="about" aria-labelledby="about-title">
        <div className="about-watermark" aria-hidden="true">
          ABOUT
        </div>
        <div className="about-portrait-wrap" data-reveal>
          <img
            src="/images/ahmed/ahmed-cutout.png"
            alt="Ahmed Khair"
            className="about-portrait"
          />
        </div>

        <div className="about-copy" data-reveal>
          <p className="section-kicker">The person behind the work</p>
          <h2 id="about-title">Ahmed Khair</h2>
          <p className="about-lede">
            Visual designer working across advertising, campaign imagery and
            poster-led compositions.
          </p>
          <p className="about-body">
            Based in Egypt. Focused on visual impact, strong composition and
            commercial imagery that reads fast without feeling disposable.
          </p>

          <div className="capabilities" aria-label="Capabilities">
            <span>Campaign Visuals</span>
            <span>Social Advertising</span>
            <span>Posters</span>
            <span>Photo Manipulation</span>
          </div>
        </div>
      </section>

      <footer id="contact" className="contact">
        <div className="contact-top">
          <p className="section-kicker">Contact / Selected projects</p>
          <h2>
            LET&apos;S MAKE
            <br />
            SOMETHING
            <br />
            <em>WORTH LOOKING AT.</em>
          </h2>
        </div>

        <div className="contact-links">
          <a
            href="https://www.behance.net/ahmedkhairgemy"
            target="_blank"
            rel="noreferrer"
          >
            Behance
          </a>
          <a href="#work">Selected work</a>
        </div>

        <div className="contact-bottom">
          <span>Ahmed Khair © 2026</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
