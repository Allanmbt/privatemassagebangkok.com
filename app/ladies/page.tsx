import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { t } from '@/lib/translations';
import { getAllPosts } from '@/utils/getAllPosts';

export const metadata: Metadata = {
  title: 'Meet Our Beautiful Massage Ladies - Aloha Massage Chiang Mai',
  description: 'Meet our skilled and beautiful massage therapists at Aloha Massage Chiang Mai. Professional ladies offering premium massage services with charm and expertise.',
  openGraph: {
    title: 'Meet Our Beautiful Massage Ladies - Aloha Massage Chiang Mai',
    description: 'Meet our skilled and beautiful massage therapists at Aloha Massage Chiang Mai. Professional ladies offering premium massage services.',
    url: 'https://alohamassagechiangmai.com/ladies',
    siteName: 'Aloha Massage Chiang Mai',
    images: [
      {
        url: '/images/therapists/nicha.jpg',
        width: 1200,
        height: 630,
        alt: 'Aloha Massage Ladies - Professional Therapists',
      },
    ],
    locale: 'en',
    type: 'website',
  },
  alternates: {
    canonical: 'https://alohamassagechiangmai.com/ladies',
  },
};

export default function LadiesPage() {
  const allLadies = getAllPosts('ladies');
  // 过滤已上架的技师，listed 没写时默认 true
  const ladies = allLadies
    .filter((lady) => (lady as any).listed !== false)
    .slice(0, 18); // Limit to 18 entries

  return (
    <div className="flex flex-col">
      {/* Hero Section - Same style as rates page */}
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
              {t('ladies.title')}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('ladies.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Ladies Grid - Same style as homepage */}
      <section className="section-padding bg-gradient-to-br from-muted/10 via-background to-muted/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Real Photos of Our Lovely Girls
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Meet our friendly, skilled ladies — real, beautiful, and ready to make your time unforgettable.
            </p>
          </div>
          
          {ladies.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {ladies.map((lady, index) => (
                <Link 
                  key={lady.slug}
                  href={`/ladies/${lady.slug}`}
                  className="block"
                >
                  <Card 
                    className="overflow-hidden border-0 shadow-xl bg-white/90 backdrop-blur-sm card-hover fade-in-up h-full"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <div className="aspect-[3/4] relative image-overlay">
                      <Image
                        src={lady.coverImage || '/images/therapists/nicha.jpg'}
                        alt={lady.title}
                        fill
                        className="object-cover transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">{lady.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
                        {(lady as any).excerpt || lady.description}
                      </p>
                      <div className="text-center">
                        <Button 
                          size="sm" 
                          className="rounded-lg button-hover w-full"
                          asChild
                        >
                          <span>{t('ladies.viewProfile')}</span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}

          {ladies.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                Our lovely ladies will be introduced soon. Please check back later.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
} 