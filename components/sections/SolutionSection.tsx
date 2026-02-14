'use client';
import {useTranslations} from 'next-intl';

export default function SolutionSection() {
  const t = useTranslations('SolutionSection');
  const features = t.raw('features') as string[];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold">{t('title')}</h2>
        <p className="mt-4 text-lg text-gray-600">
          {t('description')}
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature} className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{feature}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
