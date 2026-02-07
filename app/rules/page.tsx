import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Shield, X, Heart, Siren, Ban, Camera, Handshake, MessageSquareOff, Users, Eye } from 'lucide-react';
import Image from 'next/image';
import { CTASection } from '@/components/cta-section';

export const metadata: Metadata = {
  title: 'Rules & Guidelines - Aloha Massage Chiang Mai',
  description: 'Important rules and guidelines for a safe and pleasant experience at Aloha Massage Chiang Mai. Please read carefully before booking.',
  openGraph: {
    title: 'Rules & Guidelines - Aloha Massage Chiang Mai',
    description: 'Important rules and guidelines for a safe and pleasant experience at Aloha Massage Chiang Mai.',
    url: 'https://alohamassagechiangmai.com/rules',
    siteName: 'Aloha Massage Chiang Mai',
    images: [
      {
        url: '/images/notes-and-prohibitions.jpg',
        width: 1200,
        height: 630,
        alt: 'Aloha Massage Rules and Guidelines',
      },
    ],
    locale: 'en',
    type: 'website',
  },
  alternates: {
    canonical: 'https://alohamassagechiangmai.com/rules',
  },
};

export default function RulesPage() {
  const prohibitions = [
    {
      icon: Siren,
      title: "Heavy Intoxication",
      description: "Being heavily drunk creates problems for our services and puts everyone at risk.",
      severity: "high"
    },
    {
      icon: Ban,
      title: "Drug Use",
      description: "Anyone who has taken or uses drugs or similar substances.",
      severity: "high"
    },
    {
      icon: Heart,
      title: "Health Concerns",
      description: "Those with infectious diseases, skin conditions, or suspected health issues that could affect others.",
      severity: "high"
    },
    {
      icon: Camera,
      title: "Photography/Recording",
      description: "Voyeurism - secretly taking photos or videos is strictly forbidden.",
      severity: "high"
    },
    {
      icon: Shield,
      title: "Violence or Aggression",
      description: "Any form of violence toward our ladies or threatening behavior.",
      severity: "high"
    },
    {
      icon: X,
      title: "Forced Actions",
      description: "Pressuring our ladies to do anything they're not comfortable with.",
      severity: "high"
    },
    {
      icon: AlertTriangle,
      title: "Unreasonable Demands",
      description: "Requesting services that exceed common sense or our boundaries.",
      severity: "medium"
    },
    {
      icon: MessageSquareOff,
      title: "Direct Solicitation",
      description: "Contacting our ladies directly outside of business hours without going through us.",
      severity: "medium"
    },
    {
      icon: Users,
      title: "Industry Competitors",
      description: "Those in the same business (including related parties) attempting to scout our ladies.",
      severity: "medium"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/15 via-primary/8 to-accent/10 overflow-hidden">
        <div className="absolute inset-0 dark:opacity-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary/15 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Rules & Guidelines
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Important guidelines to ensure a safe and enjoyable experience for everyone
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Important Notice */}
            <Card className="bg-gradient-to-br from-rose-50 to-orange-50 dark:from-rose-950/20 dark:to-orange-950/20 border-rose-200 dark:border-rose-800 mb-16">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-rose-100 dark:bg-rose-900 rounded-full flex items-center justify-center">
                    <AlertTriangle className="h-8 w-8 text-rose-600" />
                  </div>
                </div>
                <CardTitle className="text-3xl gradient-text mb-4">Important Notice</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
                      <Image
                        src="/images/notes-and-prohibitions.jpg"
                        alt="Aloha Massage - Rules and Guidelines"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="order-1 lg:order-2">
                    <h3 className="text-2xl font-bold mb-6">Let's Keep Everyone Safe & Happy!</h3>
                    
                    <div className="space-y-4 text-lg">
                      <p className="text-muted-foreground">
                        We want everyone to have an amazing experience at Aloha Massage. To make this happen, 
                        we have some simple guidelines that help us maintain a safe, comfortable environment 
                        for our lovely ladies and all our valued guests.
                      </p>
                      
                      <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                        <p className="text-amber-700 dark:text-amber-300 font-semibold mb-2">
                          ⚠️ Important Reminder
                        </p>
                        <p className="text-sm text-amber-600 dark:text-amber-400">
                          If any of the prohibited conditions below apply, we'll need to stop providing services. 
                          Please note that in such cases, fees are not refunded, and we may refuse future bookings.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Prohibitions */}
            <Card className="bg-gradient-to-br from-muted/20 to-background border-0 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl gradient-text mb-4">What We Don't Accept</CardTitle>
                <p className="text-muted-foreground text-lg">
                  These are the behaviors and situations we simply can't accommodate
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {prohibitions.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <Card key={index} className={`hover:shadow-lg transition-all duration-300 ${
                        item.severity === 'high' 
                          ? 'border-rose-200 dark:border-rose-800 bg-rose-50/50 dark:bg-rose-950/10' 
                          : 'border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/10'
                      }`}>
                        <CardContent className="p-6">
                          <div className="flex flex-col items-center text-center space-y-4">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                              item.severity === 'high' 
                                ? 'bg-rose-100 dark:bg-rose-900' 
                                : 'bg-amber-100 dark:bg-amber-900'
                            }`}>
                              <Icon className={`h-6 w-6 ${
                                item.severity === 'high' 
                                  ? 'text-rose-600' 
                                  : 'text-amber-600'
                              }`} />
                            </div>
                            
                            <div>
                              <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                            

                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                <div className="mt-12 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <Handshake className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-amber-700 dark:text-amber-300 mb-2">Our Commitment to You</h4>
                      <p className="text-sm text-amber-600 dark:text-amber-400 leading-relaxed">
                        We're here to provide you with an exceptional, relaxing experience. By following these simple guidelines, 
                        we can ensure that every visit to Aloha Massage is safe, comfortable, and memorable for all the right reasons. 
                        Thank you for helping us maintain our welcoming environment! 🙏
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready for Your Relaxing Experience?"
        description="Now that you know our guidelines, let's book your perfect massage session"
        buttonText="Book Your Session"
        buttonHref="/booking"
      />
    </div>
  );
} 