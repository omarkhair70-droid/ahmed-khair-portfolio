# Ahmed Khair Portfolio — Design/Build Workflow V2

This supersedes the earlier "prototype-first" workflow.

The existing Homepage Pass 01 is treated only as a **technical smoke / structural wireframe**.
It is not the visual target and must not be used as proof that the homepage is designed.

## Core rule

**No improvisational implementation.**

Every public page is completed through the following loop:

1. Reference re-check
2. Tool / stack / motion audit
3. Page-specific art-direction lock
4. Full page design + motion implementation
5. Real rendered desktop capture
6. Real rendered mobile capture
7. Visual comparison against references and brief
8. Delta pass
9. Repeat until the page is visually closed
10. Only then move to the next page

## Page order

1. Homepage — complete visual + motion closure
2. About — complete visual + motion closure
3. BOCH case study
4. El Shamadan case study
5. Abd Allal Coffee compact case study
6. Criminal Anbr 6 poster study

## Homepage V2 implementation target

The homepage must feel like a designed interactive object, not a long editorial page with fade-ins.

### Reference roles

- **Ali Ali / Exo Ape**
  - cinematic transitions
  - work becomes the interface
  - strong title-to-image relationship
  - mouse/hover movement tied to project imagery

- **D Alcausin**
  - human personality
  - selected-work interaction
  - image reveal/follow behavior
  - playful microinteraction without turning the site into a gimmick

- **Alexandre Rochet**
  - cinematic feeling
  - unusual navigation
  - GSAP/PixiJS-era interaction language
  - page itself can become an experience

- **O'shane Howard**
  - imagery dominates
  - pan/explore interaction
  - motion and category navigation serve photography rather than decorate it

- **Diego Salas**
  - restraint when the work itself is visually dense
  - simple gallery logic as a counterweight

## Technology policy

Base application:
- Next.js
- React
- TypeScript

Motion layer:
- GSAP
- ScrollTrigger
- Lenis

Extended visual layer:
- PixiJS / Three.js / WebGL / shaders / canvas / WebGPU / custom rendering are all available.
- Add whichever technology the approved visual target actually requires.
- The only rule is that every added dependency must be tied to a real visual or interaction need, not stack decoration.

Interaction layer:
- custom cursor only when it communicates an action
- magnetic / follow interactions only where meaningful
- no global cursor gimmick
- no scroll hijacking

## Motion hierarchy

### 1. Structural motion
Used for:
- hero assembly
- project scene transitions
- sticky/pinned sections
- full-viewport color and spatial shifts
- section-to-section rhythm

### 2. Responsive motion
Used for:
- project hover
- image reveal/follow
- pointer-driven crop/position
- navigation feedback

### 3. Atmospheric motion
Used sparingly for:
- subtle image drift
- grain/noise
- light parallax
- background type movement

## Visual QA requirement

For every pass:
- 1440px desktop full-page capture
- 390px mobile full-page capture
- section captures
- compare against the page brief and named reference behaviors
- document exact deltas before coding the next pass

A page is not "done" because it builds.
A page is done when the rendered experience is visually closed.
