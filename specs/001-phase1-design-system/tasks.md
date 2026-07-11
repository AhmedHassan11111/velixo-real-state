# Tasks — Phase 1: Design System & Foundation

**Feature**: `001-phase1-design-system`
**Status**: Complete

---

## Completed Tasks

- [x] **T1**: Rewrite `globals.css` with VELIXO color tokens (ink, paper, mist, accent), `--radius: 0`, type scale utilities, glass button CSS with `@supports` fallback, mobile blur reduction, `prefers-reduced-motion` support
- [x] **T2**: Download Clash Display (4 weights) + General Sans (3 weights) `.woff2` files from Fontshare CDN to `public/fonts/`
- [x] **T3**: Create `src/lib/fonts.ts` — Clash Display + General Sans via `next/font/local`, Fraunces via `next/font/google`, all exposed as CSS variables
- [x] **T4**: Rewrite `src/app/layout.tsx` — wire all 3 font CSS variables on `<html>`, update metadata to VELIXO brand
- [x] **T5**: Create `src/data/content.ts` — full typed `SiteContent` interface + 100% original VELIXO copy (nav, hero, 4 image pairs, 3 features, 6 values, manifesto, 3 FAQ groups, contact, footer)
- [x] **T6**: Create `src/data/images.ts` — 24 image key → path/alt mappings with `getImage()` helper
- [x] **T7**: Modify `src/components/ui/button.tsx` — add `solid` (ink/paper/accent hover) and `glass` (`.glass-button` class) variants to CVA config
- [x] **T8**: Create `src/components/kit/SectionContainer.tsx` — max-width + responsive padding via CSS variables
- [x] **T9**: Create `src/components/kit/Eyebrow.tsx` — Fraunces italic, uppercase tracking via `.text-eyebrow` class
- [x] **T10**: Create `src/components/kit/Headline.tsx` — Clash Display with optional `highlight` prop rendering Fraunces italic accent span
- [x] **T11**: Update `next.config.ts` — remove basehabitation remote patterns, add AVIF/WebP format config
- [x] **T12**: Create dev showcase `page.tsx` — renders all UI kit components, color swatches, type scale, content source verification
- [x] **T13**: Remove old reference files (base-content.ts, sections/*, layout/SmoothScroll, layout/Navbar, layout/Footer)
- [x] **T14**: Verify clean build — `next build` passes with 0 errors, 0 warnings; `next lint` passes clean

## Remaining (Non-Code)

- [ ] **T15**: Generate ~16–18 AI images per the image asset plan in spec §3.2, store in `public/images/` subdirectories, review for style consistency against hero reference
- [ ] **T16**: Run Lighthouse on dev page — confirm CLS < 0.1, LCP < 2.5s
- [ ] **T17**: Visual diff Eyebrow/Headline against approved hero reference image
- [ ] **T18**: Grep check — no hardcoded hex values in components, no inline copy outside content.ts
