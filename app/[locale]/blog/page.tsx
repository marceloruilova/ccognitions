import Link from 'next/link';

export default function BlogPage() {
  // Placeholder for future blog post data
  const posts = [
    {
      slug: "por-que-la-orquestacion-de-ia-es-el-futuro-del-software",
      title: "¿Por qué la Orquestación de IA es el Futuro del Software?",
      excerpt: "Exploramos cómo el rol del desarrollador está evolucionando de constructor a director de una sinfonía de modelos de IA...",
      date: "Enero 12, 2026",
    },
    {
      slug: "el-fin-de-los-equipos-de-9-personas",
      title: "El Fin de los Equipos de 9 Personas",
      excerpt: "Un análisis comparativo de costos y velocidad entre el modelo de agencia tradicional y el desarrollo ágil con IA.",
      date: "Enero 10, 2026",
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold">Blog de Code Cognition Studio</h1>
          <p className="mt-2 text-lg text-gray-600">
            Educando sobre el modelo de orquestación de IA y el futuro del desarrollo.
          </p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto space-y-10">
          {posts.map((post) => (
            <article key={post.slug} className="bg-white p-8 rounded-lg shadow-lg transition-shadow hover:shadow-xl">
              <header>
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h2 className="text-3xl font-bold text-gray-800">
                  <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                    {post.title}
                  </Link>
                </h2>
              </header>
              <p className="text-gray-600 mt-4 leading-relaxed">{post.excerpt}</p>
              <footer className="mt-6">
                <Link href={`/blog/${post.slug}`} className="font-semibold text-blue-600 hover:underline">
                  Leer más →
                </Link>
              </footer>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
