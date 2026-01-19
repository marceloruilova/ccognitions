'use client';

import {useEffect} from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & {digest?: string};
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to an error reporting service if needed
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <span className="text-6xl">⚠️</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Algo salió mal
        </h1>
        <p className="text-gray-600 mb-8">
          Ha ocurrido un error inesperado. Por favor, intenta de nuevo.
        </p>
        <div className="space-x-4">
          <button
            onClick={reset}
            className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Intentar de nuevo
          </button>
        </div>
      </div>
    </div>
  );
}
