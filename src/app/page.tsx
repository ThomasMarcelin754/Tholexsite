import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { VisionSection } from '../components/VisionSection';
import { CapabilitiesSection } from '../components/CapabilitiesSection';
import { AcquisitionCriteriaSection } from '../components/AcquisitionCriteriaSection';
import { SectorsSection } from '../components/SectorsSection';
import { AcquisitionProcessSection } from '../components/AcquisitionProcessSection';
import { FoundersSection } from '../components/FoundersSection';
import { FAQSection } from '../components/FAQSection';
import { FooterSection } from '../components/FooterSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <VisionSection />
      <CapabilitiesSection />
      <AcquisitionCriteriaSection />
      <SectorsSection />
      <AcquisitionProcessSection />
      <FoundersSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
}
