import type { Metadata } from 'next';
import { PrivateHero } from '@/components/private-hero';
import { PhilosophySection } from '@/components/philosophy-section';
import { ServicesSection } from '@/components/services-section';
import { GoddessesSection } from '@/components/goddesses-section';
import { BlogSection } from '@/components/blog-section';
import { FAQSection } from '@/components/faq-section';
import { BookingSection } from '@/components/booking-section';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://privatemassagebangkok.com';

export const metadata: Metadata = {
  title: 'Private Massage Bangkok | Erotic & Sensual Massage Experience',
  description: 'Bangkok\'s premier private massage sanctuary. Experience intimate sensual massage with elite therapists in a luxurious dark ambient setting. By appointment only.',
  keywords: ['erotic massage bangkok', 'sensual massage bangkok', 'private massage bangkok', 'happy ending massage', 'b2b massage bangkok', 'nuru massage bangkok'],
  openGraph: {
    title: 'Private Massage Bangkok | Erotic & Sensual Massage Experience',
    description: 'Bangkok\'s premier private massage sanctuary. Experience intimate sensual massage with elite therapists in a luxurious dark ambient setting.',
    url: siteUrl,
    siteName: 'Private Massage Bangkok',
    images: [
      {
        url: `${siteUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Private Massage Bangkok - Erotic & Sensual Massage Experience',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Private Massage Bangkok | Erotic & Sensual Massage Experience',
    description: 'Bangkok\'s premier private massage sanctuary. Experience intimate sensual massage with elite therapists in a luxurious dark ambient setting.',
    images: [`${siteUrl}/images/og-image.jpg`],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-obsidian">
      <main>
        <PrivateHero />
        <PhilosophySection />
        <ServicesSection />
        <GoddessesSection />
        <BlogSection />
        <FAQSection />
        <BookingSection />
      </main>
    </div>
  );
} 
