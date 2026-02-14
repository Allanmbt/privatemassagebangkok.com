'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const services = [
  {
    id: 1,
    slug: 'sensual-yoga-massage',
    name: 'Sensual Yoga Massage',
    subtitle: 'The Classic Reimagined',
    duration: '70 mins',
    description:
      'A harmonious blend of stretching tension and gentle body contact. Release your deepest stress through the poetry of intertwined movement.',
    icon: '🧘',
  },
  {
    id: 2,
    slug: 'sensual-oil-massage',
    name: 'Sensual Oil Massage',
    subtitle: 'Signature Experience',
    duration: '70 mins',
    description:
      'Our exclusive aromatic oils combined with exquisite body-to-body techniques awaken every inch of dormant sensation.',
    icon: '💧',
    featured: true,
  },
  {
    id: 3,
    slug: 'roleplay-massage',
    name: 'The Roleplay Massage',
    subtitle: 'Forbidden Exploration',
    duration: '70 mins',
    description:
      'Complimentary themed attire included. Shed your corporate armor and embark on a journey across the boundaries of identity.',
    icon: '🎭',
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="massages" className="relative py-32 bg-obsidian-light">
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
            The Art of Sensation
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 section-title">
            Our <span className="text-gradient-gold">Massages</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className={`card-luxury rounded-lg p-8 relative overflow-hidden ${
                service.featured ? 'md:-translate-y-4' : ''
              }`}
            >
              {service.featured && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold" />
              )}

              <div className="text-4xl mb-6">{service.icon}</div>

              <div className="flex items-center gap-3 mb-4">
                <h3 className="font-display text-xl text-foreground">
                  {service.name}
                </h3>
                {service.featured && (
                  <span className="text-[10px] tracking-wider bg-gold/20 text-gold px-2 py-1 rounded uppercase">
                    Popular
                  </span>
                )}
              </div>

              <p className="text-gold text-sm tracking-wider mb-2 font-body">
                {service.subtitle}
              </p>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-body">
                {service.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-twilight text-sm font-body">
                  {service.duration}
                </span>
                <Link
                  href={`/massages/${service.slug}`}
                  className="text-gold text-sm tracking-wider hover:text-gold-light transition-colors font-body"
                >
                  Learn More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All / Pro Upgrade */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 flex flex-col items-center gap-8"
        >
          <Link
            href="/massages"
            className="btn-gold-outline px-8 py-4 text-sm rounded"
          >
            View All Services
          </Link>

          <div className="inline-block card-luxury rounded-lg px-8 py-6">
            <span className="text-gradient-gold font-display text-lg tracking-wider">
              PRO UPGRADE
            </span>
            <span className="text-muted-foreground mx-4">|</span>
            <span className="text-twilight font-body">
              +20 minutes of advanced intimate experience
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

