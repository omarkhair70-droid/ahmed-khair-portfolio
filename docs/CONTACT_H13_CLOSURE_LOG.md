# Contact / Closing Frame — H13 Closure Log

Status: **CLOSED**

Branch: `portfolio/homepage-design-v2`  
PR: **#2 — Homepage design V2 — full motion art-direction pass**

## Purpose closed

H13 closes Home as a directed final frame rather than a standard corporate footer.

The section now:
- continues the warm paper field established by H12
- ends with one large statement
- exposes one verified professional action: Behance
- provides only useful return navigation
- avoids fake availability, email, phone, or social claims

## Reference roles re-checked

Primary roles:
- D Alcausin — concise conversation / direct ending
- Ali Ali — minimal navigation and confidence at the end of visual work

The final treatment takes only the behavioral principles:
- very little content
- direct action
- strong typography
- quiet finish

No reference layout was copied.

## Baseline problems removed

The old Contact prototype used:
- `End title / Start a conversation`
- large `MAKE IT / WORTH / LOOKING AT.`
- a brown/gold accent on `WORTH`

Problems:
- the kicker explained the section instead of simply being the section
- project-derived warm brown risked becoming accidental global branding
- the composition behaved like a separate chapter after H12

The final H13 removes those issues.

## Final composition

Visible hierarchy:

Metadata:
- Ahmed Khair
- Advertising Visual Designer
- 2026

Final statement:
- `LET'S MAKE`
- `SOMETHING`
- `WORTH LOOKING AT.`

Primary verified action:
- Behance
- `https://www.behance.net/ahmedkhairgemy`

Closing navigation:
- Selected work
- About
- Ahmed Khair © 2026
- Back to top

No unverified email / Instagram / LinkedIn / availability statement was introduced.

## Static deltas found and fixed

### Delta 01 — title too aggressive

First H13 render showed the final title overlapping too heavily, especially on mobile.
That contradicted the brief's “quietly and confidently” ending.

Fix:
- increase line separation
- reduce scale slightly
- reduce overlap

### Delta 02 — mobile clipping

Second render exposed `SOMETHING` clipping on 390 / 360.

Fix:
- smaller mobile-only second line
- reduced indent
- controlled line-height
- final line remains one readable end-title line

Final static refinement commit:
`cb4e9ad4ea068dd63cfae64ca4889ba7ea35fe38`

Final static was visually re-checked at:
- 1440
- 1280
- 390
- 360

## Motion

Final motion is intentionally minimal:

1. metadata settles
2. three title lines enter
3. Behance action enters
4. closing navigation enters

No new effect family.
No cursor gimmick.
No fireworks / particles.
No extra pointer dependency.

Reduced motion resets the same targets cleanly.

## Focused QA

Dedicated harness:
`scripts/capture-contact-h13.mjs`

Validated:
- Desktop 1440 x 900
- Desktop 1280 x 900
- Mobile 390 x 844
- Mobile 360 x 800

Checks passed:
- no horizontal overflow
- About joins Contact directly
- Contact is the final document frame
- exactly three closing title lines
- Behance points to the verified Ahmed profile
- Selected Work / About / Back to Top anchors exist

Final focused metrics:

Desktop 1440:
- page width: 1440 / 1440
- page height: 20064
- Contact top: 19212
- Contact height: 852
- Contact bottom: 20064

Desktop 1280:
- page width: 1280 / 1280
- page height: 19771
- Contact top: 18919
- Contact height: 852

Mobile 390:
- page width: 390 / 390
- page height: 15448
- Contact height: 744

Mobile 360:
- page width: 360 / 360
- page height: 14935
- Contact height: 706

The 1px mobile About -> Contact boundary difference is layout rounding and remains within the H13 assertion threshold.

## Final CI

Workflow:
`Portfolio CI`

Run:
`33254663124`

Result:
**SUCCESS**

Validated head:
`ae7e8fa882f0311ba7d101e265fa6d1579402375`

Focused H13 artifact:
- name: `homepage-contact-h13`
- artifact ID: `9715503451`
- digest: `sha256:9725d52eac67aec0dc7778b009cb76c0f32f9e0ae46c5920317ed5ce0c619275`

The same run also passed:
- Typecheck
- Build
- general desktop/mobile visuals
- general motion QA
- H7 Work Index regression
- H8 BOCH regression
- H9 Shamadan regression
- H10 Criminal regression
- H11 Coffee regression
- H12 About regression
- H13 focused QA
- all artifact uploads

# H13 CLOSED

Next gate:

**H14 — FULL HOMEPAGE INTEGRATION PASS**

H14 is not a new section.
It must judge Home as one complete visual film and explicitly revisit the full-page pacing delta recorded after H10.

Do not merge PR #2 until H14 closes.
