#!/usr/bin/env node
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const baseUrl = 'https://berget.ai';

// Static pages with their priorities and change frequencies
const staticPages = [
  { url: '/', changefreq: 'weekly', priority: '1.0' },
  { url: '/about', changefreq: 'monthly', priority: '0.8' },
  { url: '/products', changefreq: 'weekly', priority: '0.9' },
  { url: '/pricing', changefreq: 'weekly', priority: '0.9' },
  { url: '/why-berget', changefreq: 'monthly', priority: '0.8' },
  { url: '/developers', changefreq: 'monthly', priority: '0.8' },
  { url: '/models', changefreq: 'weekly', priority: '0.9' },
  { url: '/blog', changefreq: 'weekly', priority: '0.7' },
  { url: '/contact', changefreq: 'monthly', priority: '0.6' },
  { url: '/status', changefreq: 'daily', priority: '0.5' },
  { url: '/signup', changefreq: 'monthly', priority: '0.7' },
  { url: '/open-source', changefreq: 'monthly', priority: '0.6' },
  { url: '/privacy', changefreq: 'monthly', priority: '0.5' },
  { url: '/terms', changefreq: 'monthly', priority: '0.5' },
  { url: '/dpa', changefreq: 'monthly', priority: '0.5' },
  { url: '/acceptable-use', changefreq: 'monthly', priority: '0.5' },
  { url: '/sla', changefreq: 'monthly', priority: '0.5' },
  { url: '/security', changefreq: 'monthly', priority: '0.6' },
];

async function getBlogPosts() {
  const blogPostsDir = join(__dirname, '../src/pages/blog/posts');
  
  try {
    const files = await fs.readdir(blogPostsDir);
    const mdFiles = files.filter(file => file.endsWith('.md') && !file.includes('arguments'));
    
    const blogPosts = [];
    
    for (const file of mdFiles) {
      const postId = file.replace('.md', '');
      const filePath = join(blogPostsDir, file);
      const content = await fs.readFile(filePath, 'utf-8');
      
      // Extract date from frontmatter if available
      const dateMatch = content.match(/^date:\s*(.+)$/m);
      const date = dateMatch ? dateMatch[1].trim().replace(/^["']|["']$/g, '') : null;
      
      blogPosts.push({
        url: `/blog/${encodeURIComponent(postId)}`,
        changefreq: 'monthly',
        priority: '0.6',
        lastmod: date || null,
      });
    }
    
    return blogPosts;
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

function generateSitemapXml(pages) {
  const urls = pages.map(page => {
    const lastmodTag = page.lastmod ? `\n    <lastmod>${page.lastmod}</lastmod>` : '';
    return `  <url>
    <loc>${baseUrl}${page.url}</loc>${lastmodTag}
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

async function main() {
  console.log('Generating sitemap...');
  
  // Get blog posts dynamically
  const blogPosts = await getBlogPosts();
  console.log(`Found ${blogPosts.length} blog posts`);
  
  // Combine static pages and blog posts
  const allPages = [...staticPages, ...blogPosts];
  
  // Generate sitemap XML
  const sitemapXml = generateSitemapXml(allPages);
  
  // Write to public directory
  const outputPath = join(__dirname, '../public/sitemap.xml');
  await fs.writeFile(outputPath, sitemapXml, 'utf-8');
  
  console.log(`Sitemap generated successfully at ${outputPath}`);
  console.log(`Total pages: ${allPages.length} (${staticPages.length} static + ${blogPosts.length} blog posts)`);
}

main().catch(console.error);
