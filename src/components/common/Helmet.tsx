import { Helmet as ReactHelmet } from 'react-helmet-async';

interface HelmetProps {
  title: string;
  description: string;
  image?: string;
  type?: string;
  author?: string;
  language?: 'en' | 'sv';
  path?: string;
  publishedTime?: string;
  modifiedTime?: string;
  keywords?: string[];
  jsonLd?: Record<string, any>;
}

export function Helmet({ 
  title, 
  description, 
  image, 
  type = 'website',
  author = 'Berget AI',
  language = 'sv',
  path = '',
  publishedTime,
  modifiedTime,
  keywords = [],
  jsonLd
}: HelmetProps) {
  const siteUrl = 'https://berget.ai';
  const imageUrl = image?.startsWith('http') ? image : `${siteUrl}${image}`;
  const canonicalUrl = `${siteUrl}${path}`;
  const alternateUrl = language === 'sv' ? `${siteUrl}/en${path}` : `${siteUrl}${path}`;
  
  // Default Organization JSON-LD
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Berget AI',
    url: siteUrl,
    logo: `${siteUrl}/logos/berget-logo-black.svg`,
    sameAs: [
      'https://github.com/berget-ai',
      'https://linkedin.com/company/berget-ai'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@berget.ai',
      contactType: 'Customer Service',
      areaServed: ['SE', 'NO', 'DK', 'FI', 'EU'],
      availableLanguage: ['Swedish', 'English']
    }
  };

  // WebPage JSON-LD
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: canonicalUrl,
    inLanguage: language,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Berget AI',
      url: siteUrl
    }
  };
  
  return (
    <ReactHelmet>
      {/* Basic metadata */}
      <html lang={language} />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      
      {/* Canonical and alternate URLs */}
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang={language} href={canonicalUrl} />
      <link rel="alternate" hrefLang={language === 'sv' ? 'en' : 'sv'} href={alternateUrl} />
      <link rel="alternate" hrefLang="x-default" href={`${siteUrl}${path}`} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={imageUrl} />}
      {image && <meta property="og:image:alt" content={title} />}
      <meta property="og:site_name" content="Berget AI" />
      <meta property="og:locale" content={language === 'sv' ? 'sv_SE' : 'en_US'} />
      <meta property="og:locale:alternate" content={language === 'sv' ? 'en_US' : 'sv_SE'} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={imageUrl} />}
      {image && <meta name="twitter:image:alt" content={title} />}
      
      {/* Author */}
      {author && <meta name="author" content={author} />}
      
      {/* Robots */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(webPageSchema)}
      </script>
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </ReactHelmet>
  );
}
