'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Therapist {
  id: string;
  name: string;
  title: string;
  experience: string;
  image: string;
  specialties: string[];
}

const therapists: Therapist[] = [
  {
    id: '1',
    name: 'Sophia',
    title: 'Professional Therapist',
    experience: '8 years',
    image: 'https://i.pravatar.cc/400?img=5',
    specialties: ['Aromatherapy', 'Deep Tissue']
  },
  {
    id: '2',
    name: 'Emma',
    title: 'Senior Therapist',
    experience: '6 years',
    image: 'https://i.pravatar.cc/400?img=9',
    specialties: ['Thai Massage', 'Reflexology']
  },
  {
    id: '3',
    name: 'Olivia',
    title: 'Therapist',
    experience: '5 years',
    image: 'https://i.pravatar.cc/400?img=10',
    specialties: ['Swedish', 'Hot Stone']
  },
  {
    id: '4',
    name: 'Ava',
    title: 'Professional Therapist',
    experience: '7 years',
    image: 'https://i.pravatar.cc/400?img=20',
    specialties: ['Sports Massage', 'Prenatal']
  },
  {
    id: '5',
    name: 'Isabella',
    title: 'Therapist',
    experience: '4 years',
    image: 'https://i.pravatar.cc/400?img=27',
    specialties: ['Aromatherapy', 'Relaxation']
  },
  {
    id: '6',
    name: 'Mia',
    title: 'Senior Therapist',
    experience: '9 years',
    image: 'https://i.pravatar.cc/400?img=32',
    specialties: ['Deep Tissue', 'Thai Massage']
  },
  {
    id: '7',
    name: 'Charlotte',
    title: 'Professional Therapist',
    experience: '6 years',
    image: 'https://i.pravatar.cc/400?img=44',
    specialties: ['Swedish', 'Aromatherapy']
  },
  {
    id: '8',
    name: 'Amelia',
    title: 'Therapist',
    experience: '5 years',
    image: 'https://i.pravatar.cc/400?img=47',
    specialties: ['Hot Stone', 'Reflexology']
  }
];

export function TherapistsCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-serif text-stone-800">Our Therapists</h2>
          <div className="flex gap-3">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-12 h-12 rounded-full bg-[#46C5A7] text-white hover:bg-[#3aa88c] transition-all flex items-center justify-center shadow-md hover:shadow-lg"
              aria-label="Previous therapist"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-12 h-12 rounded-full bg-[#46C5A7] text-white hover:bg-[#3aa88c] transition-all flex items-center justify-center shadow-md hover:shadow-lg"
              aria-label="Next therapist"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet !bg-stone-300',
            bulletActiveClass: 'swiper-pagination-bullet-active !bg-[#46C5A7] !w-6',
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="therapists-swiper !pb-12"
        >
          {therapists.map((therapist) => (
            <SwiperSlide key={therapist.id}>
              <div className="group relative overflow-hidden rounded-3xl aspect-[3/4] cursor-pointer bg-stone-200">
                <img
                  src={therapist.image}
                  alt={therapist.name}
                  loading="eager"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                  <h3 className="text-2xl font-serif mb-1">{therapist.name}</h3>
                  <p className="text-white/80 text-sm mb-2">({therapist.title})</p>
                  <p className="text-white/90 font-medium mb-3">Experience: {therapist.experience}</p>
                  <div className="flex flex-wrap gap-2">
                    {therapist.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="text-xs px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .therapists-swiper .swiper-pagination {
          bottom: 0 !important;
        }
        .therapists-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          transition: all 0.3s ease;
        }
        .therapists-swiper .swiper-pagination-bullet-active {
          width: 24px !important;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
}
