'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Enviando...');
    // Simulate API call
    setTimeout(() => {
      setStatus('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
      // e.target.reset(); // This would be used in a real form
    }, 2000);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold">Hablemos de tu proyecto</h1>
        <p className="mt-2 text-lg text-gray-600">
          Completa el formulario y un orquestador de IA se pondrá en contacto contigo.
        </p>
      </header>
      <main className="container mx-auto px-4 pb-16">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"/>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Empresa</label>
                <input type="text" id="company" name="company" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"/>
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"/>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">¿En qué podemos ayudarte?</label>
              <textarea id="message" name="message" rows={5} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Enviar Mensaje
              </button>
            </div>
          </form>
          {status && (
            <p className="mt-6 text-center text-lg font-semibold text-green-600">{status}</p>
          )}
        </div>
      </main>
    </div>
  );
}
