import {Link} from '@/i18n/navigation';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <span className="text-8xl font-bold text-gray-300">404</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Página no encontrada
        </h1>
        <p className="text-gray-600 mb-8">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <div className="space-x-4">
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Volver al inicio
          </Link>
          <Link
            href="/contact"
            className="inline-block bg-gray-200 text-gray-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Contactar
          </Link>
        </div>
      </div>
    </div>
  );
}
