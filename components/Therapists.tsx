import { SectionHeader } from './SectionHeader';
import { THERAPISTS } from '@/lib/constants';
import Image from 'next/image';

export const Therapists = () => {
  return (
    <section id="therapists" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeader 
          subtitle="Expert Hands"
          title="Our Senior Therapists"
          description="Meet the dedicated professionals bringing the spa experience to you."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {THERAPISTS.map((t) => (
            <div key={t.id} className="group">
              <div className="relative overflow-hidden mb-6 aspect-[3/4] rounded-sm bg-stone-100">
                <Image 
                  src={t.image} 
                  alt={t.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-stone-900/80 to-transparent">
                  <p className="text-white text-xs font-medium tracking-widest uppercase">
                    {t.experience} Experience
                  </p>
                </div>
              </div>
              <h3 className="text-2xl font-serif text-stone-800 mb-1">{t.name}</h3>
              <p className="text-[#46C5A7] text-sm font-medium mb-2">Senior Therapist</p>
              <div className="flex flex-wrap gap-2">
                {t.specialties.map(spec => (
                  <span key={spec} className="text-xs text-stone-500 bg-stone-100 px-2 py-1 rounded-sm">
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
