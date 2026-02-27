'use client';

import { useEffect } from 'react';

interface AdUnitProps {
  slot: string;
  format?: 'auto' | 'fluid' | 'rectangle';
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export default function AdUnit({ slot, format = 'auto', className = '' }: AdUnitProps) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // adsbygoogle not ready
    }
  }, []);

  return (
    <div className={`ad-container my-6 ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-2184085000526938"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
