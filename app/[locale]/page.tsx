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

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Code Cognition Studio',
  url: 'https://ccognitions.com',
  description: 'AI-powered software development studio building complex systems and MVPs with AI orchestration.',
  founder: {
    '@type': 'Person',
    name: 'Marcelo Ruilova',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'info@ccognitions.com',
    contactType: 'customer support',
  },
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <HeroSection />
      <PainPointsSection />
      <SolutionSection />
      <ComparisonTableSection />
      <CaseStudyTeaser />
      <FinalCTASection />
    </main>
  );
}
