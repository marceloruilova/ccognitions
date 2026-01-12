import { SERVICES_DATA } from '@/lib/constants';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 min-h-screen">
      {/* Hero Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Soluciones Tecnológicas a tu Medida
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
            Transformamos tus ideas en realidad con desarrollo profesional, automatización inteligente y consultoría estratégica en IA.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 font-bold py-4 px-10 rounded-full text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl"
          >
            Solicita una Consulta Gratuita
          </Link>
        </div>
      </header>

      {/* Services Grid */}
      <main className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Elige la solución que mejor se adapte a tus necesidades o déjanos asesorarte
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.slug}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col overflow-hidden group"
            >
              {/* Card Header with gradient */}
              <div className={`p-6 bg-gradient-to-r ${
                index === 0 ? 'from-purple-500 to-purple-600' :
                index === 1 ? 'from-blue-500 to-blue-600' :
                index === 2 ? 'from-green-500 to-green-600' :
                'from-orange-500 to-orange-600'
              } text-white`}>
                <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                <div className="h-1 w-20 bg-white rounded-full"></div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-grow">
                <div className="mb-6">
                  <div className="flex items-start mb-3">
                    <span className="text-red-500 font-bold text-lg mr-2">⚠</span>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">El Desafío</h3>
                      <p className="text-gray-600 leading-relaxed">{service.problem}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-start mb-3">
                    <span className="text-blue-500 font-bold text-lg mr-2">✓</span>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Nuestra Solución</h3>
                      <p className="text-gray-600 leading-relaxed">{service.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-5 rounded-xl border-l-4 border-green-500">
                  <div className="flex items-start">
                    <span className="text-green-600 font-bold text-lg mr-2">★</span>
                    <div>
                      <h3 className="font-bold text-green-800 mb-1">Beneficio Clave</h3>
                      <p className="text-green-700 font-semibold">{service.benefit}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer with CTA */}
              <div className="p-6 bg-gray-50 border-t border-gray-100">
                <div className="flex gap-3">
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex-1 text-center bg-gray-200 text-gray-700 font-semibold py-3 px-4 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Ver Detalles
                  </Link>
                  <Link
                    href="/contact"
                    className="flex-1 text-center bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors transform hover:scale-105"
                  >
                    Solicitar
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl shadow-2xl overflow-hidden">
          <div className="px-8 py-16 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">
              ¿No estás seguro qué servicio necesitas?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Agenda una consulta gratuita de 30 minutos y te ayudaremos a encontrar la solución perfecta para tu proyecto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 font-bold py-4 px-10 rounded-full text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl"
              >
                Agendar Consulta Gratuita
              </Link>
              <span className="text-blue-100">o</span>
              <a
                href="mailto:contacto@tuempresa.com"
                className="text-white font-semibold underline hover:text-blue-100 transition-colors"
              >
                Envíanos un email
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
