'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PostData } from '@/utils/getAllPosts';
import { Star } from 'lucide-react';

const CATEGORIES = ['All', 'Wellness', 'HomeHub', 'Journey'];

interface TherapistsClientProps {
  therapists: PostData[];
}

export function TherapistsClient({ therapists }: TherapistsClientProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredTherapists = activeCategory === 'All' 
    ? therapists 
    : therapists.filter(t => (t as any).category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen bg-stone-50">
      {/* Hero Section - 无缝衔接导航 */}
      <section className="relative bg-gradient-to-b from-[#46C5A7]/5 to-transparent pt-32 pb-16">
        <div className="container px-6 text-center">
          <span className="text-[#46C5A7] font-bold tracking-widest text-xs uppercase mb-3 block">
            Our Team
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-stone-800 mb-6">
            Our Specialists
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Highly trained professionals dedicated to your restoration. Choose a therapist that resonates with your needs.
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex justify-center gap-4 min-w-max px-6 md:px-0">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    activeCategory === cat 
                      ? 'bg-[#46C5A7] text-white shadow-md' 
                      : 'bg-white text-stone-500 hover:bg-stone-100 border border-stone-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Therapists Grid - 4列布局 */}
      <section className="pb-20 container mx-auto px-6">
        {filteredTherapists.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {filteredTherapists.map((therapist) => (
              <Link 
                key={therapist.slug}
                href={`/therapists/${therapist.slug}`}
                className="block group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500">
                  {/* 1:1 比例封面图 */}
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={therapist.coverImage || '/images/therapists/nicha.jpg'}
                      alt={therapist.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* 评分徽章 */}
                    {(therapist as any).rating && (
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-1 shadow-sm">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-bold text-sm text-stone-800">{(therapist as any).rating}</span>
                      </div>
                    )}
                    {/* 渐变遮罩 */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    {/* 悬停时显示的信息 */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-lg font-serif font-medium mb-1">{therapist.title}</h3>
                      <p className="text-sm text-white/90">{(therapist as any).title || 'Professional Therapist'}</p>
                    </div>
                  </div>
                  
                  {/* 卡片底部信息 */}
                  <div className="p-4">
                    {/* 专长标签 */}
                    {(therapist as any).specialties && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {(therapist as any).specialties.slice(0, 2).map((specialty: string, idx: number) => (
                          <span 
                            key={idx}
                            className="text-xs px-2 py-1 bg-stone-100 text-stone-600 rounded-md"
                          >
                            {specialty}
                          </span>
                        ))}
                        {(therapist as any).specialties.length > 2 && (
                          <span className="text-xs px-2 py-1 text-stone-400">
                            +{(therapist as any).specialties.length - 2}
                          </span>
                        )}
                      </div>
                    )}
                    
                    {/* 价格 */}
                    <div className="flex items-center justify-between pt-3 border-t border-stone-100">
                      <div>
                        <span className="text-xs text-stone-500">From </span>
                        <span className="text-lg font-bold text-[#46C5A7]">
                          {(therapist as any).price || '$120 / hr'}
                        </span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#46C5A7]/10 flex items-center justify-center group-hover:bg-[#46C5A7] transition-colors">
                        <span className="text-[#46C5A7] group-hover:text-white transition-colors">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-stone-600">
              No therapists found in this category.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

