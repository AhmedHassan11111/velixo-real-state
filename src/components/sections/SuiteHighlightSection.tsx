"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { getImage } from "@/data/images";
import { fonts } from "@/lib/fonts";
import { SectionContainer } from "@/components/kit/SectionContainer";

export function SuiteHighlightSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const img = getImage("pair-suite-suite");
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

  // Smooth parallax scroll effect for the full-bleed background
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  // If reduced motion is active, disable background parallax translation
  const y = enableParallax ? parallaxY : "0%";

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full flex items-center overflow-hidden bg-black"
    >
      {/* Full-bleed Parallax Background Image */}
      <motion.div
        className="absolute inset-0 w-full h-[124%] -top-[12%]"
        style={{ y }}
      >
        <Image
          src={img.path}
          alt={img.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-75 md:opacity-85"
          referrerPolicy="no-referrer"
        />
        {/* Soft luxury vignettes for reading high-contrast typography easily */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50 pointer-events-none" />
      </motion.div>

      {/* Foreground Content Container */}
      <SectionContainer className="relative z-10 w-full">
        <div className="max-w-2xl text-paper">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start gap-4"
          >
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-accent">
              The Sanctuary
            </span>
            
            <h2 className={`text-4xl md:text-6xl font-normal leading-tight tracking-tight text-white mb-2 ${fonts.fraunces}`}>
              The Master Suite
            </h2>
            
            <div className="w-16 h-[1px] bg-accent/60 my-2" />
            
            <p className="text-body text-paper/85 text-lg md:text-xl max-w-lg leading-relaxed font-light">
              Oriented to capture the final western sunset. Seamless floor-to-ceiling glass draws the natural forest canopy directly into your private living space, while automated concealed blackout screens transition the room to perfect stillness.
            </p>
          </motion.div>
        </div>
      </SectionContainer>
    </section>
  );
}
