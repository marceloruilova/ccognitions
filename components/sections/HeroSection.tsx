import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold">Desarrollo de software con Inteligencia Artificial</h1>
        <p className="mt-4 text-xl">
          Construcción de MVPs y sistemas complejos reemplazando la burocracia de equipos grandes por orquestación de modelos.
        </p>
        <div className="mt-8">
          <Link
            href="/proceso"
            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            Ver cómo funciona
          </Link>
          <Link
            href="/services"
            className="ml-4 inline-block bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded transition-colors"
          >
            Explorar servicios
          </Link>
        </div>
      </div>
    </section>
  );
}
