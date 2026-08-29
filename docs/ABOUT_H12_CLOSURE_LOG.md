# About / Human Moment — H12 Closure Log

Status: **CLOSED**

Branch: `portfolio/homepage-design-v2`  
PR: **#2 — Homepage design V2 — full motion art-direction pass**

## Purpose closed

H12 is the first deliberate human appearance on Home after Selected Work has already proved the work.

The section is no longer a generic résumé / capability block.
It now uses Ahmed himself as the visual subject.

## Reference re-check

Primary reference role:

- D Alcausin — human/personality presence after Selected Work

The official D Alcausin About page was re-checked during H12.
It currently uses personal biographical framing and a childhood image as part of the About experience.

What H12 takes from that:
- the person must become visually present
- About should feel personal, not corporate
- the human layer should be authored with the same care as Work

What H12 does NOT copy:
- D Alcausin's biography
- childhood-image treatment
- exact layout
- interaction grammar

Ahmed currently has one approved personal visual:
`public/images/ahmed/ahmed-cutout.png`

No new biography or personal facts were fabricated.

## Baseline problem

Before H12 the Home About prototype used:
- giant decorative `HUMAN` background typography
- dark field that reduced separation from Ahmed's black shirt
- explanatory meta-copy about “the human moment”
- a generic capability/tag grid

This kept the section inside a familiar award-portfolio grammar instead of making Ahmed himself the identity.

## Final static composition

The final H12 removes the decorative `HUMAN` device.

Current composition:
- Coffee brown resolves into a warm paper field
- Ahmed's name anchors the left side
- approved Ahmed cutout is the main visual subject
- portrait receives its own warm arched field for separation
- short truthful positioning copy only
- compact capabilities
- small `Based in / Egypt` line
- no CV/dashboard treatment
- no fake personal story
- no new font/effect system

Visible copy:
- `Ahmed Khair`
- `Advertising Visual Designer`
- `Advertising visual designer.`
- `Working across campaigns, posters and photo-led compositions.`
- Campaign Visuals
- Posters
- Photo Manipulation
- Advertising Design
- Based in / Egypt

## Mobile delta found and fixed

The first real mobile static render exposed a legacy prototype rule:

`.about-portrait` was still receiving `position: absolute` from an older mobile block.

Result:
- portrait field crossed the title/copy on 390 and 360

Fix:
- restore the H12 portrait to normal mobile document flow
- reset old left/right/bottom positioning

Fix commit:
`01295545c1f999658f778697a7d01e81fe8e08f9`

Static was re-rendered and visually re-checked after the fix.

## Motion decision

No extra pointer interaction was added.

Reason:
The brief allows one personal interaction maximum but does not require one.
The portrait and layout already create the human beat.
Adding a hover toy would make the section less restrained, not more personal.

Final H12 motion is structural only:
- Coffee -> About transition cue
- small metadata settling
- AHMED / KHAIR title reveal
- lede/body settling
- portrait field opens gently
- Ahmed cutout rises a small amount
- captions/capabilities/location settle in

No constant motion.
No pointer dependency.
No mobile-only fallback is required because there is no hover interaction.

## Focused QA

Dedicated harness:
`scripts/capture-about-h12.mjs`

Validated:
- Desktop 1440 x 900
- Desktop 1280 x 900
- Mobile 390 x 844
- Mobile 360 x 800

Focused metrics:

Desktop 1440:
- About height: 1045px
- portrait: 660 x 684
- portrait source: 1086 x 1448

Desktop 1280:
- About height: 1045px
- portrait: 586 x 684

Mobile 390:
- About height: 1562px
- portrait: 354 x 632
- portrait position: relative

Mobile 360:
- About height: 1521px
- portrait: 324 x 600
- portrait position: relative

All viewports:
- no horizontal overflow
- Coffee bottom joins About top
- About bottom joins Contact top (1px layout rounding on mobile only)
- portrait remains inside viewport
- portrait asset loads at full natural dimensions
- mobile portrait remains in document flow

## Final CI

Workflow:
`Portfolio CI`

Run:
`33252709043`

Result:
**SUCCESS**

Validated code head:
`b91d7e7fa91373097bd215855f6d149ca025b847`

Focused H12 artifact:
- name: `homepage-about-h12`
- artifact ID: `9714918636`
- digest: `sha256:02679566afd4711f9cb8e32b836ffc150d3444494ab4ad182c0a5a06b1363a81`

The same run also passed:
- Typecheck
- Build
- general desktop/mobile visuals
- general motion QA
- H7 interaction regression
- H8 BOCH regression
- H9 Shamadan regression
- H10 Criminal regression
- H11 Coffee regression
- H12 focused QA
- all artifact uploads

## Checkpoint identity delta

The post-H10 checkpoint said the site still risked reading as sophisticated “award-portfolio grammar” before the human layer existed.

H12 materially improves that delta by:
- removing generic `HUMAN` spectacle
- using Ahmed's real portrait
- moving from project darkness into a human paper field
- reducing explanatory copy
- keeping identity factual and specific

This delta will be reviewed again globally in H14.

# H12 CLOSED

Next gate:

**H13 — CONTACT / CLOSING FRAME**

Do not merge PR #2 yet.
Home remains open until H14 passes.
