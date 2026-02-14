'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const goddesses = [
  {
    id: 1,
    name: 'Sirin',
    tier: 'S-Class',
    tierLabel: 'Cover Goddess',
    image: '/images/therapist-2.png',
    description: 'Magazine cover-tier beauty with unparalleled emotional intelligence.',
  },
  {
    id: 2,
    name: 'Malee',
    tier: 'A-Class',
    tierLabel: 'Runway Elite',
    image: '/images/therapist-1.png',
    description: 'Supermodel proportions with masterful technique.',
  },
];

export function GoddessesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="goddesses" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-body">
            The Two Extremes of Beauty
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 section-title">
            Our <span className="text-gradient-gold">Goddesses</span>
          </h2>
        </motion.div>

        {/* Tier Labels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center gap-8 mb-16"
        >
          <div className="text-center">
            <span className="text-gradient-gold font-display text-2xl tracking-wider">
              S-CLASS
            </span>
            <p className="text-muted-foreground text-sm mt-1 font-body">Cover Goddess</p>
          </div>
          <div className="w-px h-12 bg-border" />
          <div className="text-center">
            <span className="text-twilight font-display text-2xl tracking-wider">
              A-CLASS
            </span>
            <p className="text-muted-foreground text-sm mt-1 font-body">Runway Elite</p>
          </div>
        </motion.div>

        {/* Goddesses Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {goddesses.map((goddess, index) => (
            <motion.div
              key={goddess.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
              className="group card-luxury rounded-lg overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden zoom-on-scroll">
                <Image
                  src={goddess.image}
                  alt={goddess.name}
                  fill
                  className="object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />

                {/* Tier Badge */}
                <div
                  className={`absolute top-4 right-4 px-3 py-1 rounded text-xs tracking-wider ${
                    goddess.tier === 'S-Class'
                      ? 'bg-gold/90 text-obsidian'
                      : 'bg-secondary text-foreground'
                  }`}
                >
                  {goddess.tier}
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-2xl text-foreground">
                    {goddess.name}
                  </h3>
                  <span className="text-gold text-sm font-body">{goddess.tierLabel}</span>
                </div>
                <p className="text-muted-foreground text-sm font-body">
                  {goddess.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/"
            className="btn-gold-outline px-8 py-4 text-sm rounded inline-block"
          >
            View Full Gallery
          </a>
        </motion.div>
      </div>
    </section>
  );
}

