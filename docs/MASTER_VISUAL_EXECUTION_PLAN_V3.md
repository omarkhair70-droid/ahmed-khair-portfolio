# Ahmed Khair Portfolio — Master Visual Execution Plan V3

Status: LOCKED WORKFLOW
Scope: finish the portfolio without repeatedly rewriting the plan.

The portfolio is built **page by page**, and every page is built **layer by layer**.
No next page starts until the current page is visually closed on desktop and mobile.

---

## Global loop used for every page / section

For every unit of work:

1. Re-open the relevant brief.
2. Re-check the named reference behavior visually.
3. Lock the static composition first.
4. Lock typography.
5. Lock image framing/crops.
6. Add interaction.
7. Add motion choreography.
8. Add transition in/out.
9. Build mobile as its own composition, not a scaled desktop version.
10. Capture real rendered desktop + mobile.
11. Capture motion checkpoints/video.
12. Compare against:
   - brief
   - reference behavior
   - previous approved layer
13. Write exact deltas.
14. Fix only those deltas.
15. Repeat until the unit is CLOSED.

Build success is not visual completion.

---

# PAGE 1 — HOME

## H0 — Baseline / current V2 audit

Current V2 is a working motion study, not final.

Known hero deltas:
- Desktop: KHAIR is cropped too aggressively on the right and the image/text overlap reads accidental.
- Desktop: BOCH image interrupts the name before the typographic composition has earned the interruption.
- Mobile: AHMED/KHAIR collision is too dense; it reads like broken overlap rather than controlled choreography.
- Mobile: BOCH image sits behind/inside KHAIR at an awkward point and competes with the name.
- Mobile: micro labels are too small relative to the first-screen composition.
- First fold needs clearer sequencing: identity -> tension -> image arrival -> exit.

Do not polish downstream sections before Hero closure.

## H1 — Hero static composition

Desktop target:
- AHMED and KHAIR must read instantly as a designed lockup before any motion.
- Typography can touch/cross edges intentionally, but no accidental clipping.
- BOCH teaser must have a clear spatial relationship with the name.
- navigation, role, and bottom metadata must support hierarchy.
- first frame must work with animations disabled.

Mobile target:
- bespoke mobile title lockup.
- no desktop overlap copied down.
- image scale and title scale chosen together.
- minimum supporting copy size must remain readable.
- first screen must feel composed at 390x844 and narrow 360px widths.

Gate:
- static desktop hero approved.
- static mobile hero approved.

## H2 — Hero typography motion

Reference roles:
- Ali Ali: title/image tension and pointer-aware project language.
- Alexandre Rochet: cinematic sequencing and controlled spatial movement.

Build:
- entrance hierarchy for name.
- scroll-linked title separation / compression.
- no constant movement.
- no motion before the typography is legible.

Gate:
- opening 0-3s feels intentional.
- scroll 0-1 viewport feels continuous.

## H3 — Hero media motion

Build:
- BOCH image enters after identity is established.
- mask/clip reveal.
- controlled scale.
- pointer response only if it improves depth.
- image must never obscure essential title legibility by accident.

Gate:
- one coherent hero scene, not typography plus floating card.

## H4 — Hero exit / transition to Work Index

Build:
- hero typography and image hand off to selected-work section.
- remove hard "section cut" feeling.
- use continuity of image, type, line, or background value.

Gate:
- scrolling out of Hero feels like one authored transition.

## H5 — Work Index

Reference role:
- D Alcausin / Ali Ali: work list as interactive interface.

Layers:
- static list composition.
- typography.
- image-follow preview.
- cursor/action state.
- transition from row to project scene.
- touch/mobile alternative with no hover dependency.

Gate:
- desktop pointer interaction intentional.
- mobile interaction remains complete without cursor.

## H6 — BOCH scene

Layers:
- static editorial composition.
- title scale and placement.
- image crop/framing.
- supporting image hierarchy.
- scroll choreography.
- entry from Work Index.
- exit into Shamadan.

Reference role:
- Ali Ali for dramatic work presentation.
- Diego Salas for restraint around dense artwork.

Gate:
- BOCH is the strongest first case scene.
- artwork never gets visually damaged by the site.

## H7 — El Shamadan scene

Layers:
- static composition.
- warm/color identity.
- hero artwork.
- secondary image rhythm.
- layered scroll motion.
- transition from BOCH.
- transition into Criminal.

Reference role:
- Alexandre Rochet for page-as-sequence.
- O'shane for work occupying the interface.

Gate:
- clearly higher energy than BOCH without becoming chaotic.

## H8 — Criminal Anbr 6 scene

Layers:
- near-black transition.
- narrow poster presentation.
- negative space.
- minimal type.
- slow motion only.
- alternate poster subordinate.

Gate:
- strongest pacing interruption on Home.
- poster reads as Film Poster Study, not falsely as commissioned film work.

## H9 — Abd Allal Coffee scene

Layers:
- warm reset.
- exactly two selected images.
- image framing preserves artwork.
- compact motion.
- no fake expansion into a long case study.

Gate:
- feels intentional because it is short.

## H10 — About human moment

Reference role:
- D Alcausin for personality/human presence.

Layers:
- static composition with approved Ahmed cutout.
- typography.
- portrait depth/entry.
- one personal interaction maximum.
- truthful capability copy.

Gate:
- feels human, not like a corporate résumé block.

## H11 — Contact / end title

Layers:
- large closing typography.
- link hierarchy.
- final motion.
- back-to-top.
- mobile fit.

Gate:
- feels like an end frame, not a standard footer.

## H12 — Homepage integration pass

This is mandatory after all sections pass individually.

Passes:
1. Typography continuity
2. Spacing/rhythm
3. Color progression
4. Image crop consistency
5. Motion continuity
6. Transition continuity
7. Cursor/interaction logic
8. Desktop 1440 / 1280
9. Mobile 390 / 360
10. Reduced motion
11. Performance
12. Accessibility

Final comparison:
- compare against named reference behaviors, not superficial screenshots.
- list what reaches benchmark level.
- list remaining deltas.
- close only when no major visual delta remains.

HOME CLOSED -> only then begin Page 2.

---

# PAGE 2 — ABOUT

Do not design until Home is closed.

Layers:
- reference re-check
- page brief
- static composition
- personal image treatment
- typography
- background/secondary personal material if available
- motion
- mobile
- visual QA
- final closure

---

# PAGE 3 — BOCH CASE STUDY

Full case study.
Use only selected BOCH evidence.
Must get its own page-specific brief and reference check before implementation.

---

# PAGE 4 — EL SHAMADAN CASE STUDY

Consolidated project built from the three Behance Shamadan entries.
Must not expose weak/dropped assets.

---

# PAGE 5 — ABD ALLAL COFFEE

Compact case study.
Two images only.
No padding.

---

# PAGE 6 — CRIMINAL ANBR 6

Poster Study.
Explicitly framed as concept/study unless commissioned status is verified.

---

# Permanent QA evidence for every page

Every page must produce:
- desktop full screenshot
- mobile full screenshot
- section screenshots
- desktop motion capture
- mobile motion capture
- reference delta notes
- closed/open gate status

No page is merged because it "looks okay."
It is merged only after visual closure.
