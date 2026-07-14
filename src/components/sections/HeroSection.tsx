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
const heroMobileImg = getImage("hero-mobile");

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

  const heroWrapperClass = isMobile
    ? "absolute inset-0 w-full overflow-hidden flex flex-col justify-end pt-28 pb-10 hero-min"
    : "fixed inset-0 w-full overflow-hidden flex flex-col justify-end pt-28 pb-10 md:pt-32 md:pb-16 hero-fixed";

  const finalYBg = "0%";
  const finalScaleBg = 1;
  const finalYText = "0%";

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const opacityText = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const finalOpacityText = enableParallax ? opacityText : 1;

  return (
    <div ref={containerRef} className="relative w-full z-0 hero-min">
      <div className={heroWrapperClass} style={{ zIndex: 0 }}>
        {/* Layer 1 — Base background photo */}
        {enableParallax ? (
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
              className="object-cover md:block hidden"
              referrerPolicy="no-referrer"
            />
            <Image
              src={heroMobileImg.path}
              alt={heroMobileImg.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover md:hidden"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        ) : (
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={heroImg.path}
              alt={heroImg.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover md:block hidden"
              referrerPolicy="no-referrer"
            />
            <Image
              src={heroMobileImg.path}
              alt={heroMobileImg.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover md:hidden"
              referrerPolicy="no-referrer"
            />
          </div>
        )}

        {/* Layer 2 — Gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-ink/10"
          style={{ zIndex: 1 }}
        />

        {/* Layer 5 — Hero text content */}
        {enableParallax ? (
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
                  className="hero-cta inline-flex items-center justify-center rounded-full px-8 py-3.5 text-base font-medium uppercase tracking-wider w-full sm:w-auto gap-2"
                >
                  <span>{content.hero.ctaPrimary}</span>
                  <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
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
        ) : (
          <div className="relative w-full" style={{ zIndex: 10 }}>
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
                  className="hero-cta inline-flex items-center justify-center rounded-full px-8 py-3.5 text-base font-medium uppercase tracking-wider w-full sm:w-auto gap-2"
                >
                  <span>{content.hero.ctaPrimary}</span>
                  <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="glass-link text-sm font-medium uppercase tracking-widest text-paper/80 hover:text-paper w-full sm:w-auto text-center sm:text-left"
                >
                  {content.hero.ctaSecondary}
                </a>
              </div>
            </SectionContainer>
          </div>
        )}
      </div>
    </div>
  );
}

