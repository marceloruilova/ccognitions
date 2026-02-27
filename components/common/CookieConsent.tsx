'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const COOKIE_KEY = 'cookie_consent';

export default function CookieConsent() {
  const t = useTranslations('CookieConsent');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (!stored) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem(COOKIE_KEY, 'rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 border-t border-gray-700 shadow-2xl">
      <div className="container mx-auto px-4 py-4 md:py-5">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex-1 text-sm text-gray-300 leading-relaxed">
            <p>
              {t('message')}{' '}
              <Link href="/privacy" className="text-blue-400 hover:text-blue-300 underline">
                {t('privacy_link')}
              </Link>
              .
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={reject}
              className="px-4 py-2 text-sm text-gray-400 hover:text-white border border-gray-600 hover:border-gray-400 rounded-lg transition-colors"
            >
              {t('reject')}
            </button>
            <button
              onClick={accept}
              className="px-5 py-2 text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors"
            >
              {t('accept')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
