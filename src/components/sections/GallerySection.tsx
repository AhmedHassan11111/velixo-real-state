"use client";

import Image from "next/image";
import { SectionContainer } from "@/components/kit/SectionContainer";
import { Eyebrow } from "@/components/kit/Eyebrow";
import { Headline } from "@/components/kit/Headline";
import { content } from "@/data/content";
import { getImage } from "@/data/images";
import { ScrollReveal } from "@/components/kit/ScrollReveal";

export function GallerySection() {
  const offsets = ["md:-translate-y-8", "md:translate-y-12", "md:-translate-y-4"];
  const ratios = ["aspect-[3/4]", "aspect-[4/5]", "aspect-[3/4]"];

  return (
    <section id={content.gallery.id} className="py-24 md:py-32 bg-paper overflow-hidden">
      <SectionContainer>
        <div className="max-w-3xl mb-16 md:mb-24">
          <ScrollReveal>
            <Eyebrow className="block mb-6">{content.gallery.eyebrow}</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Headline level={2} className="mb-6">
              {content.gallery.title}
            </Headline>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-body text-mist max-w-xl leading-relaxed">
              {content.gallery.copy}
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start pt-4 pb-12">
          {content.gallery.items.map((item, index) => {
            const img = getImage(item.imageKey);

            return (
              <ScrollReveal
                key={item.imageKey}
                delay={index * 0.15}
                className={`flex flex-col gap-4 ${offsets[index]}`}
              >
                <div className={`relative ${ratios[index]} overflow-hidden group rounded-lg shadow-sm bg-black/5`}>
                  <Image
                    src={img.path}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-mist block mb-1">
                    {item.label}
                  </span>
                  <p className="text-xs text-mist/80 italic font-light">{item.caption}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
}
