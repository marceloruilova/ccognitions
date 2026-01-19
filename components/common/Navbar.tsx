'use client';

import {Link} from '@/i18n/navigation';
import {useTranslations} from 'next-intl';

const Navbar = () => {
  const t = useTranslations('Navbar');

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          Code Cognition Studio
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/proceso" className="text-gray-300 hover:text-white">
            {t('proceso')}
          </Link>
          <Link href="/projects" className="text-gray-300 hover:text-white">
            {t('projects')}
          </Link>
          <Link href="/services" className="text-gray-300 hover:text-white">
            {t('services')}
          </Link>
          <Link href="/blog" className="text-gray-300 hover:text-white">
            {t('blog')}
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">
            {t('contact')}
          </Link>
        </div>
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
