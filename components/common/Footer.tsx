'use client';

import {Link} from '@/i18n/navigation';
import {useTranslations} from 'next-intl';

const Footer = () => {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Code Cognition Studio</h3>
          <p className="text-gray-400">{t('brand_description')}</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">{t('quick_links')}</h4>
          <ul>
            <li><Link href="/projects" className="text-gray-400 hover:text-white">{t('projects')}</Link></li>
            <li><Link href="/services" className="text-gray-400 hover:text-white">{t('services')}</Link></li>
            <li><Link href="/blog" className="text-gray-400 hover:text-white">{t('blog')}</Link></li>
            <li><Link href="/contact" className="text-gray-400 hover:text-white">{t('contact')}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">{t('follow_us')}</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 pt-8 mt-8 border-t border-gray-700">
        <p>&copy; {new Date().getFullYear()} {t('copyright')}</p>
        <p className="mt-2 text-sm">
          <Link href="/privacy" className="text-gray-500 hover:text-white">{t('privacy')}</Link>
          {' | '}
          <Link href="/terms" className="text-gray-500 hover:text-white">{t('terms')}</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
