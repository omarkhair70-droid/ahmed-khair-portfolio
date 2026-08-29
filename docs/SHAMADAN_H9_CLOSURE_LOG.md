# El Shamadan — H9 Closure Log

Status: **CLOSED**

Branch: `portfolio/homepage-design-v2`  
PR: **#2 — Homepage design V2 — full motion art-direction pass**

## Scope closed

H9 was required to establish El Shamadan as the highest-energy campaign beat on Home while preserving artwork integrity and handing the page down into the quieter Criminal Anbr 6 pause.

Closed layers:

- reference re-check
- static composition
- typography
- image hierarchy / framing
- BOCH -> Shamadan entry continuity
- dedicated Shamadan motion choreography
- Shamadan -> Criminal exit boundary
- independent mobile composition
- desktop/mobile rendered QA
- reduced-motion compatibility
- regression coverage for earlier Home gates

## Reference roles used

- **Alexandre Rochet** — page-as-sequence / authored progression
- **O'shane Howard** — imagery occupying the interface
- **Diego Salas** — restraint around already-dense finished artwork

The result borrows behavioral principles only; it does not reproduce a reference layout.

## Final static composition

Selected assets stay deliberately unequal in scale and role:

1. `hero.webp` — dominant campaign lead
2. `premium-flatlay.webp` — wide dark/premium counter-beat
3. `light-splash.webp` — lighter interruption with strong negative space
4. `product-family.webp` — large dominant paired execution
5. `playful.webp` — smaller supporting paired execution

All five images remain uncropped as authored artwork:
- `height: auto`
- `object-fit: contain`

No fake strategy, client-result, or campaign-performance claims were introduced.

## Motion closure

Dedicated H9 choreography now excludes Shamadan from the generic scene animation system.

Motion language:
- quicker title settling than BOCH
- hero mask / scale reveal
- opposing image travel rates
- restrained rotation only where useful
- different-rate pair movement
- color/energy resolving into the near-black Criminal handoff

No endless parallax and no decorative effect layer was added.

## Final mobile delta and fix

Final focused QA exposed one real mobile issue:

The line:

`Selected campaign visuals for El Shamadan.`

could remain visible while the Shamadan header exited and visually collide with the fixed global navigation.

Fix:
- on <=700px only, the Shamadan header copy now fades/moves out during the header exit before reaching the fixed nav safe zone.

Final fix commit:

`87151b3680ba80e0da82001fc1191fd470b28128`
— `fix: clear mobile Shamadan copy before fixed nav h9`

The final 390 and 360 focused captures confirm the overlap is gone.

## Final CI / QA evidence

Final validated workflow:

- Workflow: `Portfolio CI`
- Run: `33249429748`
- Result: **SUCCESS**
- Head: `87151b3680ba80e0da82001fc1191fd470b28128`

Passed in the same run:

- Typecheck
- Build
- desktop/mobile visual capture
- desktop/mobile motion QA
- H7 Work Index interaction regression
- H8 BOCH focused regression
- H9 Shamadan focused QA
- all artifact uploads

Focused H9 artifact:

- Name: `homepage-shamadan-h9`
- Artifact ID: `9713916077`
- Digest: `sha256:ba2b5d1895d1544e133519d099d76df2f540658fcd110bb6c03d10f2270cc5bc`

Validated viewports:

- Desktop 1440 x 900
- Desktop 1280 x 900
- Mobile 390 x 844
- Mobile 360 x 800

Focused metrics confirm:

- no horizontal overflow at any validated viewport
- BOCH bottom joins Shamadan top directly
- Shamadan bottom joins Criminal top directly (390 capture differs by 1 px due layout rounding)
- exactly five Shamadan frames are present
- all five source assets report 1080 x 1080 natural dimensions and remain contain-framed

## Visual closure result

H9 now reads as:
- distinctly warmer and more energetic than BOCH
- authored sequence rather than equal-card gallery
- strong campaign imagery first
- controlled typographic support
- independent mobile composition
- clean fade of energy into the Criminal pause

No major visual delta remains for H9.

# H9 CLOSED

Next gate:

**H10 — CRIMINAL ANBR 6 SCENE**

Do not merge PR #2 yet. Home remains open until H14 passes.
