# About — A9 Navigation / Route Integration Closure

Status: **CLOSED**

Branch: `portfolio/about-page-v1`  
PR: **#3 — About page V1 — human profile art-direction pass**

## Purpose closed

A9 connects the dedicated `/about` route to the already-closed Home experience without weakening Home navigation or faking route continuity.

Required contract:
- Home About navigation opens `/about`
- About shows the correct current-page state
- About Work returns to `/#work`
- About Contact returns to `/#contact`
- the URL hash is not enough: the destination section must actually be visible
- desktop and mobile must behave the same way
- Home H1–H14 must not regress

## Problem found

The first cross-page implementation changed the URL correctly but Home remained visually at the Hero after returning to `/#work` or `/#contact`.

A CSS cross-document View Transition was also tested and removed because real screenshots exposed a ghost snapshot over the destination page.

The final fix therefore stays structural:
- Home owns explicit hash restoration
- pinned ScrollTrigger layout is allowed to settle before alignment
- cross-page hash loads defer Lenis until the target is aligned
- CSS smooth scrolling does not fight the recovery phase
- Lenis resumes after the destination is stable
- the strengthened visibility assertion remains intact

## Final integration contract

Home:
- topbar About -> `/about`
- closing About -> `/about`

About:
- Work -> `/#work`
- About -> `/about` with `aria-current="page"`
- Contact -> `/#contact`

Home closing navigation remains:
- Selected work -> `#work`
- About -> `/about`
- Back to top -> `#top`

The H13 regression harness was updated only to reflect the intentional dedicated About route. No H13 visual design was reopened.

## Final A9 QA

Workflow:
`Portfolio CI`

Run:
`33261335147`

Result:
**SUCCESS**

Validated head:
`a9303d9e17c5d33a6435dd1e78c6dd5a7138f25c`

A9 artifact:
- name: `about-a9-navigation`
- artifact ID: `9717344999`
- digest: `sha256:03e0ad7c7810518fe081363a7ce9d67b3ab62b9e4796378d363f8dc65f8440a5`

Validated:
- Desktop 1440 Home -> About
- Desktop 1440 About -> Work
- Desktop 1440 About -> Contact
- Mobile 390 Home -> About
- Mobile 390 About -> Work
- Mobile 390 About -> Contact
- no horizontal overflow at navigation destinations
- real destination visibility, not URL-only assertions

## Visual review

The final A9 captures were inspected directly.

Confirmed:
- About arrival keeps the established warm paper / AK / topbar language
- Work return visibly lands on the Work Index, not the Hero
- Contact return visibly lands on the closing frame, not the Hero
- mobile returns preserve the independent mobile composition
- no ghost transition frame remains
- no accidental crop or route flash was found in the captured destinations

## Home regression

The same successful run also passed:
- general desktop/mobile visuals
- general motion QA
- H7 Work Index
- H8 BOCH
- H9 Shamadan
- H10 Criminal
- H11 Coffee
- H12 Home About
- H13 Contact
- H14 full Home integration

H14 regression artifact:
- ID: `9717404469`
- digest: `sha256:a754e90c206d66d3a505547be71314c0832c88bc1976a42a4bfa822e17de00e7`

# A9 CLOSED

Next gate:

**A10 — FULL ABOUT QA**

A10 must treat the current dedicated About page as one complete experience across desktop, mobile, motion, reduced motion, navigation, verified links, focus, overflow and Home regression.
