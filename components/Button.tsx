
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  className?: string;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '',
  href 
}) => {
  const baseStyles = "relative px-8 py-4 font-heading font-bold uppercase tracking-wider text-sm rounded-[8px] overflow-hidden transition-all duration-300 flex items-center justify-center gap-2 flash-border";
  
  const variants = {
    primary: "bg-[#FA92FF] text-black hover:shadow-[0_0_20px_rgba(250,146,255,0.4)]",
    secondary: "border-2 border-[#FA92FF] text-peanuts-accent hover:bg-peanuts-accent hover:text-black",
    outline: "border border-peanuts-text text-peanuts-text hover:border-peanuts-accent hover:text-peanuts-accent"
  };

  const Component = href ? 'a' : 'button';
  
  return (
    <Component 
      href={href}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10">{children}</span>
    </Component>
  );
};

export default Button;
