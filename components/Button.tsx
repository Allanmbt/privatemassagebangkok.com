import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white';
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  asChild = false,
  href,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-sm font-medium tracking-wide transition-all duration-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-[#46C5A7] text-white hover:bg-[#39B59A] focus:ring-[#46C5A7] shadow-lg shadow-[#46C5A7]/20",
    outline: "border border-[#46C5A7] text-[#46C5A7] hover:bg-[#46C5A7] hover:text-white focus:ring-[#46C5A7]",
    white: "bg-white text-stone-800 hover:bg-stone-100 focus:ring-white shadow-md"
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (asChild && href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button 
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
};
