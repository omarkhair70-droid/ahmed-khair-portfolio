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

      document.querySelectorAll<HTMLElement>(".scene:not(.scene--boch):not(.scene--shamadan):not(.scene--criminal):not(.scene--coffee)").forEach((scene) => {
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

      const bochScene = document.querySelector<HTMLElement>(".scene--boch");
      if (bochScene) {
        gsap.fromTo(
          ".boch-entry__line",
          { scaleX: 0, transformOrigin: "left center" },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: bochScene,
              start: "top 88%",
              end: "top 48%",
              scrub: 0.9,
            },
          },
        );

        gsap.from(".boch-head__meta > *, .boch-head__copy > *", {
          y: 20,
          opacity: 0,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".boch-head",
            start: "top 76%",
            end: "top 42%",
            scrub: 0.75,
          },
        });

        gsap.from(".boch-line", {
          yPercent: 108,
          rotate: 1.2,
          stagger: 0.06,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".boch-head",
            start: "top 72%",
            end: "top 34%",
            scrub: 0.82,
          },
        });

        gsap.fromTo(
          ".boch-frame--hero",
          {
            clipPath: "inset(7% 9% 7% 9%)",
            yPercent: 5,
            scale: 0.985,
          },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            yPercent: 0,
            scale: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".boch-frame--hero",
              start: "top 88%",
              end: "top 20%",
              scrub: 1.05,
            },
          },
        );

        gsap.fromTo(
          ".boch-frame--hero img",
          { scale: 1.02 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".boch-frame--hero",
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          },
        );

        gsap.fromTo(
          ".boch-act--cinematic .boch-frame",
          { y: 110, clipPath: "inset(10% 0 10% 0)" },
          {
            y: 0,
            clipPath: "inset(0% 0 0% 0)",
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".boch-act--cinematic",
              start: "top 86%",
              end: "top 28%",
              scrub: 1,
            },
          },
        );

        gsap.from(".boch-act--cinematic .boch-act__copy", {
          y: 42,
          opacity: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".boch-act--cinematic",
            start: "top 76%",
            end: "top 45%",
            scrub: 0.72,
          },
        });

        gsap.fromTo(
          ".boch-frame--context",
          { y: 82 },
          {
            y: -18,
            ease: "none",
            scrollTrigger: {
              trigger: ".boch-act--pair",
              start: "top bottom",
              end: "bottom top",
              scrub: 1.1,
            },
          },
        );

        gsap.fromTo(
          ".boch-frame--support",
          { y: 148 },
          {
            y: -42,
            ease: "none",
            scrollTrigger: {
              trigger: ".boch-act--pair",
              start: "top bottom",
              end: "bottom top",
              scrub: 1.24,
            },
          },
        );

        gsap.from(".boch-act--pair .boch-act__copy", {
          x: -30,
          opacity: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".boch-act--pair",
            start: "top 78%",
            end: "top 48%",
            scrub: 0.7,
          },
        });

        gsap.fromTo(
          ".boch-exit__wash",
          { scaleY: 0.06, transformOrigin: "bottom center" },
          {
            scaleY: 1,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: ".boch-exit",
              start: "top 88%",
              end: "bottom 34%",
              scrub: 1.05,
            },
          },
        );

        gsap.from(".boch-exit__copy > *", {
          y: 24,
          opacity: 0,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".boch-exit",
            start: "top 62%",
            end: "top 32%",
            scrub: 0.7,
          },
        });
      }

      const shamadanScene = document.querySelector<HTMLElement>(
        ".scene--shamadan",
      );
      if (shamadanScene) {
        gsap.from(".shamadan-head__meta > *, .shamadan-head__copy", {
          y: 22,
          opacity: 0,
          stagger: 0.07,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".shamadan-head",
            start: "top 82%",
            end: "top 48%",
            scrub: 0.62,
          },
        });

        gsap.from(".shamadan-head__title span:first-child", {
          xPercent: -18,
          opacity: 0.35,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".shamadan-head",
            start: "top 86%",
            end: "top 42%",
            scrub: 0.7,
          },
        });

        gsap.from(".shamadan-head__title span:last-child", {
          xPercent: 12,
          opacity: 0.35,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".shamadan-head",
            start: "top 86%",
            end: "top 42%",
            scrub: 0.7,
          },
        });

        if (window.matchMedia("(max-width: 700px)").matches) {
          gsap.to(".shamadan-head__copy", {
            y: -8,
            opacity: 0,
            ease: "none",
            scrollTrigger: {
              trigger: ".shamadan-head",
              start: "top -10%",
              end: "bottom 110px",
              scrub: 0.28,
            },
          });
        }

        gsap.fromTo(
          ".shamadan-frame--hero",
          {
            y: 96,
            rotate: 0.8,
            scale: 0.975,
            clipPath: "inset(7% 5% 7% 5%)",
          },
          {
            y: 0,
            rotate: 0,
            scale: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".shamadan-hero-stage",
              start: "top 88%",
              end: "top 24%",
              scrub: 0.78,
            },
          },
        );

        gsap.fromTo(
          ".shamadan-frame--hero img",
          { scale: 1.035 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".shamadan-hero-stage",
              start: "top bottom",
              end: "bottom top",
              scrub: 0.88,
            },
          },
        );

        gsap.fromTo(
          ".shamadan-frame--premium",
          { y: 118, clipPath: "inset(8% 0 8% 0)" },
          {
            y: -18,
            clipPath: "inset(0% 0% 0% 0%)",
            ease: "none",
            scrollTrigger: {
              trigger: ".shamadan-act--premium",
              start: "top bottom",
              end: "bottom top",
              scrub: 0.92,
            },
          },
        );

        gsap.from(".shamadan-act--premium .shamadan-act__copy", {
          x: 42,
          opacity: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".shamadan-act--premium",
            start: "top 76%",
            end: "top 44%",
            scrub: 0.58,
          },
        });

        gsap.fromTo(
          ".shamadan-frame--light",
          { y: 104, rotate: -0.7, scale: 0.985 },
          {
            y: -44,
            rotate: 0,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".shamadan-act--light",
              start: "top bottom",
              end: "bottom top",
              scrub: 0.84,
            },
          },
        );

        gsap.from(".shamadan-act--light .shamadan-act__copy", {
          x: -34,
          opacity: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".shamadan-act--light",
            start: "top 76%",
            end: "top 44%",
            scrub: 0.56,
          },
        });

        gsap.fromTo(
          ".shamadan-frame--family",
          { y: 116 },
          {
            y: -26,
            ease: "none",
            scrollTrigger: {
              trigger: ".shamadan-act--pair",
              start: "top bottom",
              end: "bottom top",
              scrub: 0.9,
            },
          },
        );

        gsap.fromTo(
          ".shamadan-frame--playful",
          { y: 178, scale: 0.975 },
          {
            y: -58,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".shamadan-act--pair",
              start: "top bottom",
              end: "bottom top",
              scrub: 1.02,
            },
          },
        );

        gsap.from(".shamadan-act--pair .shamadan-act__copy", {
          y: 34,
          opacity: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".shamadan-act--pair",
            start: "top 78%",
            end: "top 48%",
            scrub: 0.58,
          },
        });

        gsap.fromTo(
          ".shamadan-exit__line",
          { scaleY: 0, transformOrigin: "top center" },
          {
            scaleY: 1,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: ".shamadan-exit",
              start: "top 76%",
              end: "bottom 42%",
              scrub: 0.78,
            },
          },
        );

        gsap.from(
          ".shamadan-exit__top > *, .shamadan-exit__bottom",
          {
            y: 18,
            opacity: 0,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".shamadan-exit",
              start: "top 64%",
              end: "top 32%",
              scrub: 0.58,
            },
          },
        );
      }

      const criminalScene = document.querySelector<HTMLElement>(
        ".scene--criminal",
      );
      if (criminalScene) {
        gsap.from(".criminal-head__meta > *, .criminal-head__copy", {
          y: 16,
          opacity: 0,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".criminal-head",
            start: "top 80%",
            end: "top 48%",
            scrub: 0.86,
          },
        });

        gsap.from(".criminal-head__title span", {
          yPercent: 16,
          opacity: 0.28,
          stagger: 0.07,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".criminal-head",
            start: "top 76%",
            end: "top 38%",
            scrub: 1.05,
          },
        });

        gsap.from(".criminal-stage__label", {
          y: 14,
          opacity: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".criminal-stage",
            start: "top 72%",
            end: "top 48%",
            scrub: 0.9,
          },
        });

        gsap.fromTo(
          ".criminal-frame--hero",
          {
            y: 74,
            scale: 0.986,
            clipPath: "inset(4% 3% 4% 3%)",
          },
          {
            y: 0,
            scale: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            ease: "none",
            scrollTrigger: {
              trigger: ".criminal-stage",
              start: "top 82%",
              end: "top 16%",
              scrub: 1.28,
            },
          },
        );

        gsap.fromTo(
          ".criminal-frame--hero img",
          { scale: 1.012 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".criminal-frame--hero",
              start: "top bottom",
              end: "bottom top",
              scrub: 1.4,
            },
          },
        );

        gsap.from(".criminal-stage__alternate > p", {
          y: 14,
          opacity: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".criminal-stage__alternate",
            start: "top 82%",
            end: "top 58%",
            scrub: 0.92,
          },
        });

        gsap.fromTo(
          ".criminal-frame--alternate",
          { y: 64, opacity: 0.56, scale: 0.988 },
          {
            y: -8,
            opacity: 1,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".criminal-stage__alternate",
              start: "top bottom",
              end: "bottom 18%",
              scrub: 1.34,
            },
          },
        );

        gsap.from(
          ".criminal-exit__meta > *",
          {
            y: 16,
            opacity: 0,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".criminal-exit",
              start: "top 70%",
              end: "top 38%",
              scrub: 0.9,
            },
          },
        );
      }

      const coffeeScene = document.querySelector<HTMLElement>(".scene--coffee");
      if (coffeeScene) {
        gsap.from(".coffee-stage__meta > *, .coffee-stage__copy", {
          y: 16,
          opacity: 0,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".coffee-stage",
            start: "top 78%",
            end: "top 44%",
            scrub: 0.82,
          },
        });

        gsap.from(".coffee-stage__title span", {
          yPercent: 18,
          opacity: 0.32,
          stagger: 0.06,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".coffee-stage",
            start: "top 74%",
            end: "top 36%",
            scrub: 0.96,
          },
        });

        gsap.fromTo(
          ".coffee-frame--hero",
          {
            y: 72,
            scale: 0.988,
            clipPath: "inset(5% 3% 5% 3%)",
          },
          {
            y: 0,
            scale: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            ease: "none",
            scrollTrigger: {
              trigger: ".coffee-stage",
              start: "top 82%",
              end: "top 16%",
              scrub: 1.14,
            },
          },
        );

        gsap.fromTo(
          ".coffee-frame--hero img",
          { scale: 1.012 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".coffee-frame--hero",
              start: "top bottom",
              end: "bottom top",
              scrub: 1.25,
            },
          },
        );

        gsap.fromTo(
          ".coffee-frame--support",
          { y: 88, opacity: 0.72 },
          {
            y: -8,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".coffee-frame--support",
              start: "top 92%",
              end: "bottom 24%",
              scrub: 1.2,
            },
          },
        );

        gsap.from(".coffee-stage__close > *", {
          y: 12,
          opacity: 0,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".coffee-stage__close",
            start: "top 92%",
            end: "top 72%",
            scrub: 0.78,
          },
        });
      }

      const aboutSection = document.querySelector<HTMLElement>(".about");
      if (aboutSection) {
        gsap.from(".about-entry > *", {
          y: 12,
          opacity: 0,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-entry",
            start: "top 82%",
            end: "bottom 56%",
            scrub: 0.82,
          },
        });

        gsap.from(".about-kicker > *", {
          y: 12,
          opacity: 0,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-layout",
            start: "top 78%",
            end: "top 52%",
            scrub: 0.78,
          },
        });

        gsap.from(".about-copy h2 span", {
          yPercent: 18,
          opacity: 0.24,
          stagger: 0.07,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-layout",
            start: "top 72%",
            end: "top 34%",
            scrub: 0.96,
          },
        });

        gsap.from(".about-lede, .about-body", {
          y: 22,
          opacity: 0,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-copy",
            start: "top 62%",
            end: "center 52%",
            scrub: 0.88,
          },
        });

        gsap.fromTo(
          ".about-portrait__field",
          {
            scaleY: 0.94,
            scaleX: 0.97,
            transformOrigin: "bottom center",
            opacity: 0.72,
          },
          {
            scaleY: 1,
            scaleX: 1,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".about-portrait",
              start: "top 86%",
              end: "top 26%",
              scrub: 1.08,
            },
          },
        );

        gsap.fromTo(
          ".about-cutout",
          { yPercent: 9, scale: 0.99 },
          {
            yPercent: 0,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".about-portrait",
              start: "top 88%",
              end: "top 22%",
              scrub: 1.12,
            },
          },
        );

        gsap.from(
          ".about-portrait figcaption > *, .about-capabilities, .about-location",
          {
            y: 14,
            opacity: 0,
            stagger: 0.07,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".about-portrait",
              start: "center 82%",
              end: "bottom 72%",
              scrub: 0.86,
            },
          },
        );
      }

      const contactSection = document.querySelector<HTMLElement>(".contact");
      if (contactSection) {
        gsap.from(".contact-meta > *", {
          y: 10,
          opacity: 0,
          stagger: 0.06,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".contact",
            start: "top 78%",
            end: "top 55%",
            scrub: 0.76,
          },
        });

        gsap.from(".contact-title span", {
          yPercent: 16,
          opacity: 0.22,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".contact-title",
            start: "top 88%",
            end: "center 56%",
            scrub: 0.96,
          },
        });

        gsap.from(".contact-primary", {
          y: 16,
          opacity: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".contact-primary",
            start: "top 94%",
            end: "top 78%",
            scrub: 0.82,
          },
        });

        gsap.from(".contact-nav > *", {
          y: 10,
          opacity: 0,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".contact-nav",
            start: "top 96%",
            end: "top 82%",
            scrub: 0.72,
          },
        });
      }

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

    const initialHash = window.location.hash;
    const previousScrollRestoration = window.history.scrollRestoration;

    const restoreInitialHash = () => {
      if (!initialHash) return;

      const destination = document.querySelector<HTMLElement>(initialHash);
      if (!destination) return;

      const top = destination.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({ top, behavior: "auto" });

      if (lenis) {
        lenis.scrollTo(top, {
          immediate: true,
          force: true,
        });
      }

      ScrollTrigger.update();
    };

    if (initialHash) {
      window.history.scrollRestoration = "manual";
      restoreInitialHash();
    }

    const hashRestoreTimers = initialHash
      ? [
          window.setTimeout(restoreInitialHash, 80),
          window.setTimeout(restoreInitialHash, 360),
        ]
      : [];

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
      hashRestoreTimers.forEach((timer) => window.clearTimeout(timer));
      window.history.scrollRestoration = previousScrollRestoration;
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
          <a href="/about">About</a>
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
        <div className="boch-entry" aria-hidden="true">
          <div className="boch-entry__line" />
          <p>
            <span>01 / Featured campaign</span>
            <span>Work becomes proof</span>
          </p>
        </div>

        <header className="boch-head">
          <p className="boch-head__meta">
            <span>01 / Campaign</span>
            <span>Selected visual work</span>
          </p>

          <h2 id="boch-title" className="boch-head__title" aria-label="BOCH Motor">
            <span className="boch-line-wrap">
              <span className="boch-line">BOCH</span>
            </span>
            <span className="boch-line-wrap boch-line-wrap--second">
              <span className="boch-line">MOTOR</span>
            </span>
          </h2>

          <div className="boch-head__copy">
            <p>
              Industrial product imagery treated with the drama of a sports
              campaign.
            </p>
            <p>Advertising visuals / campaign</p>
          </div>
        </header>

        <figure className="boch-frame boch-frame--hero">
          <img
            src="/images/boch/hero.webp"
            alt="BOCH Motor campaign hero visual"
          />
          <figcaption>
            <span>Campaign lead</span>
            <span>01 / 04</span>
          </figcaption>
        </figure>

        <div className="boch-act boch-act--cinematic">
          <div className="boch-act__copy">
            <span>02 / 04</span>
            <p>From product proof to atmosphere.</p>
          </div>

          <figure className="boch-frame boch-frame--cinematic">
            <img
              src="/images/boch/cinematic.webp"
              alt="BOCH Motor cinematic supporting visual"
            />
            <figcaption>
              <span>Cinematic variation</span>
              <span>BOCH Motor</span>
            </figcaption>
          </figure>
        </div>

        <div className="boch-act boch-act--pair">
          <div className="boch-act__copy">
            <span>03—04 / 04</span>
            <p>One campaign, different product contexts.</p>
          </div>

          <figure className="boch-frame boch-frame--context">
            <img
              src="/images/boch/context.webp"
              alt="BOCH Motor contextual supporting visual"
            />
            <figcaption>
              <span>Context study</span>
              <span>03 / 04</span>
            </figcaption>
          </figure>

          <figure className="boch-frame boch-frame--support">
            <img
              src="/images/boch/support.webp"
              alt="BOCH Motor supporting visual"
            />
            <figcaption>
              <span>Supporting variation</span>
              <span>04 / 04</span>
            </figcaption>
          </figure>
        </div>

        <div className="boch-exit" aria-hidden="true">
          <div className="boch-exit__wash" />
          <p className="boch-exit__copy">
            <span>Next / 02</span>
            <span>Control gives way to colour.</span>
          </p>
        </div>
      </section>

      <section
        id="shamadan"
        className="scene scene--shamadan"
        aria-labelledby="shamadan-title"
      >
        <header className="shamadan-head">
          <p className="shamadan-head__meta">
            <span>02 / Campaign</span>
            <span>Selected visual work</span>
          </p>

          <h2
            id="shamadan-title"
            className="shamadan-head__title"
            aria-label="El Shamadan"
          >
            <span>EL</span>
            <span>SHAMADAN</span>
          </h2>

          <p className="shamadan-head__copy">
            Selected campaign visuals for El Shamadan.
          </p>
        </header>

        <div className="shamadan-hero-stage">
          <figure className="shamadan-frame shamadan-frame--hero">
            <img
              src="/images/shamadan/hero.webp"
              alt="El Shamadan campaign hero visual"
            />
            <figcaption>
              <span>Campaign lead</span>
              <span>01 / 05</span>
            </figcaption>
          </figure>
        </div>

        <div className="shamadan-act shamadan-act--premium">
          <div className="shamadan-act__copy">
            <span>02 / 05</span>
            <p>Premium flat-lay.</p>
          </div>

          <figure className="shamadan-frame shamadan-frame--premium">
            <img
              src="/images/shamadan/premium-flatlay.webp"
              alt="El Shamadan premium flat-lay visual"
            />
            <figcaption>
              <span>Dark chocolate visual</span>
              <span>02 / 05</span>
            </figcaption>
          </figure>
        </div>

        <div className="shamadan-act shamadan-act--light">
          <div className="shamadan-act__copy">
            <span>03 / 05</span>
            <p>A lighter supporting composition.</p>
          </div>

          <figure className="shamadan-frame shamadan-frame--light">
            <img
              src="/images/shamadan/light-splash.webp"
              alt="El Shamadan light splash composition"
            />
            <figcaption>
              <span>Supporting visual</span>
              <span>03 / 05</span>
            </figcaption>
          </figure>
        </div>

        <div className="shamadan-act shamadan-act--pair">
          <div className="shamadan-act__copy">
            <span>04—05 / 05</span>
            <p>Two more executions, held in different scales.</p>
          </div>

          <figure className="shamadan-frame shamadan-frame--family">
            <img
              src="/images/shamadan/product-family.webp"
              alt="El Shamadan product family visual"
            />
            <figcaption>
              <span>Product family</span>
              <span>04 / 05</span>
            </figcaption>
          </figure>

          <figure className="shamadan-frame shamadan-frame--playful">
            <img
              src="/images/shamadan/playful.webp"
              alt="El Shamadan playful campaign visual"
            />
            <figcaption>
              <span>Playful variation</span>
              <span>05 / 05</span>
            </figcaption>
          </figure>
        </div>

        <div className="shamadan-exit" aria-hidden="true">
          <p className="shamadan-exit__top">
            <span>Colour leaves.</span>
            <span>03 / Film Poster Study</span>
          </p>
          <div className="shamadan-exit__line" />
          <p className="shamadan-exit__bottom">One poster remains.</p>
        </div>
      </section>

      <section
        id="criminal"
        className="scene scene--criminal"
        aria-labelledby="criminal-title"
      >
        <header className="criminal-head">
          <p className="criminal-head__meta">
            <span>03</span>
            <span>Film Poster Study</span>
          </p>

          <h2 id="criminal-title" className="criminal-head__title">
            <span>CRIMINAL</span>
            <span>ANBR 6</span>
          </h2>

          <p className="criminal-head__copy">
            Two selected poster treatments.
          </p>
        </header>

        <div className="criminal-stage">
          <p className="criminal-stage__label">
            <span>Primary poster</span>
            <span>01 / 02</span>
          </p>

          <figure className="criminal-frame criminal-frame--hero">
            <img
              src="/images/criminal-anbr-6/hero.webp"
              alt="Criminal Anbr 6 film poster study"
            />
            <figcaption>
              <span>Film Poster Study</span>
              <span>01 / 02</span>
            </figcaption>
          </figure>

          <div className="criminal-stage__alternate">
            <p>
              <span>Alternate treatment</span>
              <span>02 / 02</span>
            </p>

            <figure className="criminal-frame criminal-frame--alternate">
              <img
                src="/images/criminal-anbr-6/alternate.webp"
                alt="Alternate Criminal Anbr 6 film poster study"
              />
              <figcaption>
                <span>Alternate poster</span>
                <span>02 / 02</span>
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="criminal-exit" aria-hidden="true">
          <p className="criminal-exit__meta">
            <span>04 / Compact Campaign</span>
            <span>Black warms.</span>
          </p>
        </div>
      </section>

      <section
        id="coffee"
        className="scene scene--coffee"
        aria-labelledby="coffee-title"
      >
        <div className="coffee-stage">
          <p className="coffee-stage__meta">
            <span>04</span>
            <span>Compact Campaign</span>
          </p>

          <h2 id="coffee-title" className="coffee-stage__title">
            <span>ABD ALLAL</span>
            <span>COFFEE</span>
          </h2>

          <p className="coffee-stage__copy">
            Two selected campaign visuals.
          </p>

          <figure className="coffee-frame coffee-frame--hero">
            <img
              src="/images/abd-allal/hero.webp"
              alt="Abd Allal Coffee campaign hero visual"
            />
            <figcaption>
              <span>Primary visual</span>
              <span>01 / 02</span>
            </figcaption>
          </figure>

          <figure className="coffee-frame coffee-frame--support">
            <img
              src="/images/abd-allal/support.webp"
              alt="Abd Allal Coffee supporting campaign visual"
            />
            <figcaption>
              <span>Supporting visual</span>
              <span>02 / 02</span>
            </figcaption>
          </figure>

          <p className="coffee-stage__close">
            <span>Selected work ends here.</span>
            <span>Next / Ahmed Khair</span>
          </p>
        </div>
      </section>

      <section id="about" className="about" aria-labelledby="about-title">
        <div className="about-entry" aria-hidden="true">
          <span>Selected work / complete</span>
          <span>05 / About</span>
        </div>

        <div className="about-layout">
          <header className="about-copy">
            <p className="about-kicker">
              <span>Ahmed Khair</span>
              <span>Advertising Visual Designer</span>
            </p>

            <h2 id="about-title">
              <span>AHMED</span>
              <span>KHAIR</span>
            </h2>

            <p className="about-lede">Advertising visual designer.</p>
            <p className="about-body">
              Working across campaigns, posters and photo-led compositions.
            </p>
          </header>

          <figure className="about-portrait">
            <div className="about-portrait__field" aria-hidden="true" />
            <img
              className="about-cutout"
              src="/images/ahmed/ahmed-cutout.png"
              alt="Ahmed Khair"
            />
            <figcaption>
              <span>Ahmed Khair</span>
              <span>Egypt / 2026</span>
            </figcaption>
          </figure>

          <div className="about-capabilities" aria-label="Selected capabilities">
            <p>What I do</p>
            <div>
              <span>Campaign Visuals</span>
              <span>Posters</span>
              <span>Photo Manipulation</span>
              <span>Advertising Design</span>
            </div>
          </div>

          <p className="about-location">
            <span>Based in</span>
            <strong>Egypt</strong>
          </p>
        </div>
      </section>

      <footer id="contact" className="contact">
        <div className="contact-frame">
          <p className="contact-meta">
            <span>Ahmed Khair</span>
            <span>Advertising Visual Designer</span>
            <span>2026</span>
          </p>

          <h2 className="contact-title">
            <span>LET&apos;S MAKE</span>
            <span>SOMETHING</span>
            <span>WORTH LOOKING AT.</span>
          </h2>

          <a
            className="contact-primary"
            href="https://www.behance.net/ahmedkhairgemy"
            target="_blank"
            rel="noreferrer"
          >
            <span>Behance</span>
            <span>Open profile ↗</span>
          </a>

          <nav className="contact-nav" aria-label="Closing navigation">
            <a href="#work">Selected work ↑</a>
            <a href="/about">About ↑</a>
            <p>Ahmed Khair © 2026</p>
            <a href="#top">Back to top ↑</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
