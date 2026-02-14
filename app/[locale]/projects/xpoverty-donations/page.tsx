import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';

export default async function XPovertyProjectPage() {
  const t = await getTranslations('XPovertyPage');
  const challengeItems = t.raw('challenge_items') as string[];
  const featuresItems = t.raw('features_items') as string[];
  const keyResults = t.raw('key_results') as Array<{ value: string; label: string }>;
  const architectureItems = t.raw('architecture_items') as Array<{ title: string; description: string }>;
  const techBackend = t.raw('tech_backend_items') as string[];
  const techFrontend = t.raw('tech_frontend_items') as string[];
  const techPayments = t.raw('tech_payments_items') as string[];
  const techDevops = t.raw('tech_devops_items') as string[];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-slate-800 to-slate-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-5"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/projects"
              className="inline-flex items-center text-white hover:text-gray-300 mb-8 transition-colors"
            >
              <span className="mr-2">←</span> {t('back_to_projects')}
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t('hero_title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              {t('hero_subtitle')}
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">

          {/* Project Overview */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('overview_title')}</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              {t('overview_description')}
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md font-semibold border border-gray-300">C# .NET</span>
              <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md font-semibold border border-gray-300">Flutter</span>
              <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md font-semibold border border-gray-300">Stripe</span>
              <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md font-semibold border border-gray-300">DLocal</span>
              <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md font-semibold border border-gray-300">Digital Ocean</span>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 space-y-8">

              {/* Challenge Section */}
              <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4 border border-gray-300">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{t('challenge_title')}</h2>
                    <div className="h-1 w-20 bg-gray-800 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">{t('challenge_description')}</p>
                <ul className="space-y-2 text-gray-700">
                  {challengeItems.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-gray-600 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solution Section */}
              <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4 border border-gray-300">
                    <span className="text-2xl">💡</span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{t('solution_title')}</h2>
                    <div className="h-1 w-20 bg-gray-800 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">{t('solution_description')}</p>
                <div className="space-y-4">
                  <div className="border-l-4 border-gray-600 pl-4 bg-gray-50 py-2">
                    <h3 className="font-bold text-gray-900 mb-1">{t('solution_backend_title')}</h3>
                    <p className="text-gray-700">{t('solution_backend_description')}</p>
                  </div>
                  <div className="border-l-4 border-gray-600 pl-4 bg-gray-50 py-2">
                    <h3 className="font-bold text-gray-900 mb-1">{t('solution_frontend_title')}</h3>
                    <p className="text-gray-700">{t('solution_frontend_description')}</p>
                  </div>
                  <div className="border-l-4 border-gray-600 pl-4 bg-gray-50 py-2">
                    <h3 className="font-bold text-gray-900 mb-1">{t('solution_payments_title')}</h3>
                    <p className="text-gray-700">{t('solution_payments_description')}</p>
                  </div>
                </div>
              </div>

              {/* Technical Stack */}
              <div className="bg-gray-900 rounded-lg shadow-md p-8 text-white border border-gray-700">
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mr-4 border border-gray-600">
                    <span className="text-2xl">⚙️</span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{t('tech_stack_title')}</h2>
                    <div className="h-1 w-20 bg-gray-500 rounded-full"></div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-gray-300 mb-3">{t('tech_backend_title')}</h3>
                    <ul className="space-y-2 text-gray-400">
                      {techBackend.map((item, i) => <li key={i}>• {item}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-300 mb-3">{t('tech_frontend_title')}</h3>
                    <ul className="space-y-2 text-gray-400">
                      {techFrontend.map((item, i) => <li key={i}>• {item}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-300 mb-3">{t('tech_payments_title')}</h3>
                    <ul className="space-y-2 text-gray-400">
                      {techPayments.map((item, i) => <li key={i}>• {item}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-300 mb-3">{t('tech_devops_title')}</h3>
                    <ul className="space-y-2 text-gray-400">
                      {techDevops.map((item, i) => <li key={i}>• {item}</li>)}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Testing Strategy */}
              <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4 border border-gray-300">
                    <span className="text-2xl">✓</span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{t('testing_title')}</h2>
                    <div className="h-1 w-20 bg-gray-800 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">{t('testing_description')}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-300">
                    <h3 className="font-bold text-gray-800 mb-2">{t('testing_unit_title')}</h3>
                    <p className="text-gray-700 text-sm">{t('testing_unit_description')}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-300">
                    <h3 className="font-bold text-gray-800 mb-2">{t('testing_integration_title')}</h3>
                    <p className="text-gray-700 text-sm">{t('testing_integration_description')}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-300">
                    <h3 className="font-bold text-gray-800 mb-2">{t('testing_e2e_title')}</h3>
                    <p className="text-gray-700 text-sm">{t('testing_e2e_description')}</p>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4 border border-gray-300">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{t('features_title')}</h2>
                    <div className="h-1 w-20 bg-gray-800 rounded-full"></div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {featuresItems.map((item, i) => (
                    <div key={i} className="flex items-start p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <span className="text-gray-600 mr-3 text-lg">▸</span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-slate-800 rounded-lg shadow-md p-8 text-white sticky top-8 border border-gray-700">
                <h3 className="text-2xl font-bold mb-6">{t('key_results_title')}</h3>
                <div className="space-y-4">
                  {keyResults.map((result, i) => (
                    <div key={i} className="bg-slate-700 bg-opacity-70 rounded-lg p-4 border border-gray-600">
                      <div className="text-3xl font-bold mb-1">{result.value}</div>
                      <div className="text-sm text-gray-300">{result.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Architecture Decisions */}
          <div className="bg-gray-100 rounded-lg shadow-md p-8 mb-12 border border-gray-300">
            <div className="flex items-start mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mr-4 border border-gray-600">
                <span className="text-2xl text-white">🏗️</span>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{t('architecture_title')}</h2>
                <div className="h-1 w-20 bg-gray-700 rounded-full"></div>
              </div>
            </div>
            <p className="text-gray-800 text-lg leading-relaxed mb-4">{t('architecture_description')}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {architectureItems.map((item, i) => (
                <div key={i} className="bg-white p-4 rounded-lg border border-gray-300">
                  <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visit Project CTA */}
          <div className="bg-slate-800 rounded-lg shadow-lg p-12 text-center text-white border border-gray-700">
            <h2 className="text-4xl font-bold mb-4">{t('visit_title')}</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">{t('visit_description')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://xpoverty.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 font-bold py-4 px-10 rounded-lg text-lg hover:bg-gray-100 transition-all shadow-md"
              >
                {t('visit_button')}
              </a>
              <Link
                href="/contact"
                className="text-gray-300 font-semibold hover:text-white transition-colors underline"
              >
                {t('visit_contact')}
              </Link>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
