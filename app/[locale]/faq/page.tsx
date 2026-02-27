import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

export async function generateMetadata() {
  const t = await getTranslations('FaqPage');
  return {
    title: t('meta_title'),
    description: t('meta_description'),
    openGraph: {
      title: t('meta_title'),
      description: t('meta_description'),
      type: 'website',
    },
  };
}

export default async function FaqPage() {
  const t = await getTranslations('FaqPage');

  const questions = t.raw('questions') as Array<{ question: string; answer: string }>;

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <header className="bg-gray-900 py-20 md:py-28">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="inline-block px-4 py-1.5 bg-blue-500/20 text-blue-300 text-sm font-medium rounded-full mb-6 tracking-wide uppercase">
            {t('hero_badge')}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {t('hero_title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            {t('hero_subtitle')}
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="space-y-4">
          {questions.map((item, index) => (
            <details
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 group"
            >
              <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none">
                <h2 className="text-lg font-semibold text-gray-900 leading-snug">
                  {item.question}
                </h2>
                <span className="flex-shrink-0 w-6 h-6 text-blue-500 transition-transform group-open:rotate-180">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            </details>
          ))}
        </div>

        {/* CTA */}
        <section className="mt-16 text-center bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-10 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('cta_title')}</h2>
          <p className="text-blue-100 mb-8 text-lg">{t('cta_subtitle')}</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors"
          >
            {t('cta_button')}
          </Link>
        </section>
      </main>
    </div>
  );
}
