# Tasks — Phase 5: Liquid Glass & Interaction Polish

**Feature**: `005-phase5-liquid-glass-interaction-polish`
**Status**: In progress

---

## Scope

Phase 5 builds on the completed Structure, Core Build, and Motion work. It should polish existing high-impact interactions without spreading decorative glass effects across every section.

## Completed Tasks

- [x] **T1**: Strengthen liquid-glass button hover, active, and focus-visible states while keeping WCAG-visible outlines.
- [x] **T2**: Add navbar scrolled state so the floating glass surface gains contrast after the hero.
- [x] **T3**: Add restrained nav link underline interaction using the accent token.
- [x] **T4**: Convert hero CTAs from inert buttons to real in-page links using existing `content.ts` copy.
- [x] **T5**: Convert contact CTA to a real mail link with token-based focus/hover states.
- [x] **T6**: Preserve mobile and `prefers-reduced-motion` blur reductions for glass surfaces.

## Remaining Verification

- [x] **T7**: Browser-check desktop hero/navbar loads over imagery without console errors.
- [x] **T8**: Browser-check mobile viewport has no horizontal overflow.
- [ ] **T9**: Confirm keyboard focus order and focus rings for nav, hero CTAs, and contact CTA.
- [x] **T10**: Re-run build after dependency state is clean.
