# SSR Implementation med Vike

Detta dokument beskriver implementeringen av Server-Side Rendering (SSR) med Vike för Berget AI:s webbplats.

## Översikt

Berget AI:s webbplats använder [Vike](https://vike.dev) för server-side rendering, vilket ger:

- ✅ **Förbättrad SEO**: Fullt renderad HTML för sökmotorer
- ✅ **Snabbare initial page load**: Pre-renderad content
- ✅ **Bättre användarupplevelse**: Progressiv hydration
- ✅ **Strukturerad data**: JSON-LD för rikare sökresultat

## Arkitektur

### Filstruktur

```
pages/
├── +config.ts           # Global Vike-konfiguration
├── +Layout.tsx          # Shared layout för alla sidor
├── index/
│   ├── +Page.tsx        # Hemsida
│   └── +title.ts        # Page title metadata
├── pricing/
│   ├── +Page.tsx        # Prissida
│   └── +title.ts        # Page title metadata
└── ...                  # Övriga sidor
```

### Vike Hooks

#### +config.ts
Global konfiguration för SSR, routing och meta-tags:

```typescript
import vikeReact from 'vike-react/config'

export default {
  extends: vikeReact,
  ssr: true,
  prerender: true,
  clientRouting: true,
  // ...
}
```

#### +Layout.tsx
Shared layout som wraps alla sidor med Header, Footer och HelmetProvider:

```tsx
export default function Layout({ children }) {
  return (
    <HelmetProvider>
      <Header />
      <main>{children}</main>
      <Footer />
    </HelmetProvider>
  )
}
```

#### +Page.tsx
Sidspecifik content och SEO-metadata:

```tsx
export default function Page() {
  return (
    <>
      <Helmet
        title="..."
        description="..."
        jsonLd={{...}}
      />
      {/* Page content */}
    </>
  )
}
```

## SEO-funktioner

### 1. Förbättrad Helmet Component

Vår Helmet-komponent inkluderar nu:

- **Canonical URLs**: Undviker duplicate content
- **Hreflang tags**: Flerspråksstöd (sv/en)
- **Open Graph metadata**: Social media preview
- **Twitter Cards**: Twitter-optimerade previews
- **JSON-LD strukturerad data**: Organisation, WebPage, etc.

#### Exempel

```tsx
<Helmet
  title="Berget AI - Säker AI för Svenska Företag"
  description="GDPR-kompatibel AI-plattform..."
  language="sv"
  path="/"
  keywords={['AI', 'GDPR', 'Sverige']}
  image="/images/og-image.png"
  jsonLd={{
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Berget AI',
    // ...
  }}
/>
```

### 2. Strukturerad Data (JSON-LD)

Vi använder Schema.org vocabulary för:

- **Organization**: Företagsinformation
- **WebPage**: Sidspecifik information
- **SoftwareApplication**: Produktinformation
- **Article**: Bloggposter
- **FAQPage**: FAQ-sektioner

### 3. Sitemap Generation

Automatisk sitemap-generering vid build:

```bash
npm run generate:sitemap
```

Skapar `/public/sitemap.xml` med alla routes, prioriteter och uppdateringsfrekvens.

### 4. Robots.txt

Konfigurerad för att:
- Tillåta alla sökmotorer
- Peka på sitemap.xml
- Rate-limiting för att skydda servern
- Blockera vissa paths (API, debug)

## Development

### Starta utvecklingsservern

```bash
npm run dev
```

Servern startar på `http://localhost:5173` med hot module replacement.

### Build för produktion

```bash
npm run build
```

Detta kör:
1. Sitemap-generering
2. TypeScript-kompilering
3. Vite build med SSR
4. Asset optimization

### Preview production build

```bash
npm run preview
```

Kör en lokal server med production-builden för testning.

## Prerendering

Vike kan prerendera statiska sidor vid build-time:

```typescript
// pages/+config.ts
export default {
  prerender: true
}
```

Detta genererar statiska HTML-filer för alla routes, vilket ger:
- Ännu snabbare initial load
- Möjlighet att servera från CDN
- Reducerad serverlast

## Best Practices

### Per-sida SEO

Varje sida bör ha:

1. **Unikt title**: Max 60 tecken
2. **Unik description**: 150-160 tecken
3. **Keywords**: Relevanta sökord
4. **OG image**: 1200x630px för social media
5. **JSON-LD**: Passande schema för sidtyp

### Exempel - Produktsida

```tsx
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Berget AI Platform',
  description: '...',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'SEK'
  }
}

<Helmet
  title="Produkt - Berget AI"
  description="..."
  path="/products"
  jsonLd={jsonLd}
/>
```

### Exempel - Blogpost

```tsx
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Post Title',
  author: {
    '@type': 'Person',
    name: 'Author Name'
  },
  datePublished: '2024-01-01',
  dateModified: '2024-01-15'
}

<Helmet
  title="Post Title - Berget AI Blog"
  description="..."
  path="/blog/post-slug"
  publishedTime="2024-01-01T10:00:00Z"
  modifiedTime="2024-01-15T15:30:00Z"
  jsonLd={jsonLd}
/>
```

## Deployment

### Docker

SSR-applikationen kan köras i Docker:

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY dist ./dist
EXPOSE 3000
CMD ["node", "dist/server/entry.js"]
```

### Environment Variables

```bash
NODE_ENV=production
PORT=3000
VITE_API_URL=https://api.berget.ai
```

## Testing

### SEO Testing

Testa SEO-metadata med:

```bash
# View rendered HTML
curl http://localhost:3000/ | grep -A 10 "<head>"

# Test structured data
curl http://localhost:3000/ | grep "application/ld+json"
```

### Performance Testing

```bash
# Lighthouse CI
npm run lighthouse

# Core Web Vitals
npm run test:performance
```

## Troubleshooting

### TypeScript-fel med @-paths

Om du får import-fel, kontrollera att tsconfig.json har rätt paths:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### SSR hydration errors

Om du får hydration-fel, kontrollera att:
1. Server- och client-rendering matchar exakt
2. Inga browser-specifika APIs används under SSR
3. Random data genereras konsekvent

## Resources

- [Vike Documentation](https://vike.dev)
- [Schema.org](https://schema.org)
- [Google Search Central](https://developers.google.com/search)
- [Open Graph Protocol](https://ogp.me)

## Support

För frågor eller problem, kontakta utvecklingsteamet eller öppna en issue på GitHub.
