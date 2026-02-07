'use client';

import { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { FAQS } from '@/lib/constants';
import { Plus, Minus } from 'lucide-react';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-stone-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeader 
          subtitle="Support"
          title="Frequently Asked Questions"
          centered={false}
        />

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-sm border transition-all duration-300 ${openIndex === index ? 'border-[#46C5A7] shadow-sm' : 'border-stone-200'}`}
            >
              <button 
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => toggle(index)}
              >
                <span className={`font-medium text-lg font-serif ${openIndex === index ? 'text-[#46C5A7]' : 'text-stone-800'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="text-[#46C5A7] flex-shrink-0" />
                ) : (
                  <Plus className="text-stone-400 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-stone-500 leading-relaxed border-t border-transparent">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
