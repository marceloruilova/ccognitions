import type { Metadata } from 'next';
import {Link} from '@/i18n/navigation';

export const metadata: Metadata = {
  title: 'Blog - Code Cognition Studio',
  description: 'Artículos sobre orquestación de IA, desarrollo de software moderno y el futuro de la tecnología.',
  openGraph: {
    title: 'Blog - Code Cognition Studio',
    description: 'Artículos sobre orquestación de IA, desarrollo de software moderno y el futuro de la tecnología.',
    type: 'website',
  },
};

export default function BlogPage() {
  const posts = [
    {
      slug: "separacion-de-responsabilidades-en-agentes-de-codigo",
      title: "Separación de Responsabilidades en el Desarrollo Asistido por Agentes de Código",
      excerpt: "Un análisis técnico sobre cómo estructurar agentes de IA especializados para backend, frontend y pruebas, aplicando separación de responsabilidades para maximizar calidad y eficiencia.",
      date: "Febrero 6, 2026",
      tag: "Arquitectura de Agentes",
      readTime: "8 min",
      gradient: "from-violet-600 to-indigo-600",
      gradientLight: "from-violet-50 to-indigo-50",
      accent: "violet",
    },
    {
      slug: "por-que-la-orquestacion-de-ia-es-el-futuro-del-software",
      title: "¿Por qué la Orquestación de IA es el Futuro del Software?",
      excerpt: "Exploramos cómo el rol del desarrollador está evolucionando de constructor a director de una sinfonía de modelos de IA...",
      date: "Enero 12, 2026",
      tag: "Orquestación IA",
      readTime: "5 min",
      gradient: "from-blue-600 to-cyan-600",
      gradientLight: "from-blue-50 to-cyan-50",
      accent: "blue",
    },
    {
      slug: "el-fin-de-los-equipos-de-9-personas",
      title: "El Fin de los Equipos de 9 Personas",
      excerpt: "Un análisis comparativo de costos y velocidad entre el modelo de agencia tradicional y el desarrollo ágil con IA.",
      date: "Enero 10, 2026",
      tag: "Estrategia",
      readTime: "4 min",
      gradient: "from-emerald-600 to-teal-600",
      gradientLight: "from-emerald-50 to-teal-50",
      accent: "emerald",
    },
  ];

  const [featured, ...rest] = posts;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <header className="relative bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}} />
        <div className="relative container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-blue-500/20 text-blue-300 text-sm font-medium rounded-full mb-6 tracking-wide">
              BLOG
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Ideas, Estrategia y{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Tecnología
              </span>
            </h1>
            <p className="mt-5 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Exploramos el futuro del desarrollo de software con orquestación de IA, buenas prácticas de ingeniería y análisis técnico.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
      </header>

      <main className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-5xl mx-auto">

          {/* Featured Post */}
          <section className="mb-12 md:mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Artículo destacado</span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>
            <Link href={`/blog/${featured.slug}`} className="group block">
              <article className="relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className={`h-2 bg-gradient-to-r ${featured.gradient}`} />
                <div className="p-8 md:p-10 lg:p-12">
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span className={`inline-block px-3 py-1 bg-gradient-to-r ${featured.gradientLight} text-${featured.accent}-700 text-xs font-semibold rounded-full`}>
                      {featured.tag}
                    </span>
                    <span className="text-sm text-gray-400">{featured.date}</span>
                    <span className="text-gray-300">|</span>
                    <span className="text-sm text-gray-400 flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      {featured.readTime} de lectura
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                    {featured.title}
                  </h2>
                  <p className="text-gray-500 text-lg leading-relaxed mb-6 max-w-3xl">
                    {featured.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                    Leer artículo
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>
              </article>
            </Link>
          </section>

          {/* Posts Grid */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Todos los artículos</span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {rest.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                  <article className="relative h-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className={`h-1.5 bg-gradient-to-r ${post.gradient}`} />
                    <div className="p-6 md:p-8 flex flex-col h-full">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className={`inline-block px-3 py-1 bg-gradient-to-r ${post.gradientLight} text-${post.accent}-700 text-xs font-semibold rounded-full`}>
                          {post.tag}
                        </span>
                        <span className="text-sm text-gray-400 flex items-center gap-1">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                        {post.title}
                      </h2>
                      <p className="text-gray-500 leading-relaxed mb-6 flex-grow">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className="text-sm text-gray-400">{post.date}</span>
                        <span className="inline-flex items-center gap-1.5 text-blue-600 font-semibold text-sm group-hover:gap-2.5 transition-all">
                          Leer
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
