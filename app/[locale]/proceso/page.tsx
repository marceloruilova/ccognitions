import Link from 'next/link';

export default function ProcesoPage() {
  const phases = [
    {
      number: "01",
      title: "Entendimiento Estratégico del Problema",
      subtitle: "Antes de escribir una sola línea de código, pensamos.",
      intro: "Todo proyecto serio comienza con una fase de planeación inteligente, inspirada en:",
      inspirations: [
        "PMBOK (Project Management Body of Knowledge)",
        "Metodologías ágiles (Scrum, Kanban, híbridos)",
        "Ingeniería de software tradicional y moderna",
        "Arquitecturas escalables y mantenibles"
      ],
      icon: "🎯",
      whatWeDo: {
        title: "¿Qué hacemos aquí?",
        items: [
          "Reuniones iniciales claras y directas (sin burocracia)",
          "Definición del problema real de negocio",
          "Identificación de riesgos técnicos y operativos",
          "Definición de alcance, objetivos y métricas de éxito"
        ]
      },
      aiApproach: {
        title: "Enfoque IA",
        description: "Utilizamos inteligencia artificial como si fuera un ingeniero senior adicional, ayudándonos a:",
        items: [
          "Analizar requerimientos",
          "Simular escenarios",
          "Proponer arquitecturas óptimas",
          "Tomar decisiones técnicas mejor fundamentadas"
        ]
      },
      gradient: "from-blue-500 to-blue-600"
    },
    {
      number: "02",
      title: "Definición del Producto Final",
      subtitle: "El cliente sabe exactamente qué va a recibir.",
      intro: "En esta etapa definimos con total transparencia:",
      inspirations: [
        "Qué se va a construir",
        "Qué no se va a construir",
        "Qué versión se entregará",
        "Qué queda para futuras iteraciones"
      ],
      icon: "📦",
      whatWeDo: {
        title: "Entregables claros",
        items: [
          "Descripción funcional del producto",
          "Arquitectura propuesta (frontend, backend, infraestructura)",
          "Roadmap técnico",
          "Estimación de tiempos y costos"
        ]
      },
      footer: {
        text: "Sin documentos eternos. Sin reuniones innecesarias. Solo lo esencial, bien hecho.",
        highlight: true
      },
      gradient: "from-purple-500 to-purple-600"
    },
    {
      number: "03",
      title: "Diseño Técnico y Arquitectura",
      subtitle: "Pensado para crecer, no para romperse.",
      intro: "Aquí diseñamos la base del sistema:",
      inspirations: [
        "Arquitectura modular y escalable",
        "Decisiones tecnológicas justificadas",
        "Separación clara de responsabilidades",
        "Preparación para automatización y testing"
      ],
      icon: "🏗️",
      aiApproach: {
        title: "IA Aplicada",
        description: "La inteligencia artificial nos ayuda en:",
        items: [
          "Evaluación de patrones de diseño",
          "Comparación de stacks tecnológicos",
          "Detección temprana de errores de diseño",
          "Optimización de costos de infraestructura"
        ]
      },
      gradient: "from-indigo-500 to-indigo-600"
    },
    {
      number: "04",
      title: "Desarrollo del Aplicativo",
      subtitle: "Código primero, perfección después.",
      intro: "Seguimos una filosofía realista y profesional:",
      inspirations: [
        "Primero funciona.",
        "Luego se prueba.",
        "Después se limpia y se refactoriza."
      ],
      principles: {
        title: "Inspirados en:",
        items: ["Clean Code", "SOLID", "Buenas prácticas de ingeniería"]
      },
      icon: "💻",
      whatWeDo: {
        title: "Desarrollo incluye",
        items: [
          "Frontend",
          "Backend",
          "Integraciones",
          "Automatización cuando aplica"
        ]
      },
      aiApproach: {
        title: "La IA acelera",
        description: "La inteligencia artificial potencia nuestro desarrollo:",
        items: [
          "Generación de código base",
          "Detección de errores comunes",
          "Refactorización asistida",
          "Documentación técnica"
        ]
      },
      footer: {
        text: "Resultado: menos tiempo, menos errores, más calidad.",
        highlight: true
      },
      gradient: "from-green-500 to-green-600"
    },
    {
      number: "05",
      title: "Testing y Calidad",
      subtitle: "No confiamos en la suerte, confiamos en pruebas.",
      intro: "Aplicamos el ciclo completo de testing:",
      inspirations: [
        "Pruebas unitarias",
        "Pruebas de integración",
        "Pruebas end-to-end (si el servicio lo incluye)",
        "Validaciones funcionales"
      ],
      icon: "✅",
      whatWeDo: {
        title: "Enfoque",
        items: [
          "Calidad desde el inicio",
          "Automatización inteligente",
          "Reducción de regresiones",
          "Confianza antes de producción"
        ]
      },
      gradient: "from-teal-500 to-teal-600"
    },
    {
      number: "06",
      title: "Puesta en Producción",
      subtitle: "Llevamos tu producto al mundo real.",
      intro: "Para proyectos que incluyen producción:",
      inspirations: [
        "Configuración de entornos",
        "Despliegue controlado",
        "Validaciones finales",
        "Monitoreo inicial"
      ],
      icon: "🚀",
      whatWeDo: {
        title: "Todo pensado para",
        items: [
          "Reducir riesgos",
          "Minimizar caídas",
          "Facilitar mantenimiento futuro"
        ]
      },
      gradient: "from-orange-500 to-orange-600"
    },
    {
      number: "07",
      title: "Cierre del Proyecto y Transparencia Total",
      subtitle: "Sabes exactamente qué se hizo y cuánto ahorraste.",
      intro: "Al finalizar:",
      inspirations: [
        "Entregamos el producto final",
        "Documentamos lo construido",
        "Explicamos decisiones técnicas",
        "Mostramos el ahorro logrado gracias al uso de IA"
      ],
      icon: "📊",
      whatWeDo: {
        title: "¿Por qué es más económico?",
        items: [
          "Equipos más pequeños",
          "Menos retrabajo",
          "Menos errores",
          "Más velocidad",
          "Más inteligencia en cada decisión"
        ]
      },
      gradient: "from-pink-500 to-pink-600"
    },
    {
      number: "08",
      title: "Consultoría Continua en IA e Ingeniería",
      subtitle: "No solo construimos, también pensamos contigo.",
      intro: "Además del desarrollo, ofrecemos:",
      inspirations: [
        "Consultoría en IA aplicada",
        "Automatización de procesos",
        "Optimización de sistemas existentes",
        "Mejora de calidad y testing",
        "Arquitectura y refactorización"
      ],
      icon: "🤝",
      footer: {
        text: "Todo basado en ingeniería real, no promesas vacías.",
        highlight: true
      },
      gradient: "from-cyan-500 to-cyan-600"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Nuestro Proceso de Trabajo
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Un enfoque profesional, ágil y potenciado por inteligencia artificial para entregar resultados excepcionales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-xl"
              >
                Comenzar un Proyecto
              </Link>
              <Link
                href="/services"
                className="bg-white text-gray-900 font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
              >
                Ver Servicios
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Process Steps */}
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200 h-full"></div>

            {/* Steps */}
            <div className="space-y-16">
              {phases.map((phase, index) => (
                <div key={phase.number} className={`relative ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8 lg:text-right'}`}>

                  {/* Timeline Dot */}
                  <div className={`hidden lg:block absolute top-8 ${index % 2 === 0 ? 'right-0' : 'left-0'} transform ${index % 2 === 0 ? 'translate-x-1/2' : '-translate-x-1/2'} w-8 h-8 bg-gradient-to-r ${phase.gradient} rounded-full border-4 border-white shadow-lg z-10`}>
                    <div className="absolute inset-0 rounded-full animate-ping bg-blue-400 opacity-20"></div>
                  </div>

                  {/* Content Card */}
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? '' : 'lg:ml-auto'}`}>
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">

                      {/* Card Header */}
                      <div className={`bg-gradient-to-r ${phase.gradient} text-white p-6`}>
                        <div className="flex items-center gap-4 mb-3">
                          <span className="text-4xl">{phase.icon}</span>
                          <span className="text-6xl font-bold opacity-30">{phase.number}</span>
                        </div>
                        <h2 className="text-3xl font-bold mb-2">{phase.title}</h2>
                        <p className="text-lg opacity-90">{phase.subtitle}</p>
                      </div>

                      {/* Card Body */}
                      <div className="p-8">

                        {/* Intro */}
                        {phase.intro && (
                          <p className="text-gray-700 mb-4 font-medium">{phase.intro}</p>
                        )}

                        {/* Inspirations/Key Points */}
                        {phase.inspirations && (
                          <ul className="space-y-2 mb-6">
                            {phase.inspirations.map((item, i) => (
                              <li key={i} className="flex items-start">
                                <span className="text-blue-500 mr-2 mt-1">▸</span>
                                <span className="text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {/* Principles */}
                        {phase.principles && (
                          <div className="mb-6 bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-gray-900 mb-2">{phase.principles.title}</h4>
                            <div className="flex flex-wrap gap-2">
                              {phase.principles.items.map((item, i) => (
                                <span key={i} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* What We Do */}
                        {phase.whatWeDo && (
                          <div className="mb-6 bg-blue-50 p-5 rounded-xl">
                            <h4 className="font-bold text-blue-900 mb-3 flex items-center">
                              <span className="mr-2">📌</span>
                              {phase.whatWeDo.title}
                            </h4>
                            <ul className="space-y-2">
                              {phase.whatWeDo.items.map((item, i) => (
                                <li key={i} className="flex items-start">
                                  <span className="text-blue-600 mr-2">✓</span>
                                  <span className="text-gray-700">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* AI Approach */}
                        {phase.aiApproach && (
                          <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-5 rounded-xl border-l-4 border-purple-500">
                            <h4 className="font-bold text-purple-900 mb-2 flex items-center">
                              <span className="mr-2">🤖</span>
                              {phase.aiApproach.title}
                            </h4>
                            {phase.aiApproach.description && (
                              <p className="text-gray-700 mb-3">{phase.aiApproach.description}</p>
                            )}
                            <ul className="space-y-2">
                              {phase.aiApproach.items.map((item, i) => (
                                <li key={i} className="flex items-start">
                                  <span className="text-purple-600 mr-2">→</span>
                                  <span className="text-gray-700">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Footer Message */}
                        {phase.footer && (
                          <div className={`mt-6 p-4 rounded-lg ${phase.footer.highlight ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-orange-400' : 'bg-gray-50'}`}>
                            <p className={`${phase.footer.highlight ? 'text-orange-900 font-bold' : 'text-gray-700'} text-center`}>
                              {phase.footer.text}
                            </p>
                          </div>
                        )}

                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl shadow-2xl overflow-hidden">
            <div className="px-8 py-16 text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                ¿Listo para Transformar tu Idea en Realidad?
              </h2>
              <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
                Trabajemos juntos siguiendo este proceso probado para crear soluciones tecnológicas excepcionales que impulsen tu negocio.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 font-bold py-5 px-12 rounded-full text-xl hover:bg-blue-50 transition-all transform hover:scale-105 shadow-2xl"
                >
                  Iniciar Conversación
                </Link>
                <Link
                  href="/services"
                  className="text-white font-semibold text-lg hover:text-blue-100 transition-colors underline"
                >
                  Explorar nuestros servicios →
                </Link>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
