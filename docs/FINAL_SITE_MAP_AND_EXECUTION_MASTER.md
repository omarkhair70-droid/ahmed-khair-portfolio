# Ahmed Khair Portfolio — FINAL Site Map & Execution Master

Status: HISTORICAL EXECUTION MASTER — V1 CLOSURE OVERRIDDEN
The implementation history and gate structure below are retained for auditability.

For the final V1 public architecture and closure decision, use:
`docs/FINAL_PORTFOLIO_CLOSURE_2026-08-29.md`.

That closure supersedes the earlier assumption that every selected Home project must receive a dedicated route.

---

# 1. FINAL PUBLIC SITE MAP

The original plan proposed **6 public pages**.

**Final V1 closure uses 2 public pages:**
- Home `/`
- About `/about`

BOCH, El Shamadan, Criminal Anbr 6 and Abd Allal Coffee are complete authored work chapters inside Home. Dedicated project routes are deferred options, not V1 requirements, because the current Home already presents the complete selected asset set.

## Page 1 — Home
Route: `/`

Home is the main experience and also the selected-work index.
It contains:
- Opening / Identity Hero
- Interactive Selected Work index
- BOCH featured scene
- El Shamadan featured scene
- Criminal Anbr 6 featured scene
- Abd Allal Coffee featured scene
- About / Human Moment teaser
- Contact / Closing Frame

Important:
- **Work is NOT a standalone V1 page.**
- The navigation label "Work" points to `/#work`.
- This avoids duplicating the same four projects in a separate gallery page.

## Page 2 — About
Route: `/about`

Dedicated human/profile page.
It expands the small About moment on Home.

Content:
- Ahmed Khair
- approved portrait/cutout
- short positioning
- selected capability list
- compact process / craft
- personal / human detail if real material is available
- contact links

## Historical Page 3 — BOCH Motor
Proposed route: `/work/boch-motor`

**DEFERRED / NOT REQUIRED FOR V1.**
Home already presents all four selected BOCH visuals as an authored campaign chapter. A future route should exist only if Ahmed gains new project-specific evidence or media that adds value beyond Home.

## Historical Page 4 — El Shamadan
Proposed route: `/work/el-shamadan`

**DEFERRED / NOT REQUIRED FOR V1.**
Home already consolidates the selected Shamadan campaign into one five-visual authored sequence. A future route should add new evidence, not repeat the same five images.

## Historical Page 5 — Abd Allal Coffee
Proposed route: `/work/abd-allal-coffee`

**DEFERRED / NOT REQUIRED FOR V1.**
Only two selected visuals exist and Home already gives them a compact dedicated chapter. A separate route would currently duplicate evidence.

## Historical Page 6 — Criminal Anbr 6
Proposed route: `/work/criminal-anbr-6`

**DEFERRED / NOT REQUIRED FOR V1.**
Home already presents both selected posters and correctly frames the work as a Film Poster Study. A future route should add material rather than create artificial case-study depth.

---

# 2. FINAL NAVIGATION

Global navigation:

- Ahmed Khair / AK -> Home
- Work -> `/#work`
- About -> `/about`
- Contact -> `/#contact`

When inside a project page:
- Home
- Work -> `/#work`
- About
- Contact
- Next Project / Previous Project can appear contextually

No standalone `/work` page in V1.

Reason:
Ahmed only has four public V1 projects. A separate Work index would duplicate Home and weaken the curated, film-like experience.

---

# 3. HOW THE REFERENCE PORTFOLIOS INFORM THE ARCHITECTURE

## Ali Ali / Exo Ape
Observed structure:
- Bio / Work / Contact hierarchy
- Selected Work is central
- project imagery becomes interface
- strong title/image transition language

What we use:
- work-first homepage
- cinematic transition into projects
- pointer-aware project interactions
- minimal navigation

## D Alcausin
Observed hierarchy:
- Selected Work
- About
- Let's Talk
- concise, personality-led presentation

What we use:
- About as a strong human beat
- one playful image-follow interaction
- no unnecessary pages

## O'shane Howard
Observed:
- imagery dominates
- scroll/tap to explore
- pan / direct manipulation language
- category-led work exploration

What we use:
- work as experience, not cards
- touch behavior must be designed, not hover fallback

## Alexandre Rochet
Observed:
- cinematic page-as-experience
- unusual navigation
- motion is structural
- GSAP / PixiJS-era implementation language

What we use:
- authored transitions
- layered 2D movement
- continuous scene feeling

## Diego Salas
Observed:
- simple site around dense work
- imagery is allowed to lead

What we use:
- restraint
- no effects competing with Ahmed's artwork

Reference conclusion:
**The benchmark set does not justify adding more pages. It justifies making fewer pages much better.**

---

# 4. FINAL TECHNOLOGY STACK

Base:
- Next.js
- React
- TypeScript

Motion:
- GSAP
- ScrollTrigger
- Lenis

Visual / interaction technology:
- CSS remains the default for layout, typography, masks and responsive composition.
- PixiJS, Three.js, WebGL, shaders, canvas, WebGPU, image processing, custom renderers, or any other library/technique are all allowed when a specific approved visual or interaction requires them.
- We do not reject a technology because it is "too advanced", and we do not add one merely to decorate the stack.
- Technology is chosen after the visual target is clear.
- If a reference behavior needs investigation, inspect how it is built and use the appropriate tool/library or build our own equivalent.
- Smooth scrolling, transitions, cursor systems, direct manipulation, drag/pan, shared-element-like page transitions and other interaction patterns are all valid when they serve the design.
- Mobile receives its own interaction model where pointer behavior does not translate.

Principle:
**No artificial V1/V2 technology ceiling. This is a portfolio for a real person and should be built with the level of craft required by the final design.**

---

# 5. HISTORICAL EXECUTION ORDER

The Home and About gates below were completed. The project-page gate lists that follow are retained as historical planning only and are not required by the final V1 closure.

## PAGE 1 — HOME

### H1 Hero Static Composition
Desktop and mobile separately.

### H2 Hero Typography
Scale, spacing, edge behavior, line breaks, hierarchy.

### H3 Hero Typography Motion
Opening 0–3 seconds and first-scroll behavior.

### H4 Hero Media Motion
BOCH image arrival, mask, scale, pointer behavior if justified.

### H5 Hero Exit Transition
Identity hands off into Work Index continuously.

### H6 Work Index Static
List hierarchy and spacing.

### H7 Work Index Interaction
Image follow, pointer state, touch/mobile equivalent.

### H8 BOCH Scene
Static -> typography -> imagery -> motion -> entry/exit.

### H9 Shamadan Scene
Static -> typography -> imagery -> motion -> entry/exit.

### H10 Criminal Anbr 6 Scene
Static -> negative space -> poster framing -> minimal motion.

### H11 Abd Allal Coffee Scene
Static -> warm palette -> two-image composition -> compact motion.

### H12 About Human Moment
Portrait, type, copy, one personal interaction maximum.

### H13 Contact Closing Frame
End-title feeling, links, final motion, mobile fit.

### H14 Homepage Integration Pass
- typography continuity
- spacing/rhythm
- image crop consistency
- colour progression
- transition continuity
- motion continuity
- cursor/touch logic
- desktop
- mobile
- reduced motion
- performance
- accessibility

HOME CLOSED only after H14 passes.

---

## PAGE 2 — ABOUT

A1 Reference re-check
A2 Page brief
A3 Static desktop composition
A4 Static mobile composition
A5 Typography
A6 Portrait / personal visual layer
A7 Process/capabilities layer
A8 Motion
A9 Navigation transitions
A10 Desktop + mobile visual QA
A11 Final delta pass
ABOUT CLOSED

---

## PAGE 3 — BOCH CASE STUDY

B1 Reference re-check
B2 Project-specific brief
B3 Hero
B4 Main visual sequence
B5 Supporting visual sequence
B6 Typography / metadata
B7 Motion
B8 Home-to-project continuity
B9 Mobile
B10 Visual QA
BOCH CLOSED

---

## PAGE 4 — EL SHAMADAN CASE STUDY

S1 Reference re-check
S2 Project-specific brief
S3 Hero
S4 Multi-image campaign rhythm
S5 Colour system
S6 Typography
S7 Motion
S8 Home-to-project continuity
S9 Mobile
S10 Visual QA
SHAMADAN CLOSED

---

## PAGE 5 — ABD ALLAL COFFEE

C1 Brief
C2 Hero image
C3 Supporting image
C4 Typography / metadata
C5 Compact motion
C6 Mobile
C7 Visual QA
COFFEE CLOSED

---

## PAGE 6 — CRIMINAL ANBR 6

P1 Brief
P2 Poster hero
P3 Alternate poster
P4 Negative-space composition
P5 Minimal typography
P6 Slow motion
P7 Mobile
P8 Visual QA
CRIMINAL CLOSED

---

# 6. LAYER LOOP FOR EVERY SECTION / PAGE

Every unit uses the exact same loop:

1. Re-open brief
2. Re-open relevant references
3. Static composition
4. Typography
5. Image crop/framing
6. Interaction
7. Motion
8. Transition in/out
9. Mobile composition
10. Render desktop
11. Render mobile
12. Capture motion
13. Compare visually
14. Write deltas
15. Fix deltas
16. Close gate

No next layer starts because "the build passes".
It starts because the current layer passes visually.

---

# 7. REQUIRED VISUAL QA

For every page:
- Desktop 1440 full-page
- Desktop section captures
- Mobile 390 full-page
- Mobile section captures
- 360px sanity check
- motion capture / checkpoints
- reference comparison notes
- brief comparison notes
- exact open deltas
- closed/open status

Review must be done visually, not from DOM/code only.

---

# 8. FINAL ASSET SET

Public V1 projects:
- BOCH Motor
- El Shamadan
- Abd Allal Coffee
- Criminal Anbr 6

Ahmed:
- approved cutout portrait

Dropped from V1:
- Rails
- Fiber Cable
- Watches
- Cosmetics
- Marketing Agency entries
- Ice Cream
- weak/typo Shamadan biscuit execution
- CV/certificates from Work (About only if useful)

No dropped project returns without a new explicit decision.

---

# 9. FINAL V1 STATE

Home H1–H14: **CLOSED**  
About A1–A11: **CLOSED**

About was merged to `main` in PR #3.

The final V1 architecture is:
- Home `/`
- About `/about`
- Work `/#work`
- Contact `/#contact`
- BOCH / Shamadan / Criminal / Coffee as authored Home chapters

No project route is required to close V1.

---

# 10. MERGE RULE

No page is merged to the final branch because:
- it compiles
- it is responsive enough
- it looks okay
- it has animation

A page merges only after:
- desktop visual closure
- mobile visual closure
- motion closure
- reference delta review
- brief delta review
- no major open visual issue

---

# FINAL V1 COUNT

**2 public pages total**

1. Home
2. About

Inside Home:
- Work Index
- BOCH Motor chapter
- El Shamadan chapter
- Criminal Anbr 6 chapter
- Abd Allal Coffee chapter
- Human moment
- Contact closing frame

Dedicated work routes remain optional future expansion only when new evidence justifies them.

For the final benchmark and closure rationale, see:
`docs/FINAL_PORTFOLIO_CLOSURE_2026-08-29.md`.
