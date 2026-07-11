# Project Constitution — Velixo Estates Showcase

## 1. Purpose & Context

This project is a portfolio showcase built and owned by Velixo.io, demonstrating premium web design/development capability through a fictional luxury real-estate brand ("VELIXO"). It is not a client deliverable — it is a living demo that visitors should perceive as a real, polished, high-end real estate website.

Velixo.io attribution must be present but understated (e.g., a small "Designed & built by Velixo.io" credit in the footer, or a dedicated "About this project" section) — it must never compete visually with the VELIXO brand experience itself.

Base reference: Structure and motion patterns are adapted from an existing Next.js clone (Base Habitation), but the visual identity, copy, and color system are entirely original to this project (see Section 3). No verbatim text, brand assets, or copyrighted imagery from the reference site may be reused.

## 2. Non-Negotiable Principles

### I. Design Fidelity

Every screen must visually align with the approved hero reference image (modern black-glass villa architecture, monochrome palette, warm accent lighting). New sections must extend this language, not introduce competing aesthetics.

### II. Performance First

Target Core Web Vitals: LCP < 2.5s, INP < 200ms, CLS < 0.1 on 4G mobile.

All images use next/image with proper sizing/formats (AVIF/WebP) — plain `<img>` only where parallax requires raw pixel control, and only after confirming no CLS/perf regression.

Animation and blur effects must degrade gracefully on low-power devices (see Section 5).

No unused/orphaned CSS or dead animation classes may ship — if defined, it must be wired to a component.

### III. Security by Default

No secrets, API keys, or internal paths exposed client-side.

All forms (e.g., contact form) validate and sanitize input before any submission logic is added.

Dependencies kept minimal and audited; no unmaintained or unnecessary packages.

Standard security headers (CSP, X-Content-Type-Options, Referrer-Policy) configured at the hosting/edge layer before launch.

### IV. Accessibility & Responsiveness

Fully responsive from 375px to 4K, tested at all major breakpoints (375, 768, 1024, 1440, 1920+).

`prefers-reduced-motion` disables/reduces all decorative motion (parallax, kenburns, liquid glass blur intensity).

Text-on-glass and text-on-image must always meet minimum contrast (WCAG AA), using scrim/shadow layers where needed.

### V. Restraint in Decoration

Distinctive visual devices (decorative type, liquid glass, heavy parallax) are used sparingly and intentionally. If a device is used everywhere, it stops being distinctive. Default to the clean system; deviate only at defined high-impact moments (see Section 4).

## 3. Visual Identity

### 3.1 Color System

| Token | Value | Usage |
|---|---|---|
| `--color-ink` | `#0D0D0D` | Primary text, dark backgrounds |
| `--color-paper` | `#F2F2F0` | Light section backgrounds |
| `--color-mist` | `#8A8A87` | Secondary text, borders, dividers |
| `--color-accent` | `#C9A34E` | CTAs, hover states, fine detail lines — used sparingly, never as a large fill |

Accent gold must read as a detail, not a block color — buttons, underlines, icon strokes, small badges only.

### 3.2 Typography

| Role | Font | Notes |
|---|---|---|
| Display / Headlines | Clash Display (Fontshare, free/commercial-safe) | Bold, geometric, used for large impact headlines and the VELIXO wordmark treatment |
| Body / UI | General Sans (Fontshare, free/commercial-safe) | Paragraphs, nav, forms, labels |
| Decorative accent | Fraunces (Google Fonts, Italic/"wonky" optical setting) | Used only for: (a) small eyebrow labels above section headings, (b) one highlighted word within a hero/section headline, (c) a single pull-quote/manifesto moment. Never for body copy or more than one decorative instance per screen. |

Maximum of 3 font families total — no additional families may be introduced without revisiting this document.

### 3.3 Corners & Surface Language

Sharp, architectural corners preferred (`border-radius: 0` or minimal) to match the reference image's editorial/architectural feel — confirm final value during Design System phase.

## 4. Signature Interaction Patterns

### 4.1 Liquid Glass (Glassmorphism)

Applied specifically to: Hero CTA button(s), and optionally the navbar when floating over imagery.

**Required implementation rules:**

- `backdrop-filter: blur()` + low-opacity white/black fill + 1px translucent border + soft drop shadow.
- Blur intensity reduced on mobile viewports to protect scroll performance (lower blur radius than desktop).
- `@supports (backdrop-filter: blur(1px))` feature-detection required — non-supporting browsers fall back to a solid semi-opaque background so buttons never render "empty."
- Text inside glass elements must retain WCAG AA contrast in front of any underlying image content.

### 4.2 Scroll & Parallax Motion

- Smooth scroll via Lenis (global).
- Section entrances via `whileInView` fade/rise, triggered once, with sensible viewport margins.
- Parallax reserved for hero and image-pair type sections — not applied indiscriminately to every block.
- All motion respects `prefers-reduced-motion`.

## 5. Device & Performance Constraints

- Mobile-first performance budget: reduce blur radius, animation complexity, and simultaneous parallax layers on small/low-power viewports.
- Video/hero background assets must have a static poster/fallback image for slow connections.
- Real content data (copy, images) must be wired through a single content source file — no duplicated/inline data across components (lesson carried over from the reference project's `base-content.ts` issue).

## 6. Content Rules

- All text (headlines, section copy, FAQ, forms) is original to Velixo Estates — no reused copy from the reference site.
- Property/feature content should read as a believable luxury real-estate brand, consistent with the visual identity above.
- Velixo.io service attribution appears in exactly one clearly-defined location (footer credit + optional "About this project" section) — defined at Spec phase, not improvised later.

## 7. Governance

- This constitution is the source of truth for all subsequent `spec.md` / `plan.md` / `tasks.md` artifacts in this project.
- Any change to color, typography, or the liquid-glass/motion rules requires updating this document first, before implementation changes.
- Phases proceed in order: **Design System → Structure & Content Mapping → Core Build → Motion Layer → Liquid Glass & Interaction Polish → Performance & Security Hardening → Velixo.io Branding Layer**.

---

**Version**: 1.0
**Status**: Approved for Phase 1 (Design System) kickoff
