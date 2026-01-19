'use client';

import {Link} from '@/i18n/navigation';
import {useTranslations} from 'next-intl';

export default function DIYPage() {
  const t = useTranslations('DIYPage');

  const costItems = [
    { icon: '📚', key: 0 },
    { icon: '🔧', key: 1 },
    { icon: '💸', key: 2 },
    { icon: '⏰', key: 3 },
  ];

  const valueItems = [
    { icon: '🚀', key: 0 },
    { icon: '👥', key: 1 },
    { icon: '📈', key: 2 },
    { icon: '🎯', key: 3 },
  ];

  const philosophyItems = [
    { icon: '💎', key: 0 },
    { icon: '🔍', key: 1 },
    { icon: '🤝', key: 2 },
    { icon: '⚡', key: 3 },
  ];

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
            <p className="text-2xl md:text-3xl text-blue-300 mb-4">
              {t('hero_subtitle')}
            </p>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('hero_description')}
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* New Section */}
          <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8">
              <p className="text-gray-700 mb-6 text-lg">
                {t('videos_intro')}
              </p>
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <p className="text-yellow-900 font-medium">
                  {t('videos_work_in_progress')}
                </p>
              </div>
              <p className="text-gray-700 mt-6 text-lg">
                {t('videos_trust')}
              </p>
            </div>
          </section>

          {/* Section: The Truth About AI */}
          <section className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-8">
              <h2 className="text-3xl font-bold mb-2">{t('truth_title')}</h2>
              <p className="text-green-100 text-lg">{t('truth_subtitle')}</p>
            </div>
            <div className="p-8">
              <p className="text-gray-700 mb-6 text-lg">{t('truth_intro')}</p>
              <ul className="space-y-3 mb-6">
                {(t.raw('truth_items') as string[]).map((item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1 text-xl">✓</span>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-green-900 font-medium">{t('truth_conclusion')}</p>
              </div>
            </div>
          </section>

          {/* Section: The Real Cost */}
          <section className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-8">
              <h2 className="text-3xl font-bold mb-2">{t('cost_title')}</h2>
              <p className="text-orange-100 text-lg">{t('cost_subtitle')}</p>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {costItems.map((item) => {
                  const costData = (t.raw('cost_items') as Array<{title: string; description: string}>)[item.key];
                  return (
                    <div key={item.key} className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                      <div className="flex items-start gap-4">
                        <span className="text-3xl">{item.icon}</span>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-2">{costData.title}</h3>
                          <p className="text-gray-700">{costData.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Section: Our Value */}
          <section className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8">
              <h2 className="text-3xl font-bold mb-2">{t('value_title')}</h2>
              <p className="text-blue-100 text-lg">{t('value_subtitle')}</p>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {valueItems.map((item) => {
                  const valueData = (t.raw('value_items') as Array<{title: string; description: string}>)[item.key];
                  return (
                    <div key={item.key} className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <div className="flex items-start gap-4">
                        <span className="text-3xl">{item.icon}</span>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-2">{valueData.title}</h3>
                          <p className="text-gray-700">{valueData.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Section: Comparison Table */}
          <section className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-8">
              <h2 className="text-3xl font-bold">{t('comparison_title')}</h2>
            </div>
            <div className="p-8 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-4 font-bold text-gray-900">{t('comparison_aspect')}</th>
                    <th className="text-left py-4 px-4 font-bold text-orange-600">{t('comparison_diy')}</th>
                    <th className="text-left py-4 px-4 font-bold text-blue-600">{t('comparison_us')}</th>
                  </tr>
                </thead>
                <tbody>
                  {(t.raw('comparison_rows') as Array<{aspect: string; diy: string; us: string}>).map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4 font-medium text-gray-900">{row.aspect}</td>
                      <td className="py-4 px-4 text-gray-700">{row.diy}</td>
                      <td className="py-4 px-4 text-gray-700">{row.us}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section: Our Philosophy */}
          <section className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white p-8">
              <h2 className="text-3xl font-bold mb-2">{t('philosophy_title')}</h2>
              <p className="text-indigo-100 text-lg">{t('philosophy_subtitle')}</p>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {philosophyItems.map((item) => {
                  const philosophyData = (t.raw('philosophy_items') as Array<{title: string; description: string}>)[item.key];
                  return (
                    <div key={item.key} className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                      <div className="flex items-start gap-4">
                        <span className="text-3xl">{item.icon}</span>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-2">{philosophyData.title}</h3>
                          <p className="text-gray-700">{philosophyData.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 rounded-3xl shadow-2xl overflow-hidden">
            <div className="px-8 py-16 text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {t('cta_title')}
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                {t('cta_subtitle')}
              </p>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* DIY Option */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <p className="text-gray-300 mb-6">{t('cta_diy_description')}</p>
                  <Link
                    href="https://cursor.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105"
                  >
                    {t('cta_diy_button')}
                  </Link>
                </div>

                {/* Contact Option */}
                <div className="bg-blue-600/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30">
                  <p className="text-gray-300 mb-6">{t('cta_contact_description')}</p>
                  <Link
                    href="/contact"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-xl"
                  >
                    {t('cta_contact_button')}
                  </Link>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
