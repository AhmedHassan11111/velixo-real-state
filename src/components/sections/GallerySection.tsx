"use client";

import Image from "next/image";
import { SectionContainer } from "@/components/kit/SectionContainer";
import { Eyebrow } from "@/components/kit/Eyebrow";
import { Headline } from "@/components/kit/Headline";
import { getImage } from "@/data/images";
import { ScrollReveal } from "@/components/kit/ScrollReveal";

export function GallerySection() {
  const img1 = getImage("gallery-entrance");
  const img2 = getImage("gallery-garden");
  const img3 = getImage("gallery-corridor");

  return (
    <section className="py-24 md:py-32 bg-paper overflow-hidden">
      <SectionContainer>
        <div className="max-w-3xl mb-16 md:mb-24">
          <ScrollReveal>
            <Eyebrow className="block mb-6">Gallery</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Headline level={2} className="mb-6">
              Details in composition.
            </Headline>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-body text-mist max-w-xl leading-relaxed">
              A curated selection of moments capturing the dialogue between form, light, and natural landscape.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start pt-4 pb-12">
          {/* Image 1 - Entrance */}
          <ScrollReveal delay={0} className="flex flex-col gap-4 md:-translate-y-8">
            <div className="relative aspect-[3/4] overflow-hidden group rounded-lg shadow-sm bg-black/5">
              <Image
                src={img1.path}
                alt={img1.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-mist block mb-1">
                01 // The Arrival
              </span>
              <p className="text-xs text-mist/80 italic font-light">North-facing glass entry vestibule</p>
            </div>
          </ScrollReveal>

          {/* Image 2 - Garden */}
          <ScrollReveal delay={0.15} className="flex flex-col gap-4 md:translate-y-12">
            <div className="relative aspect-[4/5] overflow-hidden group rounded-lg shadow-sm bg-black/5">
              <Image
                src={img2.path}
                alt={img2.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-mist block mb-1">
                02 // Courtyard Sanctuary
              </span>
              <p className="text-xs text-mist/80 italic font-light">Framed transition between home and landscape</p>
            </div>
          </ScrollReveal>

          {/* Image 3 - Corridor */}
          <ScrollReveal delay={0.3} className="flex flex-col gap-4 md:-translate-y-4">
            <div className="relative aspect-[3/4] overflow-hidden group rounded-lg shadow-sm bg-black/5">
              <Image
                src={img3.path}
                alt={img3.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-mist block mb-1">
                03 // Internal Axis
              </span>
              <p className="text-xs text-mist/80 italic font-light">Linear corridor looking onto cedar cladding</p>
            </div>
          </ScrollReveal>
        </div>
      </SectionContainer>
    </section>
  );
}
