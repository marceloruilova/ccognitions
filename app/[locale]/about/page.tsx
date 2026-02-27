import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

export async function generateMetadata() {
  const t = await getTranslations('AboutPage');
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

export default async function AboutPage() {
  const t = await getTranslations('AboutPage');

  return (
    <div className="min-h-screen bg-gray-50">
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

        {/* Mission */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('mission_title')}</h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <p className="text-lg text-gray-600 leading-relaxed mb-4">{t('mission_p1')}</p>
            <p className="text-lg text-gray-600 leading-relaxed">{t('mission_p2')}</p>
          </div>
        </section>

        {/* Founder */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('founder_title')}</h2>
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-3xl font-bold">
                  MR
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{t('founder_name')}</h3>
                <p className="text-blue-600 font-semibold mb-4">{t('founder_role')}</p>
                <p className="text-gray-600 leading-relaxed mb-4">{t('founder_bio_p1')}</p>
                <p className="text-gray-600 leading-relaxed mb-4">{t('founder_bio_p2')}</p>
                <p className="text-gray-600 leading-relaxed">{t('founder_bio_p3')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('values_title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(['v1', 'v2', 'v3', 'v4'] as const).map((key) => (
              <div key={key} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{t(`${key}_title`)}</h3>
                <p className="text-gray-600 leading-relaxed">{t(`${key}_desc`)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Trust Us */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('trust_title')}</h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <ul className="space-y-4">
              {([
                'trust_item1',
                'trust_item2',
                'trust_item3',
                'trust_item4',
              ] as const).map((key) => (
                <li key={key} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">{t(key)}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-10 text-white">
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
