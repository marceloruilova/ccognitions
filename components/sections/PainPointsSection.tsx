'use client';
import Image from 'next/image';
import {useTranslations} from 'next-intl';

export default function PainPointsSection() {
  const t = useTranslations('PainPointsSection');
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold">{t('title')}</h2>
        <p className="mt-4 text-lg text-gray-600">
          {t('description')}
        </p>
        <div className="mt-8 flex justify-center">
          <Image
            src="/images/overhead.png"
            alt={t('imageAlt')}
            width={600}
            height={450}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
