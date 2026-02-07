'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    id: 'faq-1',
    question: 'What makes Private Massage Bangkok different?',
    answer: 'We curate only the top 1% of therapists in Bangkok—women who possess both exceptional beauty and masterful technique. Our S-Class and A-Class system ensures you receive an experience that transcends ordinary massage, combining emotional connection with physical artistry.',
  },
  {
    id: 'faq-2',
    question: 'How do I book an appointment?',
    answer: 'Contact us via WhatsApp or Telegram for discrete, personalized booking. Our concierge team is available 24/7 to match you with your perfect goddess and arrange your session at our private venue.',
  },
  {
    id: 'faq-3',
    question: 'What is the difference between S-Class and A-Class?',
    answer: 'S-Class (Cover Goddess) represents magazine cover-tier beauty with unparalleled emotional intelligence—the absolute pinnacle. A-Class (Runway Elite) features supermodel proportions with masterful technique. Both tiers deliver extraordinary experiences.',
  },
  {
    id: 'faq-4',
    question: 'Is my privacy protected?',
    answer: 'Absolutely. Privacy is our cornerstone. Our venue features private entrances, soundproofed rooms, and a strict no-photography policy. All communications are encrypted, and we never retain client data.',
  },
  {
    id: 'faq-5',
    question: 'What should I expect during my first visit?',
    answer: 'Upon arrival, you\'ll be greeted in our elegant reception area. After a brief consultation to understand your preferences, you\'ll be escorted to your private suite. Your chosen goddess will guide you through a transformative 70-minute journey.',
  },
  {
    id: 'faq-6',
    question: 'Do you offer outcall services?',
    answer: 'We specialize in incall experiences at our meticulously designed venue, ensuring the perfect ambiance. For select clientele, premium outcall services may be arranged—please inquire directly.',
  },
];

export function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="faq" className="relative py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-body">
            Common Questions
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 section-title">
            Frequently <span className="text-gradient-gold">Asked</span>
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                <AccordionItem
                  value={faq.id}
                  className="card-luxury rounded-lg px-6 border-none"
                >
                  <AccordionTrigger className="font-display text-lg text-foreground hover:text-gold hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-body text-base leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground font-body mb-6">
            Have more questions? We&apos;re here to help.
          </p>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-8 py-4 text-sm rounded inline-block"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}

