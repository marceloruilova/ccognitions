import {Link} from '@/i18n/navigation';
import {useTranslations} from 'next-intl';

const LittleSoldiersSection = () => {
  const t = useTranslations('LittleSoldiers');

  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
          {t('eyebrow')}
        </p>
        <h2 className="text-3xl font-bold sm:text-4xl">{t('title')}</h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
          {t('description')}
        </p>
        <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-slate-300">
          {t('account_description')}
        </p>
        <Link
          href="/privacy"
          className="mt-8 inline-flex rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-slate-950"
        >
          {t('privacy_link')}
        </Link>
      </div>
    </section>
  );
};

export default LittleSoldiersSection;
