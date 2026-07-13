import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { PropertyOverview } from "@/components/sections/PropertyOverview";
import { ImagePairSection } from "@/components/sections/ImagePairSection";
import { SuiteHighlightSection } from "@/components/sections/SuiteHighlightSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { HighlightSection } from "@/components/sections/HighlightSection";
import { ManifestoSection } from "@/components/sections/ManifestoSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { content } from "@/data/content";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <main className="relative z-20 bg-paper">
        <PropertyOverview />
        <ImagePairSection pair={content.imagePairs[0]} index={0} />
        <ImagePairSection pair={content.imagePairs[1]} index={1} />
        <SuiteHighlightSection />
        <ImagePairSection pair={content.imagePairs[2]} index={2} />
        <ImagePairSection pair={content.imagePairs[3]} index={3} />
        <GallerySection />
        <HighlightSection />
        <FeaturesSection />
        <ManifestoSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
