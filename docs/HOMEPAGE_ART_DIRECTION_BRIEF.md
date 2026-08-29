# Ahmed Khair Portfolio — Homepage Art Direction Brief

Status: **LOCKED FOR DESIGN EXPLORATION**

This brief is the source of truth for the first homepage design pass.

It is derived from:
- `docs/VISUAL_ASSET_SELECTION_FINAL.md`
- `docs/REFERENCE_RESEARCH.md`
- the verified award-winning reference set
- Ahmed's actual strongest work: BOCH, El Shamadan, Abd Allal Coffee, Criminal Anbr 6

The objective is not to make an “award-site clone.”
The objective is to make Ahmed's work feel authored, cinematic and premium while the interface remains controlled enough to let the work lead.

---

# 1. NORTH STAR

## Core sentence

**Ahmed Khair is an advertising visual designer whose portfolio should feel like a short visual film built from selected campaigns, not a gallery template.**

The homepage must create three impressions in this order:

1. **There is a person with taste here.**
2. **The work is strong and curated.**
3. **The website itself has craft, but it knows when to disappear.**

The site should feel closer to a directed sequence than to:
- Behance
- Instagram
- a card grid
- a generic dark portfolio
- an Awwwards interaction demo

---

# 2. CREATIVE PRINCIPLE

## “The frame changes, the work stays the star.”

Take from the reference set:

- **Alexandre Rochet:** cinematic pacing, authored transitions, feeling of a continuous experience.
- **Ali Ali:** restraint around commercial visual work.
- **Diego Salas:** confidence in letting imagery dominate.
- **D Alcausin:** personality, editorial interaction, and playful-but-controlled work selection.
- **Denis Avramenko:** disciplined motion and typography.

Do not copy:
- Alexandre's exact navigation or animation choreography
- Ali Ali's exact minimal Swiss language
- Diego's archive structure
- D Alcausin's specific hover system
- Denis' specific motion grammar

Synthesis only.

---

# 3. HOMEPAGE STRUCTURE

The homepage should contain **seven acts**, not seven disconnected sections:

1. Opening / Identity
2. BOCH — First Statement
3. El Shamadan — Energy Shift
4. Criminal Anbr 6 — Cinematic Interruption
5. Abd Allal Coffee — Warm Reset
6. About / Human Moment
7. Contact / Closing Frame

The user should feel one continuous progression.

---

# 4. ACT 01 — OPENING / IDENTITY

## Purpose

Establish Ahmed before showing his work, but do not delay the work.

Target duration before the first project becomes visible:
**2–4 seconds maximum on a normal scroll.**

## Composition

Full viewport.

Primary typography:
**AHMED KHAIR**

Secondary line:
**Advertising Visual Designer**

Tertiary microcopy:
**Campaigns · Posters · Product Visuals**

Optional small metadata:
**Egypt / Available for selected freelance work**

No portrait in the opening frame.

## Layout

Desktop:
- name occupies roughly 55–70% of viewport width
- large display type, not centered
- asymmetric alignment
- plenty of empty space
- small role label anchored far from the main name

Mobile:
- stacked name
- preserve scale and tension
- no tiny text tricks

## First animation

The first animation must be typography-driven.

Recommended behavior:
- page opens nearly still
- “AHMED” and “KHAIR” appear with a controlled vertical mask/reveal
- slight stagger, 120–180ms apart
- no bounce, blur-cloud, elastic easing, or letter explosion
- role line fades/reveals later
- after the name settles, one subtle image fragment from BOCH begins entering the frame at the lower or side edge

The first project should feel like it is **invading the identity frame**, not like the site is changing sections.

## Typography behavior

The display type can react minimally to scroll:
- slight tracking compression
- tiny horizontal drift
- or crop against the viewport edge

Do not animate every letter independently.

## Interaction

A tiny “Selected Work ↓” or scroll marker may exist.

No giant CTA button.

## Sound

No autoplay audio.

---

# 5. TRANSITION 01 — OPENING → BOCH

## Desired feeling

The site moves from **personality** to **proof**.

The BOCH image should become the first dominant visual.

## Choreography

Preferred:
- BOCH hero image grows from a partial crop into a large editorial frame
- opening typography moves behind or outside the visual field
- project metadata appears after the image establishes itself

Alternative:
- image wipe/mask using a strong rectangular crop

Do not use:
- spinning cards
- 3D phone mockups
- page-flip effects
- fake film grain covering the artwork

---

# 6. ACT 02 — BOCH MOTOR

## Role

**The first proof that Ahmed can create commercial visual work.**

This is the strongest complete case-study asset set.

## Hero asset

`02 - campaign boch motor/01.jpg`

Supporting:
- `05.jpg`
- `03.jpg`
- `02.jpg`

## Section composition

The BOCH hero should feel large enough to become the site for a moment.

Recommended structure:

### Frame A
Large hero image occupying 70–90vh.

Minimal label:
- BOCH Motor
- Campaign
- Art Direction / Visual Design if verified

### Frame B
As scroll continues, second image enters in a different scale.

Use:
`05.jpg`

This is the most cinematic supporting visual.

### Frame C
A two-image editorial relationship:
- `03.jpg`
- `02.jpg`

Do not make a symmetrical 2-column gallery by default.
One image should dominate.

## Typography

Project title can become oversized, but should never sit over the most important part of the artwork.

Metadata should be quiet.

## Hover

Homepage project hover should not darken the image with a generic black overlay.

Recommended:
- image scale 1.00 → 1.015
- cursor label: “View Campaign”
- title/metadata shifts 4–8px
- optional subtle border or crop change

Duration:
250–450ms.

## Click behavior

Click opens BOCH project detail with a transition that preserves visual continuity.

Ideal later implementation:
the homepage hero image becomes the project page hero using a shared-element-feeling transition.

---

# 7. TRANSITION 02 — BOCH → SHAMADAN

## Desired feeling

**Mechanical / controlled → energetic / colorful**

This should be one of the strongest tonal changes on the homepage.

## Choreography

Avoid a normal whitespace gap.

Preferred:
- BOCH frame contracts or moves upward
- orange/chocolate color from Shamadan begins occupying background space
- Shamadan hero arrives with faster motion than BOCH

The transition can feel more playful, but still controlled.

No literal chocolate drips in the UI.

The work already has enough visual metaphor.

---

# 8. ACT 03 — EL SHAMADAN

## Role

Show Ahmed can sustain a visual campaign across multiple executions.

This section should feel more energetic than BOCH.

## Hero asset

`05 - campaign for a shamadan company/01.jpg`

Supporting:
- `05/04.jpg`
- `04/03.jpg`
- `05/02.jpg`
- `04/01.jpg`

## Section character

Use a stronger background shift.

Possible:
- warm off-white → chocolate-black
- dark neutral → controlled orange field
- project-specific accent enters behind typography

The site may temporarily inherit Shamadan's color energy, then return to neutral afterward.

## Layout rhythm

Recommended:

1. hero nearly full viewport
2. one wide premium image
3. one smaller floating image with large negative space
4. one paired moment
5. one closing image

Do not make all five assets the same size.

## Motion

Shamadan can have the most lively movement on the page:
- faster image entrance
- slight opposing scroll directions
- small scale differences
- one controlled sticky frame possible

But:
**no endless parallax stack.**

## Copy

Do not write campaign strategy we cannot verify.

Use factual framing:
**Selected campaign visuals for El Shamadan.**

---

# 9. TRANSITION 03 — SHAMADAN → CRIMINAL ANBR 6

## Desired feeling

The portfolio suddenly becomes quieter and more cinematic.

Like a film cutting from a colorful commercial to a dark title sequence.

## Choreography

This transition is where the Alexandre Rochet influence can be strongest.

Recommended:
- color drains from the page
- background returns to near-black / charcoal
- wide Shamadan composition exits
- a narrow vertical poster appears from darkness
- scrolling slows perceptually because the composition becomes sparse

Do not fake a cinema projector effect.

The change in space, color and aspect ratio is enough.

---

# 10. ACT 04 — CRIMINAL ANBR 6

## Role

A visual punctuation mark.

Not the strongest commercial proof, but a very useful personality moment.

## Label

**Criminal Anbr 6**
**Film Poster Study**

Do not imply official commissioned film campaign unless verified.

## Hero

`09 - POSTER FILM CRIMINAL ANBR 6/02.jpg`

Alternate:
`09/01.jpg`

## Composition

Use the poster vertically.

Do not crop it into a square.

Potential composition:
- poster occupies 35–50% width
- large empty black field beside it
- project title placed far away
- small study label

This section should breathe.

## Motion

Minimal.

A slow poster reveal, tiny image drift or title movement.

This is the quietest motion section.

The contrast is the effect.

---

# 11. TRANSITION 04 — POSTER → ABD ALLAL COFFEE

## Desired feeling

**Cold cinema → warm commercial intimacy**

Use palette, not effects.

Recommended:
- black field gradually warms
- coffee image enters from an unexpected lower corner
- vertical poster recedes while the new horizontal/square work expands

No coffee steam animation.

No café clichés.

---

# 12. ACT 05 — ABD ALLAL COFFEE

## Role

Close the selected-work sequence with warmth and restraint.

This project only has two strong images.
The site should make that feel intentional.

## Assets

Hero:
`01 - campaign abd allal coffee/02.jpg`

Supporting:
`01/01.jpg`

## Layout

Do not pretend it is a full case study.

Recommended:
- one large image
- one supporting image offset and smaller
- project metadata positioned between or after them
- enough negative space so two images feel curated, not insufficient

## Copy

**Abd Allal Coffee**
**Compact Campaign**

One-line description maximum.

## Motion

Quiet and warm.

No extra interaction needed.

---

# 13. ACT 06 — ABOUT / HUMAN MOMENT

## Purpose

After the work proves the visual skill, show the person.

This is where D Alcausin's human/personality principle matters.

## Content

Headline direction:
**Ahmed Khair**
**Visual designer working across advertising, campaigns and poster-led imagery.**

Short paragraph:
2–4 lines maximum.

Possible information:
- based in Egypt
- focused on commercial visual design
- freelance availability
- software/craft only if useful

## Portrait

Do not use a generic corporate headshot unless that is all we have.

Preferred:
- candid / personal / studio image
- childhood image only if Ahmed has one and genuinely wants that personality
- even a scanned personal artifact could work later

Until we have a suitable image:
**do not fabricate one.**

The About section can initially be typographic.

## Interaction

One subtle personal interaction is allowed.

Examples:
- hover reveals a small photo
- small “Selected facts” line changes
- one hidden personal image appears near cursor

Only one.

Do not turn About into a toy.

---

# 14. PROCESS MOMENT

Process does not need its own giant section.

Place a compact block around About:

**What I do**
- Campaign Visuals
- Social Advertising
- Posters
- Photo Manipulation

Optional micro-process:
**Concept → Composition → Retouching → Final Visual**

Do not claim:
- strategy
- full brand systems
- creative direction
unless Ahmed actually did those roles.

Accuracy over inflated positioning.

---

# 15. ACT 07 — CONTACT / CLOSING FRAME

## Purpose

The last frame should feel like the end title of the short film.

Not a standard footer with four columns.

## Copy hierarchy

Large:
**Let's make something worth looking at.**

Or more restrained:
**Available for selected visual projects.**

Then:
- email
- Behance
- Instagram if professional
- LinkedIn if useful

## Layout

Large typography.
Very little content.

Possible return of the name:
**AHMED KHAIR © 2026**

The footer can visually echo the opening without repeating it exactly.

## Motion

As the user reaches the final frame:
- giant type may slowly enter
- links reveal sequentially
- no fireworks / particle ending

The site should end quietly and confidently.

---

# 16. GLOBAL TYPOGRAPHY SYSTEM

## Display

Personality:
- editorial grotesk / condensed grotesk / neo-grotesk with character
- strong enough to act as a visual device
- not novelty display type

Use for:
- AHMED KHAIR
- project titles
- major transitions
- closing statement

## Utility / body

Neutral sans.

Use for:
- metadata
- descriptions
- nav
- contact information

## Rules

- large display sizes
- short line lengths
- generous whitespace
- body text kept rare
- no five-font combinations
- maximum 2 families unless a very strong reason emerges

Arabic is not currently required for V1 unless Ahmed wants bilingual presentation later.

---

# 17. COLOR SYSTEM

## Shell

Default:
- near-black / charcoal OR warm off-white
- final choice should be determined during design exploration against the real selected assets

Current preferred direction:
**dark-neutral shell**

Reason:
- BOCH reads strongly
- Criminal poster benefits greatly
- Shamadan can explode with color
- Coffee can create a warm release
- typography can feel cinematic

## Project accents

Use temporary project-derived accents.

Never let project accent colors become global branding by accident.

---

# 18. NAVIGATION

## Desktop

Very small persistent or semi-persistent nav.

Possible structure:
- Ahmed Khair
- Work
- About
- Contact

Or:
- name left
- index / menu right

Do not add:
- Home
- Services
- Portfolio
- Resume
- Blog
unless they have real value.

## Behavior

Nav may invert or adapt against project backgrounds.

Transitions should be smooth but instant enough to remain usable.

---

# 19. CURSOR / HOVER LANGUAGE

Custom cursor is optional, not mandatory.

If used:
- small
- clean
- only changes contextually on project hover
- “View”
- “Open”
- or project index

No giant circles following the cursor everywhere.

## Image hover

Allowed:
- 1–2% scale
- crop shift
- slight perspective only if extremely subtle
- metadata reveal

Not allowed:
- heavy distortion
- liquid shader
- random RGB split
- aggressive magnetic movement

---

# 20. MOTION GRAMMAR

Motion should have a hierarchy.

## Level 1 — structural
Used for:
- section transitions
- project entry
- opening identity

## Level 2 — responsive
Used for:
- hover
- link state
- subtle image drift

## Level 3 — atmospheric
Used sparingly:
- tiny background movement
- one texture shift
- one special cinematic transition

The website should not animate constantly.

Stillness is part of the art direction.

## Timing

General:
- hover: 250–450ms
- text reveals: 450–800ms
- major image transitions: 700–1400ms
- section choreography may extend with scroll

Easing:
smooth custom cubic-bezier / spring only where appropriate.

No bouncy UI.

## Reduced motion

The whole experience must degrade cleanly with reduced motion:
- images still presented beautifully
- no information depends on animation
- no blank states awaiting reveal

---

# 21. HOMEPAGE VISUAL RHYTHM

The page should alternate:

**TYPE → IMAGE → IMAGE → COLOR → IMAGE → SPACE → POSTER → SPACE → WARM IMAGE → HUMAN → TYPE**

This is more important than any individual effect.

The experience should feel composed even in a static full-page screenshot.

If the page only feels good while animated, the art direction has failed.

---

# 22. RESPONSIVE DIRECTION

Mobile is not a compressed desktop movie.

## Mobile rules

- preserve artwork first
- simplify transitions
- remove nonessential parallax
- keep strong typography
- keep project order
- vertical poster remains vertical
- avoid horizontal scrolling as primary navigation
- touch states replace hover behavior

The mobile homepage must remain premium without requiring motion tricks.

---

# 23. ACCESSIBILITY / USABILITY GUARDRAILS

Award-style must not compromise usability.

Required:
- obvious links
- readable contrast
- keyboard navigation
- visible focus
- meaningful image alt text
- no hidden navigation puzzles
- no mandatory drag interaction
- no scroll hijacking that fights the browser
- no interaction where the user must “discover” how to see work

The creative layer should sit above a conventional usable foundation.

---

# 24. WHAT MAKES THIS AHMED'S SITE

Ahmed's identity must come from:

1. his selected artwork
2. the pacing between commercial and cinematic work
3. the typography chosen specifically to frame his visuals
4. the human About moment
5. project-derived color moments
6. curation discipline

Not from:
- copied Awwwards gimmicks
- generic neon gradients
- fake 3D
- overbuilt WebGL
- an arbitrary personal logo

A wordmark can emerge later if the typography naturally creates one.

---

# 25. FIRST DESIGN PASS — EXACT TARGET

The first visual prototype must include only:

1. desktop opening hero
2. opening → BOCH transition
3. BOCH project section
4. BOCH → Shamadan transition
5. Shamadan section
6. Criminal poster interruption
7. Abd Allal compact section
8. About moment
9. closing contact frame

No case-study pages yet.

The first pass exists to answer:

**Does the homepage feel like Ahmed's own short visual film while keeping his work stronger than the website around it?**

If not, iterate the art direction before building the rest.

---

# 26. REVIEW GATE

Before implementation is considered approved, manually review:

- opening frame at 1440px+
- 3–5 scroll positions on desktop
- project image crops
- typography scale and line breaks
- transition screenshots
- mobile hero
- mobile project sequence
- final contact frame

Compare against references for quality, not similarity.

Questions:

1. Does the work dominate?
2. Does Ahmed have a personality?
3. Is there enough stillness?
4. Is any animation there only to impress?
5. Does every transition have a reason?
6. Would the page still look exceptional as static screenshots?
7. Does any weak Behance-style visual sneak back into V1?

If any answer is wrong, do not move to full implementation.

---

# FINAL ART DIRECTION STATEMENT

**A restrained dark editorial shell that behaves like a short visual film: strong typography introduces Ahmed, campaign imagery progressively takes control, each project changes the emotional temperature of the page, one cinematic poster creates silence, a human moment restores personality, and the site closes with confidence rather than spectacle.**

The portfolio is not the spectacle.

**Ahmed's eye is the spectacle.**
