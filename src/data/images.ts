export interface ImageAsset {
  path: string;
  alt: string;
  width: number;
  height: number;
}

export const images: Record<string, ImageAsset> = {
  "hero": {
    path: "/images/hero.jpg",
    alt: "VELIXO residence at dusk — black glass villa with warm interior light",
    width: 2752,
    height: 1536,
  },
  "property-overview": {
    path: "/images/property-overview-1.jpg",
    alt: "Wide daytime view of the VELIXO residence facade against the landscape",
    width: 1241,
    height: 848,
  },
  "pair-living-living": {
    path: "/images/living-room.jpg",
    alt: "Main living room with floor-to-ceiling glass and warm oak floors",
    width: 1242,
    height: 848,
  },
  "pair-living-terrace": {
    path: "/images/terrace.jpg",
    alt: "Terrace extending from the living room toward the valley",
    width: 1242,
    height: 848,
  },
  "pair-kitchen-kitchen": {
    path: "/images/kitchen.jpg",
    alt: "Kitchen with honed marble island and flush cabinetry",
    width: 1242,
    height: 698,
  },
  "pair-kitchen-dining": {
    path: "/images/dining.jpg",
    alt: "Dining area adjacent to the kitchen, framed by glass",
    width: 1242,
    height: 848,
  },
  "pair-suite-suite": {
    path: "/images/master-suite.jpg",
    alt: "Master suite with western exposure and blackout integration",
    width: 1242,
    height: 848,
  },
  "pair-suite-view": {
    path: "/images/view.jpg",
    alt: "View from the master suite looking onto the tree line",
    width: 1242,
    height: 848,
  },
  "pair-outdoor-pool": {
    path: "/images/pool.jpg",
    alt: "Lap pool extending from the terrace toward the valley edge",
    width: 1242,
    height: 848,
  },
  "pair-outdoor-lounge": {
    path: "/images/outdoor-lounge.jpg",
    alt: "Outdoor lounge under cantilevered roof plane",
    width: 1242,
    height: 848,
  },
  "feature-facade": {
    path: "/images/feature-facade.jpg",
    alt: "Close-up of glass facade detail — mullion junction",
    width: 1242,
    height: 848,
  },
  "feature-lighting": {
    path: "/images/feature-lighting.jpg",
    alt: "Architectural lighting detail at dusk",
    width: 1242,
    height: 848,
  },
  "feature-materials": {
    path: "/images/feature-materials.jpg",
    alt: "Material palette close-up — black cladding, marble, and steel junction",
    width: 3098,
    height: 2115,
  },
  "gallery-entrance": {
    path: "/images/gallery-entrance.jpg",
    alt: "Main entrance of the VELIXO residence",
    width: 1242,
    height: 848,
  },
  "gallery-garden": {
    path: "/images/gallery-garden.jpg",
    alt: "Landscaped garden adjacent to the residence",
    width: 1242,
    height: 848,
  },
  "gallery-night": {
    path: "/images/gallery-night.jpg",
    alt: "VELIXO residence at night with illuminated interior",
    width: 1242,
    height: 848,
  },
  "gallery-corridor": {
    path: "/images/gallery-corridor.jpg",
    alt: "Interior corridor with continuous oak flooring",
    width: 1242,
    height: 848,
  },
};

export function getImage(key: string): ImageAsset {
  const asset = images[key];
  if (!asset) {
    throw new Error(`Image key "${key}" not found in images registry.`);
  }
  return asset;
}
