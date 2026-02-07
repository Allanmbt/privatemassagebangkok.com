import { SectionHeader } from './SectionHeader';
import { UserCheck, MessageCircle, Armchair } from 'lucide-react';

const processSteps = [
  {
    title: "Choose Your Therapist",
    description: "Explore curated profiles and menus to select the therapist or experience that suits you best."
  },
  {
    title: "Confirm Instantly",
    description: "Confirm time and location instantly, and chat directly with your therapist for clarity and peace of mind."
  },
  {
    title: "Arrive & Relax",
    description: "Your therapist arrives fully prepared — bringing a refined, spa-quality experience to your space."
  }
];

export const Process = () => {
  const icons = [UserCheck, MessageCircle, Armchair];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeader 
          subtitle="Simple Process"
          title="How It Works"
          description="From booking to relaxation, your outcall massage in Bangkok happens in just three simple steps."
        />

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto relative mt-16">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[1px] bg-stone-200 z-0"></div>

          {processSteps.map((step, index) => {
            const Icon = icons[index];
            return (
              <div key={index} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-white border border-stone-100 shadow-sm flex items-center justify-center text-[#46C5A7] mb-6">
                  <Icon size={32} />
                </div>
                <span className="text-[#46C5A7] font-serif font-bold text-lg mb-2">0{index + 1}</span>
                <h3 className="text-xl font-serif text-stone-800 mb-3">{step.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
