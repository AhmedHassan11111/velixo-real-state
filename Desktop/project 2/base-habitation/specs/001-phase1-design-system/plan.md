# Implementation Plan — Phase 1: Design System & Foundation

**Project**: Velixo Estates Showcase
**Governs against**: `constitution.md` v1.0
**Implements**: `specs/001-phase1-design-system/spec.md`

---

## 1. Tech Stack (carried over from reference project, reused where sound)

- **Framework**: Next.js 15 (App Router), TypeScript
- **Styling**: Tailwind CSS v4
- **UI primitives**: shadcn/ui (kept minimal — only what's actually used, unlike the reference project's unused CSS issue)
- **Fonts**: `next/font/google` (Fraunces) + `next/font/local` for Clash Display and General Sans (both are Fontshare fonts, NOT on Google Fonts — must be self-hosted as `.woff2`)
- **Icons**: `lucide-react` (only if needed in Phase 1 components)
- **Existing deps reused**: `class-variance-authority`, `clsx`, `tailwind-merge`, `@base-ui/react` (shadcn base-nova preset)

> **Correction from input plan**: General Sans is a Fontshare font, not a Google Font. Both Clash Display and General Sans must be self-hosted via `next/font/local`. Only Fraunces is available via `next/font/google`.

---

## 2. File Structure

New and modified files for Phase 1 (existing reference files will be replaced/repurposed):

```
src/
├── app/
│   ├── globals.css          ← REWRITE: VELIXO design tokens, type scale, base styles
│   ├── layout.tsx           ← REWRITE: wire 3 font CSS variables, update metadata
│   ├── page.tsx             ← TEMPORARY: dev showcase route for UI kit verification
│   └── favicon.ico
├── components/
│   ├── ui/                  ← shadcn primitives (existing: button, input, accordion, carousel)
│   │   └── button.tsx       ← MODIFY: add `solid` and `glass` variants
│   └── kit/                 ← NEW: VELIXO base UI kit
│       ├── SectionContainer.tsx
│       ├── Eyebrow.tsx
│       ├── Headline.tsx
│       └── GlassButton.tsx  ← (if glass needs to be separate from shadcn Button)
├── data/
│   ├── content.ts           ← NEW: single typed content source (replaces base-content.ts)
│   └── images.ts            ← NEW: image key → path + alt mapping
├── lib/
│   ├── fonts.ts             ← NEW: font loading config (3 families → CSS variables)
│   └── utils.ts             ← existing cn() helper, unchanged
└── public/
    ├── fonts/
    │   ├── ClashDisplay-Variable.woff2    ← self-hosted from Fontshare
    │   └── GeneralSans-Variable.woff2     ← self-hosted from Fontshare
    └── images/
        ├── hero/
        ├── property/
        ├── pairs/
        ├── features/
        └── gallery/
```

**Files removed/retired** (reference project artifacts):
- `src/data/base-content.ts` → replaced by `src/data/content.ts`
- `src/components/sections/*` → not touched this phase (Phase 3)
- `src/components/layout/*` → not touched this phase (Phase 3/4)

---

## 3. Design Tokens Implementation

### `src/app/globals.css` — Tailwind v4 `@theme inline` block:

```css
@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";

@custom-variant dark (&:is(.dark *));

:root {
  /* ── VELIXO Color System (constitution §3.1) ── */
  --color-ink:    #0D0D0D;
  --color-paper:  #F2F2F0;
  --color-mist:   #8A8A87;
  --color-accent: #C9A34E;

  /* ── shadcn semantic mapping ── */
  --background: var(--color-paper);
  --foreground: var(--color-ink);
  --card:        #FFFFFF;
  --card-foreground: var(--color-ink);
  --popover:     #FFFFFF;
  --popover-foreground: var(--color-ink);
  --primary: var(--color-ink);
  --primary-foreground: var(--color-paper);
  --secondary: var(--color-mist);
  --secondary-foreground: var(--color-paper);
  --muted: #E8E8E5;
  --muted-foreground: var(--color-mist);
  --accent: var(--color-accent);
  --accent-foreground: var(--color-ink);
  --destructive: #DC2626;
  --border: #D1D1CE;
  --input: #D1D1CE;
  --ring: var(--color-accent);

  /* ── Corners (constitution §3.3: sharp) ── */
  --radius: 0rem;

  /* ── Font families (wired from lib/fonts.ts) ── */
  --font-display: var(--clash-display);
  --font-body:    var(--general-sans);
  --font-decorative: var(--fraunces);

  /* ── Type scale ── */
  --text-display: clamp(3rem, 8vw, 8.5rem);
  --text-h1: clamp(2.25rem, 5vw, 4rem);
  --text-h2: clamp(1.75rem, 4vw, 3rem);
  --text-h3: clamp(1.25rem, 2.5vw, 1.75rem);
  --text-body: 1rem;
  --text-eyebrow: 0.75rem;

  /* ── Spacing / container ── */
  --section-pad: clamp(1rem, 3vw, 2.5rem);
  --container-max: 1440px;
  --container-wide: 1920px;
}

@theme inline {
  --color-ink: var(--color-ink);
  --color-paper: var(--color-paper);
  --color-mist: var(--color-mist);
  --color-accent: var(--color-accent);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-body);
  --font-heading: var(--font-display);
  --font-decorative: var(--font-decorative);
  --radius-sm: 0;
  --radius-md: 0;
  --radius-lg: 0;
  --radius-xl: 0;
  /* ... other shadcn mappings carried over ... */
}
```

### Type scale utility classes (defined in `@layer base`):

```css
@layer base {
  .text-display    { font-size: var(--text-display); line-height: 0.9; letter-spacing: -0.02em; font-family: var(--font-display); font-weight: 700; }
  .text-h1         { font-size: var(--text-h1); line-height: 1.05; letter-spacing: -0.015em; font-family: var(--font-display); font-weight: 600; }
  .text-h2         { font-size: var(--text-h2); line-height: 1.1; letter-spacing: -0.01em; font-family: var(--font-display); font-weight: 600; }
  .text-h3         { font-size: var(--text-h3); line-height: 1.2; font-family: var(--font-display); font-weight: 500; }
  .text-body       { font-size: var(--text-body); line-height: 1.6; font-family: var(--font-body); }
  .text-eyebrow    { font-size: var(--text-eyebrow); font-family: var(--font-decorative); font-style: italic; letter-spacing: 0.08em; text-transform: uppercase; }

  body {
    font-family: var(--font-body);
    background: var(--color-paper);
    color: var(--color-ink);
    text-rendering: geometricPrecision;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  ::selection {
    background: var(--color-accent);
    color: var(--color-ink);
  }
}
```

---

## 4. Font Loading Strategy

### `src/lib/fonts.ts`:

```typescript
import { GoogleFont, LocalFont } from "next/font";

// Fraunces — Google Fonts (italic + variable optical axis)
const fraunces = GoogleFont({
  families: [{
    family: "Fraunces",
    subsets: ["latin"],
    style: ["italic"],
    axes: ["SOFT", "WONK"],
    variable: "--fraunces",
    display: "swap",
  }],
});

// Clash Display — self-hosted from Fontshare (not on Google Fonts)
const clashDisplay = LocalFont({
  families: [{
    family: "ClashDisplay",
    src: [
      {
        path: "../../public/fonts/ClashDisplay-Variable.woff2",
        weight: "200 700",
        style: "normal",
      },
    ],
    variable: "--clash-display",
    display: "swap",
    preload: true,
  }],
});

// General Sans — self-hosted from Fontshare (not on Google Fonts)
const generalSans = LocalFont({
  families: [{
    family: "GeneralSans",
    src: [
      {
        path: "../../public/fonts/GeneralSans-Variable.woff2",
        weight: "200 700",
        style: "normal",
      },
    ],
    variable: "--general-sans",
    display: "swap",
    preload: true,
  }],
});

export const fonts = {
  clashDisplay: clashDisplay.variable,
  generalSans: generalSans.variable,
  fraunces: fraunces.variable,
};
```

> **Note**: `next/font` API shape may differ slightly in Next.js 15 — the exact import syntax (e.g., `next/font/google` vs `next/font/local`) will be confirmed during implementation. The key principle: all 3 families exposed as CSS variables (`--clash-display`, `--general-sans`, `--fraunces`), applied once on `<html>` in `layout.tsx`.

### `src/app/layout.tsx` (rewritten):

```tsx
import type { Metadata } from "next";
import "./globals.css";
import { fonts } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "VELIXO Estates — Modern Luxury Living",
  description: "VELIXO Estates. Where architecture meets landscape.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn("h-full antialiased", fonts.clashDisplay, fonts.generalSans, fonts.fraunces)}
    >
      <body className="min-h-full bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}
```

**Acceptance check**: Lighthouse/PageSpeed shows no font-related CLS; fonts do not block first paint. `preload: true` only on the variable fonts actually used on first render.

---

## 5. Content Schema (`src/data/content.ts`)

```typescript
// ═══════════════════════════════════════════════
// VELIXO Estates — Single Content Source
// All copy is original. No references to Base Habitation.
// ═══════════════════════════════════════════════

export interface NavItem {
  label: string;
  href: string;
}

export interface HeroContent {
  eyebrow: string;           // Fraunces italic, decorative
  headline: string;          // Clash Display, with one highlighted word
  highlightedWord: string;   // rendered in Fraunces italic
  subheadline: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export interface SectionContent {
  id: string;
  eyebrow: string;
  title: string;
  copy: string;
}

export interface ValueItem {
  title: string;
  subtitle: string;
  copy: string;
  imageKey: string;          // resolves via images.ts
}

export interface FeatureItem {
  title: string;
  copy: string;
  imageKey: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQGroup {
  label: string;
  items: FAQItem[];
}

export interface ImagePairContent {
  eyebrow: string;
  title: string;
  copy: string;
  leftLabel: string;
  rightLabel: string;
  leftImageKey: string;
  rightImageKey: string;
}

export interface FooterContent {
  headline: string;
  ctaLabel: string;
  ctaHref: string;
  columns: {
    title: string;
    links: NavItem[];
  }[];
  velixoCredit: string;      // "Designed & built by Velixo.io"
  legal: string;
}

export interface SiteContent {
  nav: NavItem[];
  hero: HeroContent;
  propertyOverview: SectionContent;
  imagePairs: ImagePairContent[];
  features: FeatureItem[];
  values: ValueItem[];
  manifesto: {
    eyebrow: string;
    statements: { title: string; copy: string }[];
  };
  faqGroups: FAQGroup[];
  contact: SectionContent;
  footer: FooterContent;
}

export const content: SiteContent = {
  nav: [
    { label: "The Residence", href: "#residence" },
    { label: "Architecture", href: "#architecture" },
    { label: " Lifestyle", href: "#lifestyle" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "VELIXO Estates",
    headline: "Where architecture meets landscape.",
    highlightedWord: "landscape",
    subheadline: "A singular residence, sculpted from glass, stone, and light.",
    ctaPrimary: "Explore the Residence",
    ctaSecondary: "Book a Private Viewing",
  },
  propertyOverview: {
    id: "residence",
    eyebrow: "The Residence",
    title: "One home. Every detail considered.",
    copy: "Conceived as a single, continuous living volume, the VELIXO residence dissolves the boundary between interior and landscape. Black cladding, floor-to-ceiling glass, and warm interior light create a retreat that feels both architectural and deeply human.",
  },
  imagePairs: [
    {
      eyebrow: "Living Spaces",
      title: "Light, space, and the quiet between them.",
      copy: "The main living volume opens eastward to the valley. Morning light enters uninterrupted; evening warmth is held in stone and timber.",
      leftLabel: "Living Room",
      rightLabel: "Terrace",
      leftImageKey: "pair-living-living",
      rightImageKey: "pair-living-terrace",
    },
    {
      eyebrow: "Kitchen & Dining",
      title: "Designed for gathering, refined for living.",
      copy: "A continuous island in honed marble anchors the kitchen. Cabinetry disappears into the wall plane — the room reads as a single, uninterrupted surface.",
      leftLabel: "Kitchen",
      rightLabel: "Dining",
      leftImageKey: "pair-kitchen-kitchen",
      rightImageKey: "pair-kitchen-dining",
    },
    {
      eyebrow: "Private Quarters",
      title: "A retreat within a retreat.",
      copy: "The master suite occupies the west wing, oriented to catch the last light. Floor-to-ceiling glass frames the tree line; blackout integration is seamless.",
      leftLabel: "Master Suite",
      rightLabel: "View",
      leftImageKey: "pair-suite-suite",
      rightImageKey: "pair-suite-view",
    },
    {
      eyebrow: "Outdoor",
      title: "The landscape is the final room.",
      copy: "A lap pool extends from the terrace toward the valley edge. The outdoor lounge is defined by a single cantilevered roof plane — shelter without enclosure.",
      leftLabel: "Pool",
      rightLabel: "Outdoor Lounge",
      leftImageKey: "pair-outdoor-pool",
      rightImageKey: "pair-outdoor-lounge",
    },
  ],
  features: [
    {
      title: "Architectural integrity",
      copy: "Every junction is resolved. Materials meet in deliberate, exposed connections — no trim, no覆盖. The structure is the finish.",
      imageKey: "feature-facade",
    },
    {
      title: "Passive performance",
      copy: "Triple-glazed windows, continuous insulation, and airtight construction reduce energy demand to a fraction of conventional homes. Comfort is constant, silent, and invisible.",
      imageKey: "feature-lighting",
    },
    {
      title: "Material honesty",
      copy: "Black-stained cedar, honed marble, raw steel, and warm oak. Each material is chosen for how it ages — the home will deepen in character, not deteriorate.",
      imageKey: "feature-stone",
    },
  ],
  values: [
    {
      title: "Permanence",
      subtitle: "Built to last generations",
      copy: "The VELIXO residence is not a trend. It is a commitment to materials, form, and craft that will outlast the moment.",
      imageKey: "value-permanence",
    },
    {
      title: "Discretion",
      subtitle: "Luxury without noise",
      copy: "True luxury doesn't announce itself. It reveals itself in proportion, in light, in the quality of a silence.",
      imageKey: "value-discretion",
    },
    {
      title: "Integration",
      subtitle: "Site and structure as one",
      copy: "The home is not placed on the land — it grows from it. Every orientation, every opening responds to the specific conditions of the site.",
      imageKey: "value-integration",
    },
    {
      title: "Sustainability",
      subtitle: "Responsibility, not compromise",
      copy: "Passive design, local materials, and a fabric-first approach make the VELIXO residence as responsible as it is refined.",
      imageKey: "value-sustainability",
    },
    {
      title: "Craft",
      subtitle: "Detail as devotion",
      copy: "The difference between good and exceptional is in the details you only notice after months of living with them. We design for that discovery.",
      imageKey: "value-craft",
    },
    {
      title: "Serenity",
      subtitle: "The ultimate amenity",
      copy: "In a world of noise, the most valuable thing a home can offer is quiet. The VELIXO residence is engineered for stillness.",
      imageKey: "value-serenity",
    },
  ],
  manifesto: {
    eyebrow: "The VELIXO Philosophy",
    statements: [
      {
        title: "We build for those who notice.",
        copy: "The person who runs a hand along a wall and feels the quality of the plaster. Who notices the way a door closes. Who understands that luxury is not added — it is intrinsic.",
      },
      {
        title: "Less, but better.",
        copy: "Every element earns its place. If it doesn't serve the experience of living in the home, it isn't there.",
      },
      {
        title: "The home is the landscape.",
        copy: "Glass dissolves the wall. The boundary between inside and out becomes a frame, not a barrier.",
      },
    ],
  },
  faqGroups: [
    {
      label: "The Residence",
      items: [
        {
          question: "What is the VELIXO Residence?",
          answer: "A single, site-specific luxury home designed as a portfolio showcase for Velixo.io. It represents the studio's approach to architecture, material, and spatial experience.",
        },
        {
          question: "Can I visit the property?",
          answer: "The residence is a conceptual showcase. Private viewings of the digital experience can be arranged by contacting Velixo.io directly.",
        },
      ],
    },
    {
      label: "Architecture & Materials",
      items: [
        {
          question: "What materials are used?",
          answer: "Black-stained cedar cladding, honed marble, raw architectural steel, and warm white oak interiors. Every material is selected for longevity, performance, and visual character.",
        },
        {
          question: "How is the home heated and cooled?",
          answer: "A passive-first approach: continuous insulation, airtight construction, triple-glazed windows, and strategic solar orientation minimize mechanical demand. Supplementary systems are minimal and invisible.",
        },
      ],
    },
    {
      label: "About This Project",
      items: [
        {
          question: "Is VELIXO a real estate developer?",
          answer: "No. VELIXO Estates is a fictional brand created as a design and development showcase by Velixo.io, a digital design and development studio.",
        },
        {
          question: "Who designed and built this website?",
          answer: "This experience was designed and built by Velixo.io as a demonstration of premium web design and development capability.",
        },
      ],
    },
  ],
  contact: {
    id: "contact",
    eyebrow: "Begin the Conversation",
    title: "Curious about the VELIXO approach?",
    copy: "Whether you're exploring a project of your own or simply appreciate exceptional design, we'd love to hear from you.",
  },
  footer: {
    headline: "VELIXO Estates",
    ctaLabel: "Contact Velixo.io",
    ctaHref: "#contact",
    columns: [
      {
        title: "Explore",
        links: [
          { label: "The Residence", href: "#residence" },
          { label: "Architecture", href: "#architecture" },
          { label: "Lifestyle", href: "#lifestyle" },
        ],
      },
      {
        title: "Connect",
        links: [
          { label: "Instagram", href: "#" },
          { label: "LinkedIn", href: "#" },
          { label: "Email", href: "mailto:hello@velixo.io" },
        ],
      },
    ],
    velixoCredit: "Designed & built by Velixo.io",
    legal: "© 2026 VELIXO Estates. A Velixo.io showcase project.",
  },
};
```

### `src/data/images.ts`:

```typescript
export interface ImageAsset {
  path: string;
  alt: string;
}

export const images: Record<string, ImageAsset> = {
  // Hero
  "hero": {
    path: "/images/hero/hero-dusk.jpg",
    alt: "VELIXO residence at dusk — black glass villa with warm interior light",
  },
  // Property overview
  "property-aerial": {
    path: "/images/property/aerial-day.jpg",
    alt: "Aerial daytime view of the VELIXO residence and surrounding landscape",
  },
  "property-wide": {
    path: "/images/property/wide-day.jpg",
    alt: "Wide daytime shot of the VELIXO residence facade",
  },
  // Image pairs — Living
  "pair-living-living": {
    path: "/images/pairs/living-room.jpg",
    alt: "Main living room with floor-to-ceiling glass and warm oak floors",
  },
  "pair-living-terrace": {
    path: "/images/pairs/terrace.jpg",
    alt: "Terrace extending from the living room toward the valley",
  },
  // Image pairs — Kitchen
  "pair-kitchen-kitchen": {
    path: "/images/pairs/kitchen.jpg",
    alt: "Kitchen with honed marble island and flush cabinetry",
  },
  "pair-kitchen-dining": {
    path: "/images/pairs/dining.jpg",
    alt: "Dining area adjacent to the kitchen, framed by glass",
  },
  // Image pairs — Suite
  "pair-suite-suite": {
    path: "/images/pairs/master-suite.jpg",
    alt: "Master suite with western exposure and blackout integration",
  },
  "pair-suite-view": {
    path: "/images/pairs/suite-view.jpg",
    alt: "View from the master suite looking onto the tree line",
  },
  // Image pairs — Outdoor
  "pair-outdoor-pool": {
    path: "/images/pairs/pool.jpg",
    alt: "Lap pool extending from the terrace toward the valley edge",
  },
  "pair-outdoor-lounge": {
    path: "/images/pairs/outdoor-lounge.jpg",
    alt: "Outdoor lounge under cantilevered roof plane",
  },
  // Features (sticky panel)
  "feature-facade": {
    path: "/images/features/glass-facade.jpg",
    alt: "Close-up of glass facade detail — mullion junction",
  },
  "feature-lighting": {
    path: "/images/features/lighting-detail.jpg",
    alt: "Architectural lighting detail at dusk",
  },
  "feature-stone": {
    path: "/images/features/stone-texture.jpg",
    alt: "Honed marble surface texture close-up",
  },
  // Gallery
  "gallery-entrance": {
    path: "/images/gallery/entrance.jpg",
    alt: "Main entrance of the VELIXO residence",
  },
  "gallery-garden": {
    path: "/images/gallery/garden.jpg",
    alt: "Landscaped garden adjacent to the residence",
  },
  "gallery-night": {
    path: "/images/gallery/night-exterior.jpg",
    alt: "VELIXO residence at night with illuminated interior",
  },
  "gallery-corridor": {
    path: "/images/gallery/corridor.jpg",
    alt: "Interior corridor with continuous oak flooring",
  },
  // Values
  "value-permanence": {
    path: "/images/values/permanence.jpg",
    alt: "Detail representing permanence — stone and steel junction",
  },
  "value-discretion": {
    path: "/images/values/discretion.jpg",
    alt: "Detail representing discretion — muted material palette",
  },
  "value-integration": {
    path: "/images/values/integration.jpg",
    alt: "Detail representing integration — home and landscape junction",
  },
  "value-sustainability": {
    path: "/images/values/sustainability.jpg",
    alt: "Detail representing sustainability — natural material texture",
  },
  "value-craft": {
    path: "/images/values/craft.jpg",
    alt: "Detail representing craft — precision joinery close-up",
  },
  "value-serenity": {
    path: "/images/values/serenity.jpg",
    alt: "Detail representing serenity — quiet water reflection",
  },
};
```

**Rule enforced from spec §3.3**: no component may hardcode copy or image paths directly; everything resolves through these two files.

---

## 6. Base UI Kit — Implementation Notes

### `src/components/ui/button.tsx` (modified)

Add two VELIXO-specific variants to the existing `cva` config:

```typescript
// Added to buttonVariants variants.variant:
solid: "bg-ink text-paper hover:bg-accent hover:text-ink transition-colors duration-300",
glass: "bg-white/10 backdrop-blur-lg border border-white/20 text-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:bg-white/15 transition-all duration-300",
```

### Glass variant CSS (in `globals.css`):

```css
/* ── Liquid Glass (constitution §4.1) ── */

.glass-button {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.glass-button:hover {
  background: rgba(255, 255, 255, 0.14);
  border-color: rgba(255, 255, 255, 0.28);
  box-shadow: 0 6px 28px rgba(0, 0, 0, 0.2);
}

/* Mobile: reduced blur for scroll performance (constitution §4.1) */
@media (max-width: 768px) {
  .glass-button {
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
  }
}

/* Feature-detection fallback (constitution §4.1) */
@supports not (backdrop-filter: blur(1px)) {
  .glass-button {
    background: rgba(13, 13, 13, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.1);
    /* No blur — solid semi-opaque so button never renders "empty" */
  }
}

/* Reduced motion: disable blur animation transitions */
@media (prefers-reduced-motion: reduce) {
  .glass-button {
    transition: none;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
  }
}
```

Text/icon inside always rendered with a subtle `text-shadow` to guarantee contrast per constitution §IV.

### `src/components/kit/SectionContainer.tsx`:

```tsx
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  id?: string;
}

export function SectionContainer({ children, className, as: Tag = "section", id }: SectionContainerProps) {
  return (
    <Tag
      id={id}
      className={cn("mx-auto w-full", className)}
      style={{
        maxWidth: "var(--container-max)",
        paddingLeft: "var(--section-pad)",
        paddingRight: "var(--section-pad)",
      }}
    >
      {children}
    </Tag>
  );
}
```

Enforces `max-width` + responsive horizontal padding (`clamp()`-based) matching constitution's breakpoint list.

### `src/components/kit/Eyebrow.tsx`:

```tsx
import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "p" | "label";
}

export function Eyebrow({ children, className, as: Tag = "span" }: EyebrowProps) {
  return (
    <Tag className={cn("text-eyebrow text-mist", className)}>
      {children}
    </Tag>
  );
}
```

Renders Fraunces italic, small size, wide letter-spacing, uppercase — via the `.text-eyebrow` utility class.

### `src/components/kit/Headline.tsx`:

```tsx
import { cn } from "@/lib/utils";

interface HeadlineProps {
  children: string;
  highlight?: string;        // word/phrase to render in Fraunces italic
  className?: string;
  level?: 1 | 2 | 3;
}

export function Headline({ children, highlight, className, level = 2 }: HeadlineProps) {
  const Tag = (`h${level}` as keyof JSX.IntrinsicElements);

  if (!highlight) {
    return <Tag className={cn(`text-h${level}`, className)}>{children}</Tag>;
  }

  // Split headline around the highlighted word/phrase
  const parts = children.split(highlight);
  if (parts.length < 2) {
    // Highlight not found — render as-is
    return <Tag className={cn(`text-h${level}`, className)}>{children}</Tag>;
  }

  return (
    <Tag className={cn(`text-h${level}`, className)}>
      {parts[0]}
      <span className="font-decorative italic text-accent">{highlight}</span>
      {parts.slice(1).join(highlight)}
    </Tag>
  );
}
```

Accepts a string with an optional `highlight` prop — the matched substring is wrapped in `<span className="font-decorative italic text-accent">` (Fraunces italic within Clash Display headline).

---

## 7. Verification Steps for This Phase

1. **Run Lighthouse** on a blank page using only the design tokens/fonts — confirm zero CLS and fast FCP.
2. **Render Button (both variants)** in isolation at 375px and 1920px — confirm glass fallback triggers correctly in a `backdrop-filter`-unsupported emulation.
3. **Populate `content.ts` and `images.ts`** fully (no placeholders) and validate against the TypeScript types — build should fail if any required field is missing.
4. **Visual diff** of Eyebrow/Headline components against the approved hero reference image's type treatment.
5. **Verify `prefers-reduced-motion`** — glass button transitions disabled, blur reduced.
6. **Grep check** — no hardcoded hex values in component files (all colors via tokens); no inline copy in components (all via `content.ts`).

---

## 8. Dependencies / Setup Commands

```bash
# No new npm packages required for Phase 1.
# Clash Display and General Sans .woff2 files must be downloaded
# from Fontshare (https://api.fontshare.com) and placed in:
#   public/fonts/ClashDisplay-Variable.woff2
#   public/fonts/GeneralSans-Variable.woff2
#
# These are free for commercial use under the Fontshare Free License.

# Verify existing deps are sufficient:
# - next/font (built into Next.js 15) ← font loading
# - class-variance-authority          ← button variants
# - tailwind-merge + clsx             ← cn() utility
# - @base-ui/react                    ← shadcn primitives
```

**Manual asset step**: Download Clash Display and General Sans variable `.woff2` files from Fontshare's free license package and commit them to `public/fonts/`. No npm package exists for these fonts.

---

## 9. Risk Mitigation

| Risk | Mitigation |
|---|---|
| Fontshare API unavailable at build time | Self-host `.woff2` files in repo — no runtime API dependency |
| `next/font/local` API shape differs in Next.js 15 | Confirm exact import syntax during task execution; fall back to CSS `@font-face` if needed |
| General Sans misidentified as Google Font | Corrected in this plan — both Fontshare fonts are self-hosted |
| Glass button invisible on white backgrounds | Test on both dark and light backgrounds; fallback is solid semi-opaque |
| Image generation delayed | Content schema and image keys are defined independently — components can be built against keys before files exist |

---

## 10. Ready for Task Breakdown

This plan, together with `spec.md` and `constitution.md`, contains everything needed for Spec Kit's `/speckit.tasks` step to generate an actionable `tasks.md` for Phase 1.
