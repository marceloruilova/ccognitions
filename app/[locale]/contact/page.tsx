'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import {useTranslations} from 'next-intl';

export default function ContactPage() {
  const [status, setStatus] = useState('');
  const [statusType, setStatusType] = useState<'success' | 'error' | 'loading'>('success');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const searchParams = useSearchParams();
  const t = useTranslations('ContactPage');

  useEffect(() => {
    const service = searchParams.get('service');
    const challenge = searchParams.get('challenge');

    if (service && challenge) {
      const prefilledMessage = `Hola, estoy interesado en el servicio: ${service}\n\nDesafío: ${challenge}\n\n`;
      setMessage(prefilledMessage);
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(t('statusSending'));
    setStatusType('loading');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      company: formData.get('company') as string,
      email: formData.get('email') as string,
      message: message,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus(result.message || t('statusSuccess'));
        setStatusType('success');
        // Reset form
        e.currentTarget.reset();
        setMessage('');
      } else if (response.status === 429) {
        // Rate limit exceeded
        setStatus(result.error || 'Límite diario alcanzado. Por favor, vuelve mañana.');
        setStatusType('error');
      } else {
        setStatus(result.error || 'Error al enviar el mensaje. Por favor intenta de nuevo.');
        setStatusType('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Error de conexión. Por favor verifica tu internet e intenta de nuevo.');
      setStatusType('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold">{t('title')}</h1>
        <p className="mt-2 text-lg text-gray-600">
          {t('subtitle')}
        </p>
      </header>
      <main className="container mx-auto px-4 pb-16">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{t('nameLabel')}</label>
                <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"/>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">{t('companyLabel')}</label>
                <input type="text" id="company" name="company" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"/>
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{t('emailLabel')}</label>
              <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"/>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{t('messageLabel')}</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Enviando...' : t('submitButton')}
              </button>
            </div>
          </form>
          {status && (
            <div
              className={`mt-6 text-center text-lg font-semibold p-4 rounded-lg ${
                statusType === 'success'
                  ? 'bg-green-100 text-green-800 border border-green-300'
                  : statusType === 'error'
                  ? 'bg-red-100 text-red-800 border border-red-300'
                  : 'bg-blue-100 text-blue-800 border border-blue-300'
              }`}
            >
              {status}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
