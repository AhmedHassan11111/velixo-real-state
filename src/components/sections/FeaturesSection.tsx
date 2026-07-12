"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SectionContainer } from "@/components/kit/SectionContainer";
import { Headline } from "@/components/kit/Headline";
import { content } from "@/data/content";
import { getImage } from "@/data/images";
import { ScrollReveal } from "@/components/kit/ScrollReveal";

export function FeaturesSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="lifestyle" className="py-24 md:py-32 bg-ink text-paper relative overflow-hidden">
      <SectionContainer>
        {/* Section Header */}
        <div className="max-w-3xl mb-20 md:mb-28">
          <ScrollReveal>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-accent mb-4 block">
              {content.featuresIntro.eyebrow}
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Headline level={2} className="text-paper text-4xl md:text-5xl leading-tight font-light">
              {content.featuresIntro.title}
            </Headline>
          </ScrollReveal>
        </div>

        {/* Alternating Feature Rows */}
        <div className="flex flex-col gap-24 md:gap-36 relative z-10">
          {content.features.map((feature, idx) => {
            const img = getImage(feature.imageKey);
            // Alternate left/right alignment on desktop
            const isEven = idx % 2 === 0;

            return (
              <div
                key={feature.title}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center"
              >
                {/* Image Column */}
                <motion.div
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`col-span-1 lg:col-span-7 relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl bg-black/40 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={img.path}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle luxurious overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />
                </motion.div>

                {/* Text Column */}
                <motion.div
                  initial={{ opacity: 0, x: shouldReduceMotion ? 0 : (isEven ? 30 : -30) }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`col-span-1 lg:col-span-5 flex flex-col justify-center ${
                    isEven ? "lg:order-2 lg:pl-8" : "lg:order-1 lg:pr-8"
                  }`}
                >
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-4 block">
                    Detail 0{idx + 1}
                  </span>
                  
                  <Headline level={3} className="text-paper mb-6 text-3xl md:text-4xl leading-tight">
                    {feature.title}
                  </Headline>
                  
                  <p className="text-body text-mist text-lg leading-relaxed font-light">
                    {feature.copy}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
}
