'use client';

import {useState, useEffect, useRef} from 'react';
import {useRouter, usePathname} from '@/i18n/navigation';
import {useLocale} from 'next-intl';

const languages = [
  {code: 'en', flag: '\u{1F1FA}\u{1F1F8}', name: 'English'},
  {code: 'es', flag: '\u{1F1EA}\u{1F1F8}', name: 'Español'},
] as const;

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  const currentLang = languages.find((l) => l.code === locale) ?? languages[1];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, {locale: newLocale});
    setIsOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-300 hover:text-white flex items-center gap-1"
        aria-label="Change language"
      >
        <span>{currentLang.flag}</span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 bg-gray-700 rounded shadow-lg py-1 z-50 min-w-[140px]">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLocale(lang.code)}
              className={`w-full text-left px-3 py-2 flex items-center gap-2 hover:bg-gray-600 ${
                lang.code === locale ? 'text-white' : 'text-gray-300'
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
