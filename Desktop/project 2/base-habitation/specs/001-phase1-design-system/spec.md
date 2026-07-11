# Feature Specification: Phase 1 — Design System & Foundation

**Feature Branch**: `001-phase1-design-system`

**Created**: 2026-07-09

**Status**: Ready for planning

**Input**: User description: "Establish the foundational design system (colors, typography, spacing, imagery, and content strategy) that every subsequent phase will be built on top of."

**Governs against**: `constitution.md` v1.0

---

## 1. Summary

Establish the foundational design system (colors, typography, spacing, imagery, and content strategy) that every subsequent phase (Structure, Core Build, Motion, Liquid Glass, Hardening, Branding) will be built on top of. No page sections are implemented in this phase — only the reusable system and source data.

## 2. Goals

- Encode the approved visual identity (Section 3 of the constitution) into working design tokens.
- Define the full image asset plan (count, subject, style consistency) so no ad-hoc images get introduced later.
- Define the full content/copy strategy so all sections in later phases pull from one real content source (avoiding the reference project's "orphaned content file" mistake).
- Produce a base UI kit (buttons incl. the liquid-glass variant, section container, eyebrow label, headline component) ready to be composed into sections in Phase 3.

## 3. Requirements

### 3.1 Design Tokens

- **FR-001**: System MUST implement color tokens exactly as defined in constitution §3.1 (`--color-ink` `#0D0D0D`, `--color-paper` `#F2F2F0`, `--color-mist` `#8A8A87`, `--color-accent` `#C9A34E`).
- **FR-002**: System MUST load Clash Display, General Sans, and Fraunces (Italic optical setting) with no render-blocking third-party font requests — self-hosted or via `next/font` for performance.
- **FR-003**: System MUST define a type scale: display (hero), h1–h3, body, eyebrow/label — each mapped to the correct font family per constitution §3.2.
- **FR-004**: System MUST define spacing/section-padding scale and container widths, responsive across all breakpoints (375, 768, 1024, 1440, 1920+) per constitution §4/§5.
- **FR-005**: System MUST set `--radius: 0` (sharp corners) as the default per constitution §3.3.

### 3.2 Image Asset Plan

All imagery is AI-generated, depicting a single consistent fictional property ("the VELIXO residence"), matching the hero reference image's lighting, materials (black cladding, marble, glass, warm interior light), and time-of-day mood, so the whole site reads as one real, photographed home.

**Required asset list (~16–18 images total):**

| Group | Count | Subject |
|---|---|---|
| Hero | 1 | Existing approved hero image (dusk exterior) |
| Property overview | 1–2 | Wide/aerial daytime shot of the full residence |
| Image pairs (×4 pairs) | 8 | Living room + terrace · Kitchen + dining · Master suite + view · Pool + outdoor lounge |
| Features (sticky panel) | 3 | Close-up architectural/material details (glass facade, lighting detail, stone texture) |
| Gallery | 4–6 | Supplementary detail shots (entrance, garden, night exterior, interior corridor) |

- **FR-006**: Every image MUST be reviewed against the hero image for lighting/material/color consistency before being approved into the asset library.
- **FR-007**: Rejected/inconsistent images MUST NOT be used as placeholders — regenerate instead.
- **FR-008**: All images MUST use `next/image` with proper sizing/formats (AVIF/WebP) per constitution §II.
- **FR-009**: Plain `<img>` is permitted ONLY where parallax requires raw pixel control, and only after confirming no CLS/perf regression.

### 3.3 Content Strategy

- **FR-010**: A single typed content source file MUST hold all copy and structured data: nav items, hero headline, manifesto statement, section headings + eyebrows, values (6), features (3), FAQ groups, footer copy, Velixo.io credit line.
- **FR-011**: All copy MUST be original, written for the fictional VELIXO Estates brand — confident, minimal, premium real-estate tone (not copied or lightly reworded from the reference site).
- **FR-012**: Every component built in later phases MUST import from this content source — no inline/duplicated copy in components.
- **FR-013**: One decorative Fraunces-italic instance MUST be designated per relevant screen (hero highlighted word, section eyebrows, one manifesto pull-quote) — no ad-hoc extra usage introduced later without updating this spec.

### 3.4 Base UI Kit

- **FR-014**: Button component MUST support two variants:
  - **Standard** (solid/ink): background `--color-ink`, text `--color-paper`, hover state with `--color-accent`.
  - **Liquid-glass**: `backdrop-filter: blur()` + low-opacity fill + 1px translucent border + soft drop shadow per constitution §4.1.
- **FR-015**: Liquid-glass button MUST implement `@supports (backdrop-filter: blur(1px))` feature-detection — non-supporting browsers fall back to a solid semi-opaque background.
- **FR-016**: Liquid-glass button MUST reduce blur intensity on mobile viewports (lower blur radius than desktop) per constitution §4.1.
- **FR-017**: Section container component MUST enforce consistent padding/max-width across all breakpoints per FR-004.
- **FR-018**: Eyebrow label component MUST render in Fraunces italic with small-caps or uppercase tracking per the final type scale.
- **FR-019**: Headline component MUST support an inline "highlighted word" style (Fraunces italic within a Clash Display headline).

## 4. Key Entities

- **DesignTokens**: CSS custom properties + Tailwind theme mapping for colors, typography, spacing, radius.
- **ContentSource**: Typed TypeScript module (`src/data/velixo-content.ts`) exporting all structured copy/data.
- **AssetLibrary**: Directory of approved, style-consistent images under `public/images/`.
- **UIComponents**: Button, SectionContainer, Eyebrow, Headline — the reusable primitives.

## 5. Out of Scope (This Phase)

- Actual page section layouts/composition (Phase 3: Structure & Content Mapping).
- Scroll/parallax motion and Lenis wiring (Phase 4: Motion Layer).
- Non-hero liquid-glass usage beyond the button/nav components themselves (Phase 5: Liquid Glass & Interaction Polish).
- Performance/security auditing (Phase 6: Performance & Security Hardening).
- Velixo.io branding placement content (Phase 7: Velixo.io Branding Layer) — only the credit line copy is drafted here, placement is decided later.

## 6. Success Criteria

- **SC-001**: All design tokens are implemented and consumable via CSS variables / Tailwind theme config.
- **SC-002**: All 3 fonts load correctly with no layout shift (CLS < 0.1 confirmed).
- **SC-003**: Full image asset list generated, style-consistency-reviewed, and stored in `public/images/`.
- **SC-004**: Content source file created and populated with 100% of the copy needed for every planned section — no "TODO" placeholders remaining.
- **SC-005**: Button (both variants), section container, eyebrow, and headline components built and visually verified against constitution §3–§4.
- **SC-006**: Reduced-motion and low-power fallback behavior verified on the liquid-glass button variant.

## 7. User Scenarios & Testing

### User Story 1 — Design Token Consumption (Priority: P1)

A developer in Phase 3+ can import and use any design token (color, font, spacing) by referencing a CSS variable or Tailwind class — no hardcoded values.

**Why this priority**: Every subsequent phase depends on these tokens being correct and available.

**Independent Test**: Open the project in dev mode and confirm that `--color-ink`, `--color-paper`, `--color-mist`, `--color-accent` render correctly in a test div; confirm Clash Display, General Sans, and Fraunces load via DevTools Network tab with no CLS.

**Acceptance Scenarios**:
1. **Given** the project is running in dev mode, **When** a developer applies `text-ink` or `bg-paper` Tailwind classes, **Then** the correct hex values render.
2. **Given** a page using all three font families, **When** audited via Lighthouse, **Then** CLS < 0.1.

---

### User Story 2 — Content Source Completeness (Priority: P1)

A developer in Phase 3+ can build any planned section by importing structured data from the single content source — no inline copy needed.

**Why this priority**: Prevents the reference project's "orphaned/duplicated content" issue before any sections are built.

**Independent Test**: Grep the codebase for inline section copy; all should trace back to `src/data/velixo-content.ts`.

**Acceptance Scenarios**:
1. **Given** the content source file exists, **When** a developer imports `hero`, `values`, `features`, `faqGroups` from it, **Then** all fields are populated with real VELIXO copy (no TODOs).
2. **Given** the Fraunces-italic usage plan is defined, **When** a developer checks the spec, **Then** exactly one decorative instance is designated per screen.

---

### User Story 3 — Base UI Kit Visual Verification (Priority: P2)

A developer can render the Button (both variants), SectionContainer, Eyebrow, and Headline components in isolation and they match the constitution's visual identity.

**Why this priority**: These primitives are the building blocks for Phase 3; they must be correct before section composition begins.

**Independent Test**: Create a temporary `/dev` route rendering all four components; visually verify against constitution §3–§4.

**Acceptance Scenarios**:
1. **Given** the liquid-glass button renders over an image background, **When** viewed on desktop, **Then** backdrop-blur, translucent border, and soft shadow are visible.
2. **Given** the liquid-glass button renders in a browser without `backdrop-filter` support, **When** viewed, **Then** a solid semi-opaque background is shown (no empty/transparent button).
3. **Given** `prefers-reduced-motion` is active, **When** the liquid-glass button is viewed on mobile, **Then** blur radius is reduced per constitution §4.1.
4. **Given** the Headline component renders with a highlighted word, **When** viewed, **Then** the highlighted word appears in Fraunces italic within a Clash Display headline.

---

### User Story 4 — Image Asset Library Consistency (Priority: P2)

A reviewer can open the `public/images/` directory and confirm every image matches the hero reference's lighting, materials, and mood.

**Why this priority**: Inconsistent imagery would break the "one real photographed home" illusion that the entire showcase depends on.

**Independent Test**: Place all images side-by-side with the hero reference; confirm visual consistency.

**Acceptance Scenarios**:
1. **Given** the image asset library is populated, **When** a reviewer compares each image to the hero, **Then** all share consistent lighting (warm interior glow, dusk/dawn exterior mood), materials (black cladding, marble, glass), and color grading.
2. **Given** an image fails consistency review, **When** it is flagged, **Then** it is regenerated — not used as a placeholder.

## 8. Edge Cases

- What happens when Fontshare is unavailable during build? → Self-hosted font files must be committed to the repo as a fallback.
- How does the liquid-glass button render over a pure-white background? → The translucent fill must still be visible; test with both dark and light backgrounds.
- What if `next/image` optimization produces CLS for the parallax `<img>` use case? → Fall back to plain `<img>` with explicit width/height attributes only for those cases, per FR-009.

## 9. Assumptions

- The approved hero reference image is available and will be provided/stored in `public/images/hero/`.
- AI image generation tools are available to produce the full asset list.
- The project remains on Next.js 15 + Tailwind CSS v4 + shadcn/ui as initialized.
- Clash Display and General Sans are available via Fontshare's API for self-hosting or via a compatible `next/font` setup.
- Fraunces is available via Google Fonts (already supported by `next/font`).

---

**Phases this spec enables**: Phase 2 (Structure & Content Mapping), Phase 3 (Core Build), Phase 4 (Motion Layer), Phase 5 (Liquid Glass & Interaction Polish), Phase 6 (Performance & Security Hardening), Phase 7 (Velixo.io Branding Layer).
