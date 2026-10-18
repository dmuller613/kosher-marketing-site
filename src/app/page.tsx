import { ContactSection } from "@/components/sections/ContactSection";
import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { ServicesSection } from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-cream)] text-[var(--color-ink)]">
      <Header />
      <HeroSection />
      <LogoStrip />
      <ServicesSection />
      <ContactSection />
    </main>
  );
}
