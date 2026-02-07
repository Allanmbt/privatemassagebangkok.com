import { ReactNode } from "react";
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/sonner';
import { PrivateNavigation } from '@/components/private-navigation';
import { PrivateFooter } from '@/components/private-footer';
import { ScrollToTop } from '@/components/ui/scroll-to-top';
import { generateBusinessSchema } from '@/utils/schema';
import type { Metadata } from 'next';
import { Playfair_Display, Cormorant_Garamond } from 'next/font/google';
import '@/app/globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://privatemassagebangkok.com'

export const metadata: Metadata = {
  title: {
    default: 'Private Massage Bangkok | Erotic & Sensual Massage Experience',
    template: '%s | Private Massage Bangkok'
  },
  description: 'Bangkok\'s premier private massage sanctuary. Experience intimate sensual massage with elite therapists in a luxurious dark ambient setting. By appointment only.',
  keywords: ['erotic massage bangkok', 'sensual massage bangkok', 'private massage bangkok', 'happy ending massage', 'b2b massage bangkok', 'nuru massage bangkok'],
  authors: [{ name: 'Private Massage Bangkok' }],
  creator: 'Private Massage Bangkok',
  publisher: 'Private Massage Bangkok',
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
        alt: 'Private Massage Bangkok - Sensual & Erotic Massage',
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

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  const businessSchema = generateBusinessSchema();

  return (
    <html lang="en" suppressHydrationWarning className={`${playfair.variable} ${cormorant.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="geo.region" content="TH-10" />
        <meta name="geo.placename" content="Bangkok" />
        <meta name="geo.position" content="13.7563;100.5018" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessSchema),
          }}
        />
      </head>
      <body className="min-h-screen bg-obsidian font-body antialiased selection:bg-gold selection:text-obsidian" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <div className="relative flex min-h-screen flex-col">
            <PrivateNavigation />
            <main className="flex-1">
              {children}
            </main>
            <PrivateFooter />
          </div>
          <ScrollToTop />
          <Toaster 
            position="top-center"
            toastOptions={{
              className: "glass-effect border-primary/20",
              duration: 3000,
            }}
          />
        </ThemeProvider>

        {/* Intersection Observer for scroll animations */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                function initScrollAnimations() {
                  // Remove existing observer if any
                  if (window.alohaObserver) {
                    window.alohaObserver.disconnect();
                  }

                  const observerOptions = {
                    threshold: 0.1,
                    rootMargin: '0px 0px -50px 0px'
                  };

                  window.alohaObserver = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                      if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                      }
                    });
                  }, observerOptions);

                  // Observe all elements with fade-in classes
                  const fadeElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .fade-in');
                  fadeElements.forEach((el) => {
                    // Reset animation state
                    el.classList.remove('animate-in');
                    window.alohaObserver.observe(el);
                  });
                }

                // Initialize on load
                document.addEventListener('DOMContentLoaded', initScrollAnimations);
                
                // Re-initialize on navigation (for SPA routing)
                const originalPushState = history.pushState;
                const originalReplaceState = history.replaceState;
                
                history.pushState = function() {
                  originalPushState.apply(history, arguments);
                  setTimeout(initScrollAnimations, 100);
                };
                
                history.replaceState = function() {
                  originalReplaceState.apply(history, arguments);
                  setTimeout(initScrollAnimations, 100);
                };
                
                window.addEventListener('popstate', () => {
                  setTimeout(initScrollAnimations, 100);
                });

                // Also listen for Next.js router events if available
                if (window.next && window.next.router) {
                  window.next.router.events.on('routeChangeComplete', initScrollAnimations);
                }
              }
            `,
          }}
        />
      </body>
    </html>
  );
} 