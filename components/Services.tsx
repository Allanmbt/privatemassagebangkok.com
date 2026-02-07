import { SectionHeader } from './SectionHeader';
import { SERVICES } from '@/lib/constants';
import { Flower, Wind, Activity, Footprints } from 'lucide-react';
import { Button } from './Button';

const getIcon = (type: string) => {
  switch (type) {
    case 'oil': return <Flower className="w-6 h-6" />;
    case 'thai': return <Wind className="w-6 h-6" />;
    case 'deep': return <Activity className="w-6 h-6" />;
    default: return <Footprints className="w-6 h-6" />;
  }
};

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <SectionHeader 
          subtitle="Our Menu"
          title="Curated Treatments"
          description="Designed to heal, relax, and reinvigorate. Choose the modality that speaks to your body's needs."
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow border border-stone-100 flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-stone-50 rounded-full text-[#46C5A7]">
                  {getIcon(service.iconType)}
                </div>
                <div className="text-right">
                  <span className="block text-sm text-stone-400 font-medium">{service.duration}</span>
                  <span className="block text-lg font-serif font-semibold text-[#46C5A7] mt-1">{service.price}</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-serif text-stone-800 mb-3">{service.title}</h3>
              <p className="text-stone-500 mb-6 flex-grow leading-relaxed">
                {service.description}
              </p>
              
              <div className="mt-auto">
                <button className="text-sm font-semibold uppercase tracking-wider text-stone-800 hover:text-[#46C5A7] transition-colors flex items-center gap-2 group">
                  Book This Service 
                  <span className="transform transition-transform group-hover:translate-x-1">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-stone-500 mb-6">Unsure which treatment is right for you?</p>
          <Button variant="outline" asChild href="https://wa.me/66834826667">
            Consult via WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};
