# AHMED KHAIR PORTFOLIO — MASTER CONTINUATION

Date: 2026-08-29
Repository: `omarkhair70-droid/ahmed-khair-portfolio`
Active branch: `portfolio/homepage-design-v2`
Open PR: #2 — `Homepage design V2 — full motion art-direction pass`
H8 final code commit: `e2adfff94005172a2e0e10b1268097ee88662311`
H8 closure log commit: `d8d5455a933e58ee45204cb83ea4cb03cb7fabe3`
Latest validated H8 CI: SUCCESS — run `33248476947`
H7 closure commit: `fb136d50f300ff09d9b346279fd8df8235ce5900`
Base branch: `main`

This file is the continuation source for a new chat. Do not restart the project, redesign the site from scratch, or reopen already closed gates without a concrete regression or a stronger reference-backed reason.

==================================================
0. CORE PROJECT PRINCIPLE
==================================================

Treat this as if we are building the portfolio of one of the award-recognized designers/directors we researched.

Do NOT think:
- “This is only V1.”
- “Keep it simple now and make it great later.”
- “Next.js + GSAP is the final technology ceiling.”
- “Add libraries because award sites use them.”

Instead:

DESIGN TARGET FIRST -> choose the technology needed to realize it.

Current base:
- Next.js
- React
- TypeScript

Current motion:
- GSAP
- ScrollTrigger
- Lenis

CSS remains responsible for:
- grid
- typography
- responsive composition
- masks
- static visual composition

But the stack is open.

PixiJS / Three.js / WebGL / shaders / canvas / WebGPU / custom renderers / image processing / page-transition systems / any other appropriate library are allowed IF a specific approved visual or interaction needs them.

No technology is forbidden because it is “advanced.”
No technology is added because it sounds impressive.

The portfolio is for a real human, not a demo of libraries.

==================================================
1. FINAL SITE MAP — LOCKED
==================================================

Final public V1 has 6 real pages:

1. `/`
   HOME
   - Hero / identity
   - Selected Work index
   - BOCH featured scene
   - El Shamadan featured scene
   - Criminal Anbr 6 featured scene
   - Abd Allal Coffee featured scene
   - About / human moment
   - Contact / closing frame

2. `/about`
   ABOUT
   - dedicated personal/profile page

3. `/work/boch-motor`
   BOCH MOTOR
   - full case study

4. `/work/el-shamadan`
   EL SHAMADAN
   - full consolidated case study

5. `/work/abd-allal-coffee`
   ABD ALLAL COFFEE
   - compact case study

6. `/work/criminal-anbr-6`
   CRIMINAL ANBR 6
   - Film Poster Study

Important:
- There is NO standalone `/work` page in V1.
- “Work” in global nav points to `/#work`.
- Contact is NOT a separate page.
- Home itself is the Selected Work index.

Reason:
Only four public V1 projects are selected. A separate Work page would duplicate Home and weaken the curated, film-like experience.

Source of truth:
`docs/FINAL_SITE_MAP_AND_EXECUTION_MASTER.md`

==================================================
2. FINAL PUBLIC PROJECT SELECTION — LOCKED
==================================================

Public V1 projects:

A. BOCH Motor
Role:
- Featured Campaign
- Homepage
- Full case study
- Strongest complete project

Selected assets:
- `public/images/boch/hero.webp`
- `public/images/boch/cinematic.webp`
- `public/images/boch/context.webp`
- `public/images/boch/support.webp`

B. El Shamadan
Role:
- Homepage
- Full consolidated case study

This merges 3 historical Behance entries into ONE authored project:
- posters design for Shamadan
- campaign for Shamadan
- biscuit chocolate Shamadan

Selected assets:
- `public/images/shamadan/hero.webp`
- `public/images/shamadan/premium-flatlay.webp`
- `public/images/shamadan/light-splash.webp`
- `public/images/shamadan/product-family.webp`
- `public/images/shamadan/playful.webp`

C. Abd Allal Coffee
Role:
- Homepage
- Compact campaign case study

Selected assets:
- `public/images/abd-allal/hero.webp`
- `public/images/abd-allal/support.webp`

Important:
Only 2 selected assets. Do NOT fake/pad a long case study.

D. Criminal Anbr 6
Role:
- Homepage supporting/cinematic feature
- Poster Study page

Selected assets:
- `public/images/criminal-anbr-6/hero.webp`
- `public/images/criminal-anbr-6/alternate.webp`

Public framing:
`Film Poster Study`
unless commissioned status is later verified.

Ahmed approved portrait:
- `public/images/ahmed/ahmed-cutout.png`

Primary use:
- About / Human Moment
- NOT the opening hero

Dropped / held from public V1:
- Rails
- Fiber Cable
- Watches
- Cosmetics
- Marketing Agency entries
- Ice Cream
- weak/typo Shamadan biscuit execution
- CV/certificates from Work
- Maths

Do not bring dropped work back casually.

Visual source of truth:
`docs/VISUAL_ASSET_SELECTION_FINAL.md`

==================================================
3. POSITIONING — LOCKED
==================================================

Ahmed Khair is positioned as:

**Advertising Visual Designer**
**Campaigns · Posters · Product Visuals**

Do NOT broaden him into a generic “graphic designer.”

Portfolio North Star:
“Ahmed Khair is an advertising visual designer whose portfolio should feel like a short visual film built from selected campaigns, not a gallery template.”

Three required impressions:
1. There is a person with taste here.
2. The work is strong and curated.
3. The website itself has craft but knows when to disappear.

==================================================
4. REFERENCE SET — WHAT EACH ONE CONTRIBUTES
==================================================

The references were researched structurally and visually as far as public evidence allowed. The user also personally opened several live sites and judged their motion/experience directly.

Do NOT falsely claim every live animation of every reference was frame-by-frame inspected by the assistant.

Primary references:

1. Ali Ali / Alitwotimes / Exo Ape
Official:
`https://alitwotimes.com/`

Use for:
- cinematic transitions
- work becomes interface
- strong title/image relationship
- pointer-aware project interaction
- minimal navigation
- work-first structure

2. D Alcausin
`https://www.dalcausin.com/`

User specifically liked:
- Selected Work image-follow/reveal interaction
- personal/human personality
- childhood photo in About
- concise hierarchy

Use for:
- personality
- image-follow interaction
- human About moment
- compact navigation

3. Alexandre Rochet
`https://www.alexandrerochet.com/`

Awwwards documented technologies/traits:
- GSAP
- PixiJS
- Parallax
- Unusual Navigation

User reaction:
“الموقع ده أصلا فيلم لوحده”

Use for:
- cinematic page-as-experience ambition
- authored transitions
- layered 2D interaction
- unusual but understandable navigation

4. O’shane Howard
`https://www.oshanehoward.com/`

Verified behaviors:
- Scroll/Tap to explore
- Hold and drag to pan around images
- imagery dominates
- direct manipulation / image-first navigation

Use for:
- work as interface
- touch/mobile must have its own behavior
- direct manipulation feeling

5. Diego Salas
`https://www.diegosalas.net/`

User liked that the site stays relatively simple because the work itself is strong and dense.

Use for:
- restraint
- know when UI should disappear
- artwork should never be damaged by effects

Secondary references:
- Enio Vital
- Georg Ackermann
- Marllex
- Zuzana Kyppo
- Ángel Pérez
- Denis Avramenko
- Iara Tavares
- Nicolas Dumenil

Reference docs:
- `docs/REFERENCE_RESEARCH.md`
- `docs/REFERENCE_TECH_MOTION_AUDIT.md`

==================================================
5. GLOBAL WORKFLOW — NEVER REWRITE THIS AGAIN
==================================================

Every page and every major section is built layer-by-layer.

For each unit:

1. Re-open relevant brief.
2. Re-check relevant reference behavior visually.
3. Static composition.
4. Typography.
5. Image crop / framing.
6. Interaction.
7. Motion.
8. Transition in/out.
9. Mobile composition — independently, NOT scaled desktop.
10. Render real Desktop.
11. Render real Mobile.
12. Capture motion.
13. Compare visually against:
    - brief
    - references
    - previously approved layer
14. Write exact deltas.
15. Fix only the deltas.
16. Close the gate.

No next layer starts because:
- code builds
- animation exists
- it looks “okay”

A layer/page closes only after visual closure.

Every page must ultimately be reviewed at:
- Desktop 1440
- Desktop 1280
- Mobile 390
- Mobile 360
- reduced motion
- performance
- accessibility

Source:
`docs/MASTER_VISUAL_EXECUTION_PLAN_V3.md`
`docs/IMPLEMENTATION_WORKFLOW_V2.md`

==================================================
6. HOME EXECUTION ORDER — LOCKED
==================================================

HOME is completed before About or any dedicated case-study page.

Current Home sequence:

H1 — Hero Static Composition
H2 — Hero Typography Refinement
H3 — Hero Typography Motion
H4 — Hero Media Motion
H5 — Hero Exit
H6 — Work Index Static Composition
H7 — Work Index Interaction
H8 — BOCH Scene
H9 — El Shamadan Scene
H10 — Criminal Anbr 6 Scene
H11 — Abd Allal Coffee Scene
H12 — About Human Moment
H13 — Contact / Closing Frame
H14 — Full Homepage Integration Pass

Only after H14:
**HOME CLOSED**

Then:
ABOUT
-> BOCH CASE STUDY
-> SHAMADAN CASE STUDY
-> COFFEE CASE STUDY
-> CRIMINAL CASE STUDY
-> FINAL PORTFOLIO INTEGRATION QA

==================================================
7. CURRENT CLOSED STATUS
==================================================

The following are CLOSED and should NOT be casually reopened:

H1 — Hero Static Composition ✅
H2 — Hero Typography Refinement ✅
H3 — Hero Typography Motion ✅
H4 — Hero Media Motion ✅
H5 — Hero Exit ✅
H6 — Work Index Static Composition ✅
H7 — Work Index Interaction ✅
H8 — BOCH Scene ✅
H9 — El Shamadan Scene ✅
H10 — Criminal Anbr 6 Scene ✅
H11 — Abd Allal Coffee Scene ✅

Hero closure source:
`docs/HERO_CLOSURE_LOG.md`

H6 closure source:
`docs/WORK_INDEX_H6_CLOSURE_LOG.md`

H7 closure source:
`docs/WORK_INDEX_H7_CLOSURE_LOG.md`

H8 closure source:
`docs/BOCH_H8_CLOSURE_LOG.md`

H9 closure source:
`docs/SHAMADAN_H9_CLOSURE_LOG.md`

H10 closure source:
`docs/CRIMINAL_H10_CLOSURE_LOG.md`

H11 closure source:
`docs/COFFEE_H11_CLOSURE_LOG.md`

Post-H10 benchmark checkpoint:
`docs/PORTFOLIO_CHECKPOINT_01_AFTER_H10.md`

Final H10/H11 validated CI:
SUCCESS
Run:
`33251562412`
Head:
`27a74c6f8bfecea41a8c24f2962bf6005623180c`

Final H9 validated implementation:
`87151b3680ba80e0da82001fc1191fd470b28128`

Final H9 CI:
SUCCESS
Run:
`33249429748`

==================================================
8. HERO — CLOSED BEHAVIOR
==================================================

Desktop:
- AHMED / KHAIR reads immediately.
- no accidental right-edge crop.
- BOCH teaser has a deliberate separate field.
- nav, microcopy and bottom metadata support hierarchy.

Mobile:
- bespoke 390px composition.
- no accidental AHMED/KHAIR collision.
- BOCH image separated from name.
- role/supporting copy remains readable.

Typography:
- global topbar: AK + Advertising Visual Designer + Work / About / Contact
- desktop kicker: Based in Egypt / Selected visual work · 04
- mobile kicker: Ahmed Khair / Advertising Visual Designer
- title: AHMED / KHAIR
- footer metadata: disciplines / Portfolio 2026 / Scroll to enter

Typography motion:
- controlled word-mask reveal
- AHMED establishes first
- KHAIR follows
- no per-letter gimmick
- scroll-linked spatial separation

Media motion:
- BOCH image arrives only after identity begins to settle
- mask/scale reveal
- scroll-linked movement
- subtle pointer-responsive movement on fine-pointer devices
- no mobile pointer dependency

Exit:
- pinned authored sequence
- identity dims rather than hard cuts
- BOCH maintains visual tension
- warm paper handoff rises
- SELECTED WORK transition title appears
- Work Index continues on same paper field

==================================================
9. WORK INDEX H6 — CLOSED STATIC COMPOSITION
==================================================

Desktop:
- cream/paper field continues Hero handoff
- compact index header
- four project names dominate
- number/type/arrow are secondary
- strong enough with JS/motion disabled

Mobile:
- independent mobile composition
- controlled line breaks for long project names
- no collisions at 390 or 360
- no hover dependency

==================================================
10. WORK INDEX H7 — CLOSED INTERACTION
==================================================

Reference roles:
- D Alcausin: Selected Work becomes interface without becoming a toy
- Ali Ali / Exo Ape: project image tied physically to title/pointer
- O’shane: touch/mobile must have its own exploration behavior

Desktop behavior:
- hover project -> real selected image appears near pointer
- preview constrained to viewport
- preview does not cover Work Index header
- controlled inertial pointer follow
- subtle rotation from horizontal pointer position
- image swap uses short scale/opacity transition
- selected row full emphasis
- sibling rows at 32% emphasis
- title + kind + arrow respond together
- custom VIEW cursor only over actionable rows
- click uses Lenis to move into matching project scene

Mobile behavior:
- NO hover dependency
- ScrollTrigger activates row nearest reading focus
- project image reveals as a masked atmosphere on right side of row
- cream gradient protects title readability
- typography remains above image
- project type and arrow stay readable
- touch press feedback
- tap opens matching project scene

Validated at:
- 390 x 844
- 360 x 800

H7 exact implementation commit:
`fa82cc2fbff646c48ddbd8ced57ec3f3e90d1e0a`

H7 QA harness validation:
`7aa68c1c9f7589237d2d2862e44c1a55a380066f`

H7 closure commit:
`fb136d50f300ff09d9b346279fd8df8235ce5900`

Latest validated H7 CI:
SUCCESS
Run:
`33247506743`

Current branch HEAD after adding this continuation doc:
`ed30c09a556eabe1e8dcaefcdf01289251d24291`

==================================================
11. CURRENT NEXT GATE — START HERE
==================================================

**H12 — ABOUT / HUMAN MOMENT**

H10 and H11 are CLOSED.
Do NOT reopen H1–H11 without a concrete regression or a reference-backed global-integration reason.
Do NOT start H13 yet.
Do NOT start the dedicated /about page yet.

H12 must close all of these:

1. Re-check the locked About reference role:
   - D Alcausin for a real human/personality beat after Selected Work
   - Diego Salas restraint: do not turn the About moment into a résumé dashboard
   - Ahmed's own work sequence must remain the reason the page earned this human pause

2. Human Moment Static Composition
   - use the approved Ahmed cutout
   - this is the first deliberate human appearance on Home
   - portrait and type must feel authored together
   - not a corporate bio block
   - not a generic two-column résumé section

3. Truthful Copy
   - Ahmed Khair
   - Advertising Visual Designer
   - campaigns / posters / product or photo-led visuals only where already verified
   - no inflated creative-direction / strategy / branding-system claims
   - short paragraph only

4. Personal Identity
   - solve the checkpoint delta that the typography system still feels partly like “award-portfolio grammar”
   - make the section feel specifically Ahmed without adding a new random font/effect system
   - use the actual portrait, wording, spacing and interaction to create personality

5. Process / Capability Layer
   - compact only
   - Campaign Visuals
   - Posters
   - Photo Manipulation / Advertising Design only where consistent with locked positioning
   - process may be: Concept -> Composition -> Retouching -> Final Visual
   - no giant standalone process section

6. Interaction
   - one personal interaction maximum
   - only if it materially makes the human moment better
   - no toy interaction
   - no pointer dependency on mobile

7. Coffee -> About Entry
   - Selected Work must feel like it ends, then the person appears
   - do not restart the website as a new unrelated chapter
   - warm Coffee exit can resolve into a quieter human field

8. Desktop
   - 1440
   - 1280

9. Mobile
   - 390
   - 360
   - independent portrait/type composition
   - readable microcopy

10. Real QA
   - static captures
   - focused section capture
   - full-page regression capture
   - motion capture
   - compare against D Alcausin / brief
   - list exact deltas
   - fix only those deltas
   - H12 CLOSED

Only after H12 truly passes:
create `docs/ABOUT_H12_CLOSURE_LOG.md`.

==================================================
12. IMPORTANT DESIGN GUARDRAILS
==================================================

Never:
- generic cards
- generic portfolio template layout
- huge black hover overlays
- random gradients for decoration
- giant global cursor gimmick
- random RGB split
- liquid shader because it looks “award-like”
- scroll hijacking without design reason
- motion used to hide weak static composition
- fake project details
- fake client/strategy claims
- padding a project with weak assets
- letting the site destroy/crop the artwork badly

Motion hierarchy:
1. Structural
2. Responsive
3. Atmospheric

Typical timing guidance from brief:
- hover: 250–450ms
- text reveals: 450–800ms
- image transitions: 700–1400ms

These are guidance, not hard rules.

Important line from the art direction:
“If the page only feels good while animated, the art direction has failed.”

Another:
“The portfolio is not the spectacle. Ahmed’s eye is the spectacle.”

==================================================
13. REPOSITORY SOURCE-OF-TRUTH DOCS
==================================================

Read these before continuing:

- `docs/FINAL_SITE_MAP_AND_EXECUTION_MASTER.md`
- `docs/MASTER_VISUAL_EXECUTION_PLAN_V3.md`
- `docs/IMPLEMENTATION_WORKFLOW_V2.md`
- `docs/HOMEPAGE_ART_DIRECTION_BRIEF.md`
- `docs/REFERENCE_RESEARCH.md`
- `docs/REFERENCE_TECH_MOTION_AUDIT.md`
- `docs/VISUAL_ASSET_SELECTION_FINAL.md`
- `docs/HERO_CLOSURE_LOG.md`
- `docs/WORK_INDEX_H6_CLOSURE_LOG.md`
- `docs/WORK_INDEX_H7_CLOSURE_LOG.md`
- `docs/BOCH_H8_CLOSURE_LOG.md`
- `docs/SHAMADAN_H9_CLOSURE_LOG.md`

Do not trust an older plan over these final docs.

==================================================
14. BRANCH / PR / MERGE RULE
==================================================

Active implementation branch:
`portfolio/homepage-design-v2`

Open PR:
#2

Base:
`main`

Latest closed implementation:
`e2adfff94005172a2e0e10b1268097ee88662311`

H8 closure log commit:
`d8d5455a933e58ee45204cb83ea4cb03cb7fabe3`

H7 closure commit:
`fb136d50f300ff09d9b346279fd8df8235ce5900`

Do NOT merge PR #2 yet.

Reason:
Home is not closed.
H12–H14 remain.

Merge only after:
- Desktop visual closure
- Mobile visual closure
- motion closure
- reference delta review
- brief delta review
- no major visual issue remains

==================================================
15. VERCEL
==================================================

Vercel project:
`ahmed-khair-portfolio`

Connected GitHub repository:
`omarkhair70-droid/ahmed-khair-portfolio`

Git integration is active.

Use Preview deployments from the active branch for visual review.
Do not treat the old production deployment as final portfolio approval.
Production must wait until the final approved branch/merge state.

==================================================
16. ASSET HISTORY / IMPORTANT FACT
==================================================

Original Behance extraction:
- 14 current Behance projects
- 29 internal project images

The selected public pack contains:
- 4 BOCH
- 5 Shamadan
- 2 Abd Allal
- 2 Criminal
- 1 Ahmed cutout
= 14 final selected assets

The Behance image files were actually WebP content despite historical .jpg names.
Current repo names are corrected to .webp.

==================================================
17. WHAT THE NEW CHAT SHOULD DO IMMEDIATELY
==================================================

Do NOT ask the user what to do next.
Do NOT restart research from zero.

Start with:

**H12 — ABOUT / HUMAN MOMENT**

First:
1. inspect current active branch
2. read the final source-of-truth docs
3. read `docs/PORTFOLIO_CHECKPOINT_01_AFTER_H10.md`
4. read `docs/COFFEE_H11_CLOSURE_LOG.md`
5. inspect current About markup/CSS/motion
6. re-check D Alcausin's locked human/About reference role
7. inspect the approved Ahmed cutout in the real rendered context
8. perform H12 static-composition audit before adding motion
9. rebuild the Home About moment as a human beat, not a résumé block
10. render 1440 / 1280 / 390 / 360
11. inspect real static and motion captures visually
12. fix exact deltas only
13. write `docs/ABOUT_H12_CLOSURE_LOG.md` only when H12 truly passes

The new chat should continue execution, not explain the project back to the user unless asked.

==================================================
18. CURRENT ONE-LINE STATE
==================================================

**HOME: H1–H11 CLOSED. NEXT = H12 ABOUT / HUMAN MOMENT. PR #2 OPEN. DO NOT MERGE.**
