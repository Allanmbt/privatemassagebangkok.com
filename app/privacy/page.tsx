import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Shield, Eye, Database, Lock, Mail, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Aloha Massage Chiang Mai',
  description: 'Privacy policy for Aloha Massage Chiang Mai. Learn how we collect, use, and protect your personal information and data.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  const privacySections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: [
        "Contact information (name, phone number, email address) for booking purposes",
        "Health-related information necessary for providing safe massage therapy",
        "Payment information when processing transactions",
        "Communication preferences and booking history for improved service"
      ]
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        "To schedule and confirm your massage appointments",
        "To provide personalized and safe massage therapy services", 
        "To communicate important updates about your bookings",
        "To improve our services and customer experience"
      ]
    },
    {
      icon: Shield,
      title: "Data Protection",
      content: [
        "We implement industry-standard security measures to protect your data",
        "Personal information is stored securely and accessed only by authorized staff",
        "We never sell, rent, or share your personal information with third parties",
        "All electronic communications are encrypted to ensure privacy"
      ]
    },
    {
      icon: Lock,
      title: "Your Privacy Rights",
      content: [
        "You have the right to access your personal information we hold",
        "You can request corrections to any inaccurate personal data", 
        "You may request deletion of your personal information at any time",
        "You can opt-out of promotional communications while maintaining service access"
      ]
    }
  ];

  const detailedPolicies = [
    {
      title: "Data Collection Practices",
      content: "We collect personal information only when voluntarily provided by clients during the booking process or service consultation. This includes basic contact details required for appointment scheduling and health information necessary to ensure safe and appropriate massage therapy. We do not use tracking cookies or collect browsing data on our website beyond basic analytics for service improvement."
    },
    {
      title: "Information Sharing & Disclosure", 
      content: "Aloha Massage Chiang Mai does not sell, rent, lease, or otherwise disclose personal information to third parties except as required by law or to protect our legitimate business interests. Health information shared during consultations remains strictly confidential between client and therapist. We may share basic contact information with trusted service providers only when necessary for business operations."
    },
    {
      title: "Data Retention Policy",
      content: "We retain client information only for as long as necessary to provide services and comply with legal obligations. Booking history is maintained for up to 2 years for service improvement and client preference tracking. Health-related information is retained securely according to healthcare privacy standards. Clients may request data deletion at any time, subject to legal retention requirements."
    },
    {
      title: "International Data Transfers", 
      content: "As a Thailand-based business, your personal information is primarily stored and processed within Thailand. Any international data transfers are conducted with appropriate safeguards and in compliance with applicable data protection laws. We ensure that any international service providers maintain equivalent privacy protection standards."
    },
    {
      title: "Children's Privacy",
      content: "Our services are exclusively for adults 18 years and older. We do not knowingly collect personal information from minors. If we become aware that we have inadvertently collected information from someone under 18, we will promptly delete such information from our records."
    },
    {
      title: "Website & Digital Privacy",
      content: "Our website uses minimal tracking for essential functionality and service improvement. We do not use advertising cookies or share browsing data with advertising networks. Any forms submitted through our website are transmitted securely and stored according to our data protection standards. Third-party integrations (such as booking systems) are carefully vetted for privacy compliance."
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
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Your privacy is important to us. Learn how we protect your personal information.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-center">Our Commitment to Your Privacy</h2>
                <p className="text-muted-foreground leading-relaxed text-center">
                  At Aloha Massage Chiang Mai, we are committed to protecting your privacy and maintaining the confidentiality 
                  of your personal information. This privacy policy explains how we collect, use, and safeguard your data when 
                  you use our massage therapy services.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Key Privacy Points */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {privacySections.map((section, index) => {
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

          {/* Detailed Policies */}
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
              Detailed Privacy Policies
            </h2>
            
            {detailedPolicies.map((policy, index) => (
              <Card 
                key={index}
                className="border-0 shadow-lg bg-white/80 backdrop-blur-sm"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-primary">
                    {policy.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {policy.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Cookie Policy */}
          <div className="max-w-4xl mx-auto mt-16">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-primary text-center">
                  Cookie Policy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong>Essential Cookies:</strong> We use essential cookies necessary for website functionality, 
                  such as maintaining your session and security preferences.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong>Analytics:</strong> We may use basic analytics to understand how visitors interact with 
                  our website to improve user experience. This data is anonymized and aggregated.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong>No Tracking:</strong> We do not use advertising cookies, social media pixels, or other 
                  tracking technologies that follow you across websites.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="max-w-3xl mx-auto mt-16">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Privacy Questions or Concerns?</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  If you have any questions about this privacy policy or how we handle your personal information, 
                  please contact our privacy team. We're committed to addressing your concerns promptly.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-white/50">
                    <Mail className="h-5 w-5 text-primary" />
                    <div className="text-left">
                      <p className="text-sm font-medium">Email Us</p>
                      <p className="text-xs text-muted-foreground">alohamassage666@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-white/50">
                    <Phone className="h-5 w-5 text-primary" />
                    <div className="text-left">
                      <p className="text-sm font-medium">Call Us</p>
                      <p className="text-xs text-muted-foreground">+66 95 238 6661</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="button-hover" asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-primary/30" asChild>
                    <Link href="/terms">View Terms of Service</Link>
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