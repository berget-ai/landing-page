# Sitemap Generator

This script automatically generates `public/sitemap.xml` by:
1. Including all static pages from the site
2. Dynamically discovering all blog posts from `src/pages/blog/posts/`
3. Extracting publication dates from blog post frontmatter

## Usage

### Manual generation
```bash
npm run generate:sitemap
```

### Automatic generation
The sitemap is automatically regenerated during the build process:
```bash
npm run build
```

## Adding new pages

### Static pages
Edit `scripts/generate-sitemap.mjs` and add entries to the `staticPages` array:
```javascript
{ url: '/new-page', changefreq: 'weekly', priority: '0.8' }
```

### Blog posts
Blog posts are automatically discovered. No manual configuration needed.
Just add `.md` files to `src/pages/blog/posts/` and they will be included.

## Output
- Location: `public/sitemap.xml`
- Format: XML sitemap protocol
- Includes: Static pages + dynamically discovered blog posts
