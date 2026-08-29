# Hero Closure Log — H1 to H5

Status: **HERO CLOSED**
Scope: Home / opening identity sequence only.

This closure is based on real rendered desktop/mobile captures plus live motion capture.

## H1 — Static Composition
CLOSED

Desktop:
- AHMED / KHAIR reads immediately.
- no accidental right-edge crop.
- BOCH teaser has a deliberate separate field.
- navigation, microcopy and bottom metadata support the hierarchy.

Mobile:
- bespoke 390px composition.
- AHMED / KHAIR no longer collides accidentally.
- BOCH image is separated from the name.
- role and supporting copy remain readable.

Reduced-motion QA now shows the real hero rather than the animated handoff state.

## H2 — Typography Refinement
CLOSED

Final hero information hierarchy:
- global: AK + Advertising Visual Designer + Work / About / Contact
- desktop kicker: Based in Egypt / Selected visual work · 04
- mobile kicker: Ahmed Khair / Advertising Visual Designer
- title: AHMED / KHAIR
- footer metadata: disciplines / Portfolio 2026 / Scroll to enter

Display typography was rebalanced separately for desktop and mobile.

## H3 — Typography Motion
CLOSED

Opening:
- controlled word-mask reveal
- AHMED establishes first
- KHAIR follows without per-letter gimmicks
- microcopy enters after identity hierarchy

Scroll:
- words separate spatially with controlled horizontal / vertical drift
- tracking changes are subtle
- typography remains readable before it becomes transitional

## H4 — Media Motion
CLOSED

BOCH teaser:
- enters only after identity begins settling
- masked reveal + controlled scale
- scroll-linked scale / position
- subtle pointer-responsive image movement on fine-pointer devices
- mobile does not depend on pointer behavior

## H5 — Hero Exit
CLOSED

- hero is pinned for the authored exit sequence
- identity dims instead of hard-cutting away
- BOCH media carries visual tension into the exit
- warm paper handoff rises into the frame
- SELECTED WORK acts as the transition title
- handoff title releases before the work index settles
- Work Index continues on the same paper field

The faint residual transition typography at the boundary is intentional continuity, not an accidental overlay.

## QA evidence

Validated:
- TypeScript
- production Next.js build
- desktop 1440 render
- mobile 390 render
- reduced motion
- desktop motion capture
- mobile motion capture

Latest validated implementation commit before this log:
`a18bc149835680f239f5f8c127c4899915fcf772`

Hero can only be reopened for:
- a concrete visual regression
- a reference-backed improvement discovered during H14 full-home integration
- responsive defects at additional breakpoints

Otherwise the next gate is:

**H6 — Work Index Static Composition**
