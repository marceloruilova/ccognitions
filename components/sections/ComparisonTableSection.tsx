'use client';
import {useTranslations} from 'next-intl';

export default function ComparisonTableSection() {
  const t = useTranslations('ComparisonTableSection');
  const rows = t.raw('rows') as Array<{metric: string; traditional: string; ccognitions: string}>;

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">{t('title')}</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-3 px-6 text-left">{t('metricsHeader')}</th>
                <th className="py-3 px-6 text-left">{t('traditionalHeader')}</th>
                <th className="py-3 px-6 text-left bg-blue-600">{t('ccognitionsHeader')}</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {rows.map((item, index) => (
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
