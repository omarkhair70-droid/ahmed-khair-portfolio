"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "boch",
    number: "01",
    title: "BOCH Motor",
    titleLines: ["BOCH Motor"],
    kind: "Campaign",
    preview: "/images/boch/hero.webp",
  },
  {
    id: "shamadan",
    number: "02",
    title: "El Shamadan",
    titleLines: ["El Shamadan"],
    kind: "Campaign",
    preview: "/images/shamadan/hero.webp",
  },
  {
    id: "criminal",
    number: "03",
    title: "Criminal Anbr 6",
    titleLines: ["Criminal", "Anbr 6"],
    kind: "Film Poster Study",
    preview: "/images/criminal-anbr-6/hero.webp",
  },
  {
    id: "coffee",
    number: "04",
    title: "Abd Allal Coffee",
    titleLines: ["Abd Allal", "Coffee"],
    kind: "Compact Campaign",
    preview: "/images/abd-allal/hero.webp",
  },
];

export default function Home() {
  const root = useRef<HTMLElement>(null);
  const preview = useRef<HTMLDivElement>(null);
  const previewImage = useRef<HTMLImageElement>(null);
  const cursor = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let lenis: Lenis | null = null;
    let ticker: ((time: number) => void) | null = null;

    if (!reduced) {
      lenis = new Lenis({
        duration: 1.05,
        smoothWheel: true,
        touchMultiplier: 1.2,
      });

      lenis.on("scroll", ScrollTrigger.update);
      ticker = (time: number) => lenis?.raf(time * 1000);
      gsap.ticker.add(ticker);
      gsap.ticker.lagSmoothing(0);
    }

    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.set("[data-motion]", { clearProps: "all" });
        return;
      }

      const intro = gsap.timeline({ defaults: { ease: "power4.out" } });
      intro
        .from(".hero-kicker", { y: 14, opacity: 0, duration: 0.65 })
        .from(
          ".hero-word--one",
          { yPercent: 118, rotate: 1.4, duration: 1.2 },
          "-=0.22",
        )
        .from(
          ".hero-word--two",
          { yPercent: 118, rotate: -1.2, duration: 1.18 },
          "-=0.9",
        )
        .from(
          ".hero-meta > *",
          { y: 16, opacity: 0, duration: 0.65, stagger: 0.055 },
          "-=0.66",
        )
        .fromTo(
          ".hero-teaser",
          {
            clipPath: "inset(100% 0 0 0)",
            scale: 1.045,
            yPercent: 4,
          },
          {
            clipPath: "inset(0% 0 0 0)",
            scale: 1,
            yPercent: 0,
            duration: 1.22,
            ease: "power3.inOut",
          },
          "-=0.56",
        );

      const heroTypeMotion = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "+=135%",
          scrub: 1.08,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      heroTypeMotion
        .to(
          ".hero-word--one",
          {
            xPercent: -6.5,
            yPercent: -3,
            letterSpacing: "0.004em",
            ease: "none",
          },
          0,
        )
        .to(
          ".hero-word--two",
          {
            xPercent: 7.5,
            yPercent: 2,
            letterSpacing: "-0.006em",
            ease: "none",
          },
          0,
        )
        .to(
          ".hero-kicker",
          {
            opacity: 0.46,
            y: -8,
            ease: "none",
          },
          0.08,
        )
        .to(
          ".hero-meta",
          {
            opacity: 0.72,
            y: 8,
            ease: "none",
          },
          0.18,
        )
        .to(
          ".hero-teaser",
          {
            xPercent: -5,
            yPercent: 3,
            scale: 1.12,
            transformOrigin: "center center",
            ease: "none",
          },
          0.08,
        )
        .to(
          ".hero-teaser img",
          {
            scale: 1.055,
            ease: "none",
          },
          0.08,
        )
        .to(
          ".hero-teaser figcaption",
          {
            opacity: 0.62,
            ease: "none",
          },
          0.3,
        )
        .to(
          ".hero-title",
          {
            opacity: 0.13,
            ease: "none",
            duration: 0.28,
          },
          0.64,
        )
        .to(
          ".hero-kicker, .hero-meta",
          {
            opacity: 0,
            ease: "none",
            duration: 0.24,
          },
          0.66,
        )
        .to(
          ".hero-teaser",
          {
            opacity: 0.34,
            filter: "saturate(0.72) brightness(0.76)",
            ease: "none",
            duration: 0.28,
          },
          0.67,
        )
        .fromTo(
          ".hero-handoff",
          {
            yPercent: 102,
          },
          {
            yPercent: 0,
            duration: 0.5,
            ease: "power3.inOut",
          },
          0.7,
        )
        .from(
          ".hero-handoff__eyebrow",
          {
            y: 16,
            opacity: 0,
            duration: 0.22,
            ease: "power3.out",
          },
          0.92,
        )
        .from(
          ".hero-handoff__title span",
          {
            yPercent: 110,
            duration: 0.34,
            stagger: 0.05,
            ease: "power4.out",
          },
          0.94,
        )
        .from(
          ".hero-handoff__count",
          {
            opacity: 0,
            y: 12,
            duration: 0.2,
            ease: "power3.out",
          },
          1.02,
        )
        .to(
          ".hero-handoff__title",
          {
            yPercent: -28,
            opacity: 0,
            duration: 0.16,
            ease: "power2.in",
          },
          1.16,
        )
        .to(
          ".hero-handoff__eyebrow, .hero-handoff__count",
          {
            opacity: 0,
            duration: 0.12,
            ease: "none",
          },
          1.17,
        );

      gsap.from(".work-index__line", {
        scaleX: 0,
        transformOrigin: "left center",
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".work-index",
          start: "top 72%",
          end: "top 38%",
          scrub: 0.8,
        },
      });

      document.querySelectorAll<HTMLElement>(".scene").forEach((scene) => {
        const media = scene.querySelector<HTMLElement>(".scene__primary");
        const title = scene.querySelector<HTMLElement>(".scene__title");
        const meta = scene.querySelector<HTMLElement>(".scene__meta");
        const accents = scene.querySelectorAll<HTMLElement>(".scene__accent");

        if (media) {
          gsap.fromTo(
            media,
            { clipPath: "inset(12% 8% 12% 8%)", scale: 1.08 },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              scale: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: scene,
                start: "top 78%",
                end: "top 18%",
                scrub: 1.1,
              },
            },
          );
        }

        if (title) {
          gsap.from(title, {
            yPercent: 45,
            opacity: 0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: scene,
              start: "top 68%",
              end: "top 34%",
              scrub: 0.8,
            },
          });
        }

        if (meta) {
          gsap.from(meta, {
            opacity: 0,
            y: 28,
            scrollTrigger: {
              trigger: scene,
              start: "top 66%",
              end: "top 38%",
              scrub: 0.7,
            },
          });
        }

        accents.forEach((accent, index) => {
          gsap.fromTo(
            accent,
            { y: 90 + index * 30, rotate: index % 2 ? 2.5 : -2 },
            {
              y: -30 - index * 20,
              rotate: index % 2 ? -1 : 1,
              ease: "none",
              scrollTrigger: {
                trigger: scene,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.3,
              },
            },
          );
        });
      });

      gsap.fromTo(
        ".criminal-poster",
        { rotate: -2.5, scale: 0.94 },
        {
          rotate: 0,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".scene--criminal",
            start: "top 70%",
            end: "bottom 35%",
            scrub: 1.2,
          },
        },
      );

      gsap.fromTo(
        ".about-cutout",
        { yPercent: 14, rotate: -1.5 },
        {
          yPercent: 0,
          rotate: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about",
            start: "top 72%",
            end: "top 24%",
            scrub: 1,
          },
        },
      );

      gsap.to(".about-word", {
        xPercent: -13,
        ease: "none",
        scrollTrigger: {
          trigger: ".about",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, root);

    const heroEl = document.querySelector<HTMLElement>(".hero");
    const heroImage = document.querySelector<HTMLElement>(".hero-teaser img");
    const canPoint = window.matchMedia("(pointer: fine)").matches && !reduced;
    const heroImageX = heroImage
      ? gsap.quickTo(heroImage, "x", { duration: 0.7, ease: "power3.out" })
      : null;
    const heroImageY = heroImage
      ? gsap.quickTo(heroImage, "y", { duration: 0.7, ease: "power3.out" })
      : null;

    const moveHeroMedia = (event: PointerEvent) => {
      if (!canPoint || !heroEl) return;
      const rect = heroEl.getBoundingClientRect();
      const nx = (event.clientX - rect.left) / rect.width - 0.5;
      const ny = (event.clientY - rect.top) / rect.height - 0.5;
      heroImageX?.(nx * 12);
      heroImageY?.(ny * 10);
    };

    const resetHeroMedia = () => {
      heroImageX?.(0);
      heroImageY?.(0);
    };

    if (canPoint) {
      heroEl?.addEventListener("pointermove", moveHeroMedia, { passive: true });
      heroEl?.addEventListener("pointerleave", resetHeroMedia);
    }

    const previewEl = preview.current;
    const previewImg = previewImage.current;
    const cursorEl = cursor.current;

    const previewX = previewEl
      ? gsap.quickTo(previewEl, "x", { duration: 0.42, ease: "power3.out" })
      : null;
    const previewY = previewEl
      ? gsap.quickTo(previewEl, "y", { duration: 0.42, ease: "power3.out" })
      : null;
    const previewRotate = previewEl
      ? gsap.quickTo(previewEl, "rotation", { duration: 0.5, ease: "power3.out" })
      : null;
    const cursorX = cursorEl
      ? gsap.quickTo(cursorEl, "x", { duration: 0.15, ease: "power2.out" })
      : null;
    const cursorY = cursorEl
      ? gsap.quickTo(cursorEl, "y", { duration: 0.15, ease: "power2.out" })
      : null;

    const rows = Array.from(
      document.querySelectorAll<HTMLElement>(".work-index__row[data-preview]"),
    );

    const move = (event: PointerEvent) => {
      cursorX?.(event.clientX);
      cursorY?.(event.clientY);

      if (!previewEl) return;
      const width = previewEl.offsetWidth || 360;
      const height = previewEl.offsetHeight || 360;
      const placeLeft = event.clientX > window.innerWidth * 0.68;
      const x = placeLeft
        ? event.clientX - width - 34
        : event.clientX + 34;
      const y = Math.max(
        24,
        Math.min(window.innerHeight - height - 24, event.clientY - height * 0.22),
      );

      previewX?.(x);
      previewY?.(y);
      previewRotate?.(
        gsap.utils.clamp(-3.2, 3.2, (event.clientX / window.innerWidth - 0.5) * 5.2),
      );
    };

    const enterProject = (event: Event) => {
      const target = event.currentTarget as HTMLElement;
      const src = target.dataset.preview;

      rows.forEach((row) => row.classList.toggle("is-muted", row !== target));
      target.classList.add("is-active");

      if (src && previewImg && previewImg.src !== src) {
        previewImg.src = src;
        gsap.fromTo(
          previewImg,
          { opacity: 0, scale: 1.09 },
          { opacity: 1, scale: 1, duration: 0.55, ease: "power3.out" },
        );
      }

      previewEl?.classList.add("is-visible");
      cursorEl?.classList.add("is-active");
    };

    const leaveProject = (event: Event) => {
      const target = event.currentTarget as HTMLElement;
      target.classList.remove("is-active");
      rows.forEach((row) => row.classList.remove("is-muted"));
      previewEl?.classList.remove("is-visible");
      cursorEl?.classList.remove("is-active");
      previewRotate?.(0);
    };

    const activateMobileRow = (target: HTMLElement) => {
      rows.forEach((row) => row.classList.toggle("is-mobile-active", row === target));
    };

    const mobileTriggers: ScrollTrigger[] = [];
    if (window.matchMedia("(max-width: 700px)").matches) {
      rows.forEach((row) => {
        mobileTriggers.push(
          ScrollTrigger.create({
            trigger: row,
            start: "top 58%",
            end: "bottom 42%",
            onEnter: () => activateMobileRow(row),
            onEnterBack: () => activateMobileRow(row),
          }),
        );
      });
    }

    const pressProject = (event: PointerEvent) => {
      const target = event.currentTarget as HTMLElement;
      target.classList.add("is-pressed");
    };

    const releaseProject = (event: PointerEvent) => {
      const target = event.currentTarget as HTMLElement;
      target.classList.remove("is-pressed");
    };

    const openProjectScene = (event: MouseEvent) => {
      const target = event.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute("href");
      if (!href?.startsWith("#")) return;

      const destination = document.querySelector<HTMLElement>(href);
      if (!destination) return;

      event.preventDefault();

      if (reduced || !lenis) {
        destination.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
        return;
      }

      lenis.scrollTo(destination, {
        duration: 1.18,
        offset: 0,
        lock: true,
      });
    };

    rows.forEach((row) => {
      row.addEventListener("mouseenter", enterProject);
      row.addEventListener("mouseleave", leaveProject);
      row.addEventListener("pointerdown", pressProject);
      row.addEventListener("pointerup", releaseProject);
      row.addEventListener("pointercancel", releaseProject);
      row.addEventListener("click", openProjectScene);
    });
    window.addEventListener("pointermove", move, { passive: true });

    return () => {
      rows.forEach((row) => {
        row.removeEventListener("mouseenter", enterProject);
        row.removeEventListener("mouseleave", leaveProject);
        row.removeEventListener("pointerdown", pressProject);
        row.removeEventListener("pointerup", releaseProject);
        row.removeEventListener("pointercancel", releaseProject);
        row.removeEventListener("click", openProjectScene);
      });
      mobileTriggers.forEach((trigger) => trigger.kill());
      window.removeEventListener("pointermove", move);
      heroEl?.removeEventListener("pointermove", moveHeroMedia);
      heroEl?.removeEventListener("pointerleave", resetHeroMedia);
      ctx.revert();
      if (ticker) gsap.ticker.remove(ticker);
      lenis?.destroy();
    };
  }, []);

  return (
    <main ref={root} className="site-shell">
      <div ref={cursor} className="action-cursor" aria-hidden="true">
        <span>VIEW</span>
      </div>

      <div ref={preview} className="work-preview" aria-hidden="true">
        <img ref={previewImage} src={projects[0].preview} alt="" />
      </div>

      <header className="topbar">
        <a href="#top" className="topbar__brand">
          AK
        </a>
        <p className="topbar__role">Advertising Visual Designer</p>
        <nav className="topbar__nav" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="hero-noise" aria-hidden="true" />
        <div className="hero-kicker" data-motion>
          <span className="hero-kicker__desktop">Based in Egypt</span>
          <span className="hero-kicker__mobile">Ahmed Khair</span>
          <span className="hero-kicker__desktop">Selected visual work · 04</span>
          <span className="hero-kicker__mobile">Advertising Visual Designer</span>
        </div>

        <h1 className="hero-title" aria-label="Ahmed Khair">
          <span className="hero-line">
            <span className="hero-word hero-word--one" data-motion>
              AHMED
            </span>
          </span>
          <span className="hero-line hero-line--second">
            <span className="hero-word hero-word--two" data-motion>
              KHAIR
            </span>
          </span>
        </h1>

        <div className="hero-meta" data-motion>
          <p>Campaigns · Posters · Product Visuals</p>
          <p>Portfolio / 2026</p>
          <a href="#work">Scroll to enter ↓</a>
        </div>

        <figure className="hero-teaser" data-motion>
          <img
            src="/images/boch/hero.webp"
            alt="BOCH Motor campaign visual"
            fetchPriority="high"
          />
          <figcaption>
            <span>01</span>
            <span>BOCH Motor</span>
          </figcaption>
        </figure>

        <div className="hero-handoff" aria-hidden="true">
          <p className="hero-handoff__eyebrow">
            Identity becomes proof · Four selected pieces
          </p>
          <p className="hero-handoff__title">
            <span>SELECTED</span>
            <span>WORK</span>
          </p>
          <p className="hero-handoff__count">01—04</p>
        </div>
      </section>

      <section id="work" className="work-index" aria-labelledby="work-index-title">
        <header className="work-index__head">
          <p className="work-index__label">
            <span>Work index</span>
            <span>01—04</span>
          </p>

          <h2 id="work-index-title" className="work-index__descriptor">
            Campaigns · Posters · Product Visuals
          </h2>

          <p className="work-index__note">
            Four selected projects from Ahmed&apos;s public work.
          </p>
        </header>

        <div className="work-index__list">
          {projects.map((project) => (
            <a
              key={project.id}
              href={"#" + project.id}
              className="work-index__row"
              data-preview={project.preview}
              aria-label={`${project.title} — ${project.kind}`}
            >
              <span className="work-index__number">{project.number}</span>

              <span className="work-index__title-wrap">
                <span className="work-index__title">
                  {project.titleLines.map((line, lineIndex) => (
                    <span className="work-index__title-line" key={line}>
                      {line}
                      {lineIndex < project.titleLines.length - 1 ? " " : ""}
                    </span>
                  ))}
                </span>
              </span>

              <span className="work-index__kind">{project.kind}</span>

              <span className="work-index__mobile-preview" aria-hidden="true">
                <img src={project.preview} alt="" />
              </span>

              <span className="work-index__arrow" aria-hidden="true">
                ↘
              </span>
            </a>
          ))}
        </div>

        <div className="work-index__foot">
          <span>Selected visual work</span>
          <span>Scroll to enter the first campaign ↓</span>
        </div>
      </section>

      <section id="boch" className="scene scene--boch" aria-labelledby="boch-title">
        <div className="scene__chrome">
          <p className="scene__meta">01 / Campaign</p>
          <h2 id="boch-title" className="scene__title">
            BOCH
            <br />
            MOTOR
          </h2>
          <p className="scene__caption">
            Industrial product imagery treated with the drama of a sports
            campaign.
          </p>
        </div>

        <figure className="scene__primary scene__primary--boch">
          <img
            src="/images/boch/hero.webp"
            alt="BOCH Motor campaign hero visual"
          />
        </figure>

        <figure className="scene__accent scene__accent--boch-a">
          <img
            src="/images/boch/cinematic.webp"
            alt="BOCH Motor cinematic supporting visual"
          />
        </figure>

        <figure className="scene__accent scene__accent--boch-b">
          <img
            src="/images/boch/context.webp"
            alt="BOCH Motor contextual supporting visual"
          />
        </figure>

        <figure className="scene__accent scene__accent--boch-c">
          <img
            src="/images/boch/support.webp"
            alt="BOCH Motor supporting visual"
          />
        </figure>

        <p className="scene__oversize" aria-hidden="true">
          POWER
        </p>
      </section>

      <section
        id="shamadan"
        className="scene scene--shamadan"
        aria-labelledby="shamadan-title"
      >
        <div className="scene__chrome scene__chrome--light">
          <p className="scene__meta">02 / Campaign</p>
          <h2 id="shamadan-title" className="scene__title">
            EL
            <br />
            SHAMADAN
          </h2>
          <p className="scene__caption">
            Product-led compositions with more colour, movement and appetite.
          </p>
        </div>

        <figure className="scene__primary scene__primary--shamadan">
          <img
            src="/images/shamadan/hero.webp"
            alt="El Shamadan campaign hero visual"
          />
        </figure>

        <figure className="scene__accent scene__accent--shamadan-a">
          <img
            src="/images/shamadan/premium-flatlay.webp"
            alt="El Shamadan premium flat-lay visual"
          />
        </figure>

        <figure className="scene__accent scene__accent--shamadan-b">
          <img
            src="/images/shamadan/light-splash.webp"
            alt="El Shamadan splash composition"
          />
        </figure>

        <figure className="scene__accent scene__accent--shamadan-c">
          <img
            src="/images/shamadan/product-family.webp"
            alt="El Shamadan product family visual"
          />
        </figure>

        <figure className="scene__accent scene__accent--shamadan-d">
          <img
            src="/images/shamadan/playful.webp"
            alt="El Shamadan playful campaign visual"
          />
        </figure>

        <p className="scene__oversize scene__oversize--light" aria-hidden="true">
          TASTE
        </p>
      </section>

      <section className="silence" aria-hidden="true">
        <p>Colour leaves.</p>
        <div className="silence__line" />
        <p>One poster remains.</p>
      </section>

      <section
        id="criminal"
        className="scene scene--criminal"
        aria-labelledby="criminal-title"
      >
        <div className="scene__chrome">
          <p className="scene__meta">03 / Film Poster Study</p>
          <h2 id="criminal-title" className="scene__title scene__title--criminal">
            CRIMINAL
            <br />
            ANBR 6
          </h2>
          <p className="scene__caption">
            A deliberate pause in the commercial rhythm.
          </p>
        </div>

        <figure className="scene__primary criminal-poster">
          <img
            src="/images/criminal-anbr-6/hero.webp"
            alt="Criminal Anbr 6 poster study"
          />
        </figure>

        <figure className="scene__accent criminal-poster--alt">
          <img
            src="/images/criminal-anbr-6/alternate.webp"
            alt="Alternate Criminal Anbr 6 poster study"
          />
        </figure>

        <p className="scene__oversize scene__oversize--outline" aria-hidden="true">
          SILENCE
        </p>
      </section>

      <section
        id="coffee"
        className="scene scene--coffee"
        aria-labelledby="coffee-title"
      >
        <div className="scene__chrome scene__chrome--coffee">
          <p className="scene__meta">04 / Compact Campaign</p>
          <h2 id="coffee-title" className="scene__title">
            ABD ALLAL
            <br />
            COFFEE
          </h2>
          <p className="scene__caption">
            A warm reset. Two images, intentionally kept compact.
          </p>
        </div>

        <figure className="scene__primary scene__primary--coffee">
          <img
            src="/images/abd-allal/hero.webp"
            alt="Abd Allal Coffee campaign hero visual"
          />
        </figure>

        <figure className="scene__accent scene__accent--coffee">
          <img
            src="/images/abd-allal/support.webp"
            alt="Abd Allal Coffee supporting visual"
          />
        </figure>

        <p className="scene__oversize scene__oversize--coffee" aria-hidden="true">
          WARMTH
        </p>
      </section>

      <section id="about" className="about" aria-labelledby="about-title">
        <p className="about-word" aria-hidden="true">
          HUMAN
        </p>

        <div className="about-copy">
          <p className="about-kicker">The person behind the visuals</p>
          <h2 id="about-title">Ahmed Khair</h2>
          <p className="about-lede">
            Advertising visual designer working across campaigns, posters and
            photo-led compositions.
          </p>
          <p className="about-body">
            The site gets quieter here. The work has already spoken; this is the
            human moment behind it.
          </p>

          <div className="about-tags">
            <span>Campaign Visuals</span>
            <span>Posters</span>
            <span>Photo Manipulation</span>
            <span>Advertising Design</span>
          </div>
        </div>

        <div className="about-portrait">
          <div className="about-halo" aria-hidden="true" />
          <img
            className="about-cutout"
            src="/images/ahmed/ahmed-cutout.png"
            alt="Ahmed Khair"
          />
        </div>
      </section>

      <footer id="contact" className="contact">
        <p className="contact-kicker">End title / Start a conversation</p>

        <h2>
          MAKE IT
          <br />
          <span>WORTH</span>
          <br />
          LOOKING AT.
        </h2>

        <div className="contact-grid">
          <a
            href="https://www.behance.net/ahmedkhairgemy"
            target="_blank"
            rel="noreferrer"
          >
            Behance ↗
          </a>
          <a href="#work">Selected work ↑</a>
          <p>Ahmed Khair © 2026</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
