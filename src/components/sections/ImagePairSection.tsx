"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { SectionContainer } from "@/components/kit/SectionContainer";
import { Eyebrow } from "@/components/kit/Eyebrow";
import { Headline } from "@/components/kit/Headline";
import { content } from "@/data/content";
import { getImage } from "@/data/images";
import { ScrollReveal } from "@/components/kit/ScrollReveal";

interface ImagePairSectionProps {
  pair: (typeof content.imagePairs)[0];
  index: number;
}

export function ImagePairSection({ pair, index }: ImagePairSectionProps) {
  const leftImg = getImage(pair.leftImageKey);
  const rightImg = getImage(pair.rightImageKey);
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll parallax for the images
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallaxLeft = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const parallaxRight = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

  const yLeft = shouldReduceMotion ? "0%" : parallaxLeft;
  const yRight = shouldReduceMotion ? "0%" : parallaxRight;

  // Layout rhythm:
  // index 0 & 2 (1st & 3rd sections): Symmetrical (50/50 split)
  // index 1 (2nd section): Asymmetrical, Left side is larger (60/40 split)
  // index 3 (4th section): Asymmetrical, Right side is larger (40/60 split)
  const isSymmetrical = index % 2 === 0;
  const isLeftLarger = index === 1;

  const gridClass = isSymmetrical
    ? "grid grid-cols-1 md:grid-cols-2 gap-6"
    : "grid grid-cols-1 md:grid-cols-5 gap-6";

  const leftColClass = isSymmetrical
    ? "relative aspect-[1242/848] overflow-hidden group rounded-xl bg-black/5"
    : isLeftLarger
    ? "md:col-span-3 relative aspect-[1242/848] md:aspect-[3/2] overflow-hidden group rounded-xl bg-black/5"
    : "md:col-span-2 relative aspect-[1242/848] md:aspect-[1/1] overflow-hidden group rounded-xl bg-black/5";

  const rightColClass = isSymmetrical
    ? "relative aspect-[1242/848] overflow-hidden group hidden md:block rounded-xl bg-black/5"
    : isLeftLarger
    ? "md:col-span-2 relative aspect-[1242/848] md:aspect-[1/1] overflow-hidden group hidden md:block rounded-xl bg-black/5"
    : "md:col-span-3 relative aspect-[1242/848] md:aspect-[3/2] overflow-hidden group hidden md:block rounded-xl bg-black/5";

  return (
    <section
      ref={containerRef}
      id={index === 0 ? "architecture" : undefined}
      className="py-24 md:py-32 bg-paper overflow-hidden"
    >
      <SectionContainer>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <ScrollReveal>
            <Eyebrow className="block mb-6">{pair.eyebrow}</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Headline level={2} className="mb-6">
              {pair.title}
            </Headline>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-body text-mist">{pair.copy}</p>
          </ScrollReveal>
        </div>
        <div className={gridClass}>
          <div className={leftColClass}>
            <motion.div
              className="absolute inset-0 w-full h-[112%] -top-[6%]"
              style={{ y: yLeft }}
            >
              <Image
                src={leftImg.path}
                alt={leftImg.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 60vw"
                className="object-cover transition-transform duration-700 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <span className="absolute bottom-6 left-6 text-paper uppercase text-xs tracking-widest font-medium z-10 mix-blend-difference">
              {pair.leftLabel}
            </span>
          </div>
          <div className={rightColClass}>
            <motion.div
              className="absolute inset-0 w-full h-[112%] -top-[6%]"
              style={{ y: yRight }}
            >
              <Image
                src={rightImg.path}
                alt={rightImg.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <span className="absolute bottom-6 left-6 text-paper uppercase text-xs tracking-widest font-medium z-10 mix-blend-difference">
              {pair.rightLabel}
            </span>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
