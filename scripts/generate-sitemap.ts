#!/usr/bin/env node
/**
 * Sitemap generator för Berget AI
 * Genererar sitemap.xml baserat på alla routes i projektet
 */

import { writeFileSync } from 'fs';
import { resolve } from 'path';

const siteUrl = 'https://berget.ai';

interface Route {
  path: string;
  priority: number;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  lastmod?: string;
}

// Define all routes with their SEO properties
const routes: Route[] = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/about', priority: 0.8, changefreq: 'monthly' },
  { path: '/pricing', priority: 0.9, changefreq: 'weekly' },
  { path: '/products', priority: 0.9, changefreq: 'weekly' },
  { path: '/why-berget', priority: 0.8, changefreq: 'monthly' },
  { path: '/developers', priority: 0.8, changefreq: 'weekly' },
  { path: '/models', priority: 0.8, changefreq: 'weekly' },
  { path: '/signup', priority: 0.7, changefreq: 'monthly' },
  { path: '/contact', priority: 0.7, changefreq: 'monthly' },
  { path: '/status', priority: 0.6, changefreq: 'daily' },
  { path: '/blog', priority: 0.8, changefreq: 'daily' },
  { path: '/open-source', priority: 0.7, changefreq: 'monthly' },
  { path: '/security', priority: 0.7, changefreq: 'monthly' },
  { path: '/terms', priority: 0.5, changefreq: 'yearly' },
  { path: '/privacy', priority: 0.6, changefreq: 'monthly' },
  { path: '/acceptable-use', priority: 0.5, changefreq: 'yearly' },
  { path: '/sla', priority: 0.6, changefreq: 'monthly' },
  { path: '/dpa', priority: 0.6, changefreq: 'yearly' },
];

function generateSitemap(routes: Route[]): string {
  const today = new Date().toISOString().split('T')[0];
  
  const urls = routes.map((route) => {
    const lastmod = route.lastmod || today;
    return `  <url>
    <loc>${siteUrl}${route.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`;
}

// Generate and write sitemap
const sitemap = generateSitemap(routes);
const outputPath = resolve(process.cwd(), 'public', 'sitemap.xml');

try {
  writeFileSync(outputPath, sitemap, 'utf-8');
  console.log(`✅ Sitemap generated successfully at ${outputPath}`);
  console.log(`📊 Total URLs: ${routes.length}`);
} catch (error) {
  console.error('❌ Error generating sitemap:', error);
  process.exit(1);
}
