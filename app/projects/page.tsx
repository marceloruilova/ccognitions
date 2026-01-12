import Link from 'next/link';

export default function ProjectsPage() {
  // Placeholder for future dynamic case study data
  const projects = [
    {
      id: 1,
      title: "Lanzamiento de MVP para FinTech en 3 Semanas",
      description: "Cómo orquestamos un equipo de IAs para diseñar, desarrollar y testear un producto financiero, reduciendo el time-to-market en un 80%.",
      metrics: [
        { label: "Tiempo de Desarrollo", value: "3 Semanas" },
        { label: "Ahorro de Costos", value: "70%" },
        { label: "Equipo", value: "1 Orquestador de IA" },
      ],
      link: "/projects/fintech-mvp", // Example link
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
                  <div key={metric.label} className="bg-gray-100 p-4 rounded-lg">
                    <span className="block text-sm font-semibold text-gray-500">{metric.label}</span>
                    <span className="block text-2xl font-bold text-blue-600">{metric.value}</span>
                  </div>
                ))}
              </div>

              <div className="text-right">
                <Link href={project.link} className="font-semibold text-blue-600 hover:underline">
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
