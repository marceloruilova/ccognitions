import Link from 'next/link';

export default function XPovertyProjectPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-slate-800 to-slate-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-5"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/projects"
              className="inline-flex items-center text-white hover:text-gray-300 mb-8 transition-colors"
            >
              <span className="mr-2">←</span> Volver a proyectos
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              xPoverty: Plataforma de Donaciones Enterprise
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Arquitectura robusta, múltiples pasarelas de pago y testing completo para transformar el impacto social
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">

          {/* Project Overview */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Visión General del Proyecto</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              xPoverty es una aplicación de donaciones desarrollada con arquitectura enterprise-grade que permite a organizaciones sin fines de lucro recibir donaciones de manera segura y eficiente. El proyecto fue construido con las mejores prácticas de la industria, enfocándose en escalabilidad, seguridad y experiencia de usuario.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md font-semibold border border-gray-300">C# .NET</span>
              <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md font-semibold border border-gray-300">Flutter</span>
              <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md font-semibold border border-gray-300">Stripe</span>
              <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md font-semibold border border-gray-300">DLocal</span>
              <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md font-semibold border border-gray-300">Digital Ocean</span>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">

              {/* Challenge Section */}
              <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4 border border-gray-300">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      El Desafío
                    </h2>
                    <div className="h-1 w-20 bg-gray-800 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Crear una plataforma de donaciones que pudiera manejar múltiples pasarelas de pago internacionales, cumplir con estrictos requisitos de compliance, y ofrecer una experiencia fluida tanto en web como en dispositivos móviles.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span>Integración de múltiples pasarelas de pago (Stripe y DLocal)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span>Cumplimiento de normativas de compliance y seguridad</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span>Experiencia multiplataforma consistente (Web y Mobile)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span>Sistema de webhooks confiable para sincronización en tiempo real</span>
                  </li>
                </ul>
              </div>

              {/* Solution Section */}
              <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4 border border-gray-300">
                    <span className="text-2xl">💡</span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      La Solución
                    </h2>
                    <div className="h-1 w-20 bg-gray-800 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Desarrollamos una arquitectura de microservicios robusta con C# .NET para el backend, garantizando escalabilidad y mantenibilidad. El frontend fue construido con Flutter, permitiendo un código único para web, iOS y Android.
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-gray-600 pl-4 bg-gray-50 py-2">
                    <h3 className="font-bold text-gray-900 mb-1">Backend Enterprise</h3>
                    <p className="text-gray-700">C# .NET con arquitectura limpia, CQRS pattern, y Entity Framework Core para gestión de datos eficiente.</p>
                  </div>
                  <div className="border-l-4 border-gray-600 pl-4 bg-gray-50 py-2">
                    <h3 className="font-bold text-gray-900 mb-1">Frontend Multiplataforma</h3>
                    <p className="text-gray-700">Flutter con BLoC pattern para state management, garantizando código reutilizable y mantenible.</p>
                  </div>
                  <div className="border-l-4 border-gray-600 pl-4 bg-gray-50 py-2">
                    <h3 className="font-bold text-gray-900 mb-1">Integración de Pagos</h3>
                    <p className="text-gray-700">Implementación de Stripe para mercados globales y DLocal para América Latina, con sistema de fallback automático.</p>
                  </div>
                </div>
              </div>

              {/* Technical Stack */}
              <div className="bg-gray-900 rounded-lg shadow-md p-8 text-white border border-gray-700">
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mr-4 border border-gray-600">
                    <span className="text-2xl">⚙️</span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-2">
                      Stack Tecnológico
                    </h2>
                    <div className="h-1 w-20 bg-gray-500 rounded-full"></div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-gray-300 mb-3">Backend</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>• C# .NET Core</li>
                      <li>• Entity Framework Core</li>
                      <li>• ASP.NET Web API</li>
                      <li>• SignalR para real-time</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-300 mb-3">Frontend</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>• Flutter (Dart)</li>
                      <li>• BLoC State Management</li>
                      <li>• Material Design</li>
                      <li>• Responsive UI</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-300 mb-3">Pagos</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>• Stripe API</li>
                      <li>• DLocal Integration</li>
                      <li>• Webhook Management</li>
                      <li>• PCI Compliance</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-300 mb-3">DevOps</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>• GitHub Actions CI/CD</li>
                      <li>• Digital Ocean Hosting</li>
                      <li>• Docker Containers</li>
                      <li>• Automated Deployments</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Testing Strategy */}
              <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4 border border-gray-300">
                    <span className="text-2xl">✓</span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      Estrategia de Testing
                    </h2>
                    <div className="h-1 w-20 bg-gray-800 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Implementamos una estrategia de testing multinivel que garantiza la calidad y confiabilidad del código en todos los niveles de la aplicación.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-300">
                    <h3 className="font-bold text-gray-800 mb-2">Unitarias</h3>
                    <p className="text-gray-700 text-sm">xUnit para .NET y Flutter Test para validar lógica de negocio y componentes individuales.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-300">
                    <h3 className="font-bold text-gray-800 mb-2">Integración</h3>
                    <p className="text-gray-700 text-sm">Testing de APIs, base de datos y servicios externos para garantizar comunicación correcta.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-300">
                    <h3 className="font-bold text-gray-800 mb-2">End-to-End</h3>
                    <p className="text-gray-700 text-sm">Flutter Web testing y Patrol para mobile, simulando flujos completos de usuario.</p>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4 border border-gray-300">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      Características Clave
                    </h2>
                    <div className="h-1 w-20 bg-gray-800 rounded-full"></div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <span className="text-gray-600 mr-3 text-lg">▸</span>
                    <span className="text-gray-700">Arquitectura limpia y escalable</span>
                  </div>
                  <div className="flex items-start p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <span className="text-gray-600 mr-3 text-lg">▸</span>
                    <span className="text-gray-700">Paletas de colores optimizadas</span>
                  </div>
                  <div className="flex items-start p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <span className="text-gray-600 mr-3 text-lg">▸</span>
                    <span className="text-gray-700">Webhooks confiables</span>
                  </div>
                  <div className="flex items-start p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <span className="text-gray-600 mr-3 text-lg">▸</span>
                    <span className="text-gray-700">Costos optimizados</span>
                  </div>
                  <div className="flex items-start p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <span className="text-gray-600 mr-3 text-lg">▸</span>
                    <span className="text-gray-700">Testing completo</span>
                  </div>
                  <div className="flex items-start p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <span className="text-gray-600 mr-3 text-lg">▸</span>
                    <span className="text-gray-700">Despliegue automatizado</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Sidebar */}
            <div className="space-y-8">

              {/* Key Metrics */}
              <div className="bg-slate-800 rounded-lg shadow-md p-8 text-white sticky top-8 border border-gray-700">
                <h3 className="text-2xl font-bold mb-6">
                  Resultados Clave
                </h3>
                <div className="space-y-4">
                  <div className="bg-slate-700 bg-opacity-70 rounded-lg p-4 border border-gray-600">
                    <div className="text-3xl font-bold mb-1">2</div>
                    <div className="text-sm text-gray-300">Pasarelas de Pago Integradas</div>
                  </div>
                  <div className="bg-slate-700 bg-opacity-70 rounded-lg p-4 border border-gray-600">
                    <div className="text-3xl font-bold mb-1">3</div>
                    <div className="text-sm text-gray-300">Plataformas (Web, iOS, Android)</div>
                  </div>
                  <div className="bg-slate-700 bg-opacity-70 rounded-lg p-4 border border-gray-600">
                    <div className="text-3xl font-bold mb-1">100%</div>
                    <div className="text-sm text-gray-300">Compliance Verificado</div>
                  </div>
                  <div className="bg-slate-700 bg-opacity-70 rounded-lg p-4 border border-gray-600">
                    <div className="text-3xl font-bold mb-1">CI/CD</div>
                    <div className="text-sm text-gray-300">Deployment Automatizado</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Architecture Decisions */}
          <div className="bg-gray-100 rounded-lg shadow-md p-8 mb-12 border border-gray-300">
            <div className="flex items-start mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mr-4 border border-gray-600">
                <span className="text-2xl text-white">🏗️</span>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Decisiones Arquitectónicas Clave
                </h2>
                <div className="h-1 w-20 bg-gray-700 rounded-full"></div>
              </div>
            </div>
            <p className="text-gray-800 text-lg leading-relaxed mb-4">
              El proyecto se benefició de consultas con múltiples agentes de código especializados y GPTs, evaluando cuidadosamente cada decisión técnica para garantizar la mejor solución a largo plazo.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-gray-300">
                <h3 className="font-bold text-gray-800 mb-2">Arquitectura Backend</h3>
                <p className="text-gray-700 text-sm">CQRS y Clean Architecture para separación de responsabilidades y facilitar testing.</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-300">
                <h3 className="font-bold text-gray-800 mb-2">State Management</h3>
                <p className="text-gray-700 text-sm">BLoC pattern en Flutter para gestión de estado predecible y testeable.</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-300">
                <h3 className="font-bold text-gray-800 mb-2">Payment Gateway</h3>
                <p className="text-gray-700 text-sm">Sistema de fallback entre Stripe y DLocal para maximizar tasas de éxito.</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-300">
                <h3 className="font-bold text-gray-800 mb-2">Deployment Strategy</h3>
                <p className="text-gray-700 text-sm">Digital Ocean con costos optimizados y CI/CD automatizado con GitHub Actions.</p>
              </div>
            </div>
          </div>

          {/* Visit Project CTA */}
          <div className="bg-slate-800 rounded-lg shadow-lg p-12 text-center text-white border border-gray-700">
            <h2 className="text-4xl font-bold mb-4">
              Visita xPoverty
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Descubre cómo esta plataforma está transformando el impacto social a través de donaciones seguras y eficientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://xpoverty.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 font-bold py-4 px-10 rounded-lg text-lg hover:bg-gray-100 transition-all shadow-md"
              >
                Visitar xPoverty.com →
              </a>
              <Link
                href="/contact"
                className="text-gray-300 font-semibold hover:text-white transition-colors underline"
              >
                ¿Necesitas un proyecto similar?
              </Link>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
