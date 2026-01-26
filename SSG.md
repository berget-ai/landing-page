# Static Site Generation (SSG) with Vike

This project supports SSG for optimal performance and deployment simplicity.

## What is SSG?

SSG (Static Site Generation) pre-renders HTML at build-time instead of request-time. This means:
- **Better performance** - HTML is already generated when users request pages
- **Simpler deployment** - No production server needed, can deploy to static hosts
- **Lower costs** - Free hosting on GitHub Pages, Netlify, Cloudflare Pages, etc.

## How it works

### Pre-rendered Pages

The following pages are pre-rendered at build-time:

- `/` - Homepage
- `/pricing` - Pricing page
- `/simple` - Simple page

### SSR Pages (Not Pre-rendered)

These pages use React Router and are rendered at request-time:

- `/blog` - Blog listing
- `/blog/*` - Blog posts
- `/about` - About page
- `/products` - Products page
- `/contact` - Contact page
- `/signup` - Signup page
- `/developers` - Developers page
- `/models` - Models page
- `/status` - Status page
- And other React Router pages

**Note:** This is a hybrid SSG + SSR setup. Marketing pages are pre-rendered for performance, while dynamic content (blog, user-facing pages) uses SSR.

### Configuration

SSG is enabled in `pages/+config.ts`:

```typescript
export default {
  prerender: true,  // Enable SSG
  ssr: true,        // Enable SSR for pre-rendering
  // ...
}
```

### Blog Post Discovery

Blog posts are automatically discovered using `pages/+onBeforePrerenderStart.ts`:

```typescript
// Scans src/pages/blog/posts/**/*.md
// Generates routes for each post
```

## Build Commands

### Development (SSR)
```bash
npm run dev
```

### Production Build (SSR)
```bash
npm run build
npm run preview
```

### Static Build (SSG)
```bash
npm run build:ssg
npm run preview:ssg
```

The SSG build will:
1. Generate sitemap
2. Compile TypeScript
3. Pre-render all pages to HTML
4. Output static files to `dist/client/`

## Deployment

### Static Hosts (Recommended for SSG)

After running `npm run build:ssg`, deploy the `dist/client/` directory to:

- **GitHub Pages** - Free, automatic deployment
- **Netlify** - Free tier, drag-and-drop
- **Cloudflare Pages** - Free tier, global CDN
- **Vercel** - Free tier, preview deployments

### Example: GitHub Pages

```bash
npm run build:ssg
# Deploy dist/client/ to gh-pages branch
```

### Server Deployment (SSR)

If you need SSR for dynamic content, use:

```bash
npm run build
npm run preview
```

Deploy to Node.js hosting (AWS, Heroku, Railway, etc.)

## Adding New Pages

### Static Pages

Add to `pages/+onBeforePrerenderStart.ts`:

```typescript
const staticPages = [
  '/',
  '/pricing',
  '/your-new-page',  // Add here
]
```

### Dynamic Routes

For parameterized routes (e.g., `/products/:id`), add to `+onBeforePrerenderStart.ts`:

```typescript
const productIds = await getProductIds()

return [
  ...productIds.map((id) => ({
    url: `/products/${id}`,
    pageContext: { data: { id } }
  }))
]
```

## Hybrid SSG + SSR

You can mix SSG and SSR:

```typescript
// pages/+config.ts
export default {
  prerender: true,  // Pre-render by default
}

// pages/admin/+config.ts
export default {
  prerender: false,  // Skip pre-rendering for admin panel
  ssr: true,         // Use SSR instead
}
```

## Performance Benefits

- **Faster TTFB** - HTML served directly from CDN
- **Better SEO** - Search engines crawl pre-rendered HTML
- **Lower server costs** - No runtime rendering
- **Instant page loads** - No server round-trip

## Troubleshooting

### Build fails with "module not found"
Ensure all imports in pre-rendered pages are available at build-time.

### Blog posts not appearing
Check that markdown files have proper frontmatter:

```markdown
---
title: Your Post Title
date: 2024-01-01
description: Post description
---
```

### Dynamic routes not pre-rendering
Verify `+onBeforePrerenderStart.ts` returns the correct URLs.

## Resources

- [Vike Pre-rendering Guide](https://vike.dev/pre-rendering)
- [Vike SSR vs SPA](https://vike.dev/SSR-vs-SPA)
- [Vike Data Fetching](https://vike.dev/data-fetching)