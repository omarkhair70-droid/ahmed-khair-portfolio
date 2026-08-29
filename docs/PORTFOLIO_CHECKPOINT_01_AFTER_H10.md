# Portfolio Checkpoint 01 — After H10

Status: **REFERENCE / VISUAL CHECKPOINT BEFORE H11**

Branch: `portfolio/homepage-design-v2`  
PR: **#2 — Homepage design V2 — full motion art-direction pass**

This checkpoint deliberately pauses implementation after the H10 Criminal Anbr 6 build.

It is not a redesign brief.  
It is a visual comparison against the original locked reference set and the actual rendered Home after H10.

## Evidence reviewed

Actual production-build captures from CI run `33249981028`:

- Desktop 1440 full page + section captures
- Desktop 1280 full page + section captures
- Mobile 390 full page + section captures
- Mobile 360 full page + section captures
- Desktop motion checkpoints
- Mobile motion checkpoints
- Focused H8 BOCH QA
- Focused H9 Shamadan QA
- Focused H10 Criminal QA

Reference set re-checked again:

- Ali Ali / Alitwotimes
- D Alcausin
- Alexandre Rochet
- O'shane Howard
- Diego Salas

This is the third explicit reference pass in the project.

---

# 1. WHERE THE CURRENT HOME ALREADY REACHES THE REFERENCE INTENT

## A. Work-first hierarchy — strong

The Home now behaves like a selected-work portfolio rather than a generic designer landing page.

Evidence:
- identity establishes quickly
- Work Index arrives early
- four projects stay central
- navigation remains minimal
- artwork occupies the majority of visual attention

Reference alignment:
- Ali Ali: work-first / Selected Work central
- D Alcausin: concise Selected Work hierarchy
- Diego Salas: interface remains restrained around the work

Verdict: **benchmark intent reached**

## B. Work Index interaction — strong

Desktop:
- image follows/appears as part of the project list interaction
- project row remains the interface
- no giant decorative cursor system outside the interaction

Mobile:
- separate touch/scroll behavior
- no hover dependency

Reference alignment:
- D Alcausin
- Ali Ali
- O'shane Howard

Verdict: **benchmark intent reached**

## C. BOCH art direction — strong

The old floating-card/gallery feel is gone.

Current scene:
- work has unequal scale
- dark field supports the artwork
- hero / cinematic / paired executions have distinct roles
- no destructive artwork crop
- the site disappears when the artwork needs to lead

Reference alignment:
- Ali Ali for dramatic commercial presentation
- Diego Salas for restraint

Verdict: **strongest mature scene currently on Home**

## D. Shamadan energy shift — strong

The campaign has its own colour chapter and does not reuse BOCH's pacing.

Current scene:
- clear warm/orange identity
- five images have different hierarchy
- premium / light / paired beats create variation
- transition into Criminal drains colour rather than adding a gimmick

Reference alignment:
- Alexandre Rochet for authored sequencing
- O'shane for imagery taking over the interface
- Diego Salas for avoiding effects over dense artwork

Verdict: **benchmark intent reached**

## E. Criminal interruption — strong

H10 now performs the role specified by the original brief:

- near-black / charcoal
- vertical hero poster preserved
- large negative space
- title is separated from the artwork
- alternate poster is clearly subordinate
- motion is deliberately quieter
- exit begins warming toward Coffee

Reference alignment:
- Alexandre Rochet for pacing contrast
- Diego Salas for restraint

Verdict: **benchmark intent reached**

---

# 2. WHERE THE CURRENT HOME IS STILL LESS MATURE

## Delta 01 — The full-page rhythm still exposes section boundaries in long stretches

Individually, BOCH, Shamadan and Criminal are authored scenes.

When the full Home is viewed as one vertical object, however, some long dark / colour fields still read as:
“scene -> scene -> scene”

rather than one continuous film.

The biggest places to watch:
- BOCH mid-sequence dead space
- the distance between some Shamadan campaign beats
- the amount of empty travel before/after certain image moments

This is not a reason to reopen H8/H9 now.

Classification:
**H14 GLOBAL INTEGRATION DELTA**

Target:
compress / retime only where the full-page flow feels like stacked chapters.

Do not destroy the negative space that gives the work confidence.

## Delta 02 — The typography system is coherent, but not fully personal yet

The condensed display face + tiny uppercase metadata create a consistent system.

Strength:
- recognisable across Hero / Work / scenes

Risk:
- before the human layer is finished, it can still read as a sophisticated “award-portfolio language” rather than unmistakably Ahmed.

This is expected before H12.

Classification:
**H12 + H14 IDENTITY DELTA**

Target:
let Ahmed's human moment / copy / portrait create authorship.
Do not solve this by adding another font or random effects.

## Delta 03 — Some microcopy is visually too quiet on small mobile frames

The mobile composition is genuinely independent, but the smallest labels are close to the lower edge of comfortable readability.

Classification:
**H14 ACCESSIBILITY / TYPOGRAPHY DELTA**

Target:
audit the smallest recurring labels at 390 and 360 once the entire Home is assembled.

Do not enlarge everything globally.

## Delta 04 — The current Coffee / About / Contact visible after Criminal are NOT benchmark evidence yet

They still exist technically because the original V2 prototype contained downstream sections.

They have not passed their final gates.

Therefore:
- current Coffee is not H11
- current About is not H12
- current Contact is not H13

They must not be used to judge final Home quality.

Classification:
**EXPECTED OPEN WORK**

---

# 3. WHERE MOTION MAY BE TOO MUCH

No broad “too much animation” problem was found in the current checkpoint.

Motion hierarchy is currently distinguishable:

- Hero: identity / media choreography
- Work Index: interaction
- BOCH: controlled structural movement
- Shamadan: highest energy
- Criminal: slowest / quietest

One watch item remains:

## Motion Watch 01 — cumulative scroll duration

Because BOCH + Shamadan each have multiple scroll-linked beats, the issue is not individual animation intensity.

The possible issue is cumulative travel time.

Classification:
**H14 RHYTHM WATCH**

During full integration:
- review how long the user travels before a new visual fact appears
- remove empty scroll time, not useful negative space
- do not speed every animation just to make the page shorter

---

# 4. WHERE THE IMAGES ARE / ARE NOT GETTING THEIR FULL VALUE

## BOCH
Hero: strong.
Cinematic: strong.
Context: strong.
Support: weaker asset, correctly subordinate.

No change required now.

## Shamadan
Hero: strongest colour hit.
Premium flat-lay: strong counter-beat.
Light splash: visually weaker than hero/premium, but the cream interruption gives it a useful structural role.
Product family: strong.
Playful: weaker/supporting, correctly smaller.

No asset replacement required.

## Criminal
Hero: clearly dominant.
Alternate: weaker treatment, correctly subordinate.

No asset replacement required.

## Coffee
Do not judge the current treatment.
H11 must rebuild it around exactly two assets without padding.

---

# 5. DOES THE HOME FEEL LIKE A FILM YET?

Answer:

**In individual transitions: yes.**
**As a complete Home from top to bottom: not fully yet.**

The sequence already has cinematic contrast:

Identity
-> paper Work Index
-> BOCH controlled industrial darkness
-> Shamadan colour / energy
-> Criminal near-black silence
-> warm handoff toward Coffee

That is a directed sequence, not a gallery.

What prevents a final “film” verdict today:
- H11 / H12 / H13 are still unfinished
- global pacing has not had H14 integration
- a few long vertical travel zones still expose the underlying section structure

Verdict:
**the film language exists; the complete film is not closed yet.**

---

# 6. DOES THE IDENTITY BELONG TO AHMED YET?

Answer:

**Mostly through the work curation and sequence, not completely through the person yet.**

Ahmed-specific already:
- the exact four-project selection
- BOCH -> Shamadan -> Criminal contrast
- project artwork drives the palette
- no generic capability-card grid
- no fake agency language

Still reference-synthesis-heavy:
- display typography grammar
- micro-label grammar
- cinematic transition language

This is not a failure.
Those were intentionally built from the reference synthesis.

H12 is the gate that must make the portfolio feel undeniably human and Ahmed-specific.

Do not add decorative branding before H12.

---

# 7. THIRD REFERENCE PASS — CURRENT CONCLUSIONS

## Ali Ali / Alitwotimes

Still supports:
- work-first hierarchy
- minimal navigation
- selected work as the centre of the site
- project presentation with confidence

Current Ahmed delta:
Ahmed explains slightly more and uses more visible transition scaffolding.
Ali can often afford to say less.

Rule retained:
**reduce explanation whenever the image already says it.**

## D Alcausin

Still supports:
- Selected Work as interface
- concise hierarchy
- strong human About layer
- direct route to conversation

Current Ahmed delta:
Work interaction is already aligned.
Human identity is not comparable yet because H12 is unfinished.

Rule retained:
**H12 must add a person, not a résumé block.**

## Alexandre Rochet

Still supports:
- page-as-experience
- authored transitions
- motion as structure
- unusual interaction only when understandable

Current Ahmed delta:
individual scene transitions are authored, but the entire page still exposes some chapter boundaries.

Rule retained:
**H14 must judge the whole page, not sections in isolation.**

## O'shane Howard

Still supports:
- image-first exploration
- touch/mobile has its own behavior
- direct manipulation / imagery as interface

Current Ahmed delta:
mobile Work Index already has independent behavior.
No evidence says Ahmed needs drag/pan everywhere.

Rule retained:
**do not add direct manipulation where the work does not need it.**

## Diego Salas

Still supports:
- strong work can carry a simple interface
- UI should disappear
- do not damage dense artwork with effects

Current Ahmed alignment:
BOCH and Criminal currently match this principle well.

Rule retained:
**restraint remains a feature, not a lack of ambition.**

---

# 8. EXACT DELTAS LOCKED BEFORE H11

Do not redesign H1-H10.

Queue these:

1. **H11:** rebuild Coffee as an intentionally compact two-image warm reset.
2. **H12:** use Ahmed portrait + truthful human copy to make the identity personal.
3. **H13:** finish with a real end-title / contact frame, not a normal footer.
4. **H14:** full-page pacing pass; specifically test cumulative scroll distance.
5. **H14:** re-check smallest recurring mobile microcopy at 390 / 360.
6. **H14:** remove explanatory copy where imagery already carries the meaning.
7. **H14:** compare full desktop and mobile sequences again against all five primary references.
8. **H14:** only reopen H1-H10 for a concrete global integration delta.

No new visual library is justified by this checkpoint.
No PixiJS / Three.js / WebGL addition is justified by this checkpoint.
No new project/page is justified by this checkpoint.

---

# CHECKPOINT VERDICT

The current Home is no longer a generic portfolio prototype.

The strongest evidence is:
- Hero -> Work transition
- Work Index interaction
- BOCH
- Shamadan
- Criminal

The main remaining maturity gap is not “more effects.”

It is:
**finish the last three acts, then tighten the complete film in H14.**

Next implementation gate after this checkpoint:

**H11 — ABD ALLAL COFFEE**

Do not start H11 until this checkpoint is accepted as the current visual baseline.
