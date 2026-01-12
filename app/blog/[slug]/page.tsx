import Link from 'next/link';

// This function would fetch real blog post data in a real application
async function getPostData(slug: string) {
  // Placeholder data
  const posts = {
    "por-que-la-orquestacion-de-ia-es-el-futuro-del-software": {
      title: "¿Por qué la Orquestación de IA es el Futuro del Software?",
      date: "Enero 12, 2026",
      content: `
        <p class="lead">En la última década, hemos sido testigos de una explosión en las capacidades de la inteligencia artificial. Sin embargo, el mayor cambio no está en un único modelo superinteligente, sino en la capacidad de orquestar múltiples modelos especializados para lograr un objetivo común. Este es el núcleo de la nueva era del desarrollo de software.</p>
        <h2 class="section-title">De Constructor a Director</h2>
        <p>El rol del ingeniero de software está cambiando fundamentalmente. Ya no se trata solo de escribir código línea por línea. Se trata de entender un problema de negocio y saber qué "músicos" (modelos de IA) invitar a la orquesta.</p>
        <ul>
          <li><strong>Modelo de UI:</strong> Un especialista en generar interfaces limpias y usables a partir de un prompt.</li>
          <li><strong>Modelo de Lógica de Negocio:</strong> Un experto en traducir requerimientos a código de backend robusto.</li>
          <li><strong>Modelo de Base de Datos:</strong> Un arquitecto que diseña esquemas óptimos y eficientes.</li>
          <li><strong>Modelo de QA:</strong> Un tester incansable que escribe pruebas unitarias, de integración y e2e.</li>
        </ul>
        <h2 class="section-title">La Velocidad como Ventaja Competitiva</h2>
        <p>La ventaja más evidente es la velocidad. Un orquestador experto puede guiar a estos modelos para producir en una semana lo que a un equipo tradicional le tomaría meses. Esto no es una exageración, es el resultado de eliminar la fricción comunicativa y la burocracia inherente a los equipos grandes.</p>
        <blockquote class="quote">
          "El cuello de botella ya no es la velocidad de teclear, sino la velocidad de pensar y decidir."
        </blockquote>
        <h2 class="section-title">Implicaciones para el Futuro</h2>
        <p>Las empresas que adopten este modelo no solo reducirán costos, sino que ganarán una agilidad sin precedentes. La capacidad de lanzar MVPs, iterar y pivotar rápidamente se convertirá en el principal diferenciador competitivo. En Code Cognition Studio, no solo predecimos este futuro, lo estamos construyendo hoy.</p>
      `
    },
     "el-fin-de-los-equipos-de-9-personas": {
      title: "El Fin de los Equipos de 9 Personas",
      date: "Enero 10, 2026",
      content: `
        <p class="lead">El modelo de agencia tradicional, con su estructura de project manager, scrum master, diseñador UI, diseñador UX, frontend developer, backend developer, QA, etc., está obsoleto. Es un sistema diseñado para una era de información escasa y herramientas limitadas.</p>
        <h2 class="section-title">El Costo Oculto del "Overhead"</h2>
        <p>Cada persona en ese equipo añade una capa de comunicación, una reunión más en el calendario y una posible fuente de desalineación. El costo real no es solo la suma de sus salarios, sino el "impuesto de burocracia" que ralentiza cada decisión y cada línea de código.</p>
        <h2 class="section-title">Un Nuevo Paradigma</h2>
        <p>Con la orquestación de IA, el 80% del trabajo de ejecución es automatizado. El valor humano se concentra en la estrategia, la supervisión y la toma de decisiones críticas. Un solo individuo, armado con las herramientas correctas, puede superar la producción de un equipo entero.</p>
      `
    }
  };
  // @ts-ignore
  return posts[slug] || null;
}

export async function generateStaticParams() {
  // In a real app, you'd fetch all slugs
  return [
      { slug: "por-que-la-orquestacion-de-ia-es-el-futuro-del-software" },
      { slug: "el-fin-de-los-equipos-de-9-personas" }
    ];
}

export default async function BlogPostPage({ params }: { params: { slug:string }}) {
  const post = await getPostData(params.slug);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold">Post no encontrado</h1>
        <Link href="/blog" className="inline-block mt-8 text-blue-600 hover:underline">
          Volver al blog
        </Link>
      </div>
    );
  }

  return (
    <article className="container mx-auto px-4 py-20">
      <header className="max-w-3xl mx-auto text-center mb-12">
        <p className="text-gray-500 mb-2">{post.date}</p>
        <h1 className="text-5xl font-bold leading-tight text-gray-800">{post.title}</h1>
      </header>
      <div 
        className="prose lg:prose-xl max-w-3xl mx-auto"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <div className="text-center mt-16">
        <Link href="/blog" className="text-blue-600 hover:underline font-semibold">
          ← Volver al índice del Blog
        </Link>
      </div>
    </article>
  );
}
