import { SectionHeader } from './SectionHeader';
import { REVIEWS } from '@/lib/constants';
import { Star, Quote } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section id="reviews" className="py-24 bg-[#46C5A7] text-white">
      <div className="container mx-auto px-6">
        <SectionHeader 
          subtitle="Testimonials"
          title="What Our Clients Say"
          description="Real experiences from residents and travelers in Bangkok."
          light={true}
        />

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white/10 backdrop-blur-sm p-8 rounded-sm border border-white/20 relative">
              <Quote className="absolute top-6 right-6 text-white/20 w-8 h-8" />
              <div className="flex gap-1 mb-4 text-white">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" stroke="none" />
                ))}
              </div>
              <p className="text-white/90 leading-relaxed italic mb-6">
                &ldquo;{review.text}&rdquo;
              </p>
              <div>
                <p className="font-serif font-medium text-lg">{review.clientName}</p>
                <p className="text-xs uppercase tracking-wider text-white/60">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
