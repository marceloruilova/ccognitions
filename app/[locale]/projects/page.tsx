import type { Metadata } from 'next';
import {Link} from '@/i18n/navigation';

export const metadata: Metadata = {
  title: 'Proyectos - Code Cognition Studio',
  description: 'Casos de éxito y proyectos realizados con nuestro modelo de desarrollo potenciado por IA.',
  openGraph: {
    title: 'Proyectos - Code Cognition Studio',
    description: 'Casos de éxito y proyectos realizados con nuestro modelo de desarrollo potenciado por IA.',
    type: 'website',
  },
};

export default function ProjectsPage() {
  // Placeholder for future dynamic case study data
  const projects = [
    {
      id: 1,
      title: "xPoverty: Plataforma de Donaciones con Arquitectura Enterprise",
      description: "Desarrollo completo de una aplicación de donaciones con backend en C# .NET y frontend multiplataforma en Flutter. Implementación de arquitectura robusta, integración de múltiples pasarelas de pago (Stripe, DLocal), webhooks, compliance, y despliegue optimizado en Digital Ocean con CI/CD en GitHub. Incluye suite completa de testing: unitarias, integración y E2E (Flutter Web + Patrol para móvil).",
      metrics: [
        { label: "Stack Backend", value: "C# .NET" },
        { label: "Stack Frontend", value: "Flutter" },
        { label: "Pasarelas de Pago", value: "Stripe + DLocal" },
        { label: "Testing", value: "Unit + Integration + E2E" },
        { label: "Deployment", value: "Digital Ocean + CI/CD" },
        { label: "Features", value: "Webhooks + Compliance" },
      ],
      link: "/projects/xpoverty-donations", // Example link
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold">Nuestros Resultados</h1>
          <p className="mt-2 text-lg text-gray-600">
            Casos de éxito que demuestran el poder de nuestro modelo de desarrollo.
          </p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {projects.map((project) => (
            <div key={project.id} className="bg-white p-8 rounded-lg shadow-lg mb-8 transition-transform transform hover:-translate-y-2">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">{project.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 text-center">
                {project.metrics.map(metric => (
                  <div key={metric.label} className="bg-gray-100 p-4 rounded-lg border border-gray-200">
                    <span className="block text-sm font-semibold text-gray-600">{metric.label}</span>
                    <span className="block text-2xl font-bold text-gray-800">{metric.value}</span>
                  </div>
                ))}
              </div>

              <div className="text-right">
                <Link href={project.link} className="font-semibold text-gray-700 hover:text-gray-900 hover:underline transition-colors">
                  Ver detalles del caso →
                </Link>
              </div>
            </div>
          ))}
           {/* Add a message for more case studies coming soon */}
           <div className="text-center mt-12 text-gray-500">
              <p>Más casos de estudio próximamente.</p>
           </div>
        </div>
      </main>
    </div>
  );
}
