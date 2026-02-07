'use client';

import { useState } from 'react';
import Image from 'next/image';
import { TrendingUp, Sparkles, Star } from 'lucide-react';
import { Service } from '@/utils/getServices';

interface ServicesClientProps {
  services: Service[];
  categories: string[];
}

const getTagIcon = (tag: string) => {
  switch (tag) {
    case 'Popular':
      return <TrendingUp className="w-3 h-3" />;
    case 'New':
      return <Sparkles className="w-3 h-3" />;
    case 'Top Rated':
      return <Star className="w-3 h-3" />;
    default:
      return null;
  }
};

const getTagColor = (tag: string) => {
  switch (tag) {
    case 'Popular':
      return 'bg-amber-500/90 text-white';
    case 'New':
      return 'bg-emerald-500/90 text-white';
    case 'Top Rated':
      return 'bg-rose-500/90 text-white';
    default:
      return 'bg-stone-500/90 text-white';
  }
};

export function ServicesClient({ services, categories }: ServicesClientProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredServices = activeCategory === 'All' 
    ? services 
    : services.filter(s => s.frontmatter.category === activeCategory);

  const totalPages = Math.ceil(filteredServices.length / itemsPerPage);
  const currentServices = filteredServices.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Page Header - 无缝衔接导航，浅色背景 */}
      <div className="bg-gradient-to-b from-[#46C5A7]/5 to-transparent pt-32 pb-16">
        <div className="container mx-auto px-6 text-center">
          <span className="text-[#46C5A7] tracking-[0.2em] uppercase text-xs font-semibold mb-3 block">
            Premium Selection
          </span>
          <h1 className="text-5xl font-serif text-stone-800 mb-6">Our Treatments</h1>
          <p className="max-w-2xl mx-auto text-stone-600 leading-relaxed text-lg">
            Discover our curated menu of therapies designed to restore balance to your body and mind. 
            From traditional ancient healing to modern therapeutic techniques.
          </p>
        </div>
      </div>

      {/* Category Tabs - 在浅色背景上 */}
      <div className="bg-stone-50 py-8">
        <div className="container mx-auto px-6">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex justify-center gap-4 min-w-max px-6 md:px-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
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
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentServices.map((service) => (
            <a
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group bg-white rounded-2xl border border-stone-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image 
                  src={service.frontmatter.image} 
                  alt={service.frontmatter.title} 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {service.frontmatter.tag && (
                  <div className={`absolute top-4 right-4 backdrop-blur-sm px-3 py-1.5 text-xs font-medium rounded-full flex items-center gap-1.5 ${getTagColor(service.frontmatter.tag)}`}>
                    {getTagIcon(service.frontmatter.tag)}
                    {service.frontmatter.tag}
                  </div>
                )}
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-medium text-[#46C5A7] uppercase tracking-wider">
                    {service.frontmatter.category}
                  </span>
                </div>
                <h3 className="text-xl font-serif text-stone-800 mb-3 group-hover:text-[#46C5A7] transition-colors">
                  {service.frontmatter.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed line-clamp-3">
                  {service.frontmatter.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-16 gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                  currentPage === i + 1 
                    ? 'bg-[#46C5A7] text-white' 
                    : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
