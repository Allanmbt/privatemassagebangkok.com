'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const philosophyPoints = [
  {
    title: 'Privacy',
    description:
      'Appointment-only with unmanned management. Your absolute discretion is our sacred promise.',
  },
  {
    title: 'Elite Esthetics',
    description:
      'Visual perfection as the gateway to sensory bliss. Only goddess-tier beauty graces our sanctuary.',
  },
  {
    title: 'Emotional Connection',
    description:
      'Beyond mere service—an intimate companion experience. Delicate, patient, never perfunctory.',
  },
];

export function PhilosophySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-32 overflow-hidden lanna-pattern">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Empty space for Tesla-style minimalism */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 border border-border rounded-full flex items-center justify-center">
                <div className="w-48 h-48 border border-border rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 border border-border rounded-full flex items-center justify-center">
                    <span className="text-gradient-gold font-display text-5xl">私</span>
                  </div>
                </div>
              </div>
              {/* Gold glow effect */}
              <div className="absolute inset-0 blur-3xl bg-gold/10 rounded-full" />
            </div>
          </motion.div>

          {/* Right - Philosophy content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-body">
              Our Philosophy
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 mb-8">
              Abandon the Gimmicks,{' '}
              <span className="text-gradient-gold">Return to Essence</span>
            </h2>

            <p className="text-twilight text-lg leading-relaxed mb-12 font-body">
              In an era of commoditized massage experiences, we chose to return
              to the essence of human connection. Inspired by Tesla&apos;s minimalism,
              we&apos;ve created a sanctuary of understated luxury—where every detail
              whispers rather than shouts.
            </p>

            <div className="space-y-8">
              {philosophyPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded border border-border flex items-center justify-center">
                    <span className="text-gradient-gold font-display text-xl">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-foreground mb-2">
                      {point.title}
                    </h3>
                    <p className="text-muted-foreground font-body leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

