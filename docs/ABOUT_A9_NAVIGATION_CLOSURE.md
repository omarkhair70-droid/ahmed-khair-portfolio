# About — A9 Navigation / Route Integration Closure

Status: **CLOSED**

Branch: `portfolio/about-page-v1`  
PR: **#3 — About page V1 — human profile art-direction pass**

## Purpose closed

A9 connects the dedicated `/about` route to the already-closed Home experience without weakening the existing Home gates.

Final route contract:
- Home About -> `/about`
- About current-page state -> `/about`
- About Work -> `/#work`
- About Contact -> `/#contact`
- Home closing About -> `/about`
- Home closing Selected Work -> `#work`
- Home closing Back to top -> `#top`

The destination must be visually reached. A matching URL hash alone is not a pass.

## Problem and bounded fix

The first A9 implementation exposed a real ordering problem between browser hash navigation, Home's pinned ScrollTrigger layout and Lenis initialization.

A cross-document CSS View Transition was also tested and removed after captured screenshots showed a ghost snapshot over the destination page.

The final Home behavior stays structural:
- cross-page hash loads defer Lenis
- browser pre-pin hash position is reset before final alignment
- ScrollTrigger measures the pinned Home layout from a stable state
- target alignment happens against the final document geometry
- CSS smooth scrolling does not fight hash recovery
- Lenis resumes only after alignment settles

No Home art direction was reopened.

## Regression-contract correction

After the route changed intentionally from Home `#about` to the dedicated `/about` page, the old H13 harness still required `#about`.

That stale test was corrected to require the actual closing navigation contract:
- `#work`
- `/about`
- `#top`

This was a test-contract update only. H13 visual design remained closed.

## Timing regression found during closure

Run `33261693522` showed that a fixed 350ms A9 wait could sample the page before final pinned-layout alignment under CI load, even though the same application state had passed the previous full run.

The A9 test was therefore changed from a fixed-delay assumption to a state-based wait for real target visibility.

The strong assertion was **not weakened**:
- the test still fails if Work is not actually in the viewport
- the test still fails if Contact is not actually in the viewport
- URL-only success is still rejected

## Final QA

Workflow: `Portfolio CI`  
Run: `33261852045`  
Result: **SUCCESS**  
Validated head: `462e6da7b05bb13d5842c11bbdf709b7433f6572`

A9 artifact:
- name: `about-a9-navigation`
- artifact ID: `9717483627`
- digest: `sha256:3267d78ec4803b15d3dff498018839026ea5c4c9a4e5d1c9d996d9a0bbc35590`

Validated on:
- Desktop 1440 Home -> About
- Desktop 1440 About -> Work
- Desktop 1440 About -> Contact
- Mobile 390 Home -> About
- Mobile 390 About -> Work
- Mobile 390 About -> Contact
- no horizontal overflow at returned destinations

## Visual inspection

Final captured destinations were inspected directly.

Confirmed:
- About arrival preserves the established identity language
- Work return visibly lands on the Work Index
- Contact return visibly lands on the closing frame
- mobile returns preserve the independent mobile composition
- no ghost transition remains
- no accidental route-state overlay was introduced

## Home regression

The same final successful run passed:
- general desktop/mobile Home visuals
- Home motion
- H7 Work Index
- H8 BOCH
- H9 El Shamadan
- H10 Criminal Anbr 6
- H11 Abd Allal Coffee
- H12 Home About
- H13 Contact
- H14 full Home integration

H14 regression artifact:
- artifact ID: `9717554510`
- digest: `sha256:6ba7fd6b37f2f6d0f44d0c42e83372733c7d5503c64a4533c3b7d6a1aeea68b7`

# A9 CLOSED

Next: **A10 — Full About QA**
