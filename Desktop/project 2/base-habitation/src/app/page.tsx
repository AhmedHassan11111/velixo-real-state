import Image from "next/image";
import { HeroSection } from "@/components/sections/HeroSection";
import { Navbar } from "@/components/layout/Navbar";
import { SectionContainer } from "@/components/kit/SectionContainer";
import { Eyebrow } from "@/components/kit/Eyebrow";
import { Headline } from "@/components/kit/Headline";
import { Button } from "@/components/ui/button";
import { content } from "@/data/content";
import { getImage } from "@/data/images";

function PropertyOverview() {
  const img = getImage("property-overview");
  return (
    <section id="residence" className="py-24 md:py-32 bg-paper">
      <SectionContainer>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <Eyebrow className="block mb-6">{content.propertyOverview.eyebrow}</Eyebrow>
            <Headline level={2} className="mb-6">
              {content.propertyOverview.title}
            </Headline>
            <p className="text-body text-mist">
              {content.propertyOverview.copy}
            </p>
          </div>
          <div className="lg:col-span-7 relative aspect-[1241/848] overflow-hidden">
            <Image
              src={img.path}
              alt={img.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

function ImagePairSection({
  pair,
  index,
}: {
  pair: (typeof content.imagePairs)[0];
  index: number;
}) {
  const leftImg = getImage(pair.leftImageKey);
  const rightImg = getImage(pair.rightImageKey);

  return (
    <section
      id={index === 0 ? "architecture" : undefined}
      className="py-24 md:py-32 bg-paper overflow-hidden"
    >
      <SectionContainer>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Eyebrow className="block mb-6">{pair.eyebrow}</Eyebrow>
          <Headline level={2} className="mb-6">
            {pair.title}
          </Headline>
          <p className="text-body text-mist">{pair.copy}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative aspect-[1242/848] overflow-hidden group">
            <Image
              src={leftImg.path}
              alt={leftImg.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute bottom-6 left-6 text-paper uppercase text-xs tracking-widest font-medium z-10 mix-blend-difference">
              {pair.leftLabel}
            </span>
          </div>
          <div className="relative aspect-[1242/848] overflow-hidden group hidden md:block">
            <Image
              src={rightImg.path}
              alt={rightImg.alt}
              fill
              sizes="50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute bottom-6 left-6 text-paper uppercase text-xs tracking-widest font-medium z-10 mix-blend-difference">
              {pair.rightLabel}
            </span>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

function FeaturesSection() {
  const overview = getImage("property-overview");
  return (
    <section id="lifestyle" className="py-24 md:py-32 bg-ink text-paper">
      <SectionContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="hidden lg:block sticky top-32">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={overview.path}
                alt={overview.alt}
                fill
                sizes="50vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-16 md:space-y-24">
            {content.features.map((feature) => {
              const img = getImage(feature.imageKey);
              return (
                <div key={feature.title} className="flex flex-col">
                  <div className="lg:hidden w-full aspect-[1242/848] relative mb-8 overflow-hidden">
                    <Image
                      src={img.path}
                      alt={img.alt}
                      fill
                      sizes="100vw"
                      className="object-cover"
                    />
                  </div>
                  <Headline level={3} className="text-paper mb-4">
                    {feature.title}
                  </Headline>
                  <p className="text-body text-mist">{feature.copy}</p>
                </div>
              );
            })}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

function GallerySection() {
  const galleryKeys = [
    "gallery-entrance",
    "gallery-garden",
    "gallery-night",
    "gallery-corridor",
  ];
  return (
    <section className="py-24 md:py-32 bg-paper">
      <SectionContainer>
        <Eyebrow className="block mb-12">Gallery</Eyebrow>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {galleryKeys.map((key) => {
            const img = getImage(key);
            return (
              <div
                key={key}
                className="relative aspect-[1242/848] overflow-hidden group"
              >
                <Image
                  src={img.path}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
}

function ManifestoSection() {
  return (
    <section className="py-32 md:py-48 bg-accent text-ink">
      <SectionContainer>
        <div className="max-w-4xl mx-auto space-y-20 md:space-y-28">
          {content.manifesto.statements.map((statement, idx) => (
            <div key={idx} className="text-center">
              <Headline level={2} className="mb-6">
                {statement.title}
              </Headline>
              <p className="text-body text-ink/70 text-lg max-w-xl mx-auto">
                {statement.copy}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-paper">
      <SectionContainer>
        <div className="max-w-3xl mx-auto text-center">
          <Eyebrow className="block mb-6">{content.contact.eyebrow}</Eyebrow>
          <Headline level={2} className="mb-6">
            {content.contact.title}
          </Headline>
          <p className="text-body text-mist mb-10">{content.contact.copy}</p>
          <Button
            variant="solid"
            size="lg"
            className="text-base uppercase tracking-wider px-10 py-4"
          >
            {content.footer.ctaLabel}
          </Button>
        </div>
      </SectionContainer>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-paper py-16">
      <SectionContainer>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="font-display text-2xl font-bold">
            {content.footer.headline}
          </span>
          <div className="flex gap-8">
            {content.footer.columns.map((col) => (
              <div key={col.title} className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-widest text-mist">
                  {col.title}
                </span>
                {col.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-paper/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-paper/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-xs text-mist">{content.footer.legal}</span>
          <span className="text-xs text-mist">{content.footer.velixoCredit}</span>
        </div>
      </SectionContainer>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <main>
        <PropertyOverview />
        {content.imagePairs.map((pair, index) => (
          <ImagePairSection key={index} pair={pair} index={index} />
        ))}
        <FeaturesSection />
        <GallerySection />
        <ManifestoSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
