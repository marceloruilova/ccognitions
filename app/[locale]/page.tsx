import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';

export const metadata: Metadata = {
  title: 'Code Cognition Studio - Desarrollo de Software con IA',
  description: 'Transformamos ideas en software de alta calidad usando orquestación de IA. Reducimos costos y tiempos de entrega sin sacrificar calidad.',
  openGraph: {
    title: 'Code Cognition Studio - Desarrollo de Software con IA',
    description: 'Transformamos ideas en software de alta calidad usando orquestación de IA.',
    type: 'website',
  },
};
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
