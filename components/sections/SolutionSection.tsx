export default function SolutionSection() {
  const features = [
    "Planificación Inteligente",
    "Diseño Asistido",
    "Desarrollo Acelerado",
    "Testing & Validación",
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold">El Orquestador de IA</h2>
        <p className="mt-4 text-lg text-gray-600">
          Un experto manejando un pipeline de IA acelera el ciclo de vida de desarrollo.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature} className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{feature}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
