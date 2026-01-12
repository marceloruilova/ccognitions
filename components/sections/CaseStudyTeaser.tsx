import Link from 'next/link';

export default function CaseStudyTeaser() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold">Resultados Reales</h2>
        <div className="mt-8 max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <p className="text-xl text-gray-700">
            "MVP lanzado en <span className="font-bold">3 semanas</span> con un <span className="font-bold">70% de ahorro</span> en costos de desarrollo."
          </p>
          <Link href="/projects" className="inline-block mt-6 text-blue-600 hover:underline font-semibold">
            Ver caso de estudio completo
          </Link>
        </div>
      </div>
    </section>
  );
}
