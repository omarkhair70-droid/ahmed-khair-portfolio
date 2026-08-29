# BOCH H8 CLOSURE LOG

Status: **H8 — BOCH SCENE CLOSED**

Date: 2026-08-29

Branch:
`portfolio/homepage-design-v2`

PR:
#2 — Homepage design V2 — full motion art-direction pass

Do not merge PR #2 yet. H9–H14 remain.

## 1. Gate scope

H8 closes the homepage BOCH Motor scene only:

- Work Index -> BOCH entry boundary
- BOCH static editorial composition
- BOCH typography
- full artwork framing
- hero/supporting-image hierarchy
- BOCH-specific scroll choreography
- BOCH -> El Shamadan exit boundary
- desktop 1440 / 1280
- mobile 390 / 360
- reduced-motion/static composition
- H7 interaction regression
- focused H8 motion/overflow QA

No H9 scene redesign was started.

## 2. Reference re-check

Reference roles used:

### Ali Ali / Alitwotimes
Used for:
- dramatic first-project presentation
- work occupying the interface
- minimal UI around commercial imagery
- authored transition rather than a generic section cut

### Diego Salas
Used for:
- restraint around dense finished artwork
- avoiding UI effects that compete with the campaign
- preserving the original advertising compositions

### Alexandre Rochet
Used only for:
- continuous scene choreography
- layered 2D movement where it improves pacing

No PixiJS / Three.js / WebGL dependency was introduced.
The approved design target did not require canvas rendering for H8.

## 3. Static composition closed

The previous generic scene/floating-card arrangement was replaced by an authored three-part BOCH sequence:

1. **Proof frame**
   - BOCH / MOTOR establishes the project.
   - hero campaign artwork becomes the dominant visual.
   - quiet factual metadata stays secondary.

2. **Cinematic interruption**
   - `cinematic.webp` enters at a different scale and alignment.
   - large negative space separates it from the first image.

3. **Controlled editorial pair**
   - `context.webp` remains dominant.
   - `support.webp` is deliberately smaller and offset.
   - the pair is asymmetric rather than a generic two-column gallery.

The scene remains legible and intentionally composed with motion disabled.

## 4. Typography closed

BOCH typography now uses:
- a restrained metadata line
- large BOCH / MOTOR display hierarchy
- concise project copy
- small frame captions

No text is placed over the critical product area of the campaign artwork.
No unverified role, strategy, result, or client claim was added.

## 5. Image framing closed

All four approved BOCH assets are used and only those four:

- `/images/boch/hero.webp`
- `/images/boch/cinematic.webp`
- `/images/boch/context.webp`
- `/images/boch/support.webp`

The H8 frame system preserves the original square compositions using contained full-image presentation.

Focused QA confirmed all four source assets load at:
- natural size: 1400 x 1400

No important campaign typography, product detail, QR block, logo, or footer strip is intentionally cropped by the site composition.

## 6. Work Index -> BOCH entry closed

The Work Index paper field no longer hard-cuts directly into a generic black project section.

H8 begins with a controlled paper-to-dark tonal handoff:
- cream continuation
- measured grayscale descent
- thin structural line
- minimal project cue
- BOCH identity establishes only after the transition settles

A literal shared-element clone was not added because it did not materially improve the already-established Work Index interaction and would duplicate artwork without adding clarity.

## 7. BOCH motion closed

BOCH is removed from the generic shared-scene animation loop and has dedicated GSAP / ScrollTrigger choreography.

Closed motion behavior:
- entry line establishes structure
- metadata and copy reveal after the boundary begins settling
- title lines reveal through controlled masks
- hero frame opens through clip/scale movement
- hero artwork gets only a subtle scale correction
- cinematic frame enters with structural vertical movement
- contextual/supporting frames travel at different restrained rates
- motion remains subordinate to the artwork

No endless parallax, decorative 3D, random shader, or pointer dependency was introduced.

## 8. BOCH -> Shamadan exit closed

The exit changes the visual temperature from:
**mechanical / black / controlled**
to
**warm / chocolate-orange / energetic**

The first H8 QA pass exposed one real delta:
- the exit used an oversized `EL SHAMADAN` title
- at 390 / 360 it visually duplicated the existing H9 title immediately below

Fix:
- H8's `EL SHAMADAN` was reduced to a restrained next-project cue
- the full title remains the responsibility of H9
- the warm wash still establishes the tonal transition

This closes H8's exit boundary without prematurely designing H9.

## 9. Responsive closure

Validated:
- Desktop 1440 x 900
- Desktop 1280 x 900
- Mobile 390 x 844
- Mobile 360 x 800

Focused H8 metrics confirm:
- no horizontal overflow at any target viewport
- BOCH begins exactly after the Work Index
- Shamadan begins exactly after the BOCH section
- all four images retain their full square source composition

Mobile is an independent composition:
- no hover/pointer dependency
- title scale is reduced intentionally
- primary frame uses near-full width
- cinematic/context/support frames step down in scale
- copy reflows independently
- exit cue stays subordinate to the following project scene

## 10. Reduced motion / static closure

The BOCH-specific motion targets are included in the reduced-motion reset:
- entry line
- title lines
- image frames
- frame images
- act copy
- exit wash
- exit copy

Reduced-motion visual captures retain the intended static hierarchy and full image framing.

## 11. H7 regression

The existing Work Index H7 interaction QA was rerun after H8 implementation.

Result:
**PASS**

H1–H7 were not reopened or redesigned.

## 12. Implementation / QA commits

H8 structure:
`8a77928c70849b5fee0bf8c766cd38570bec5de4`

H8 responsive/static composition:
`76ab19ea3a6839d8f0038e43993ef6307f90716b`

1280 visual QA addition:
`2c01ad66cda9340d1f913b430ccb79a7e7324685`

Focused H8 QA harness:
`45819ff1d3b2a487ad935187b03a911f3d023270`

CI H8 artifact integration:
`1889c99a365b6481ca480fbb2f1585b507b9d34b`

Final Shamadan-boundary delta fix:
`e2adfff94005172a2e0e10b1268097ee88662311`

## 13. Final validated code CI

Workflow:
**Portfolio CI**

Run:
`33248476947`

Head:
`e2adfff94005172a2e0e10b1268097ee88662311`

Conclusion:
**SUCCESS**

Passing gates include:
- install
- typecheck
- production build
- desktop/mobile visual captures
- desktop/mobile motion captures
- H7 interaction regression
- H8 focused QA
- screenshot/motion/interaction/H8 artifact upload

Focused H8 artifact:
`homepage-boch-h8`

Artifact digest:
`sha256:eedae0fb8d32ce209699e7457e3fe7b57f72939f6f4b52014dc7a146cadd8acc`

## 14. H8 final decision

**H8 — BOCH SCENE CLOSED ✅**

Do not casually reopen H8.

It may reopen only for:
- a concrete visual regression
- responsive/accessibility defect
- stronger reference-backed improvement discovered during H14 integration

Next gate:
**H9 — EL SHAMADAN SCENE**

Do not merge PR #2.
