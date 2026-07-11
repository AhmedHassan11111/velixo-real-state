"use client";

import { SectionContainer } from "@/components/kit/SectionContainer";
import { Headline } from "@/components/kit/Headline";
import { content } from "@/data/content";
import { ScrollReveal } from "@/components/kit/ScrollReveal";

export function ManifestoSection() {
  return (
    <section className="py-32 md:py-48 bg-accent text-ink">
      <SectionContainer>
        <div className="max-w-4xl mx-auto space-y-20 md:space-y-28">
          {content.manifesto.statements.map((statement, idx) => (
            <div key={idx} className="text-center">
              <ScrollReveal delay={0}>
                <Headline level={2} className="mb-6">
                  {statement.title}
                </Headline>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p className="text-body text-ink/70 text-lg max-w-xl mx-auto">
                  {statement.copy}
                </p>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
