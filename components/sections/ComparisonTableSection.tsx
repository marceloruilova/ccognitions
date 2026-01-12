export default function ComparisonTableSection() {
  const comparisonData = [
    { metric: "Personas", traditional: "Equipo Tradicional", ccognitions: "Equipo Eficiente" },
    { metric: "Tiempo", traditional: "Meses", ccognitions: "Semanas" },
    { metric: "Costos", traditional: "$$$$", ccognitions: "$$" },
    { metric: "Velocidad", traditional: "Burocracia", ccognitions: "Iteración rápida" },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Tradicional vs. Code Cognition Studio</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-3 px-6 text-left">Métricas</th>
                <th className="py-3 px-6 text-left">Modelo Tradicional</th>
                <th className="py-3 px-6 text-left bg-blue-600">Code Cognition Studio</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {comparisonData.map((item, index) => (
                <tr key={item.metric} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                  <td className="py-3 px-6 font-semibold">{item.metric}</td>
                  <td className="py-3 px-6">{item.traditional}</td>
                  <td className="py-3 px-6 font-bold text-blue-600">{item.ccognitions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
