import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';

export async function generateMetadata() {
  const t = await getTranslations('ProjectsPage');
  return {
    title: t('meta_title'),
    description: t('meta_description'),
    openGraph: {
      title: t('meta_title'),
      description: t('meta_description'),
      type: 'website',
    },
  };
}

export default async function ProjectsPage() {
  const t = await getTranslations('ProjectsPage');
  const projects = t.raw('projects') as Array<{
    title: string;
    description: string;
    metrics: Array<{ label: string; value: string }>;
  }>;

  const projectLinks = ["/projects/xpoverty-donations"];

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold">{t('title')}</h1>
          <p className="mt-2 text-lg text-gray-600">
            {t('subtitle')}
          </p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg mb-8 transition-transform transform hover:-translate-y-2">
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
                <Link href={projectLinks[index] || "/projects"} className="font-semibold text-gray-700 hover:text-gray-900 hover:underline transition-colors">
                  {t('view_details')}
                </Link>
              </div>
            </div>
          ))}
           <div className="text-center mt-12 text-gray-500">
              <p>{t('coming_soon')}</p>
           </div>
        </div>
      </main>
    </div>
  );
}
