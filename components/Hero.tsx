import { HeroButtons } from './HeroButtons';
import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/banner.webp" 
          alt="CBODY Bangkok - Premium Outcall Massage" 
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/60 to-stone-800/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-20">
        <span className="inline-block text-[#46C5A7] tracking-[0.3em] uppercase text-sm font-semibold mb-6 animate-fade-in-up">
          Bangkok Premium Outcall Service
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-[1.1] animate-fade-in-up delay-100">
          Sanctuary, <br />
          <span className="italic font-light opacity-90">Delivered.</span>
        </h1>
        <p className="max-w-xl mx-auto text-stone-200 text-lg md:text-xl leading-relaxed mb-10 font-light animate-fade-in-up delay-200">
        Restore balance to your body and mind with outcall massage in Bangkok, delivered discreetly to your hotel or residence.
        </p>
        
        <HeroButtons />
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block text-white/50">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </div>
    </section>
  );
};
