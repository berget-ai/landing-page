import { Helmet as ReactHelmet } from 'react-helmet-async';

interface HelmetProps {
  title: string;
  description: string;
  image?: string;
  type?: string;
  author?: string;
  language?: 'en' | 'sv';
}

export function Helmet({ 
  title, 
  description, 
  image, 
  type = 'article',
  author = 'Berget AI',
  language = 'sv'
}: HelmetProps) {
  const siteUrl = 'https://berget.ai';
  const imageUrl = image?.startsWith('http') ? image : `${siteUrl}${image}`;
  
  return (
    <ReactHelmet>
      {/* Basic metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="language" content={language} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={imageUrl} />}
      <meta property="og:site_name" content="Berget AI" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={imageUrl} />}
      
      {/* Author */}
      {author && <meta name="author" content={author} />}
    </ReactHelmet>
  );
}
