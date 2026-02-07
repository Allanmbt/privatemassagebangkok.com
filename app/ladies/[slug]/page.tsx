import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Phone, Calendar, Ruler, Target, MapPin, Home, Plane, MessageSquare, Star } from 'lucide-react';
import { getSinglePost } from '@/utils/getSinglePost';
import { getAllPosts } from '@/utils/getAllPosts';
import { CTASection } from '@/components/cta-section';
import { generateLadyJsonLd } from '@/utils/jsonld';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const allLadies = getAllPosts('ladies');
  // 只为已上架的技师生成静态页面
  const ladies = allLadies.filter((lady) => (lady as any).listed !== false);
  return ladies.map((lady) => ({
    slug: lady.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const lady = getSinglePost('ladies', slug);
  
  if (!lady) {
    return {
      title: 'Lady Not Found - Aloha Massage Chiang Mai',
      description: 'The requested therapist profile could not be found.',
    };
  }

  // 使用 MDX frontmatter.description 动态覆盖，若缺失则回退到默认文案
  const dynamicDescription = (lady as any).description || 
    `Meet ${lady.title} – your sweet escape in Chiang Mai. Professional massage therapist with gentle hands and warm personality.`;
  
  return {
    title: `${lady.title} – Aloha Massage Chiang Mai Sensual & Relaxing Touch`,
    description: dynamicDescription,
    openGraph: {
      title: `${lady.title} – Aloha Massage Chiang Mai Sensual & Relaxing Touch`,
      description: dynamicDescription,
      url: `https://alohamassagechiangmai.com/ladies/${lady.slug}`,
      siteName: 'Aloha Massage Chiang Mai',
      images: [
        {
          url: lady.coverImage || '/images/therapists/nicha.jpg',
          width: 1200,
          height: 630,
          alt: `${lady.title} – Aloha Massage Chiang Mai Sensual & Relaxing Touch`,
        },
      ],
      locale: 'en',
      type: 'profile',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${lady.title} – Aloha Massage Chiang Mai Sensual & Relaxing Touch`,
      description: dynamicDescription,
      images: [lady.coverImage || '/images/therapists/nicha.jpg'],
    },
    alternates: {
      canonical: `https://alohamassagechiangmai.com/ladies/${lady.slug}`,
    },
  };
}

export default async function LadyDetailPage({ params }: Props) {
  const { slug } = await params;
  const lady = getSinglePost('ladies', slug);
  
  // 检查技师是否存在
  if (!lady) {
    notFound();
  }

  // 检查技师是否下架（listed: false）
  const isAvailable = (lady as any).listed !== false;

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Back Button */}
            <div className="mb-8">
              <Button variant="ghost" asChild>
                <Link href="/ladies">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Our Ladies
                </Link>
              </Button>
            </div>

            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                {lady.title} – Aloha Massage Chiang Mai
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Your sweet escape in Chiang Mai with gentle hands and sensual Thai-oil fusion style.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Photo Section */}
              <div className="order-1 lg:order-1">
                <Card className="overflow-hidden border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
                  <div className="aspect-[3/4] relative">
                    <Image
                      src={lady.coverImage || '/images/therapists/nicha.jpg'}
                      alt={`${lady.title} – Aloha Massage Chiang Mai Sensual & Relaxing Touch`}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </Card>
              </div>

              {/* Information Section */}
              <div className="order-2 lg:order-2 space-y-8">
                {/* Name */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">{lady.title}</h2>
                </div>

                {/* Profile Information Table */}
                <Card className="bg-gradient-to-br from-background to-muted/20 border border-muted/30">
                  <CardContent className="p-0">
                    <div className="divide-y divide-muted/20">
                      {lady.age && (
                        <div className="flex items-center justify-between px-6 py-4 hover:bg-muted/10 transition-colors">
                          <div className="flex items-center gap-3">
                            <Calendar className="h-5 w-5 text-primary" />
                            <span className="font-medium text-foreground">Age</span>
                          </div>
                          <span className="text-lg font-semibold text-foreground">{lady.age}</span>
                        </div>
                      )}

                      {lady.height && (
                        <div className="flex items-center justify-between px-6 py-4 hover:bg-muted/10 transition-colors">
                          <div className="flex items-center gap-3">
                            <Ruler className="h-5 w-5 text-primary" />
                            <span className="font-medium text-foreground">Height</span>
                          </div>
                          <span className="text-lg font-semibold text-foreground">{lady.height}</span>
                        </div>
                      )}

                      {(lady as any).measurements && (
                        <div className="flex items-center justify-between px-6 py-4 hover:bg-muted/10 transition-colors">
                          <div className="flex items-center gap-3">
                            <Target className="h-5 w-5 text-primary" />
                            <span className="font-medium text-foreground">Measurements</span>
                          </div>
                          <span className="text-lg font-semibold text-foreground">{(lady as any).measurements}</span>
                        </div>
                      )}

                      {((lady as any).incall || (lady as any).outcall) && (
                        <div className="px-6 py-4 hover:bg-muted/10 transition-colors">
                          <div className="flex items-center gap-3 mb-3">
                            <MapPin className="h-5 w-5 text-primary" />
                            <span className="font-medium text-foreground">Provides</span>
                          </div>
                          <div className="flex flex-wrap gap-2 ml-8">
                            {(lady as any).incall && (
                              <Badge variant="outline" className="bg-primary/10 border-primary/20 text-primary text-sm">
                                <Home className="h-3 w-3 mr-1" />
                                In-Store
                              </Badge>
                            )}
                            {(lady as any).outcall && (
                              <Badge variant="outline" className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300 text-sm">
                                <Plane className="h-3 w-3 mr-1" />
                                Outcall
                              </Badge>
                            )}
                          </div>
                        </div>
                      )}

                      {lady.languages && lady.languages.length > 0 && (
                        <div className="px-6 py-4 hover:bg-muted/10 transition-colors">
                          <div className="flex items-center gap-3 mb-3">
                            <MessageSquare className="h-5 w-5 text-primary" />
                            <span className="font-medium text-foreground">Languages</span>
                          </div>
                          <div className="flex flex-wrap gap-2 ml-8">
                            {lady.languages.map((language, index) => (
                              <Badge key={index} variant="secondary" className="bg-muted text-foreground text-sm">
                                {language}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Action Buttons or Unavailable Notice */}
                <div className="space-y-4">
                  {isAvailable ? (
                    // 正常预订按钮
                    <>
                      <Button size="lg" className="w-full button-hover glow-effect" asChild>
                        <Link href="/booking">
                          Book Session with {lady.title}
                        </Link>
                      </Button>
                      <Button size="lg" variant="outline" className="w-full border-primary/30" asChild>
                        <a href="tel:+66952386661">
                          <Phone className="h-5 w-5 mr-2" />
                          Call to Book Now
                        </a>
                      </Button>
                    </>
                  ) : (
                    // 不可预约提示
                    <div className="p-6 bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800 rounded-lg">
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 dark:bg-amber-800/30 rounded-full mb-4">
                          <Calendar className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-200 mb-2">
                          Currently Unavailable
                        </h3>
                        <p className="text-amber-700 dark:text-amber-300 text-sm leading-relaxed">
                          This therapist is currently on extended leave and temporarily unavailable for bookings.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Personal Introduction */}
            {lady.content && (
              <div className="mt-16">
                <Card className="bg-gradient-to-br from-muted/20 to-background border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl gradient-text">About {lady.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <article className="prose prose-lg max-w-none dark:prose-invert">
                      <div className="text-foreground leading-relaxed space-y-6">
                        <MDXRemote 
                          source={lady.content}
                          components={{
                            h3: ({ children }) => (
                              <h3 className="text-xl font-bold text-primary mt-8 mb-4 border-l-4 border-primary pl-4">
                                {children}
                              </h3>
                            ),
                            h4: ({ children }) => (
                              <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">
                                {children}
                              </h4>
                            ),
                            ul: ({ children }) => (
                              <ul className="space-y-2 ml-4 text-muted-foreground">
                                {children}
                              </ul>
                            ),
                            li: ({ children }) => (
                              <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>{children}</span>
                              </li>
                            ),
                            p: ({ children }) => (
                              <p className="text-muted-foreground leading-relaxed mb-4">
                                {children}
                              </p>
                            ),
                          }}
                        />
                      </div>
                    </article>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Customer Reviews */}
            <div className="mt-12">
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text flex items-center gap-2">
                    <MessageSquare className="h-6 w-6 text-primary" />
                    What Customers Say About {lady.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {(lady as any).reviews && (lady as any).reviews.length > 0 ? (
                    <div className="grid gap-4 md:gap-6">
                      {(lady as any).reviews.map((review: any, index: number) => (
                        <Card key={index} className="bg-white/80 dark:bg-muted/20 border-0 shadow-md">
                          <CardContent className="p-4 md:p-6">
                            <div className="space-y-3">
                              {/* Header with rating and name */}
                              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                <div className="flex items-center gap-1">
                                  {[...Array(5)].map((_, starIndex) => (
                                    <Star 
                                      key={starIndex} 
                                      className={`h-4 w-4 ${starIndex < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                                    />
                                  ))}
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <span className="font-semibold text-foreground">{review.name}</span>
                                  {review.date && (
                                    <>
                                      <span>•</span>
                                      <span>{review.date}</span>
                                    </>
                                  )}
                                </div>
                              </div>
                              
                              {/* Review text */}
                              <p className="text-foreground leading-relaxed text-sm md:text-base">
                                {review.comment}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <div className="text-muted-foreground">
                        <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <p className="text-lg">No customer reviews yet</p>
                        <p className="text-sm mt-2">Be the first to share your experience with {lady.title}!</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title={`Ready to Book with ${lady.title}?`}
        description="Experience professional massage therapy with our skilled and charming therapist"
        buttonText="Book Your Session Now"
      />

      {/* Schema.org JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLadyJsonLd(lady as any))
        }}
      />
    </div>
  );
} 