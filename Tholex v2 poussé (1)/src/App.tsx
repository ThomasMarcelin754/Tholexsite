import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { VisionSection } from "./components/VisionSection";
import { AcquisitionCriteriaSection } from "./components/AcquisitionCriteriaSection";
import { CapabilitiesSection } from "./components/CapabilitiesSection";
import { SectorsSection } from "./components/SectorsSection";
import { AcquisitionProcessSection } from "./components/AcquisitionProcessSection";
import { FoundersSection } from "./components/FoundersSection";
import { FAQSection } from "./components/FAQSection";
import { CTASection } from "./components/CTASection";

export default function App() {
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
      <CTASection />
    </div>
  );
}