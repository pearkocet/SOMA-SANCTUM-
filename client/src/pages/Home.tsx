/*
 * SOMA SANCTUM — Home Page
 * Assembles all sections in order:
 * AgeGate → Navigation → Hero → Ritual → Origin → Protocol → Vessel → Access → Footer
 * 
 * Design Philosophy: Sacred Protocol — Ritual Minimalism meets Clinical Luxury
 * Color: Deep Indigo (#1A1F3B), Warm Ivory (#F5F1E8), Matte Gold (#C6A962)
 * Typography: Cormorant Garamond (display) + DM Sans (body) + DM Mono (labels)
 */

import AgeGate from '@/components/AgeGate';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import RitualSection from '@/components/RitualSection';
import OriginSection from '@/components/OriginSection';
import ProtocolSection from '@/components/ProtocolSection';
import VesselSection from '@/components/VesselSection';
import AccessSection from '@/components/AccessSection';
import QuoteSection from '@/components/QuoteSection';
import LotusDivider from '@/components/LotusDevider';
import FounderSection from '@/components/FounderSection';
import Footer from '@/components/Footer';
import SoundToggle from '@/components/SoundToggle';

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ background: '#0A0C1A', color: '#F5F1E8' }}
    >
      {/* Age verification gate */}
      <AgeGate />

      {/* Fixed navigation */}
      <Navigation />

      {/* Main content */}
      <main>
        {/* 1. Hero — The entrance */}
        <HeroSection />

        {/* 1.5. Founder's Journey — Pearkocet's story */}
        <FounderSection />

        {/* 2. The Ritual — Philosophy */}
        <RitualSection />

        {/* Lotus divider */}
        <LotusDivider bgColor="#0A0C1A" />

        {/* Quote separator */}
        <QuoteSection
          quote="The body knows what the mind has forgotten. SOMA SANCTUM is the reminder."
          attribution="The Sanctum Codex"
          bgColor="#0D0F1F"
        />

        {/* Lotus divider */}
        <LotusDivider bgColor="#0D0F1F" />

        {/* 3. Origin — Heritage */}
        <OriginSection />

        {/* Quote separator */}
        <QuoteSection
          quote="Twelve years in the earth. Twelve months in the barrel. One moment of clarity."
          attribution="Master Distiller's Note"
          bgColor="#0A0C1A"
        />

        {/* Lotus divider */}
        <LotusDivider bgColor="#0A0C1A" />

        {/* 4. Protocol No. 7 — Clinical precision */}
        <ProtocolSection />

        {/* 5. The Vessel — Product showcase */}
        <VesselSection />

        {/* 6. Private Access — Request form */}
        <AccessSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating sound toggle */}
      <SoundToggle />
    </div>
  );
}
