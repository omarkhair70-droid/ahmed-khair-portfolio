# Abd Allal Coffee — H11 Closure Log

Status: **CLOSED**

Branch: `portfolio/homepage-design-v2`  
PR: **#2 — Homepage design V2 — full motion art-direction pass**

## Brief role closed

Abd Allal Coffee closes the selected-work sequence as a compact warm reset.

The locked brief required:
- exactly two selected images
- one large hero
- one smaller supporting image
- warm palette
- enough negative space that two images feel curated, not insufficient
- one-line factual copy maximum
- quiet motion
- no extra interaction
- no café cliché / steam effect
- no fake long case study

That is now the implemented behavior.

## Static composition

The old generic Coffee scene was removed.

Current composition:
- `ABD ALLAL / COFFEE` title on the warm field
- hero occupies the dominant right-side field on desktop
- support image is substantially smaller and offset
- factual copy: `Two selected campaign visuals.`
- closing line marks the end of Selected Work
- no giant decorative WARMTH word
- no card-grid treatment

Mobile is independently composed:
- title first
- full-width hero
- smaller supporting image
- closing line
- no hover/pointer dependency

## Artwork integrity

Selected assets:
- `public/images/abd-allal/hero.webp`
- `public/images/abd-allal/support.webp`

Both source images report:
- natural width: 1200
- natural height: 1200

Both remain contain-framed and uncropped.

Final focused metrics:

Desktop 1440:
- Coffee height: 1134px
- hero frame: 764 x 782
- support frame: 318 x 336

Desktop 1280:
- Coffee height: 1134px
- hero frame: 679 x 697
- support frame: 283 x 301

Mobile 390:
- Coffee height: 1240px
- hero frame: 350 x 367
- support frame: 219 x 236

Mobile 360:
- Coffee height: 1240px
- hero frame: 320 x 337
- support frame: 201 x 218

This intentionally remains much more compact than the multi-beat BOCH / Shamadan chapters.

## Motion

Dedicated H11 choreography:
- quiet meta / title settling
- restrained hero mask + small scale settle
- slower supporting-image entrance
- simple closing-line reveal

No extra interaction was introduced.

Coffee is excluded from the old generic scene motion system.

Reduced motion resets all H11 transforms / clip paths / opacity safely.

## Real visual delta fixed during H11

The first H11 motion review exposed one global-continuity issue:

Criminal ended with a large `ABD ALLAL COFFEE` cue and Coffee immediately repeated the same title at full scale.

That made the boundary read too literally as:
**chapter -> chapter**

Fix:
- reduce the Criminal transition title to a restrained cue
- let the full Coffee title happen once, inside H11

Final fix:
`27a74c6f8bfecea41a8c24f2962bf6005623180c`

This is directly related to the global pacing issue recorded in `PORTFOLIO_CHECKPOINT_01_AFTER_H10.md`.

## Final CI / QA

Final validated workflow:

- Workflow: `Portfolio CI`
- Run: `33251562412`
- Result: **SUCCESS**
- Head: `27a74c6f8bfecea41a8c24f2962bf6005623180c`

Focused H11 artifact:

- Name: `homepage-coffee-h11`
- Artifact ID: `9714577542`
- Digest: `sha256:cbc50f78aafe17cc9382e8b4cc6acd380ab5986781895e002544fe0ed6740ebe`

Validated in the same run:
- Typecheck
- Build
- general desktop/mobile visuals
- general motion QA
- H7 interaction regression
- H8 BOCH regression
- H9 Shamadan regression
- H10 Criminal regression
- H11 Coffee focused QA
- artifact uploads

Focused QA confirms:
- no horizontal overflow
- Criminal bottom joins Coffee top directly
- Coffee bottom joins About top directly
- exactly two Coffee frames
- desktop 1440 / 1280
- mobile 390 / 360

## Visual closure verdict

H11 now behaves as intended:

**Cold cinema -> warm commercial intimacy -> selected work ends.**

It does not pretend two images are a long campaign.
It does not add another oversized chapter.
It improves the full-page pacing instead of worsening it.

# H11 CLOSED

Next gate:

**H12 — ABOUT / HUMAN MOMENT**

Do not merge PR #2 yet.
Home remains open until H14 passes.
