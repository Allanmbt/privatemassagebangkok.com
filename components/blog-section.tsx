'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    slug: 'art-of-sensual-massage',
    title: 'The Art of Sensual Massage: A Journey Beyond Touch',
    excerpt: 'Discover how ancient Thai techniques merge with modern sensuality to create an unforgettable experience.',
    date: 'January 15, 2024',
    category: 'Wellness',
    readTime: '5 min read',
  },
  {
    id: 2,
    slug: 'choosing-your-goddess',
    title: 'How to Choose Your Perfect Goddess',
    excerpt: 'Understanding the S-Class and A-Class distinction to find your ideal match.',
    date: 'January 10, 2024',
    category: 'Guide',
    readTime: '4 min read',
  },
  {
    id: 3,
    slug: 'benefits-of-body-to-body',
    title: 'The Therapeutic Benefits of Body-to-Body Massage',
    excerpt: 'Beyond pleasure: exploring the physical and emotional healing of intimate bodywork.',
    date: 'January 5, 2024',
    category: 'Health',
    readTime: '6 min read',
  },
];

export function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="blog" className="relative py-32 bg-obsidian-light">
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
            Insights & Stories
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 section-title">
            Latest <span className="text-gradient-gold">Articles</span>
          </h2>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="card-luxury rounded-lg overflow-hidden group"
            >
              {/* Placeholder Image Area */}
              <div className="aspect-[16/10] bg-charcoal relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs tracking-wider bg-gold/90 text-obsidian px-3 py-1 rounded uppercase">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3 font-body">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-gold rounded-full" />
                  <span>{post.readTime}</span>
                </div>

                <h3 className="font-display text-xl text-foreground mb-3 group-hover:text-gold transition-colors">
                  {post.title}
                </h3>

                <p className="text-muted-foreground text-sm font-body mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="text-gold text-sm tracking-wider hover:text-gold-light transition-colors font-body inline-flex items-center gap-2"
                >
                  Read More
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            href="/blog"
            className="btn-gold-outline px-8 py-4 text-sm rounded inline-block"
          >
            View All Articles
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

