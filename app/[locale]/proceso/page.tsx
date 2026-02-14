import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';

export async function generateMetadata() {
  const t = await getTranslations('ProcesoPage');
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

interface Phase {
  number: string;
  title: string;
  subtitle: string;
  intro: string;
  inspirations: string[];
  icon: string;
  gradient: string;
  whatWeDo?: { title: string; items: string[] };
  aiApproach?: { title: string; description?: string; items: string[] };
  principles?: { title: string; items: string[] };
  footer?: { text: string; highlight: boolean };
}

export default async function ProcesoPage() {
  const t = await getTranslations('ProcesoPage');
  const phases = t.raw('phases') as Phase[];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t('hero_title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              {t('hero_subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-xl"
              >
                {t('hero_cta_start')}
              </Link>
              <Link
                href="/services"
                className="bg-white text-gray-900 font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
              >
                {t('hero_cta_services')}
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Process Steps */}
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200 h-full"></div>

            {/* Steps */}
            <div className="space-y-16">
              {phases.map((phase, index) => (
                <div key={phase.number} className={`relative ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8 lg:text-right'}`}>

                  {/* Timeline Dot */}
                  <div className={`hidden lg:block absolute top-8 ${index % 2 === 0 ? 'right-0' : 'left-0'} transform ${index % 2 === 0 ? 'translate-x-1/2' : '-translate-x-1/2'} w-8 h-8 bg-gradient-to-r ${phase.gradient} rounded-full border-4 border-white shadow-lg z-10`}>
                    <div className="absolute inset-0 rounded-full animate-ping bg-blue-400 opacity-20"></div>
                  </div>

                  {/* Content Card */}
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? '' : 'lg:ml-auto'}`}>
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">

                      {/* Card Header */}
                      <div className={`bg-gradient-to-r ${phase.gradient} text-white p-6`}>
                        <div className="flex items-center gap-4 mb-3">
                          <span className="text-4xl">{phase.icon}</span>
                          <span className="text-6xl font-bold opacity-30">{phase.number}</span>
                        </div>
                        <h2 className="text-3xl font-bold mb-2">{phase.title}</h2>
                        <p className="text-lg opacity-90">{phase.subtitle}</p>
                      </div>

                      {/* Card Body */}
                      <div className="p-8">

                        {/* Intro */}
                        {phase.intro && (
                          <p className="text-gray-700 mb-4 font-medium">{phase.intro}</p>
                        )}

                        {/* Inspirations/Key Points */}
                        {phase.inspirations && (
                          <ul className="space-y-2 mb-6">
                            {phase.inspirations.map((item, i) => (
                              <li key={i} className="flex items-start">
                                <span className="text-blue-500 mr-2 mt-1">▸</span>
                                <span className="text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {/* Principles */}
                        {phase.principles && (
                          <div className="mb-6 bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-gray-900 mb-2">{phase.principles.title}</h4>
                            <div className="flex flex-wrap gap-2">
                              {phase.principles.items.map((item, i) => (
                                <span key={i} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* What We Do */}
                        {phase.whatWeDo && (
                          <div className="mb-6 bg-blue-50 p-5 rounded-xl">
                            <h4 className="font-bold text-blue-900 mb-3 flex items-center">
                              <span className="mr-2">📌</span>
                              {phase.whatWeDo.title}
                            </h4>
                            <ul className="space-y-2">
                              {phase.whatWeDo.items.map((item, i) => (
                                <li key={i} className="flex items-start">
                                  <span className="text-blue-600 mr-2">✓</span>
                                  <span className="text-gray-700">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* AI Approach */}
                        {phase.aiApproach && (
                          <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-5 rounded-xl border-l-4 border-purple-500">
                            <h4 className="font-bold text-purple-900 mb-2 flex items-center">
                              <span className="mr-2">🤖</span>
                              {phase.aiApproach.title}
                            </h4>
                            {phase.aiApproach.description && (
                              <p className="text-gray-700 mb-3">{phase.aiApproach.description}</p>
                            )}
                            <ul className="space-y-2">
                              {phase.aiApproach.items.map((item, i) => (
                                <li key={i} className="flex items-start">
                                  <span className="text-purple-600 mr-2">→</span>
                                  <span className="text-gray-700">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Footer Message */}
                        {phase.footer && (
                          <div className={`mt-6 p-4 rounded-lg ${phase.footer.highlight ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-orange-400' : 'bg-gray-50'}`}>
                            <p className={`${phase.footer.highlight ? 'text-orange-900 font-bold' : 'text-gray-700'} text-center`}>
                              {phase.footer.text}
                            </p>
                          </div>
                        )}

                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl shadow-2xl overflow-hidden">
            <div className="px-8 py-16 text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {t('final_cta_title')}
              </h2>
              <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
                {t('final_cta_subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 font-bold py-5 px-12 rounded-full text-xl hover:bg-blue-50 transition-all transform hover:scale-105 shadow-2xl"
                >
                  {t('final_cta_button')}
                </Link>
                <Link
                  href="/services"
                  className="text-white font-semibold text-lg hover:text-blue-100 transition-colors underline"
                >
                  {t('final_cta_services')}
                </Link>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
