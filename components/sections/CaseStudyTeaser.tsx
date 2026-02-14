'use client';
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';

export default function CaseStudyTeaser() {
  const t = useTranslations('CaseStudyTeaser');
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold">{t('title')}</h2>
        <div className="mt-8 max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <p className="text-xl text-gray-700">
            {t.rich('quote', {
              bold: (chunks) => <span className="font-bold">{chunks}</span>
            })}
          </p>
          <Link href="/projects" className="inline-block mt-6 text-blue-600 hover:underline font-semibold">
            {t('link')}
          </Link>
        </div>
      </div>
    </section>
  );
}
