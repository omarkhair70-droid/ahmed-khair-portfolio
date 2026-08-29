# Work Index Closure Log — H7

Status: **H7 CLOSED**
Scope: Home / Work Index interaction layer.

H6 static composition remains the fallback and still works with interaction disabled.

## Reference role

The interaction layer follows the benchmark principles already locked for:
- D Alcausin: Selected Work becomes an interactive interface without turning the page into a toy.
- Ali Ali / Exo Ape: project imagery is physically tied to the selected title and pointer movement.
- O'shane Howard: mobile/touch must have its own exploration behavior rather than depending on hover.

No reference interaction was copied literally.

## Desktop interaction

Closed behavior:
- hovering a project reveals its real selected image near the pointer.
- preview position is constrained to the viewport.
- first-row preview no longer covers the Work Index header.
- preview follows pointer movement with controlled inertia.
- subtle rotation reacts to horizontal pointer position.
- image swap uses a short scale / opacity transition.
- selected row remains full emphasis.
- sibling rows reduce to 32% emphasis rather than disappearing.
- title, kind and arrow respond as one interaction state.
- custom VIEW cursor appears only over actionable project rows.
- click uses Lenis for a controlled transition into the matching project scene.

The preview remains subordinate to project typography and does not replace the index.

## Mobile / touch interaction

Closed behavior:
- no hover dependency.
- the row nearest the reading focus becomes active through ScrollTrigger.
- the project image reveals as a masked atmosphere on the right side of that row.
- cream gradient preserves title legibility.
- title remains above imagery.
- project type and arrow remain readable.
- press state gives immediate touch feedback.
- tap still opens the project scene.
- motion does not change the static information architecture.

Validated independently at:
- 390 × 844
- 360 × 800

## Visual deltas found and fixed

1. First desktop preview was too large and invaded the header.
   - reduced preview size.
   - moved pointer-relative vertical placement lower.

2. Mobile thumbnail initially sat directly on top of the title.
   - discarded the thumbnail treatment.
   - rebuilt it as a masked row-level image field behind the typography.

3. Sibling-row dimming was too aggressive.
   - increased inactive emphasis from 24% to 32%.

4. 360px interaction needed explicit verification.
   - dedicated 360 interaction capture added and passed.

## QA evidence

Passed:
- TypeScript
- production Next.js build
- desktop static capture
- mobile 390 static capture
- mobile 360 static capture
- desktop motion capture
- mobile motion capture
- dedicated desktop hover capture for all four projects
- dedicated mobile active-state capture for all four projects at 390
- dedicated mobile active-state capture for all four projects at 360

Latest interaction implementation:
`fa82cc2fbff646c48ddbd8ced57ec3f3e90d1e0a`

Latest QA harness validation:
`7aa68c1c9f7589237d2d2862e44c1a55a380066f`

Next gate:
**H8 — BOCH Scene**

H8 starts from the strongest project and closes:
- static scene composition
- project typography
- hero/supporting image hierarchy
- scroll choreography
- Work Index -> BOCH entry
- BOCH -> Shamadan exit
- desktop/mobile visual QA

H7 can only reopen for a concrete regression or a stronger reference-backed improvement discovered during the final H14 Home integration pass.
