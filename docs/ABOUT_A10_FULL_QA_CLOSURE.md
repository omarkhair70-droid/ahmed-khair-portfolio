# About — A10 Full QA Closure

Status: **CLOSED**

Branch: `portfolio/about-page-v1`  
PR: **#3 — About page V1 — human profile art-direction pass**

## Scope

A10 judges the dedicated About page as one complete route after A9 navigation integration.

Required coverage from the locked continuation plan:
- Desktop 1440
- Desktop 1280
- Mobile 390
- Mobile 360
- full static page
- motion state
- reduced motion
- topbar/current route
- Behance
- selected-work return routes
- Contact return
- Back to top
- visible keyboard focus
- no horizontal overflow
- no accidental portrait/title crop
- no Home route regression

## Automated / browser checks

Dedicated harness:
`scripts/capture-about-a10.mjs`

Validated:
- page width equals viewport width at all four target sizes
- approved portrait loads at natural dimensions and remains inside viewport
- AHMED / KHAIR title lines remain inside viewport
- About is the active topbar route
- topbar retains Work / About / Contact
- selected-work links remain exactly:
  - `/#boch`
  - `/#shamadan`
  - `/#criminal`
  - `/#coffee`
- closing navigation retains Home / Selected Work / Contact / Back to top
- Behance still points to the verified Ahmed profile and opens externally
- no broken images
- keyboard focus is visibly rendered
- Back to top reaches the About title
- all four selected-work links reach their actual Home project sections
- Contact return reaches the actual Home closing frame
- reduced-motion targets settle with no transform / hidden-opacity residue

## Final layout metrics

Desktop 1440:
- width: 1440 / 1440
- page height: 3960
- portrait natural: 1086 x 1448
- portrait rendered inside viewport
- no title crop

Desktop 1280:
- width: 1280 / 1280
- page height: 3960
- no title or portrait crop

Mobile 390:
- width: 390 / 390
- page height: 3580
- portrait inside viewport
- no title crop

Mobile 360:
- width: 360 / 360
- page height: 3410
- portrait inside viewport
- no title crop

## Visual inspection

The A10 artifact was inspected by eye, not only by assertions.

Confirmed:
- desktop remains portrait-led rather than CV/dashboard-led
- the rectangular portrait field stays meaningfully different from Home H12
- Practice is a single controlled black editorial beat, not a card system
- Craft reads as observable visual vocabulary rather than invented process
- Behance remains a clean final frame
- mobile is independently composed instead of shrinking the desktop layout
- focus state remains visible without changing the visual system
- reduced-motion first frame remains fully composed
- BOCH / Coffee return captures show the correct project destinations
- Contact return shows the correct closing frame
- no visual regression justified reopening A3–A8

## Final QA

Workflow: `Portfolio CI`  
Run: `33261852045`  
Result: **SUCCESS**  
Validated head: `462e6da7b05bb13d5842c11bbdf709b7433f6572`

A10 artifact:
- name: `about-a10-full`
- artifact ID: `9717490514`
- digest: `sha256:e53b639da5e20c6d21e16939b0b5bedc1fd85de7cfa78834128311b5ee0be49e`

The same run also passed the complete Home H7–H14 regression sequence.

# A10 CLOSED

Next: **A11 — Final reference / delta pass**
