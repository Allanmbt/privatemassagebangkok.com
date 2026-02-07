import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Clock } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  variant?: 'primary' | 'secondary';
  showHours?: boolean;
}

export function CTASection({
  title = "Ready to Experience Aloha?",
  description = "Book your premium massage experience today and discover the ultimate relaxation in Chiang Mai's most trusted massage spa",
  buttonText = "Book Your Session Now",
  buttonHref = "/booking",
  variant = "primary",
  showHours = true
}: CTASectionProps) {
  return (
    <section className="section-padding bg-gradient-to-br from-primary via-primary/90 to-accent text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            {title}
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed">
            {description}
          </p>
          
          <div className="flex justify-center mb-12">
            <Button 
              size="lg" 
              variant={variant === 'primary' ? 'secondary' : 'default'}
              className="bg-white text-primary hover:bg-white/90 px-10 py-5 text-lg font-bold rounded-lg button-hover shadow-xl"
              asChild
            >
              <Link href={buttonHref}>{buttonText}</Link>
            </Button>
          </div>
          
          {showHours && (
            <div className="flex items-center justify-center text-lg opacity-90">
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-base sm:text-lg">Open Daily: 11:00 AM - 12:00 AM</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 