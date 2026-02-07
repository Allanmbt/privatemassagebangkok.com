'use client';

import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, ArrowRight, Star } from 'lucide-react';

interface Testimonial {
  name: string;
  rating: number;
  text: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const scrollLeft = () => {
    const container = document.getElementById('testimonials-container');
    if (container) {
      container.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById('testimonials-container');
    if (container) {
      container.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const scrollToPage = (page: number) => {
    const container = document.getElementById('testimonials-container');
    if (container) {
      container.scrollTo({ left: page * 1200, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative max-w-full mx-auto mb-16">
      {/* Desktop Navigation Arrows */}
      <button 
        className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center bg-white/90 backdrop-blur-sm border border-primary/20 rounded-full shadow-lg hover:bg-primary hover:text-white transition-all duration-300 group dark:bg-card dark:border-primary/30"
        onClick={scrollLeft}
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      
      <button 
        className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center bg-white/90 backdrop-blur-sm border border-primary/20 rounded-full shadow-lg hover:bg-primary hover:text-white transition-all duration-300 group dark:bg-card dark:border-primary/30"
        onClick={scrollRight}
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div 
        id="testimonials-container"
        className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-4 lg:px-16 snap-x snap-mandatory lg:overflow-x-hidden"
      >
        {testimonials.map((testimonial, index) => (
          <Card 
            key={index} 
            className="flex-shrink-0 w-80 lg:w-96 border-0 shadow-lg bg-white/80 backdrop-blur-sm card-hover fade-in-up snap-center dark:bg-card"
            style={{animationDelay: `${index * 0.1}s`}}
          >
            <CardContent className="p-6 lg:p-8">
              {/* Stars */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 lg:h-5 lg:w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-muted-foreground leading-relaxed mb-6 italic text-sm lg:text-base">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="border-t pt-4">
                <p className="font-semibold text-base lg:text-lg">— {testimonial.name}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Mobile Scroll Hint */}
      <div className="flex justify-center mt-6 lg:hidden">
        <div className="flex items-center text-xs text-muted-foreground gap-2">
          <ArrowRight className="h-3 w-3" />
          <span>Swipe to see more reviews</span>
        </div>
      </div>

      {/* Desktop Dots Indicator */}
      <div className="hidden lg:flex justify-center mt-8 gap-3">
        {[0, 1].map((dot) => (
          <button
            key={dot}
            className="w-3 h-3 rounded-full bg-muted-foreground/30 hover:bg-primary transition-all duration-300 hover:scale-125"
            onClick={() => scrollToPage(dot)}
          />
        ))}
      </div>
      
      {/* Desktop Navigation Hint */}
      <div className="hidden lg:flex justify-center mt-4">
        <div className="flex items-center text-xs text-muted-foreground gap-2">
          <ChevronLeft className="h-3 w-3" />
          <span>Use arrows or dots to see more reviews</span>
          <ChevronRight className="h-3 w-3" />
        </div>
      </div>
    </div>
  );
} 