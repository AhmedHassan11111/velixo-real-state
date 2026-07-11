import { SectionContainer } from "@/components/kit/SectionContainer";
import { Eyebrow } from "@/components/kit/Eyebrow";
import { Headline } from "@/components/kit/Headline";
import { Button } from "@/components/ui/button";
import { content } from "@/data/content";
import { ScrollReveal } from "@/components/kit/ScrollReveal";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-paper">
      <SectionContainer>
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal delay={0}>
            <Eyebrow className="block mb-6">{content.contact.eyebrow}</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Headline level={2} className="mb-6">
              {content.contact.title}
            </Headline>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-body text-mist mb-10">{content.contact.copy}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <Button
              variant="solid"
              size="lg"
              className="text-base uppercase tracking-wider px-10 py-4"
            >
              {content.footer.ctaLabel}
            </Button>
          </ScrollReveal>
        </div>
      </SectionContainer>
    </section>
  );
}
