# Reference Technology & Motion Audit — Homepage V2

This document separates verified implementation facts from design interpretation.

## Ali Ali — alitwotimes.com

Verified:
- Current site credits **Alitwotimes x Exo Ape**.
- The site is organized around Bio / Work / Contact and a long Selected Work list.
- Public discussion around its Work/Bio transition specifically points to a GSAP-style transition.
- Public design discussion also documents the project-title / mouse-position follow behavior on work items.

Use:
- project title/image relationship
- directional scene transitions
- hover/follow behavior that feels physically attached to the selected work

Do not copy:
- exact geometry, titles, timings, or transition choreography

## O'shane Howard — oshanehoward.com

Verified:
- Platform is Webflow.
- Asset delivery is from Webflow CDN.
- Homepage explicitly instructs “SCROLL TO EXPLORE / TAP TO EXPLORE”.
- The experience includes “Hold and drag to pan around the images”.
- The portfolio uses category-led navigation and imagery as the primary surface.

Use:
- direct-manipulation feeling
- drag/pan logic as inspiration for one bounded project interaction
- work-first navigation

Do not copy:
- photography-specific infinite-canvas treatment as Ahmed has a smaller asset set

## D Alcausin — dalcausin.com

Verified:
- Current site has Selected Work / About / Let’s Talk as the main hierarchy.
- The work is intentionally concise and personality-led.
- About and experience are treated as meaningful content rather than a corporate profile.
- The user directly observed the hover / moving-image behavior on Selected Work and the personal childhood-photo moment.

Use:
- human/personal break after work
- one playful image-follow interaction
- compact navigation with personality

Unknown:
- exact current animation library is not publicly verified here.
- Do not claim GSAP/Pixi/WebGL for the current site without stronger evidence.

## Alexandre Rochet

Verified via Awwwards:
- Site of the Day.
- Listed technologies include **GSAP, PixiJS, Backbone.js, Underscore.js, Modernizr**.
- Awwwards classifies it with Parallax and Unusual Navigation.
- Animation score was a highlighted part of the experience.

Use:
- cinematic page-as-experience ambition
- layered 2D image treatment
- unusual but comprehensible navigation/motion
- PixiJS is justified only if a 2D canvas effect materially improves Ahmed’s imagery

## Diego Salas — diegosalas.net

Verified:
- Current site is served through Wix assets.
- Navigation is category-based: Automotive / Product / Sports / Creativity / Entertainment.
- The current experience is fundamentally a dense image portfolio, not a technical-effects showcase.

Use:
- restraint
- let high-density artwork breathe without competing UI

## Implementation conclusion for Ahmed

We should not reproduce any one reference stack.

For Ahmed:
- Next.js / React / TypeScript stays.
- GSAP + ScrollTrigger becomes the main choreography engine.
- Lenis becomes the smooth-scroll coordinator.
- CSS remains responsible for typography, grids and responsive design.
- PixiJS remains optional for one bounded image transition; it is not a default dependency.
- No Three.js in homepage V2 unless a real design problem requires 3D.

The goal is **reference-equivalent craft**, not reference-equivalent libraries.
