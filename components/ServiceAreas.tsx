import { SERVICE_AREAS } from '@/lib/constants';
import { MapPin } from 'lucide-react';

export const ServiceAreas = () => {
  return (
    <section className="py-20 bg-stone-50 border-t border-stone-200">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-10">
          <span className="uppercase tracking-[0.2em] text-xs font-semibold mb-3 block text-[#46C5A7]">
            Locations
          </span>
          <h2 className="text-3xl font-serif text-stone-800">
            Serving Bangkok&apos;s Prime Districts
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {SERVICE_AREAS.map((area) => (
            <a 
              key={area}
              href={`/areas/${area.toLowerCase().replace(' ', '-')}`}
              className="inline-flex items-center gap-2 px-5 py-2 bg-white rounded-full border border-stone-200 text-stone-600 text-sm hover:border-[#46C5A7] hover:text-[#46C5A7] transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <MapPin size={14} className="text-[#46C5A7]" />
              {area}
            </a>
          ))}
        </div>
        <p className="mt-8 text-xs text-stone-400">
          *Additional travel fees may apply for locations outside these core zones.
        </p>
      </div>
    </section>
  );
};
