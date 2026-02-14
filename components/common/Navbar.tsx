'use client';

import {useState} from 'react';
import {Link} from '@/i18n/navigation';
import {useTranslations} from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const t = useTranslations('Navbar');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

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
          <LanguageSwitcher />
        </div>
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-3">
          <Link href="/proceso" className="block text-gray-300 hover:text-white" onClick={closeMenu}>
            {t('proceso')}
          </Link>
          <Link href="/projects" className="block text-gray-300 hover:text-white" onClick={closeMenu}>
            {t('projects')}
          </Link>
          <Link href="/services" className="block text-gray-300 hover:text-white" onClick={closeMenu}>
            {t('services')}
          </Link>
          <Link href="/blog" className="block text-gray-300 hover:text-white" onClick={closeMenu}>
            {t('blog')}
          </Link>
          <Link href="/contact" className="block text-gray-300 hover:text-white" onClick={closeMenu}>
            {t('contact')}
          </Link>
          <LanguageSwitcher />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
