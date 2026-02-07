import React from 'react';

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  subtitle, 
  title, 
  description, 
  centered = true,
  light = false
}) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : 'text-left'} max-w-3xl mx-auto`}>
      <span className={`uppercase tracking-[0.2em] text-xs font-semibold mb-3 block ${light ? 'text-[#46C5A7]' : 'text-[#46C5A7]'}`}>
        {subtitle}
      </span>
      <h2 className={`text-4xl md:text-5xl font-normal mb-6 leading-tight ${light ? 'text-white' : 'text-stone-800'}`}>
        {title}
      </h2>
      {description && (
        <div className={`h-1 w-12 bg-[#46C5A7] mb-6 ${centered ? 'mx-auto' : ''}`}></div>
      )}
      {description && (
        <p className={`text-lg leading-relaxed ${light ? 'text-stone-200' : 'text-stone-500'}`}>
          {description}
        </p>
      )}
    </div>
  );
};
