import { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Sparkles, Star, Users, CreditCard, Banknote, Smartphone, Shield, Clock } from 'lucide-react';
import Link from 'next/link';
import { CTASection } from '@/components/cta-section';

export const metadata: Metadata = {
  title: 'Massage Rates & Pricing - Incall & Outcall Services | Aloha Massage Chiang Mai',
  description: 'View transparent pricing for our premium massage services. Competitive rates for incall and outcall massage in Chiang Mai. Multiple payment options available.',
  openGraph: {
    title: 'Massage Rates & Pricing - Incall & Outcall Services | Aloha Massage Chiang Mai',
    description: 'View transparent pricing for our premium massage services. Competitive rates for incall and outcall massage in Chiang Mai.',
    url: 'https://alohamassagechiangmai.com/rates',
    siteName: 'Aloha Massage Chiang Mai',
    images: [
      {
        url: '/images/menu-en.jpg',
        width: 1200,
        height: 630,
        alt: 'Aloha Massage Rates and Pricing',
      },
    ],
    locale: 'en',
    type: 'website',
  },
  alternates: {
    canonical: 'https://alohamassagechiangmai.com/rates',
  },
};

export default function RatesPage() {
  const incallServices = [
    {
      name: 'Thai & Oil Massage',
      price: '600',
      duration: '60 min',
      icon: Heart,
    },
    {
      name: 'Aloha Massage Package A',
      price: '1,100',
      duration: '70 min',
      icon: Sparkles,
      badge: 'Popular'
    },
    {
      name: 'Aloha Massage Package B - Ice Fire Dragon',
      price: '1,600',
      duration: '90 min',
      icon: Star,
      badge: 'Premium'
    },
    {
      name: 'Four Hands Massage',
      price: '2,200',
      duration: '90 min',
      icon: Users,
      badge: 'Luxury'
    },
    {
      name: 'Yoni Massage',
      price: '1,600',
      duration: '90 min',
      icon: Star,
      special: 'Same as Package B pricing'
    }
  ];

  const outcallServices = [
    {
      name: 'Aloha Massage Package A',
      price: '1,600',
      duration: '70 min',
      icon: Sparkles,
    },
    {
      name: 'Aloha Massage Package B - Ice Fire Dragon',
      price: '2,200',
      duration: '90 min',
      icon: Star,
    },
    {
      name: 'Four Hands Massage',
      price: '3,200',
      duration: '90 min',
      icon: Users,
    }
  ];

  const paymentMethods = [
    {
      title: 'Cash in Thai Baht',
      description: 'Our preferred payment method',
      icon: Banknote,
      primary: true
    },
    {
      title: 'Cash in USD or EUR',
      description: 'Foreign currency accepted',
      icon: CreditCard,
    },
         {
       title: 'PromptPay (Bank Transfers)',
       description: 'Scan the QR code to pay via PromptPay',
       icon: Shield,
     },
    {
      title: 'WeChat Pay and Alipay',
      description: 'No extra fees',
      icon: Smartphone,
    },
    {
      title: 'Credit Card via QR Code',
      description: 'Secure Stripe-powered payment (6% processing fee applies)',
      icon: CreditCard,
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/15 via-primary/8 to-accent/10 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 dark:opacity-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary/15 rounded-full blur-2xl"></div>
          <div className="absolute top-20 right-1/4 w-28 h-28 bg-secondary/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Rates & Pricing
          </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transparent pricing for our premium massage services
          </p>
          </div>
        </div>
      </section>

      {/* Incall Service Rates */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Incall Service</h2>
            <p className="text-lg text-muted-foreground">Service Rates for Incall Service</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4">
              {incallServices.map((service, index) => {
                const Icon = service.icon;
              return (
                                    <Card key={index} className="bg-white/95 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-3 min-w-0 flex-1">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="text-base sm:text-lg font-semibold leading-tight">{service.name}</h3>
                            {service.special && (
                              <p className="text-xs sm:text-sm text-muted-foreground">{service.special}</p>
                            )}
                          </div>
                        </div>
                        
                        <div className="text-right flex-shrink-0">
                          {service.badge && (
                            <Badge className="bg-primary/20 text-primary border-primary/30 text-xs mb-1 hidden sm:inline-flex">
                              {service.badge}
                            </Badge>
                          )}
                          <div className="text-lg sm:text-2xl font-bold text-primary">{service.price} <span className="text-sm sm:text-base text-muted-foreground">THB</span></div>
                          <div className="text-xs sm:text-sm text-muted-foreground">{service.duration}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
              );
            })}
            </div>
          </div>
        </div>
      </section>

      {/* Outcall Service Rates */}
      <section className="py-16 bg-gradient-to-br from-muted/10 via-background to-muted/20">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Outcall Service</h2>
            <p className="text-lg text-muted-foreground">Service Rates for Outcall Service</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4">
              {outcallServices.map((service, index) => {
                const Icon = service.icon;
                return (
                                     <Card key={index} className="bg-white/95 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                     <CardContent className="p-4 sm:p-6">
                       <div className="flex items-center justify-between gap-2">
                         <div className="flex items-center gap-3 min-w-0 flex-1">
                           <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                             <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                           </div>
                           <div className="min-w-0 flex-1">
                             <h3 className="text-base sm:text-lg font-semibold leading-tight">{service.name}</h3>
                           </div>
                         </div>
                         
                         <div className="text-right flex-shrink-0">
                           <div className="text-lg sm:text-2xl font-bold text-primary">{service.price} <span className="text-sm sm:text-base text-muted-foreground">THB</span></div>
                           <div className="text-xs sm:text-sm text-muted-foreground">{service.duration}</div>
                         </div>
                       </div>
                     </CardContent>
                   </Card>
                );
              })}
                  </div>
            
            <div className="mt-8 text-center">
              <Card className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800">
                <CardContent className="p-4">
                  <p className="text-sm text-amber-700 dark:text-amber-300">
                    <strong>Note:</strong> Only the above three services are available for outcall. 
                    Free service within Chiang Mai Old City center area. Additional travel fees may apply for locations outside the central zone.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Information */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Payment</h2>
            <p className="text-lg text-muted-foreground">Multiple convenient payment options available</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Payment Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/thai-baht.jpg"
                  alt="Payment Methods - Aloha Massage Chiang Mai"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Payment Information */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-4">Payment Information</h3>
                  <p className="text-muted-foreground mb-6">
                    Our preferred payment method is <strong className="text-primary">cash in Thai Baht</strong>.
                  </p>
                </div>

                  <div>
                  <h4 className="font-semibold mb-4">We also accept:</h4>
                  <div className="space-y-3">
                                         {paymentMethods.map((method, index) => (
                       <div key={index} className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary/10 flex-shrink-0">
                           <method.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                          <h5 className="font-medium">{method.title}</h5>
                          <p className="text-sm text-muted-foreground">{method.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <p className="text-sm text-muted-foreground">
                    For payments in currencies other than Thai Baht, the exchange rate will be based on the rate of the day plus a small margin to cover exchange rate fluctuation risks.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Thank you for your understanding and cooperation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Book Your Experience?"
        description="Choose your preferred service and payment method, then reserve your session today"
        buttonText="Book Your Session"
      />

      {/* Schema.org JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "CollectionPage",
                "@id": "https://alohamassagechiangmai.com/rates",
                "name": "Massage Rates & Pricing - Incall & Outcall Services | Aloha Massage Chiang Mai",
                "url": "https://alohamassagechiangmai.com/rates",
                "inLanguage": "en",
                "isPartOf": { "@id": "https://alohamassagechiangmai.com/#website" },
                "about": { "@id": "https://alohamassagechiangmai.com/#business" },
                "description": "View transparent pricing for our premium massage services. Competitive rates for incall and outcall massage in Chiang Mai."
              },
              {
                "@type": "OfferCatalog",
                "@id": "https://alohamassagechiangmai.com/rates#catalog",
                "name": "Aloha Massage Price List",
                "itemListElement": [
                  {
                    "@type": "OfferCatalog",
                    "@id": "https://alohamassagechiangmai.com/rates#incall",
                    "name": "Incall Service Rates",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "priceCurrency": "THB",
                        "priceSpecification": {
                          "@type": "UnitPriceSpecification",
                          "price": 600,
                          "unitText": "60 min"
                        },
                        "itemOffered": {
                          "@type": "Service",
                          "@id": "https://alohamassagechiangmai.com/services#thai-oil-incall",
                          "name": "Thai & Oil Massage (Incall)",
                          "provider": { "@id": "https://alohamassagechiangmai.com/#business" }
                        },
                        "availability": "https://schema.org/InStock"
                      },
                      {
                        "@type": "Offer",
                        "priceCurrency": "THB",
                        "priceSpecification": {
                          "@type": "UnitPriceSpecification",
                          "price": 1100,
                          "unitText": "70 min"
                        },
                        "itemOffered": {
                          "@type": "Service",
                          "@id": "https://alohamassagechiangmai.com/services#aloha-a-incall",
                          "name": "Aloha Massage Package A (Incall)",
                          "provider": { "@id": "https://alohamassagechiangmai.com/#business" }
                        }
                      },
                      {
                        "@type": "Offer",
                        "priceCurrency": "THB",
                        "priceSpecification": {
                          "@type": "UnitPriceSpecification",
                          "price": 1600,
                          "unitText": "90 min"
                        },
                        "itemOffered": {
                          "@type": "Service",
                          "@id": "https://alohamassagechiangmai.com/services#aloha-b-incall",
                          "name": "Aloha Massage Package B – Ice Fire Dragon (Incall)",
                          "provider": { "@id": "https://alohamassagechiangmai.com/#business" }
                        }
                      },
                      {
                        "@type": "Offer",
                        "priceCurrency": "THB",
                        "priceSpecification": {
                          "@type": "UnitPriceSpecification",
                          "price": 2200,
                          "unitText": "90 min"
                        },
                        "itemOffered": {
                          "@type": "Service",
                          "@id": "https://alohamassagechiangmai.com/services#four-hands-incall",
                          "name": "Four Hands Massage (Incall)",
                          "provider": { "@id": "https://alohamassagechiangmai.com/#business" }
                        }
                      },
                      {
                        "@type": "Offer",
                        "priceCurrency": "THB",
                        "priceSpecification": {
                          "@type": "UnitPriceSpecification",
                          "price": 1600,
                          "unitText": "90 min"
                        },
                        "itemOffered": {
                          "@type": "Service",
                          "@id": "https://alohamassagechiangmai.com/services#yoni-incall",
                          "name": "Yoni Massage (Female only, Incall)",
                          "provider": { "@id": "https://alohamassagechiangmai.com/#business" }
                        }
                      }
                    ]
                  },
                  {
                    "@type": "OfferCatalog",
                    "@id": "https://alohamassagechiangmai.com/rates#outcall",
                    "name": "Outcall Service Rates",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "priceCurrency": "THB",
                        "priceSpecification": {
                          "@type": "UnitPriceSpecification",
                          "price": 1600,
                          "unitText": "70 min"
                        },
                        "itemOffered": {
                          "@type": "Service",
                          "@id": "https://alohamassagechiangmai.com/services#aloha-a-outcall",
                          "name": "Aloha Massage Package A (Outcall)",
                          "areaServed": [{ "@type": "City", "name": "Chiang Mai" }],
                          "provider": { "@id": "https://alohamassagechiangmai.com/#business" }
                        }
                      },
                      {
                        "@type": "Offer",
                        "priceCurrency": "THB",
                        "priceSpecification": {
                          "@type": "UnitPriceSpecification",
                          "price": 2200,
                          "unitText": "90 min"
                        },
                        "itemOffered": {
                          "@type": "Service",
                          "@id": "https://alohamassagechiangmai.com/services#aloha-b-outcall",
                          "name": "Aloha Massage Package B – Ice Fire Dragon (Outcall)",
                          "areaServed": [{ "@type": "City", "name": "Chiang Mai" }],
                          "provider": { "@id": "https://alohamassagechiangmai.com/#business" }
                        }
                      },
                      {
                        "@type": "Offer",
                        "priceCurrency": "THB",
                        "priceSpecification": {
                          "@type": "UnitPriceSpecification",
                          "price": 3200,
                          "unitText": "90 min"
                        },
                        "itemOffered": {
                          "@type": "Service",
                          "@id": "https://alohamassagechiangmai.com/services#four-hands-outcall",
                          "name": "Four Hands Massage (Outcall)",
                          "areaServed": [{ "@type": "City", "name": "Chiang Mai" }],
                          "provider": { "@id": "https://alohamassagechiangmai.com/#business" }
                        }
                      }
                    ]
                  }
                ],
                "url": "https://alohamassagechiangmai.com/rates"
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://alohamassagechiangmai.com/rates#breadcrumbs",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://alohamassagechiangmai.com" },
                  { "@type": "ListItem", "position": 2, "name": "Rates", "item": "https://alohamassagechiangmai.com/rates" }
                ]
              },
              {
                "@type": "Organization",
                "@id": "https://alohamassagechiangmai.com/#business",
                "name": "Aloha Massage Chiang Mai",
                "makesOffer": { "@id": "https://alohamassagechiangmai.com/rates#catalog" },
                "areaServed": [{ "@type": "City", "name": "Chiang Mai" }],
                "priceRange": "฿600–฿3200",
                "acceptedPaymentMethod": [
                  "Cash",
                  "CreditCard",
                  "BankTransfer",
                  "MobilePayment"
                ]
              }
            ]
          })
        }}
      />
    </div>
  );
} 