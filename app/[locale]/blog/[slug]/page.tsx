import {Link} from '@/i18n/navigation';

export const dynamic = 'force-dynamic';

interface BlogPost {
  title: string;
  date: string;
  tag: string;
  readTime: string;
  gradient: string;
  content: string;
}

async function getPostData(slug: string): Promise<BlogPost | null> {
  const posts: Record<string, BlogPost> = {
    "por-que-la-orquestacion-de-ia-es-el-futuro-del-software": {
      title: "¿Por qué la Orquestación de IA es el Futuro del Software?",
      date: "Enero 12, 2026",
      tag: "Orquestación IA",
      readTime: "5 min",
      gradient: "from-blue-600 to-cyan-600",
      content: `
        <p class="lead">En la última década, hemos sido testigos de una explosión en las capacidades de la inteligencia artificial. Sin embargo, el mayor cambio no está en un único modelo superinteligente, sino en la capacidad de orquestar múltiples modelos especializados para lograr un objetivo común. Este es el núcleo de la nueva era del desarrollo de software.</p>

        <h2>De Constructor a Director</h2>
        <p>El rol del ingeniero de software está cambiando fundamentalmente. Ya no se trata solo de escribir código línea por línea. Se trata de entender un problema de negocio y saber qué "músicos" (modelos de IA) invitar a la orquesta.</p>
        <ul>
          <li><strong>Modelo de UI:</strong> Un especialista en generar interfaces limpias y usables a partir de un prompt.</li>
          <li><strong>Modelo de Lógica de Negocio:</strong> Un experto en traducir requerimientos a código de backend robusto.</li>
          <li><strong>Modelo de Base de Datos:</strong> Un arquitecto que diseña esquemas óptimos y eficientes.</li>
          <li><strong>Modelo de QA:</strong> Un tester incansable que escribe pruebas unitarias, de integración y e2e.</li>
        </ul>

        <h2>La Velocidad como Ventaja Competitiva</h2>
        <p>La ventaja más evidente es la velocidad. Un orquestador experto puede guiar a estos modelos para producir en una semana lo que a un equipo tradicional le tomaría meses. Esto no es una exageración, es el resultado de eliminar la fricción comunicativa y la burocracia inherente a los equipos grandes.</p>
        <blockquote>
          <p>"El cuello de botella ya no es la velocidad de teclear, sino la velocidad de pensar y decidir."</p>
        </blockquote>

        <h2>Implicaciones para el Futuro</h2>
        <p>Las empresas que adopten este modelo no solo reducirán costos, sino que ganarán una agilidad sin precedentes. La capacidad de lanzar MVPs, iterar y pivotar rápidamente se convertirá en el principal diferenciador competitivo. En Code Cognition Studio, no solo predecimos este futuro, lo estamos construyendo hoy.</p>
      `
    },
    "el-fin-de-los-equipos-de-9-personas": {
      title: "El Fin de los Equipos de 9 Personas",
      date: "Enero 10, 2026",
      tag: "Estrategia",
      readTime: "4 min",
      gradient: "from-emerald-600 to-teal-600",
      content: `
        <p class="lead">El modelo de agencia tradicional, con su estructura de project manager, scrum master, diseñador UI, diseñador UX, frontend developer, backend developer, QA, etc., está obsoleto. Es un sistema diseñado para una era de información escasa y herramientas limitadas.</p>

        <h2>El Costo Oculto del "Overhead"</h2>
        <p>Cada persona en ese equipo añade una capa de comunicación, una reunión más en el calendario y una posible fuente de desalineación. El costo real no es solo la suma de sus salarios, sino el "impuesto de burocracia" que ralentiza cada decisión y cada línea de código.</p>

        <h2>Un Nuevo Paradigma</h2>
        <p>Con la orquestación de IA, el 80% del trabajo de ejecución es automatizado. El valor humano se concentra en la estrategia, la supervisión y la toma de decisiones críticas. Un solo individuo, armado con las herramientas correctas, puede superar la producción de un equipo entero.</p>
      `
    },
    "separacion-de-responsabilidades-en-agentes-de-codigo": {
      title: "Separación de Responsabilidades en el Desarrollo Asistido por Agentes de Código",
      date: "Febrero 6, 2026",
      tag: "Arquitectura de Agentes",
      readTime: "8 min",
      gradient: "from-violet-600 to-indigo-600",
      content: `
        <p class="lead">En la actualidad los agentes de IA están transformando cómo programamos, y no se trata de darles un <strong>"superprompt"</strong> único, sino de un flujo de trabajo estructurado con agentes especializados para cada tarea. Plataformas modernas definen <em>subagentes</em> específicos &mdash; cada uno con su propio contexto y permisos &mdash; que manejan cierto tipo de actividad. De este modo, podemos asignar a un agente sólo las labores de backend, a otro las de frontend, o a otro las de pruebas, reduciendo la complejidad al identificar rápidamente dónde ocurre un error. Este enfoque modular asegura que cada agente cumpla un rol concreto sin interferir con los demás.</p>

        <h2>Desarrollo de Back-end</h2>
        <ul>
          <li><strong>Lógica de negocio y APIs:</strong> Un agente especializado puede encargarse de escribir o revisar código del servidor &mdash; por ejemplo, diseñar rutas de una API REST, gestionar bases de datos o implementar lógica de negocio compleja.</li>
          <li><strong>Orquestación de servicios (BFF):</strong> En arquitecturas de microservicios es común usar un patrón <em>backend-for-frontend</em> (BFF) donde un agente central coordina varios servicios. Este agente BFF puede gestionar el flujo entre front-end y distintos microservicios, actuando como punto de integración inteligente.</li>
          <li><strong>Componentes de IA en la infraestructura:</strong> La pila de un agente de backend incluye un modelo de lenguaje (el "cerebro" central), integraciones con herramientas (p. ej. frameworks, APIs externas), memorias de corto y largo plazo, y roles configurables. Gracias a ello los agentes operan de forma independiente y pueden colaborar entre sí, adaptándose a cambios en tiempo real.</li>
          <li><strong>Resiliencia y seguridad:</strong> Se incorporan patrones de robustez al flujo: reintentos automáticos, monitoreo de errores y lógica de control. También se deben validar y sanitizar entradas/salidas en cada etapa para prevenir ataques (inyección de prompts) y verificar salidas contra criterios estrictos.</li>
        </ul>
        <p><strong>Ventajas:</strong> Al delegar tareas específicas, aumentamos la velocidad y precisión: un agente backend puede especializarse en optimizar código de servidor y escalabilidad. Además, al mantener aisladas las responsabilidades, se facilita la depuración. <strong>Desventajas:</strong> Requiere coordinar varios agentes, lo que añade complejidad inicial. También aumenta la sobrecarga arquitectónica y obliga a invertir en monitoreo y gobernanza para mantener coherencia.</p>

        <h2>Desarrollo de Front-end</h2>
        <ul>
          <li><strong>Interfaz y experiencia de usuario:</strong> Los agentes pueden analizar el código UI (HTML/CSS/JS) y garantizar consistencia visual. Por ejemplo, pueden escanear todo el repositorio de la interfaz para detectar botones o estilos discordantes y corregirlos automáticamente. Asimismo, ayudan a garantizar la <strong>accesibilidad</strong> auditando cumplimiento de WCAG y sugiriendo etiquetas ARIA o textos alt donde falten.</li>
          <li><strong>Optimización de rendimiento:</strong> Pueden revisar assets del cliente (imágenes, CSS, scripts) y proponer mejoras (como compresión, carga diferida o formatos modernos) para acelerar la carga. Algunos agentes incluso prueban variantes A/B para medir el impacto real en usuarios.</li>
          <li><strong>Generación y refactorización de código UI:</strong> Ante prototipos o wireframes, un agente podría generar componentes básicos de la interfaz. O bien, identificar código obsoleto: por ejemplo, detectar un componente React monolítico y refactorizarlo en piezas reutilizables.</li>
          <li><strong>Colaboración visual y documentación:</strong> Llevan registro de cambios de la UI, detectan conflictos en <em>merge requests</em> y pueden hasta generar documentación de componentes. Funcionan como un asistente dedicado que mantiene la coherencia entre diseñadores y programadores.</li>
        </ul>
        <p><strong>Ventajas:</strong> Aceleran tareas repetitivas y garantizan homogeneidad: los desarrolladores dedican menos tiempo a ajuste de estilos o pruebas de accesibilidad, enfocándose en innovación. <strong>Desventajas:</strong> La IA aún puede fallar en entender aspectos estéticos subjetivos o flujo de usuario complejo, por lo que su output requiere supervisión humana. Además, requiere definir claramente el alcance.</p>

        <h2>Pruebas e Integración End-to-End</h2>
        <ul>
          <li><strong>Pruebas automatizadas:</strong> Se pueden asignar agentes para generar y ejecutar casos de prueba. Por ejemplo, un agente podría leer el código nuevo y crear automáticamente pruebas unitarias o de integración acorde a los estándares del proyecto. Se plantea incluso el uso de agentes de QA dedicados para validar los resultados finales del software.</li>
          <li><strong>Pruebas E2E:</strong> Agentes especializados pueden simular flujos completos del usuario (login, transacciones, etc.), conectando frontend y backend. Así detectan fallos en la integración antes de desplegar.</li>
          <li><strong>Detección temprana de errores:</strong> Al ejecutar continuamente estos tests generados, los agentes identifican bugs y generan reportes detallados (logs, pasos para reproducir). Esto refuerza la calidad del código y agiliza la retroalimentación para los desarrolladores.</li>
        </ul>
        <p><strong>Ventajas:</strong> Amplían la cobertura de QA, encuentran errores que podrían pasarse por alto manualmente y soportan integración continua sin esfuerzo adicional. <strong>Desventajas:</strong> Pueden generar pruebas redundantes o falsos positivos si no se ajustan bien los criterios de validación. Además, es necesario revisar manualmente los hallazgos críticos y actualizar los tests según cambien los requisitos.</p>

        <h2>Roles Adicionales y Metodologías Ágiles</h2>
        <p>Más allá de la codificación, los agentes de IA pueden asumir roles de gestión y coordinación del producto. En ciertos frameworks multagente (como MetaGPT) se propone que un agente actúe como <strong>Product Manager</strong>, definiendo requerimientos y prioridades, mientras otros agentes arquitectan, desarrollan y validan. Esto sigue el espíritu ágil: un "Product Owner" digital podría organizar el backlog basándose en las necesidades del usuario. Otros agentes pueden funcionar como Scrum Master, llevando el control de sprint, generando actas de reunión o midiendo métricas de equipo.</p>
        <p>Por ejemplo, Atlassian destaca que los <strong>agentes especializados con acceso al contexto real del proyecto</strong> son los más efectivos. Se cita el caso de <em>Rovo</em>, un asistente que lee la documentación del equipo (Confluence, Jira, metas) y responde preguntas alineado al contexto organizacional.</p>
        <p><strong>Ventajas:</strong> La IA ayuda a mantener el foco en los objetivos de negocio, automatizando tareas administrativas (planificación, análisis de datos) y ofreciendo insights rápidos. Esto puede duplicar la productividad: Atlassian reporta que los equipos estratégicos que colaboran con IA alcanzan hasta <strong>2&times; el retorno de inversión</strong> y ahorran unos <strong>105 minutos</strong> laborales diarios. <strong>Desventajas:</strong> Sin embargo, la IA no reemplaza el juicio humano: la revisión final, la empatía con el usuario y la creatividad siguen siendo responsabilidad de los líderes y desarrolladores.</p>

        <h2>Buenas Prácticas y Consideraciones</h2>
        <p>Para sacar provecho de esta división de tareas, es clave definir claramente el rol de cada agente con instrucciones precisas. Cada agente debe recibir un <em>prompt</em> del sistema y restricciones propias, evitando solapamientos (por ejemplo, un agente de UI no debe modificar la base de datos). Es recomendable alimentar los agentes con contexto suficiente: especificaciones técnicas, estándares de código y ejemplos de referencia.</p>
        <p>Además, hay que monitorear el desempeño de los agentes. Registrar sus acciones ayuda a depurar problemas (trazabilidad) y a iterar en los <em>prompts</em>. También hay que ser conscientes del costo computacional: usar modelos adecuados y optimizar prompts reduce el uso de tokens y acelera la ejecución. Finalmente, aunque los agentes operen de forma autónoma, siempre se debe prever un mecanismo de intervención humana en etapas críticas.</p>
        <blockquote>
          <p>"La separación de responsabilidades entre agentes de IA permite aprovechar sus fortalezas específicas en cada etapa del desarrollo, manteniendo ciclos ágiles y alta calidad."</p>
        </blockquote>
        <p>A medida que maduren estas prácticas, los equipos técnicos podrán enfocarse cada vez más en la visión global, delegando en agentes de código los detalles operativos de cada ámbito.</p>
      `
    }
  };
  return posts[slug] || null;
}


export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostData(slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-200 mb-4">404</h1>
          <p className="text-xl text-gray-500 mb-8">Post no encontrado</p>
          <Link href="/blog" className="inline-flex items-center gap-2 bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
            Volver al blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <header className="relative bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}} />
        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${post.gradient}`} />
        <div className="relative container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-3xl mx-auto">
            {/* Back link */}
            <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
              Volver al blog
            </Link>
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-block px-3 py-1 bg-white/10 text-white text-xs font-semibold rounded-full">
                {post.tag}
              </span>
              <span className="text-gray-400 text-sm">{post.date}</span>
              <span className="text-gray-600">|</span>
              <span className="text-gray-400 text-sm flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                {post.readTime} de lectura
              </span>
            </div>
            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <main className="container mx-auto px-4 py-12 md:py-16">
        <article className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 lg:p-16">
            <div
              className="prose prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-gray-900 prose-headings:mt-10 prose-headings:mb-4
                prose-h2:text-2xl prose-h2:border-b prose-h2:border-gray-100 prose-h2:pb-3
                prose-p:text-gray-600 prose-p:leading-relaxed
                prose-li:text-gray-600 prose-li:leading-relaxed
                prose-strong:text-gray-800
                prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:rounded-r-lg prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:not-italic
                prose-blockquote:text-gray-700 prose-blockquote:font-medium
                prose-ul:space-y-2
                prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                [&>.lead]:text-xl [&>.lead]:text-gray-500 [&>.lead]:leading-relaxed [&>.lead]:mb-8 [&>.lead]:border-l-4 [&>.lead]:border-gray-200 [&>.lead]:pl-6
              "
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* Bottom Navigation */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-200">
            <Link href="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 font-medium transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
              Todos los artículos
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors text-sm">
              Hablemos de tu proyecto
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}
