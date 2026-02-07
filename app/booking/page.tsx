import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Phone, Calendar, Clock, User, MessageSquare, MapPin, AlertCircle, CheckCircle, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { CTASection } from '@/components/cta-section';

export const metadata: Metadata = {
  title: 'How to Book Your Massage Session - Aloha Massage Chiang Mai',
  description: 'Easy booking guide for Aloha Massage Chiang Mai. Multiple contact methods including LINE, WhatsApp, WeChat. Learn about our outcall service areas and cancellation policy.',
  openGraph: {
    title: 'How to Book Your Massage Session - Aloha Massage Chiang Mai',
    description: 'Easy booking guide for Aloha Massage Chiang Mai. Multiple contact methods and service information.',
    url: 'https://alohamassagechiangmai.com/booking',
    siteName: 'Aloha Massage Chiang Mai',
    images: [
      {
        url: '/images/booking-guide.jpg',
        width: 1200,
        height: 630,
        alt: 'Aloha Massage Booking Guide',
      },
    ],
    locale: 'en',
    type: 'website',
  },
  alternates: {
    canonical: 'https://alohamassagechiangmai.com/booking',
  },
};

export default function BookingPage() {
  const bookingMethods = [
    {
      method: 'Call us',
      detail: '+66 95 238 6661',
      icon: Phone,
      primary: true
    },
    {
      method: 'Social media contacts',
      contacts: [
        { platform: 'LINE', id: '@alohamassage', link: 'https://lin.ee/FyyIweA' },
        { platform: 'WhatsApp', id: '+66 95 238 6661', link: 'https://wa.me/66952386661' },
        { platform: 'WeChat', id: 'aloha_massage' },
        { platform: 'Telegram', id: '@alohamassage888', link: 'https://t.me/alohamassage888' },
      ],
      icon: MessageSquare,
    }
  ];

  const socialContacts = [
    {
      name: 'LINE',
      qrPlaceholder: '/images/qr-line.jpg', // 您稍后提供
      color: 'bg-green-500'
    },
    {
      name: 'WhatsApp',
      qrPlaceholder: '/images/qr-whatsapp.jpg', // 您稍后提供
      color: 'bg-green-600'
    },
    {
      name: 'WeChat',
      qrPlaceholder: '/images/qr-wechat.jpg', // 您稍后提供
      color: 'bg-green-700'
    },
    {
      name: 'KakaoTalk',
      qrPlaceholder: '/images/qr-kakao.jpg', // 您稍后提供
      color: 'bg-yellow-500'
    },
    {
      name: 'Telegram',
      qrPlaceholder: '/images/qr-telegram.jpg', // 您稍后提供
      color: 'bg-blue-500'
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
              How to Book Your Session
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Quick and easy booking for your perfect massage experience in Chiang Mai
            </p>
          </div>
        </div>
      </section>

      {/* How to Booking */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 mb-16">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl gradient-text mb-4">How to Book</CardTitle>
                <p className="text-muted-foreground text-lg">
                  If you have interest in our ladies, booking in advance is recommended!
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Booking Methods */}
                  <div>
                    <h3 className="text-xl font-bold mb-6">We have several booking methods</h3>
                    <p className="text-muted-foreground mb-8">Please choose your favorite method from the following:</p>
                    
                    <div className="space-y-6 mb-8">
                      {bookingMethods.map((method, index) => {
                        const Icon = method.icon;
                        return (
                          <div key={index} className="space-y-3">
                            <div className="flex items-center gap-4 p-4 rounded-lg bg-white/50 dark:bg-muted/20">
                              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${method.primary ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                                <span className="font-bold text-sm">{index + 1}</span>
                              </div>
                              <div className="flex-1">
                                <div className="font-semibold text-base sm:text-lg">
                                  {method.method === 'Call us' ? (
                                    <>
                                      <a 
                                        href="tel:+66952386661" 
                                        className="text-primary hover:text-primary/80 transition-colors"
                                      >
                                        Call us (+66 95 238 6661)
                                      </a>
                                    </>
                                  ) : (
                                    <>
                                      {method.method} 
                                      {method.detail && ` (${method.detail})`}
                                    </>
                                  )}
                                </div>
                              </div>
                              <Icon className="h-5 w-5 text-primary" />
                            </div>
                            
                            {/* Social Media Contact Details */}
                            {method.contacts && (
                              <div className="ml-14 space-y-2">
                                {method.contacts.map((contact, contactIndex) => (
                                  <div key={contactIndex} className="flex items-center gap-3 text-sm text-muted-foreground">
                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                    <span className="font-medium">{contact.platform}:</span>
                                    {contact.link ? (
                                      <a 
                                        href={contact.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-primary hover:text-primary/80 transition-colors"
                                      >
                                        {contact.id}
                                      </a>
                                    ) : (
                                      <span>{contact.id}</span>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Social Media QR Codes */}
                  <div>
                    <h3 className="text-xl font-bold mb-6">Social Media Applications</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {socialContacts.map((contact, index) => (
                        <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                          <CardContent className="p-2">
                            <div className="aspect-square relative rounded-lg overflow-hidden mb-2 bg-gray-100 dark:bg-muted">
                              <Image
                                src={contact.qrPlaceholder}
                                alt={`${contact.name} QR Code`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 50vw, 200px"
                              />
                            </div>
                            <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium text-white ${contact.color}`}>
                              {contact.name}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Booking Tips */}
                <div className="mt-8 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6">
                  <h4 className="font-bold text-amber-700 dark:text-amber-300 mb-2">Booking Tips:</h4>
                  <p className="text-sm text-amber-600 dark:text-amber-400 mb-3">
                    <strong>Please inform us:</strong> 1) your name, 2) the name of your chosen lady, 3) service start time and booking period.
                  </p>
                  <p className="text-sm text-amber-600 dark:text-amber-400">
                    <strong>For specific girls:</strong> Book at least 30 minutes ahead to guarantee your preferred lady is available.
                  </p>
                  <p className="text-sm text-amber-600 dark:text-amber-400 mt-2">
                    <strong>Walk-ins welcome:</strong> You can also visit us directly, but if your chosen girl is busy, you'll need to select from our available ladies.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Outcall Service Areas */}
            <Card className="bg-gradient-to-br from-muted/20 to-background border-0 shadow-lg mb-16">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl gradient-text mb-4">Outcall Service Areas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
                      <Image
                        src="/images/outcall-for-service.jpg"
                        alt="Outcall Massage Service in Chiang Mai"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="order-1 lg:order-2">
                    <h3 className="text-2xl font-bold mb-6">Our ladies can visit your location!</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold mb-2">Free Service Zone</h4>
                          <p className="text-muted-foreground">
                            We can send our ladies to <strong>Chiang Mai Old City</strong> and surrounding areas within 30 minutes from our location.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <MapPin className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold mb-2">Extended Areas</h4>
                          <p className="text-muted-foreground">
                            For other areas in Chiang Mai, we might be able to provide services if you accept additional transportation costs.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="h-5 w-5 text-amber-600" />
                        <span className="font-semibold text-amber-700 dark:text-amber-300">Popular Hotels & Areas</span>
                      </div>
                      <p className="text-sm text-amber-600 dark:text-amber-400">
                        Most hotels in the Old City and central areas are covered in our free service zone.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cancellation Policy */}
            <Card className="bg-gradient-to-br from-muted/20 to-background border-0 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl gradient-text mb-4">Cancellation Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="order-1 lg:order-1">
                    <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
                      <Image
                        src="/images/cancel.jpg"
                        alt="Cancellation Policy - Aloha Massage"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="order-2 lg:order-2">
                    <h3 className="text-2xl font-bold mb-6">Please be sure to contact us!</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-3">
                        <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold mb-2">Changes & Cancellations</h4>
                          <p className="text-muted-foreground">
                            If you need to cancel your booking or change booking details, please inform us at your earliest convenience.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold mb-2">Late Cancellation</h4>
                          <p className="text-muted-foreground">
                            If you do not contact us in advance and the booking time exceeds 30 minutes, we treat it as a cancellation.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <ExternalLink className="h-6 w-6 text-rose-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold mb-2">Future Bookings</h4>
                          <p className="text-muted-foreground">
                            We may not accept booking requests in the future if cancellations occur frequently.
                          </p>
                        </div>
                      </div>
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
        title="Ready to Book Your Experience?"
        description="Choose your preferred contact method and reserve your session with our lovely ladies today"
        buttonText="Call Us Now"
        buttonHref="tel:+66952386661"
      />
    </div>
  );
} 