import { SERVICE_SLUGS } from '@/lib/constants';
import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';

export async function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = await getTranslations('ServiceDetailPage');
  const ts = await getTranslations('Services');
  const serviceIndex = SERVICE_SLUGS.indexOf(slug);

  if (serviceIndex === -1) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">{t('not_found_title')}</h2>
          <Link
            href="/services"
            className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors"
          >
            {t('not_found_button')}
          </Link>
        </div>
      </div>
    );
  }

  const serviceTitle = ts(`${slug}.title`);
  const serviceProblem = ts(`${slug}.problem`);
  const serviceSolution = ts(`${slug}.solution`);
  const serviceBenefit = ts(`${slug}.benefit`);
  const whyItems = t.raw('why_items') as string[];

  const gradientColors = [
    'from-purple-500 to-purple-700',
    'from-blue-500 to-blue-700',
    'from-green-500 to-green-700',
    'from-orange-500 to-orange-700'
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 min-h-screen">
      {/* Hero Section */}
      <header className={`bg-gradient-to-r ${gradientColors[serviceIndex % 4]} text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/services"
              className="inline-flex items-center text-white hover:text-gray-200 mb-8 transition-colors"
            >
              <span className="mr-2">←</span> {t('back_to_services')}
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {serviceTitle}
            </h1>
            <p className="text-xl md:text-2xl text-white opacity-90">
              {t('hero_subtitle')}
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">

          {/* CTA Banner - Top */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border-l-4 border-blue-500">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {t('ready_title')}
                </h3>
                <p className="text-gray-600">
                  {t('ready_description')}
                </p>
              </div>
              <Link
                href="/contact"
                className="bg-blue-600 text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg whitespace-nowrap"
              >
                {t('request_consultation')}
              </Link>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">

              {/* Problem Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:shadow-xl transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">⚠</span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {t('challenge')}
                    </h2>
                    <div className="h-1 w-20 bg-red-500 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {serviceProblem}
                </p>
              </div>

              {/* Solution Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:shadow-xl transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">✓</span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {t('our_solution')}
                    </h2>
                    <div className="h-1 w-20 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {serviceSolution}
                </p>
              </div>

              {/* Benefit Section */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-lg p-8 border-2 border-green-200">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl text-white">★</span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-green-800 mb-2">
                      {t('main_benefit')}
                    </h2>
                    <div className="h-1 w-20 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <p className="text-green-900 text-xl font-bold leading-relaxed">
                  {serviceBenefit}
                </p>
              </div>

            </div>

            {/* Sidebar */}
            <div className="space-y-8">

              {/* Quick CTA Card */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white sticky top-8">
                <h3 className="text-2xl font-bold mb-4">
                  {t('interested')}
                </h3>
                <p className="text-blue-100 mb-6">
                  {t('interested_description')}
                </p>
                <Link
                  href="/contact"
                  className="block w-full bg-white text-blue-600 font-bold py-4 px-6 rounded-lg text-center hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg mb-4"
                >
                  {t('contact_now')}
                </Link>
                <div className="text-center text-blue-100 text-sm">
                  {t('response_time')}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t('why_choose_us')}
                </h3>
                <ul className="space-y-3">
                  {whyItems.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-500 mr-2 text-lg">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl shadow-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">
              {t('bottom_cta_title')}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t('bottom_cta_subtitle', { serviceTitle: serviceTitle.toLowerCase() })}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-xl"
              >
                {t('start_now')}
              </Link>
              <Link
                href="/services"
                className="text-white font-semibold hover:text-gray-300 transition-colors underline"
              >
                {t('view_other_services')}
              </Link>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
