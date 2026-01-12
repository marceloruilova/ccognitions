import HeroSection from '@/components/sections/HeroSection';
import PainPointsSection from '@/components/sections/PainPointsSection';
import SolutionSection from '@/components/sections/SolutionSection';
import ComparisonTableSection from '@/components/sections/ComparisonTableSection';
import CaseStudyTeaser from '@/components/sections/CaseStudyTeaser';
import FinalCTASection from '@/components/sections/FinalCTASection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PainPointsSection />
      <SolutionSection />
      <ComparisonTableSection />
      <CaseStudyTeaser />
      <FinalCTASection />
    </main>
  );
}
