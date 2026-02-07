import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'TermsPage' });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function TermsPage() {
  const t = await getTranslations('TermsPage');

  const sections = [1, 2, 3, 4] as const;

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold">{t('title')}</h1>
        <p className="mt-2 text-sm text-gray-500">{t('last_updated')}</p>
      </header>
      <main className="container mx-auto px-4 pb-16">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <p className="text-gray-700 leading-relaxed mb-8">{t('intro')}</p>
          {sections.map((num) => (
            <section key={num} className="mb-8">
              <h2 className="text-2xl font-bold mb-3">
                {t(`section_${num}_title`)}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t(`section_${num}_content`)}
              </p>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
