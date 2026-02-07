import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Shield, Users, Clock, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | Aloha Massage Chiang Mai',
  description: 'Terms and conditions for Aloha Massage Chiang Mai services. Read our policies regarding bookings, cancellations, and service guidelines.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  const sections = [
    {
      icon: Users,
      title: "Service Agreement",
      content: [
        "By booking a massage service with Aloha Massage Chiang Mai, you agree to these terms and conditions.",
        "Our services are exclusively for relaxation and therapeutic purposes, provided by licensed massage therapists.",
        "All clients must be 18 years of age or older to book our services.",
        "We reserve the right to refuse service to anyone who violates our policies or behaves inappropriately."
      ]
    },
    {
      icon: Clock,
      title: "Booking & Payment",
      content: [
        "Advance booking is recommended to ensure availability, especially during peak seasons.",
        "Payment can be made in cash (Thai Baht) or via agreed digital payment methods.",
        "Full payment is required before or immediately after the service is completed.",
        "Prices are subject to change without prior notice, but confirmed bookings honor the quoted rate."
      ]
    },
    {
      icon: AlertTriangle,
      title: "Cancellation Policy",
      content: [
        "Cancellations must be made at least 2 hours before the scheduled appointment time.",
        "Late cancellations (less than 2 hours notice) may incur a 50% cancellation fee.",
        "No-shows will be charged the full service amount.",
        "Emergency cancellations due to unforeseen circumstances will be evaluated case-by-case."
      ]
    },
    {
      icon: Shield,
      title: "Health & Safety",
      content: [
        "Clients must disclose any health conditions, injuries, or allergies before the session begins.",
        "Our therapists reserve the right to modify or discontinue treatment if health concerns arise.",
        "We maintain strict hygiene protocols and use only clean, sanitized equipment and linens.",
        "Clients experiencing illness symptoms should reschedule their appointment."
      ]
    }
  ];

  const additionalTerms = [
    {
      title: "Professional Conduct",
      points: [
        "All services are strictly professional and therapeutic in nature",
        "Inappropriate behavior or requests will result in immediate termination of service",
        "Clients are expected to maintain respectful conduct towards all staff",
        "Photography or recording during sessions is strictly prohibited"
      ]
    },
    {
      title: "Privacy & Confidentiality", 
      points: [
        "Client privacy is of utmost importance to us",
        "Personal information is kept confidential and secure",
        "Session details and client information are not shared with third parties",
        "We comply with applicable privacy laws and regulations"
      ]
    },
    {
      title: "Liability & Insurance",
      points: [
        "Clients participate in massage therapy at their own risk",
        "Aloha Massage Chiang Mai is not liable for injuries resulting from undisclosed health conditions",
        "We maintain appropriate insurance coverage for our business operations",
        "Clients are responsible for any damages to property during outcall services"
      ]
    },
    {
      title: "Dispute Resolution",
      points: [
        "Any disputes will be resolved through direct communication first",
        "Complaints should be reported within 24 hours of service completion",
        "We are committed to fair resolution of any service-related issues",
        "Applicable Thai law governs these terms and any resulting disputes"
      ]
    }
  ];

  return (
    <div className="flex flex-col w-full max-w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Button
              variant="outline"
              size="sm"
              className="mb-8 border-primary/30 hover:border-primary/50"
              asChild
            >
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Terms of Service
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Please read these terms carefully before using our massage services
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto px-4">
          {/* Key Terms Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <Card 
                  key={index}
                  className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{section.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.content.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground leading-relaxed flex items-start">
                          <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Terms */}
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
              Additional Terms & Conditions
            </h2>
            
            {additionalTerms.map((term, index) => (
              <Card 
                key={index}
                className="border-0 shadow-lg bg-white/80 backdrop-blur-sm"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-primary">
                    {term.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {term.points.map((point, i) => (
                      <li key={i} className="text-sm text-muted-foreground leading-relaxed flex items-start">
                        <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Section */}
          <div className="max-w-3xl mx-auto mt-16 text-center">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Questions About Our Terms?</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  If you have any questions about these terms of service, please don't hesitate to contact us. 
                  We're here to help clarify any concerns you may have.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="button-hover" asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-primary/30" asChild>
                    <Link href="/booking">Book a Session</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
} 