"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { getImage } from "@/data/images";
import { fonts } from "@/lib/fonts";

export function HighlightSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const img = getImage("gallery-night");
  const shouldReduceMotion = useReducedMotion();

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  // If reduced motion is preferred, disable the parallax translation
  const y = shouldReduceMotion ? "0%" : parallaxY;

  return (
    <section
      ref={containerRef}
      className="relative h-[75vh] md:h-[85vh] w-full flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Parallax Background Image */}
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
          className="object-cover opacity-80"
          referrerPolicy="no-referrer"
        />
        {/* Soft elegant gradient overlays for contrast and luxury mood */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      </motion.div>

      {/* Floating typographic overlay */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-paper">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-6"
        >
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-accent">
            Nocturnal Harmony
          </span>
          
          <h2 className={`text-3xl md:text-5xl font-normal leading-tight max-w-2xl tracking-tight text-white ${fonts.fraunces}`}>
            “At dusk, the structure becomes a beacon of quiet warmth—dissolving gently into the shadows of the valley.”
          </h2>
          
          <div className="w-12 h-[1px] bg-accent/40 mt-4" />
        </motion.div>
      </div>
    </section>
  );
}
