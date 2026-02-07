import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Phone, MapPin, Clock, MessageSquare, Navigation, Car, Smartphone, AlertTriangle, ExternalLink, Copy } from 'lucide-react';
import Image from 'next/image';
import { CTASection } from '@/components/cta-section';

export const metadata: Metadata = {
  title: 'Contact Us - Aloha Massage Chiang Mai',
  description: 'Find Aloha Massage near Chiang Mai Gate. Get clear directions, contact details, and simple booking options. Located at 49/8 Suriyawong Road.',
  openGraph: {
    title: 'Contact Us - Aloha Massage Chiang Mai',
    description: 'Find Aloha Massage near Chiang Mai Gate. Get clear directions, contact details, and simple booking options. Located at 49/8 Suriyawong Road.',
    url: 'https://alohamassagechiangmai.com/contact',
    siteName: 'Aloha Massage Chiang Mai',
    images: [
      {
        url: '/images/store-outside.jpg',
        width: 1200,
        height: 630,
        alt: 'Aloha Massage Chiang Mai Location',
      },
    ],
    locale: 'en',
    type: 'website',
  },
  alternates: {
    canonical: 'https://alohamassagechiangmai.com/contact',
  },
};

export default function ContactPage() {
  const contactMethods = [
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
      qrPlaceholder: '/images/qr-line.jpg',
      color: 'bg-green-500'
    },
    {
      name: 'WhatsApp',
      qrPlaceholder: '/images/qr-whatsapp.jpg',
      color: 'bg-green-600'
    },
    {
      name: 'WeChat',
      qrPlaceholder: '/images/qr-wechat.jpg',
      color: 'bg-green-700'
    },
    {
      name: 'KakaoTalk',
      qrPlaceholder: '/images/qr-kakao.jpg',
      color: 'bg-yellow-500'
    },
    {
      name: 'Telegram',
      qrPlaceholder: '/images/qr-telegram.jpg',
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
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Easy to find in Chiang Mai - multiple ways to contact us
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Location & Map */}
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 mb-16">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl gradient-text mb-4">Find Our Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1">
                    {/* Google Maps Embed */}
                    <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.5256693283604!2d98.98709707465812!3d18.774712661362926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da31ffb3059139%3A0x11232e0ac94e7278!2sAloha%20Massage%20Chiang%20Mai!5e0!3m2!1sen!2shk!4v1754756477217!5m2!1sen!2shk"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-2xl"
                      ></iframe>
                    </div>
                  </div>
                  
                  <div className="order-1 lg:order-2">
                    <h3 className="text-2xl font-bold mb-6">Aloha Massage Chiang Mai</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold mb-2">Full Address</h4>
                          <p className="text-muted-foreground leading-relaxed">
                            49/8 Road. Suriyawong Sup-district<br/>
                            Hayya District, Mueang Chiang Mai District<br/>
                            Chiang Mai 50100, Thailand
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold mb-2">Operating Hours</h4>
                          <p className="text-muted-foreground">
                            <strong>Every Day:</strong> 11:00 AM - 12:00 AM (Midnight)<br/>
                            <span className="text-sm">Last booking at 11:00 PM</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <Button className="flex-1" asChild>
                        <a 
                          href="https://maps.google.com/?q=Aloha+Massage+Chiang+Mai"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Open in Maps
                        </a>
                      </Button>
                      <Button variant="outline" className="flex-1" asChild>
                        <a href="tel:+66952386661">
                          <Phone className="h-4 w-4 mr-2" />
                          Call Us
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Transportation Guide */}
            <Card className="bg-gradient-to-br from-muted/20 to-background border-0 shadow-lg mb-16">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl gradient-text mb-4">How to Get Here</CardTitle>
                <p className="text-muted-foreground text-lg">
                  Multiple easy ways to reach us safely
                </p>
              </CardHeader>
              <CardContent>
                 <div className="space-y-8">
                   {/* 门店环境图：居中显示（桌面限制宽度），移动端完整高度 */}
                   <div className="max-w-4xl mx-auto">
                     <Image
                       src="/images/aloha-massage-chiangmai-facilities.jpg"
                       alt="Aloha massage chiang mai facilities"
                       width={1200}
                       height={1200}
                       className="w-full h-auto rounded-2xl shadow-lg"
                       priority
                     />
                   </div>

                   {/* 文字指引与地图：分步 + 一排大图 */}
                   <div>
                     <h3 className="text-2xl font-bold mb-4">Step-by-step directions</h3>
                     <p className="text-muted-foreground mb-4">Our entrance has a bright lightbox logo that is easy to notice. Follow these simple steps and you will arrive without stress.</p>
                     <ol className="list-decimal ml-5 space-y-2 text-muted-foreground">
                       <li>From Chiang Mai Gate, follow the street in the first map and go toward our lane.</li>
                       <li>From the 7‑Eleven landmark, walk straight about 100 meters.</li>
                       <li>Look for the green awning and the Aloha lightbox sign at the entrance.</li>
                     </ol>

                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                       <div>
                         <div className="aspect-[16/10] relative rounded-lg overflow-hidden">
                           <Image src="/images/map1.jpg" alt="View from Chiang Mai Gate showing the street leading to Aloha Massage — follow the arrow to reach our sensual massage shop." fill className="object-cover" />
                         </div>
                         <p className="text-xs text-muted-foreground mt-2">View from Chiang Mai Gate</p>
                       </div>
                       <div>
                         <div className="aspect-[16/10] relative rounded-lg overflow-hidden">
                           <Image src="/images/map2.jpg" alt="From 7-Eleven, walk straight 100 meters to Aloha Massage Chiang Mai for relaxing and massage services." fill className="object-cover" />
                         </div>
                         <p className="text-xs text-muted-foreground mt-2">From 7‑Eleven, go straight 100m</p>
                       </div>
                       <div>
                         <div className="aspect-[16/10] relative rounded-lg overflow-hidden">
                           <Image src="/images/map3.jpg" alt="Front view of Aloha Massage Chiang Mai — located near Chiang Mai Gate, easy to find with green awning entrance." fill className="object-cover" />
                         </div>
                         <p className="text-xs text-muted-foreground mt-2">Entrance with green awning</p>
                       </div>
                     </div>
                   </div>
                 </div>
                </CardContent>
              </Card>

              {/* Tips - Ride-hailing recommendation */}
              <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 mb-6">
                <CardHeader>
                  <CardTitle className="text-2xl text-amber-700 dark:text-amber-300 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Tips
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm md:text-base text-amber-700 dark:text-amber-300">
                    For the easiest trip, use Grab or Bolt and search for <strong>Aloha Massage</strong>. Just follow the navigation — you will arrive directly at our entrance.
                  </p>
                </CardContent>
              </Card>

              {/* Parking - 独立区域 */}
              <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 mb-16">
                <CardHeader>
                  <CardTitle className="text-2xl text-emerald-800 dark:text-emerald-300">Parking</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc ml-5 space-y-2 text-emerald-700 dark:text-emerald-300 text-sm">
                    <li>If there is space in front of our shop, you can park there.</li>
                    <li>You can also park at the <strong>Kad Kom Market</strong> parking area behind our shop.</li>
                    <li>Nearby 7‑Eleven usually has places to stop briefly.</li>
                  </ul>
                </CardContent>
              </Card>

            {/* Contact Methods */}
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 mb-16">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl gradient-text mb-4">Contact Us</CardTitle>
                <p className="text-muted-foreground text-lg">
                  Choose your preferred way to get in touch
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Contact Methods */}
                  <div>
                    <h3 className="text-xl font-bold mb-6">Multiple Ways to Reach Us</h3>
                    
                    <div className="space-y-6 mb-8">
                      {contactMethods.map((method, index) => {
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
                                        Call us (+66-952386661)
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
                    <h3 className="text-xl font-bold mb-6">Scan to Connect</h3>
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
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Visit Us?"
        description="Now you know exactly how to find us - come experience the best massage in Chiang Mai"
        buttonText="Book Your Session"
        buttonHref="/booking"
      />
    </div>
  );
} 