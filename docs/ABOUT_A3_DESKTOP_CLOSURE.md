# About Page — A3 Static Desktop Closure

Status: **CLOSED**

Branch: `portfolio/about-page-v1`
PR: **#3 — About page V1 — human profile art-direction pass**

## Scope

A3 closes the dedicated `/about` desktop static composition only.

No motion is part of this gate.

## Final desktop composition

The page is built as four compact editorial beats:

1. Portrait-led identity
2. Practice
3. Selected craft + selected work
4. Behance exit

The layout remains within the established portfolio visual system and does not introduce a new font or personal brand color.

## Visual evidence reviewed

Final A3 artifact:
- name: `about-a3-desktop`
- artifact ID: `9716403836`
- digest: `sha256:9d220f6f4ac8e2e3b67afe9bf991e8eabbad0aac424cf251c06ff127841e5cd7`
- run: `33257984779`
- head: `2c55040c1c9c2af13e6f44ecb3cf2f1e7f658b91`

Reviewed:
- Desktop 1440 full page
- Desktop 1280 full page
- 1440 focused hero / practice / craft / exit
- 1280 focused hero / practice / craft / exit

## Metrics

Desktop 1440:
- page width: 1440 / 1440
- page height: 3960
- hero: 1062px
- practice: 1152px
- craft: 1008px
- end: 738px
- portrait: 554 x 738
- portrait source: 1086 x 1448

Desktop 1280:
- page width: 1280 / 1280
- page height: 3960
- portrait: 539 x 738

No horizontal overflow.
Portrait loaded at full natural source dimensions.
Verified Behance link is correct.

## Delta history

First desktop render exposed a real maturity delta:

The Practice typography behaved too much like a campaign-scene stunt, with excessive collisions between:
- Campaign Visuals
- Posters
- Product Visuals
- Photo Manipulation

That contradicted the About brief:
the page should be more breathable and human than the campaign chapters.

Two refinements were made.

Final treatment:
- four distinct beats
- varied scale and horizontal offset
- no destructive collisions
- practice still feels authored, not like a card list

## Final visual verdict

Hero:
**PASS**
- Ahmed portrait is dominant
- title and portrait coexist without turning into a profile card
- warm paper continuity ties back to Home H12

Practice:
**PASS**
- visual hierarchy is strong
- all four practice categories are readable
- no campaign-scene collision language remains

Craft:
**PASS**
- editorial list instead of capability cards
- selected work sits as evidence, not a separate dashboard

End:
**PASS**
- Behance is the only major external action
- no fake contact information
- closing navigation remains minimal

# A3 CLOSED

Next:
**A4 — STATIC MOBILE COMPOSITION**

Required:
- 390 x 844
- 360 x 800
- independent mobile title / portrait relationship
- no accidental face/type collision
- readable factual metadata
- practice list may re-stack
- no horizontal overflow
- Behance and closing navigation remain easy to tap

No motion before A4 passes visually.
