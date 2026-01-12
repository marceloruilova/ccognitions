export default function HeroSection() {
  return (
    <section className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold">Desarrollo de software con Inteligencia Artificial</h1>
        <p className="mt-4 text-xl">
          Construcción de MVPs y sistemas complejos reemplazando la burocracia de equipos grandes por orquestación de modelos.
        </p>
        <div className="mt-8">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Ver cómo funciona
          </button>
          <button className="ml-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Explorar servicios
          </button>
        </div>
      </div>
    </section>
  );
}
