# Static Site Generation (SSG) with Vike

This project supports SSG for optimal performance and deployment simplicity.

## What is SSG?

SSG (Static Site Generation) pre-renders HTML at build-time instead of request-time. This means:
- **Better performance** - HTML is already generated when users request pages
- **Simpler deployment** - No production server needed, can deploy to static hosts
- **Lower costs** - Free hosting on GitHub Pages, Netlify, Cloudflare Pages, etc.

## How it works

### Pre-rendered Pages

Vike auto-discovers all pages under `pages/` and pre-renders them at build-time:

- `/` - Homepage (`pages/index/+Page.tsx`)
- `/pricing` - Pricing page
- `/about` - About page
- `/products` - Products page
- `/contact` - Contact page
- `/why-berget` - Why Berget page
- `/developers` - Developers page
- `/open-source` - Open Source page
- `/status` - Status page
- `/saas` - SaaS page
- `/simple` - Simple page

### SPA Pages (React Router — not pre-rendered)

These pages use the existing React Router app and are **not** pre-rendered:

- `/blog` - Blog listing
- `/blog/*` - Blog posts
- `/signup` - Signup page
- `/models` - Models page
- And other React Router pages in `src/pages/`

**Note:** This is a hybrid architecture. Marketing pages under `pages/` are pre-rendered as static HTML via Vike. The React Router SPA (`src/App.tsx`) handles dynamic/authenticated routes.

### Configuration

SSG is enabled in `pages/+config.ts`:

```typescript
export default {
  prerender: true,  // Enable SSG — Vike auto-discovers all pages/*/+Page.tsx
  ssr: true,        // Enable SSR for pre-rendering
  // ...
}
```

Pages are auto-discovered by Vike's file-based routing — no explicit route list needed.

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

Create a new directory under `pages/` with a `+Page.tsx` file. Vike auto-discovers it:

```
pages/
  your-new-page/
    +Page.tsx     ← Vike auto-discovers and pre-renders this
```

### Dynamic Routes

For parameterized routes (e.g., `/products/:id`), create a `pages/products/@id/+Page.tsx` and add a `+onBeforePrerenderStart.ts` in that directory to enumerate the IDs:

```typescript
// pages/products/@id/+onBeforePrerenderStart.ts
export default async function onBeforePrerenderStart() {
  const productIds = await getProductIds()
  return productIds.map((id) => ({ url: `/products/${id}` }))
}
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
For dynamic routes, add a `+onBeforePrerenderStart.ts` next to the `+Page.tsx` that enumerates all URLs to pre-render.

## Resources

- [Vike Pre-rendering Guide](https://vike.dev/pre-rendering)
- [Vike SSR vs SPA](https://vike.dev/SSR-vs-SPA)
- [Vike Data Fetching](https://vike.dev/data-fetching)