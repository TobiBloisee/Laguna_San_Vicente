import { MotionConfig } from 'motion/react';
import { useState } from 'react';
import { CommunityParticipationSection } from './components/CommunityParticipationSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { InteractiveSectorsMap } from './components/InteractiveSectorsMap';
import { Navbar } from './components/Navbar';
import { NatureAndHistorySection } from './components/NatureAndHistorySection';
import { ProjectAndLogoSection } from './components/ProjectAndLogoSection';
import { ResidentTestimonialsSection } from './components/ResidentTestimonialsSection';
import { VisitPlannerSection } from './components/VisitPlannerSection';
import { ScrollLagoonProgress } from './components/WildBotanicalDecor';
import type { SectorId, SymbolKey } from './utils/brandLogic';

export default function App() {
  const [activeSymbol, setActiveSymbol] = useState<SymbolKey>('agua');
  const [activeSectorId, setActiveSectorId] = useState<SectorId>('norte');

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-[#F7FBFE] text-[#102A3A]">
        <ScrollLagoonProgress />
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <ProjectAndLogoSection
            activeSymbol={activeSymbol}
            onSelectSymbol={setActiveSymbol}
          />
          <InteractiveSectorsMap
            activeSectorId={activeSectorId}
            onSelectSector={setActiveSectorId}
          />
          <NatureAndHistorySection />
          <VisitPlannerSection />
          <ResidentTestimonialsSection />
          <CommunityParticipationSection />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
