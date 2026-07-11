import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/kit/Eyebrow";
import { Headline } from "@/components/kit/Headline";
import { SectionContainer } from "@/components/kit/SectionContainer";
import { content } from "@/data/content";
import { getImage } from "@/data/images";

const heroImg = getImage("hero");

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col justify-end pt-32 pb-12 md:pb-16">

      {/* Layer 1 — Base background photo (lowest) */}
      <Image
        src={heroImg.path}
        alt={heroImg.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ zIndex: 0 }}
      />

      {/* Layer 2 — Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent"
        style={{ zIndex: 1 }}
      />

      {/* Layer 3 — VELIXO wordmark — sits in the sky zone (top 30% of image) */}
      <div
        className="absolute left-1/2 -translate-x-1/2 text-white font-display font-black uppercase tracking-tight pointer-events-none select-none whitespace-nowrap"
        style={{
          top: '13vh',
          fontSize: '16vw',
          opacity: 0.45,
          zIndex: 2,
          lineHeight: 1,
        }}
      >
        VELIXO
      </div>

      {/* Layer 4 — Foreground: same photo masked to cover ONLY the building and below.
           Villa roofline starts at ~30% of image height.
           transparent 0%→28% = sky area = wordmark shows through
           black 32%→onwards = building area = foreground covers wordmark  */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 3,
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 31%, black 36%)',
          maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 31%, black 36%)',
        }}
      >
        <Image
          src={heroImg.path}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          aria-hidden
        />
      </div>

      {/* Layer 5 — Hero text content */}
      <div className="relative w-full" style={{ zIndex: 10 }}>
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
              variant="glass"
              size="lg"
              className="text-base uppercase tracking-wider px-8 py-4"
            >
              {content.hero.ctaPrimary}
            </Button>
          </div>
        </SectionContainer>
      </div>
    </section>
  );
}
