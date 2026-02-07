interface Lady {
  title: string;
  slug: string;
  description?: string;
  excerpt?: string;
  coverImage?: string;
  age?: string;
  height?: string;
  measurements?: string;
  incall?: boolean;
  outcall?: boolean;
  languages?: string[];
  reviews?: Array<{
    name: string;
    rating: number;
    comment: string;
    date?: string;
  }>;
  listed?: boolean;
  content?: string;
}

const baseUrl = 'https://alohamassagechiangmai.com';

// 从内容中提取关键词
function extractKeywords(lady: Lady): string[] {
  const defaultKeywords = ["sensual massage", "thai massage", "oil massage", "relaxation therapy"];
  
  if (!lady.content) return defaultKeywords;
  
  const content = lady.content.toLowerCase();
  const possibleKeywords = [
    "sensual massage", "nuru-like glide", "lingam-inspired", 
    "happy ending massage chiang mai", "outcall massage chiang mai",
    "thai massage", "oil massage", "relaxation", "wellness","erotic massage",
    "aloha massage chiang mai", "chiang mai massage","mobile massage","home massage"
  ];
  
  const foundKeywords = possibleKeywords.filter(keyword => 
    content.includes(keyword.toLowerCase())
  );
  
  return foundKeywords.length > 0 ? foundKeywords : defaultKeywords;
}

// 计算聚合评分
function calculateAggregateRating(reviews: Lady['reviews']) {
  if (!reviews || reviews.length === 0) return null;
  
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  const avgRating = totalRating / reviews.length;
  
  return {
    "@type": "AggregateRating",
    "ratingValue": Math.round(avgRating * 10) / 10,
    "reviewCount": reviews.length,
    "bestRating": 5,
    "worstRating": 1
  };
}

// 生成服务报价
function generateOffers(lady: Lady) {
  const offers = [];
  
  if (lady.incall) {
    offers.push({
      "@type": "Offer",
      "name": `In-store session with ${lady.title}`,
      "availability": "https://schema.org/InStock",
      "areaServed": { "@type": "City", "name": "Chiang Mai" },
      "itemOffered": {
        "@type": "Service",
        "serviceType": "Incall massage session",
        "provider": { "@id": `${baseUrl}/#business` }
      }
    });
  }
  
  if (lady.outcall) {
    offers.push({
      "@type": "Offer",
      "name": `Discreet hotel outcall with ${lady.title}`,
      "availability": "https://schema.org/InStock",
      "areaServed": { "@type": "City", "name": "Chiang Mai" },
      "itemOffered": {
        "@type": "Service",
        "serviceType": "Outcall massage session",
        "provider": { "@id": `${baseUrl}/#business` }
      }
    });
  }
  
  return offers;
}

export function generateLadyJsonLd(lady: Lady) {
  const pageUrl = `${baseUrl}/ladies/${lady.slug}/`;
  const personId = `${baseUrl}/ladies/${lady.slug}/#person`;
  const breadcrumbId = `${baseUrl}/ladies/${lady.slug}/#breadcrumbs`;
  
  // 处理语言格式
  const processLanguages = (languages?: string[]) => {
    if (!languages) return ["Thai", "English"];
    return languages.map(lang => {
      // 移除 "Fluent " 和 "Base " 前缀
      return lang.replace(/^(Fluent|Base)\s+/, "");
    });
  };

  // 生成描述文本，优先使用自定义描述
  const generatePersonDescription = (lady: Lady) => {
    if (lady.title === "Nadear") {
      return "Elegant, well-mannered therapist who blends traditional Thai bodywork with a sensual, spa-grade flow — calm pacing, warm oil, mindful lower-body energy work, and deep relaxation. Discreet in-store or hotel outcall available in Chiang Mai.";
    }
    
    return lady.description || `Meet ${lady.title} – professional massage therapist with gentle hands and warm personality. Experience traditional Thai bodywork with a personal touch in Chiang Mai.`;
  };

  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      // ProfilePage
      {
        "@type": "ProfilePage",
        "@id": pageUrl,
        "url": pageUrl,
        "name": `${lady.title} – Aloha Massage Chiang Mai Sensual & Relaxing Touch`,
        "inLanguage": "en",
        "isPartOf": { "@id": `${baseUrl}/#website` },
        "about": { "@id": personId },
        "description": lady.description || `Meet ${lady.title} – your sweet escape in Chiang Mai. Professional massage therapist with gentle hands and warm personality.`,
        "breadcrumb": { "@id": breadcrumbId }
      },

      // Person
      {
        "@type": "Person",
        "@id": personId,
        "name": lady.title,
        "jobTitle": "Massage Therapist",
        "image": lady.coverImage ? `${baseUrl}${lady.coverImage}` : `${baseUrl}/images/therapists/nicha.jpg`,
        "url": pageUrl,
        "mainEntityOfPage": { "@type": "WebPage", "@id": pageUrl },
        "worksFor": { "@id": `${baseUrl}/#business` },
        "knowsLanguage": processLanguages(lady.languages),
        ...(lady.height && {
          "height": { 
            "@type": "QuantitativeValue", 
            "value": parseInt(lady.height.replace(/\D/g, '')), 
            "unitCode": "CMT" 
          }
        }),
        "additionalProperty": [
          ...(lady.age ? [{ "@type": "PropertyValue", "name": "Age", "value": lady.age }] : []),
          ...(lady.measurements ? [{ "@type": "PropertyValue", "name": "Measurements", "value": lady.measurements }] : []),
          ...(lady.incall !== undefined ? [{ "@type": "PropertyValue", "name": "Incall", "value": lady.incall.toString() }] : []),
          ...(lady.outcall !== undefined ? [{ "@type": "PropertyValue", "name": "Outcall", "value": lady.outcall.toString() }] : [])
        ],
        "keywords": extractKeywords(lady),
        "description": generatePersonDescription(lady),
        ...(lady.reviews && lady.reviews.length > 0 && {
          "review": lady.reviews.map((review) => ({
            "@type": "Review",
            "datePublished": review.date,
            "reviewBody": review.comment,
            "author": { "@type": "Person", "name": review.name },
            "reviewRating": { 
              "@type": "Rating", 
              "ratingValue": review.rating, 
              "bestRating": 5, 
              "worstRating": 1 
            }
          }))
        }),
        ...(calculateAggregateRating(lady.reviews) && {
          "aggregateRating": calculateAggregateRating(lady.reviews)
        }),
        ...(((lady.incall || lady.outcall)) && {
          "offers": generateOffers(lady)
        })
      },

      // BreadcrumbList
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl },
          { "@type": "ListItem", "position": 2, "name": "Therapists", "item": `${baseUrl}/ladies/` },
          { "@type": "ListItem", "position": 3, "name": lady.title, "item": pageUrl }
        ]
      }
    ]
  };

  return jsonLdData;
} 