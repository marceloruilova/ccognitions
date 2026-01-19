import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ccognitions.com';
  const locales = ['es', 'en'];

  const routes = [
    '',
    '/services',
    '/projects',
    '/blog',
    '/contact',
    '/proceso',
    '/diy',
  ];

  const blogPosts = [
    '/blog/por-que-la-orquestacion-de-ia-es-el-futuro-del-software',
    '/blog/el-fin-de-los-equipos-de-9-personas',
  ];

  const allRoutes = [...routes, ...blogPosts];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of allRoutes) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
      });
    }
  }

  return sitemapEntries;
}
