"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SectionContainer } from "@/components/kit/SectionContainer";
import { Eyebrow } from "@/components/kit/Eyebrow";
import { Headline } from "@/components/kit/Headline";
import { content } from "@/data/content";
import { getImage } from "@/data/images";
import { ScrollReveal } from "@/components/kit/ScrollReveal";

export function PropertyOverview() {
  const img = getImage("property-overview");
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="residence" className="py-24 md:py-32 bg-paper">
      <SectionContainer>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <ScrollReveal delay={0}>
              <Eyebrow className="block mb-6">{content.propertyOverview.eyebrow}</Eyebrow>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <Headline level={2} className="mb-6">
                {content.propertyOverview.title}
              </Headline>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-body text-mist">
                {content.propertyOverview.copy}
              </p>
            </ScrollReveal>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative aspect-[1241/848] overflow-hidden rounded-2xl shadow-xl bg-black/5"
          >
            <Image
              src={img.path}
              alt={img.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </SectionContainer>
    </section>
  );
}
