"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Eyebrow } from "@/components/kit/Eyebrow";
import { Headline } from "@/components/kit/Headline";
import { SectionContainer } from "@/components/kit/SectionContainer";
import { content } from "@/data/content";
import { getImage } from "@/data/images";

const heroImg = getImage("hero");

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const enableParallax = !shouldReduceMotion && !isMobile;

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
  const finalOpacityText = enableParallax ? opacityText : 1;

  return (
    <div ref={containerRef} className="relative w-full z-0" style={{ minHeight: "100svh" }}>
      <div className="fixed inset-0 w-full overflow-hidden flex flex-col justify-end pt-28 pb-10 md:pt-32 md:pb-16" style={{ minHeight: "100svh" }}>
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
            <div className="flex flex-col items-start mb-5 md:mb-6">
              <Eyebrow
                className="block text-accent uppercase tracking-widest"
                style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}
              >
                {content.hero.eyebrow}
              </Eyebrow>
              <div
                className="w-12 md:w-16 h-[1px] bg-accent mt-2"
                style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.4)" }}
              />
            </div>
            <Headline
              level={1}
              highlight={content.hero.highlightedWord}
              className="text-paper mb-5 md:mb-6 max-w-4xl"
            >
              {content.hero.headline}
            </Headline>
            <p className="text-body text-paper/80 max-w-xl mb-8 md:mb-10">
              {content.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-wrap items-start sm:items-center gap-3 sm:gap-4">
              <a
                href="#residence"
                className="glass-cta inline-flex items-center justify-center rounded-full px-8 py-3.5 text-base font-medium uppercase tracking-wider w-full sm:w-auto"
              >
                {content.hero.ctaPrimary}
              </a>
              <a
                href="#contact"
                className="glass-link text-sm font-medium uppercase tracking-widest text-paper/80 hover:text-paper w-full sm:w-auto text-center sm:text-left"
              >
                {content.hero.ctaSecondary}
              </a>
            </div>
          </SectionContainer>
        </motion.div>
      </div>
    </div>
  );
}

