interface LocalBusinessGraph {
  "@context": "https://schema.org";
  "@graph": any[];
}

export function generateBusinessSchema(): LocalBusinessGraph {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://privatemassagebangkok.com';

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        "url": baseUrl,
        "name": "Private Massage Bangkok",
        "inLanguage": "en"
      },
      {
        "@type": ["LocalBusiness", "MassageTherapist"],
        "@id": `${baseUrl}/#business`,
        "name": "Private Massage Bangkok",
        "url": baseUrl,
        "telephone": "+66XXXXXXXXX",
        "email": "contact@privatemassagebangkok.com",
        "image": [
          `${baseUrl}/images/hero-bg.webp`,
          `${baseUrl}/images/logo.webp`
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Private Location",
          "addressLocality": "Bangkok",
          "addressRegion": "Bangkok",
          "postalCode": "10110",
          "addressCountry": "TH"
        },
        "geo": { "@type": "GeoCoordinates", "latitude": 13.7563, "longitude": 100.5018 },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "14:00",
            "closes": "02:00"
          }
        ],
        "priceRange": "฿฿฿฿",
        "areaServed": ["Bangkok"],
        "sameAs": []
      }
    ]
  };
}

interface Article {
  "@context": "https://schema.org";
  "@type": "Article";
  headline: string;
  description: string;
  author: {
    "@type": "Person";
    name: string;
  };
  datePublished: string;
  dateModified: string;
  image: string;
  url: string;
}

export function generateArticleSchema(
  title: string,
  description: string,
  slug: string,
  datePublished: string,
  coverImage?: string,
  author: string = "Private Massage Bangkok",
  dateModified?: string
): Article {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://privatemassagebangkok.com';
  
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    author: {
      "@type": "Person",
      name: author
    },
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    image: coverImage ? `${baseUrl}${coverImage}` : `${baseUrl}/images/hero-bg.webp`,
    url: `${baseUrl}/${slug}`
  };
}

interface Person {
  "@context": "https://schema.org";
  "@type": "Person";
  name: string;
  description: string;
  image: string;
  jobTitle: string;
  worksFor: {
    "@type": "LocalBusiness";
    name: string;
  };
}

export function generatePersonSchema(
  name: string,
  description: string,
  coverImage: string
): Person {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://privatemassagebangkok.com';
  
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: name,
    description: description,
    image: `${baseUrl}${coverImage}`,
    jobTitle: "Elite Massage Therapist",
    worksFor: {
      "@type": "LocalBusiness",
      name: "Private Massage Bangkok"
    }
  };
} 