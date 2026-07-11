"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/kit/Eyebrow";
import { Headline } from "@/components/kit/Headline";
import { SectionContainer } from "@/components/kit/SectionContainer";
import { content } from "@/data/content";
import { getImage } from "@/data/images";

const heroImg = getImage("hero");

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll tracking for Hero parallax on the outer non-sticky wrapper
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transformations - kept completely static to make the Hero section stable as requested
  const opacityText = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Fallbacks for reduced motion
  const finalYBg = "0%";
  const finalScaleBg = 1;
  const finalYText = "0%";
  const finalOpacityText = shouldReduceMotion ? 1 : opacityText;

  return (
    <div ref={containerRef} className="relative h-screen w-full z-0">
      <div className="fixed inset-0 h-screen w-full overflow-hidden flex flex-col justify-end pt-32 pb-12 md:pb-16">
        {/* Layer 1 — Base background photo (lowest) with scale and y translation */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ y: finalYBg, scale: finalScaleBg }}
        >
          <Image
            src={heroImg.path}
            alt={heroImg.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Layer 2 — Gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-ink/10"
          style={{ zIndex: 1 }}
        />

        {/* Layer 5 — Hero text content with parallax and fade out */}
        <motion.div
          className="relative w-full"
          style={{ zIndex: 10, y: finalYText, opacity: finalOpacityText }}
        >
          <SectionContainer>
            <Eyebrow className="block mb-6 text-accent">
              {content.hero.eyebrow}
            </Eyebrow>
            <Headline
              level={1}
              highlight={content.hero.highlightedWord}
              className="text-paper mb-6 max-w-4xl"
            >
              {content.hero.headline}
            </Headline>
            <p className="text-body text-paper/80 max-w-xl mb-10">
              {content.hero.subheadline}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                variant="liquid-glass"
                size="lg"
                className="text-base uppercase tracking-wider px-8 py-4"
              >
                {content.hero.ctaPrimary}
              </Button>
            </div>
          </SectionContainer>
        </motion.div>
      </div>
    </div>
  );
}

