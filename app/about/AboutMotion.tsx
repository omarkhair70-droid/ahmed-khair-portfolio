"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export default function AboutMotion() {
  useLayoutEffect(() => {
    const root = document.querySelector<HTMLElement>(".about-page");
    if (!root) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let lenis: Lenis | null = null;
    let ticker: ((time: number) => void) | null = null;

    if (!reduced) {
      lenis = new Lenis({
        duration: 1.02,
        smoothWheel: true,
        touchMultiplier: 1.15,
      });

      lenis.on("scroll", ScrollTrigger.update);
      ticker = (time: number) => lenis?.raf(time * 1000);
      gsap.ticker.add(ticker);
      gsap.ticker.lagSmoothing(0);
    }

    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.set(
          [
            ".about-page-hero__meta > *",
            ".about-page-hero__title span",
            ".about-page-portrait__field",
            ".about-page-portrait__image",
            ".about-page-portrait figcaption > *",
            ".about-page-hero__statement > *",
            ".about-page-hero__index",
            ".about-page-practice__head > *",
            ".about-page-practice__title span",
            ".about-page-practice__copy",
            ".about-page-craft__head > *",
            ".about-page-craft__list p",
            ".about-page-work",
            ".about-page-end__meta > *",
            ".about-page-end__behance > *",
            ".about-page-end__nav a",
          ],
          { clearProps: "all" },
        );
        return;
      }

      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

      intro
        .from(".about-page-hero__meta > *", {
          y: 10,
          opacity: 0,
          duration: 0.55,
          stagger: 0.05,
        })
        .from(
          ".about-page-hero__title span",
          {
            yPercent: 108,
            rotate: (index) => (index === 0 ? 0.8 : -0.7),
            duration: 1.05,
            stagger: 0.08,
          },
          "-=0.25",
        )
        .fromTo(
          ".about-page-portrait__field",
          { clipPath: "inset(100% 0 0 0)" },
          {
            clipPath: "inset(0% 0 0 0)",
            duration: 0.95,
            ease: "power3.inOut",
          },
          "-=0.72",
        )
        .from(
          ".about-page-portrait__image",
          {
            y: 34,
            scale: 1.015,
            opacity: 0,
            duration: 0.9,
          },
          "-=0.65",
        )
        .from(
          ".about-page-portrait figcaption > *",
          {
            y: 8,
            opacity: 0,
            duration: 0.48,
            stagger: 0.06,
          },
          "-=0.42",
        )
        .from(
          ".about-page-hero__statement > *, .about-page-hero__index",
          {
            y: 12,
            opacity: 0,
            duration: 0.55,
            stagger: 0.06,
          },
          "-=0.35",
        );

      gsap.from(".about-page-practice__head > *", {
        y: 10,
        opacity: 0,
        stagger: 0.06,
        scrollTrigger: {
          trigger: ".about-page-practice",
          start: "top 78%",
          end: "top 56%",
          scrub: 0.72,
        },
      });

      gsap.from(".about-page-practice__title span", {
        yPercent: 34,
        opacity: 0.12,
        stagger: 0.06,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-page-practice__title",
          start: "top 88%",
          end: "center 58%",
          scrub: 0.92,
        },
      });

      gsap.from(".about-page-practice__copy", {
        y: 24,
        opacity: 0,
        scrollTrigger: {
          trigger: ".about-page-practice__copy",
          start: "top 92%",
          end: "top 72%",
          scrub: 0.78,
        },
      });

      gsap.from(".about-page-craft__head > *", {
        y: 10,
        opacity: 0,
        stagger: 0.05,
        scrollTrigger: {
          trigger: ".about-page-craft",
          start: "top 80%",
          end: "top 60%",
          scrub: 0.72,
        },
      });

      gsap.from(".about-page-craft__list p", {
        y: 28,
        opacity: 0,
        stagger: 0.07,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-page-craft__list",
          start: "top 86%",
          end: "center 62%",
          scrub: 0.9,
        },
      });

      gsap.from(".about-page-work", {
        x: 28,
        opacity: 0,
        scrollTrigger: {
          trigger: ".about-page-work",
          start: "top 91%",
          end: "top 72%",
          scrub: 0.8,
        },
      });

      gsap.from(".about-page-end__meta > *", {
        y: 10,
        opacity: 0,
        stagger: 0.05,
        scrollTrigger: {
          trigger: ".about-page-end",
          start: "top 80%",
          end: "top 62%",
          scrub: 0.7,
        },
      });

      gsap.from(".about-page-end__behance > *", {
        yPercent: 28,
        opacity: 0.18,
        stagger: 0.08,
        scrollTrigger: {
          trigger: ".about-page-end__behance",
          start: "top 90%",
          end: "center 66%",
          scrub: 0.9,
        },
      });

      gsap.from(".about-page-end__nav a", {
        y: 10,
        opacity: 0,
        stagger: 0.05,
        scrollTrigger: {
          trigger: ".about-page-end__nav",
          start: "top 96%",
          end: "top 84%",
          scrub: 0.72,
        },
      });
    }, root);

    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
      if (ticker) gsap.ticker.remove(ticker);
      lenis?.destroy();
    };
  }, []);

  return null;
}
