export interface NavItem {
  label: string;
  href: string;
}

export interface HeroContent {
  eyebrow: string;
  headline: string;
  highlightedWord: string;
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
  imageKey: string;
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
  velixoCredit: string;
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
    { label: "Lifestyle", href: "#lifestyle" },
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
      imageKey: "feature-materials",
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
