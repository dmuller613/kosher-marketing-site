import { AboutSection } from "@/components/sections/AboutSection";
import { AishSection } from "@/components/sections/AishSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { ProofSection } from "@/components/sections/ProofSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { WorkSection } from "@/components/sections/WorkSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-cream)] text-[var(--color-ink)]">
      <Header />
      <HeroSection />
      <LogoStrip />
      <ServicesSection />
      <ProofSection />
      <WorkSection />
      <AishSection />
      <AboutSection />
      <FAQSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
