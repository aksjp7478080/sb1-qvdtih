import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export default function SEO({
  title = 'HomeRootsCare - Professional Home Services in GTA',
  description = 'Professional home cleaning, yard management, and snow removal services in the Greater Toronto Area. Trusted local experts for house cleaning, garden maintenance, and winter snow clearing.',
  keywords = 'home cleaning GTA, house cleaning Toronto, yard maintenance, snow removal service, professional cleaners Toronto, garden maintenance GTA, winter snow clearing, residential cleaning service, commercial cleaning GTA, lawn care Toronto',
  image = 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80',
  url = 'https://homerootscare.com'
}: SEOProps) {
  const siteTitle = title.includes('HomeRootsCare') ? title : `${title} | HomeRootsCare`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "HomeRootsCare",
          "image": image,
          "description": description,
          "@id": url,
          "url": url,
          "telephone": "+1-647-646-4478",
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "ON",
            "addressCountry": "CA"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 43.653225,
            "longitude": -79.383186
          },
          "areaServed": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 43.653225,
              "longitude": -79.383186
            },
            "geoRadius": "50000"
          },
          "priceRange": "$$",
          "sameAs": [
            "https://facebook.com/homerootscare",
            "https://instagram.com/homerootscare"
          ]
        })}
      </script>
    </Helmet>
  );
}