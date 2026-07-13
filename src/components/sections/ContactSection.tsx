import { SectionContainer } from "@/components/kit/SectionContainer";
import { Eyebrow } from "@/components/kit/Eyebrow";
import { Headline } from "@/components/kit/Headline";
import { content } from "@/data/content";
import { ScrollReveal } from "@/components/kit/ScrollReveal";

const SocialIcon = ({ platform }: { platform: "linkedin" | "instagram" | "x" }) => {
  if (platform === "linkedin") {
    return (
      <svg className="size-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    );
  }
  if (platform === "instagram") {
    return (
      <svg className="size-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    );
  }
  return (
    <svg className="size-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
};

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
            <div className="flex flex-col items-center gap-4">
              <a
                href={content.footer.ctaHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-ink px-10 py-4 text-base font-medium uppercase tracking-wider text-paper transition-colors hover:bg-accent hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                {content.footer.ctaLabel}
              </a>
              <div className="flex items-center gap-6 mt-2">
                {content.footer.socials.map((social) => (
                  <a
                    key={social.platform}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noreferrer"
                    className="text-mist transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  >
                    <SocialIcon platform={social.platform} />
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </SectionContainer>
    </section>
  );
}
