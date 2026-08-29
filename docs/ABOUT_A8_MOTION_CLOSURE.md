# About Page — A8 Motion Closure

Status: **CLOSED**

Branch: `portfolio/about-page-v1`
PR: **#3**

## Motion direction

About motion is intentionally quieter than Home project scenes.

Sequence:
1. factual metadata settles
2. AHMED / KHAIR enters
3. portrait field opens
4. Ahmed cutout settles into frame
5. statement / caption settle
6. Practice lines reveal as editorial beats
7. Craft rows reveal
8. Selected Work enters
9. Behance closes the page

No:
- constant portrait loop
- hover toy
- particles
- repeated parallax
- drag/pan
- new effect family

## Evidence

Artifact:
- `about-a8-motion`
- artifact ID: `9716608314`
- digest: `sha256:5fe1eb9c95bab6d910fea36545b5fcd103a5fdaabaf851637a3fd9a4f6ea804e`
- run: `33258665164`
- head: `6227b4d94621a51d47c7f4fc96aa858205b3f8ed`

Reviewed:
- Desktop 1440 intro early / settled
- Desktop motion checkpoints through Practice / Craft / End
- Mobile 390 intro early / settled
- Mobile motion checkpoints
- Desktop recorded WebM
- Mobile recorded WebM
- reduced-motion desktop
- reduced-motion mobile

Recorded duration:
- desktop: ~9.2s QA traversal
- mobile: ~7.52s QA traversal

## Reduced motion

Reduced-motion assertions passed:
- visible content remains opacity 1
- no required information depends on transforms or clip reveals

## Visual verdict

- intro establishes the person before scroll-linked content
- portrait does not float continuously
- Practice remains readable while moving
- mobile does not inherit a pointer-only behavior
- end frame remains restrained

# A8 CLOSED

Next:
**A9 — Navigation / route transitions**
