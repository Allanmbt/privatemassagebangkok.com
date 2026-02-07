'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Check, Clock, ShieldCheck, MapPin, Activity, Heart, Sparkles, Wind, ArrowLeft } from 'lucide-react';
import { Service } from '@/utils/getServices';
import { Button } from '@/components/Button';
import { Process } from '@/components/Process';
import { FAQ } from '@/components/FAQ';
import { TherapistsCarousel } from '@/components/TherapistsCarousel';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { useState } from 'react';

interface ServiceDetailClientProps {
  service: Service;
}

const getBenefitIcon = (index: number) => {
  const icons = [Activity, Wind, Sparkles, Heart];
  const Icon = icons[index % icons.length];
  return <Icon className="w-6 h-6" />;
};

export function ServiceDetailClient({ service }: ServiceDetailClientProps) {
  const [mdxSource, setMdxSource] = useState<any>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Serialize MDX content
    serialize(service.content).then(setMdxSource);
  }, [service.content]);

  // Parse benefits from content
  const benefits = [
    { title: "Deep Relaxation", description: "Release tension and stress from your body and mind" },
    { title: "Improved Circulation", description: "Enhanced blood flow throughout your entire body" },
    { title: "Pain Relief", description: "Alleviate chronic pain and muscle soreness" },
    { title: "Better Sleep", description: "Promote restful sleep and overall well-being" }
  ];

  // Parse price list from frontmatter - show as ranges
  const priceList = service.frontmatter.duration.split('/').map((dur) => {
    const duration = dur.trim();
    // Generate price ranges based on duration
    let priceRange = '';
    if (duration.includes('60')) {
      priceRange = '฿900 - ฿1,200';
    } else if (duration.includes('90')) {
      priceRange = '฿1,300 - ฿1,800';
    } else if (duration.includes('120')) {
      priceRange = '฿1,700 - ฿2,400';
    } else if (duration.includes('45')) {
      priceRange = '฿700 - ฿1,000';
    } else {
      priceRange = '฿900 - ฿1,500';
    }
    return {
      duration,
      priceRange
    };
  });

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero Header */}
      <section className="relative h-[60vh] min-h-[500px] flex items-end">
        <div className="absolute inset-0 z-0">
          <Image 
            src={service.frontmatter.image} 
            alt={service.frontmatter.title} 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 pb-16">
          <div className="flex items-center gap-4 mb-6">
            <Link 
              href="/services" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Services</span>
            </Link>
            <span className="bg-white/10 backdrop-blur-md text-white px-3 py-1 rounded-sm text-sm font-mono border border-white/20">
              {service.frontmatter.code}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-4">{service.frontmatter.title}</h1>
          <p className="text-stone-300 text-xl font-light">{service.frontmatter.description}</p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-16">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Description with enhanced typography */}
            <div>
              <h2 className="text-3xl font-serif text-stone-800 mb-6">About the Treatment</h2>
              <div className="prose prose-stone prose-lg max-w-none">
                {mdxSource && <MDXRemote {...mdxSource} />}
              </div>
            </div>

            {/* Benefits Grid */}
            <div>
              <h3 className="text-2xl font-serif text-[#46C5A7] mb-8 text-center">Benefits of {service.frontmatter.title}</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-white to-stone-50 p-6 rounded-2xl border border-stone-200 shadow-sm flex flex-col items-center text-center hover:shadow-lg hover:border-[#46C5A7]/30 transition-all">
                    <div className="w-14 h-14 rounded-2xl bg-[#46C5A7]/10 flex items-center justify-center text-[#46C5A7] mb-4">
                      {getBenefitIcon(idx)}
                    </div>
                    <h4 className="font-serif font-bold text-lg mb-2 text-stone-800">{benefit.title}</h4>
                    <p className="text-sm text-stone-600 leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Terms */}
            <div className="bg-gradient-to-br from-stone-50 to-stone-100 p-8 rounded-2xl border border-stone-200">
              <h3 className="text-xl font-serif text-stone-800 mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#46C5A7] rounded-full"></span>
                Service Terms
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <MapPin className="text-[#46C5A7] flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-stone-700 leading-relaxed">Services are provided as Outcall Massage (therapists travel to your location).</span>
                </li>
                <li className="flex gap-3">
                  <ShieldCheck className="text-[#46C5A7] flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-stone-700 leading-relaxed">Please prepare a clean, private, and suitable space for the session.</span>
                </li>
                <li className="flex gap-3">
                  <Clock className="text-[#46C5A7] flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-stone-700 leading-relaxed">Advance booking of at least 2 hours is recommended.</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-stone-300">
                <h4 className="font-semibold text-stone-800 mb-2">Service Area</h4>
                <p className="text-stone-600 text-sm leading-relaxed">Bangkok and surrounding areas. Free travel within central Bangkok.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white p-8 rounded-2xl shadow-xl shadow-stone-200/50 border border-stone-200">
              <div className="text-center mb-8 pb-6 border-b border-stone-100">
                <p className="text-stone-500 uppercase tracking-widest text-xs font-semibold mb-3">Pricing</p>
                <p className="text-sm text-stone-600 mb-2">Prices vary by therapist</p>
                <p className="text-xs text-stone-500 italic">Each therapist sets their own rates</p>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="text-sm font-semibold text-stone-700 mb-3">Typical Price Ranges:</h4>
                {priceList.map((p, i) => (
                  <div key={i} className="flex justify-between items-center py-3 px-4 bg-stone-50 rounded-xl border border-stone-100">
                    <span className="text-stone-700 font-medium">{p.duration}</span>
                    <span className="font-serif text-base text-[#46C5A7] font-semibold">{p.priceRange}</span>
                  </div>
                ))}
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
                <p className="text-xs text-amber-800 leading-relaxed">
                  <strong>Platform Feature:</strong> Each therapist can set their own pricing and available durations. Browse therapists to see exact rates.
                </p>
              </div>

              <Button variant="primary" className="w-full mb-4" asChild>
                <a href="https://cbody.vip/" target="_blank" rel="noopener noreferrer">
                  Browse Therapists & Book
                </a>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <a href="tel:+66834826667">
                  Call for Inquiry
                </a>
              </Button>
              
              <p className="text-xs text-stone-400 text-center mt-6 leading-relaxed">
                *Final price depends on selected therapist. Travel fees may apply for remote locations.
              </p>
            </div>
          </div>

        </div>
      </div>
      
      <TherapistsCarousel />
      <Process />
      <FAQ />
    </div>
  );
}
