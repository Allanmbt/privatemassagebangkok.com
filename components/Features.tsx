import { ShieldCheck, MessageCircle, Sparkles } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

const features = [
  {
    icon: ShieldCheck,
    title: "Curated, Certified Therapists",
    text: "Every therapist on CBODY is carefully selected, verified, and trained. We work with a young, high-quality, and professional team — combining skill, presentation, and genuine care."
  },
  {
    icon: MessageCircle,
    title: "Instant Booking. Direct Connection.",
    text: "No agents. No waiting. No back-and-forth with middlemen. Book instantly and chat directly with your therapist — faster, clearer, and more personal than traditional massage agencies in Bangkok."
  },
  {
    icon: Sparkles,
    title: "Creative, Luxurious Experiences",
    text: "More than standard massage menus. CBODY offers curated, creative, and emotionally engaging services — designed for relaxation, connection, and elevated personal time."
  }
];

export const Features = () => {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeader 
          subtitle="The CBODY Difference"
          title="Why Choose CBODY?"
          description="We redefine outcall massage in Bangkok by combining curated therapists, instant booking, and emotionally engaging experiences — all in one seamless platform."
        />
        
        <div className="grid md:grid-cols-3 gap-12 mt-16 max-w-6xl mx-auto">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-stone-50 flex items-center justify-center text-[#46C5A7] mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#46C5A7] group-hover:text-white">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-serif font-medium mb-3 text-stone-800">{feature.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{feature.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
