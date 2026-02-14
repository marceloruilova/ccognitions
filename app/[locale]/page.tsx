import {getTranslations} from 'next-intl/server';
import HeroSection from '@/components/sections/HeroSection';
import PainPointsSection from '@/components/sections/PainPointsSection';
import SolutionSection from '@/components/sections/SolutionSection';
import ComparisonTableSection from '@/components/sections/ComparisonTableSection';
import CaseStudyTeaser from '@/components/sections/CaseStudyTeaser';
import FinalCTASection from '@/components/sections/FinalCTASection';

export async function generateMetadata() {
  const t = await getTranslations('HomePage');
  return {
    title: t('meta_title'),
    description: t('meta_description'),
    openGraph: {
      title: t('meta_title'),
      description: t('og_description'),
      type: 'website',
    },
  };
}

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
