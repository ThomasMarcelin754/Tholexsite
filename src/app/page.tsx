import { Hero } from '@/components/Hero';
import { SectionDealGate } from '@/components/SectionDealGate';
import { CtaSection } from '@/components/sections/CtaSection';
import { FoundersSection } from '@/components/sections/FoundersSection';
import { FooterSection } from '@/components/sections/FooterSection';
import { VisionSection } from '@/components/sections/VisionSection';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main id="main" className="flex-1">
        <Hero />
        <VisionSection />
        <SectionDealGate />
        <div id="about" className="scroll-mt-24">
          <FoundersSection />
        </div>
        <CtaSection />
      </main>
      <FooterSection />
    </div>
  );
}
