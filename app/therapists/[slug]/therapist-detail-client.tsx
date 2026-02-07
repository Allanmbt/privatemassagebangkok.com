'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { PostWithContent } from '@/utils/getAllPosts';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

interface TherapistDetailClientProps {
  therapist: PostWithContent;
}

export function TherapistDetailClient({ therapist }: TherapistDetailClientProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const isAvailable = (therapist as any).listed !== false;
  
  // 获取相册图片
  const gallery = (therapist as any).gallery || [therapist.coverImage];
  
  // 获取客户评论
  const reviews = (therapist as any).reviews || [];

  return (
    <div className="flex flex-col bg-stone-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-stone-100">
        <div className="container mx-auto px-6 py-4 text-sm text-stone-500">
          <Link href="/" className="hover:text-[#46C5A7] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/therapists" className="hover:text-[#46C5A7] transition-colors">Therapists</Link>
          <span className="mx-2">/</span>
          <span className="text-stone-800">{therapist.title}</span>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left: Gallery */}
              <div className="space-y-4">
                {/* Main Image Slider */}
                <div className="rounded-3xl overflow-hidden shadow-xl">
                  <Swiper
                    modules={[Navigation, Pagination, Thumbs]}
                    spaceBetween={10}
                    navigation={{
                      nextEl: '.swiper-button-next-custom',
                      prevEl: '.swiper-button-prev-custom',
                    }}
                    pagination={{ clickable: true }}
                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                    className="aspect-[3/4] w-full"
                  >
                    {gallery.map((image: string, index: number) => (
                      <SwiperSlide key={index}>
                        <div className="relative w-full h-full">
                          <Image
                            src={image}
                            alt={`${therapist.title} - Photo ${index + 1}`}
                            fill
                            className="object-cover"
                            priority={index === 0}
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                    
                    {/* Custom Navigation Buttons */}
                    <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white transition-colors">
                      <ChevronLeft className="w-5 h-5 text-stone-800" />
                    </button>
                    <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white transition-colors">
                      <ChevronRight className="w-5 h-5 text-stone-800" />
                    </button>
                  </Swiper>
                </div>

                {/* Thumbnail Slider */}
                {gallery.length > 1 && (
                  <Swiper
                    modules={[Thumbs]}
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={3}
                    watchSlidesProgress
                    className="thumbs-swiper"
                  >
                    {gallery.map((image: string, index: number) => (
                      <SwiperSlide key={index} className="cursor-pointer">
                        <div className="relative aspect-square rounded-xl overflow-hidden">
                          <Image
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
              </div>

              {/* Right: Info */}
              <div className="space-y-6">
                {/* Header */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-4xl font-serif font-medium text-stone-900">{therapist.title}</h1>
                    {(therapist as any).age && (
                      <span className="text-lg text-stone-500">{(therapist as any).age} yrs</span>
                    )}
                  </div>
                  <p className="text-lg text-[#46C5A7] font-medium mb-4">
                    {(therapist as any).jobTitle || 'Senior Massage Therapist'}
                  </p>
                  
                  {/* Rating */}
                  {(therapist as any).rating && (
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1.5 rounded-lg">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-bold text-stone-900">{(therapist as any).rating}</span>
                      </div>
                      {(therapist as any).reviewCount && (
                        <span className="text-sm text-stone-500">({(therapist as any).reviewCount} reviews)</span>
                      )}
                    </div>
                  )}

                  {/* Specialties */}
                  {(therapist as any).specialties && (
                    <div className="flex flex-wrap gap-2">
                      {(therapist as any).specialties.map((specialty: string, idx: number) => (
                        <span 
                          key={idx}
                          className="px-3 py-1.5 border border-[#46C5A7] text-[#46C5A7] rounded-full text-sm font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* About Section */}
                <div className="bg-stone-50 rounded-2xl p-6">
                  <h2 className="text-xl font-serif font-medium text-stone-900 mb-4">About</h2>
                  <p className="text-stone-600 leading-relaxed">
                    {(therapist as any).bio || therapist.description}
                  </p>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-stone-50 rounded-2xl p-6">
                  {(therapist as any).pressure && (
                    <div>
                      <span className="block text-xs uppercase text-stone-400 tracking-wider mb-1">Pressure</span>
                      <span className="font-bold text-stone-700">{(therapist as any).pressure}</span>
                    </div>
                  )}
                  {(therapist as any).personality && (
                    <div>
                      <span className="block text-xs uppercase text-stone-400 tracking-wider mb-1">Personality</span>
                      <span className="font-bold text-stone-700">{(therapist as any).personality}</span>
                    </div>
                  )}
                  {therapist.languages && (
                    <div>
                      <span className="block text-xs uppercase text-stone-400 tracking-wider mb-1">Language</span>
                      <span className="font-bold text-stone-700">{therapist.languages.join(', ')}</span>
                    </div>
                  )}
                  {(therapist as any).experience && (
                    <div>
                      <span className="block text-xs uppercase text-stone-400 tracking-wider mb-1">Experience</span>
                      <span className="font-bold text-stone-700">{(therapist as any).experience}</span>
                    </div>
                  )}
                </div>

                {/* Booking Section */}
                <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-lg sticky top-6">
                  <div className="mb-4">
                    <p className="text-sm text-stone-500">Starting from</p>
                    <p className="text-3xl font-serif font-bold text-[#46C5A7]">
                      {(therapist as any).price || '$120 / hr'}
                    </p>
                  </div>
                  
                  {isAvailable ? (
                    <button className="w-full bg-[#46C5A7] hover:bg-[#3aa88c] text-white py-4 rounded-xl font-bold text-lg shadow-lg transition-all transform hover:-translate-y-1">
                      Book Appointment
                    </button>
                  ) : (
                    <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-center">
                      <p className="text-sm text-amber-800 font-medium">Currently Unavailable</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* What Clients Say - 多条评论 */}
            {reviews.length > 0 && (
              <div className="mt-16">
                <h2 className="text-3xl font-serif font-medium text-stone-900 mb-8 text-center">
                  What Clients Say
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {reviews.map((review: any, index: number) => (
                    <div 
                      key={index}
                      className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                    >
                      {/* Rating Stars */}
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(5)].map((_, starIndex) => (
                          <Star 
                            key={starIndex} 
                            className={`w-4 h-4 ${
                              starIndex < (review.rating || 5) 
                                ? 'fill-yellow-400 text-yellow-400' 
                                : 'text-stone-300'
                            }`} 
                          />
                        ))}
                      </div>
                      
                      {/* Review Text */}
                      <p className="text-stone-700 leading-relaxed mb-4 italic">
                        "{review.comment || review.text}"
                      </p>
                      
                      {/* Reviewer Info */}
                      <div className="flex items-center gap-3 pt-4 border-t border-stone-100">
                        {/* Avatar */}
                        <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center overflow-hidden">
                          {review.avatar ? (
                            <Image 
                              src={review.avatar} 
                              alt={review.name} 
                              width={40} 
                              height={40}
                              className="object-cover"
                            />
                          ) : (
                            <span className="text-stone-600 font-bold text-sm">
                              {(review.name || 'Anonymous').charAt(0).toUpperCase()}
                            </span>
                          )}
                        </div>
                        
                        {/* Name and Date */}
                        <div>
                          <p className="font-semibold text-stone-900">{review.name || 'Anonymous'}</p>
                          {review.date && (
                            <p className="text-xs text-stone-500">{review.date}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <style jsx global>{`
        .thumbs-swiper .swiper-slide {
          opacity: 0.5;
          transition: opacity 0.3s;
        }
        .thumbs-swiper .swiper-slide-thumb-active {
          opacity: 1;
          border: 2px solid #46C5A7;
          border-radius: 12px;
        }
        .swiper-pagination-bullet {
          background: white;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background: #46C5A7;
          opacity: 1;
        }
      `}</style>
    </div>
  );
}

