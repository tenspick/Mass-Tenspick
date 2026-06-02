import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#050505] focus:ring-secondary cursor-pointer disabled:opacity-50 disabled:pointer-events-none";
  
  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-3 gap-2",
    lg: "text-base px-8 py-4 gap-2.5",
  };

  const variantStyles = {
    primary: "bg-gradient-to-r from-secondary to-primary text-white hover:brightness-110 shadow-lg shadow-secondary/10 hover:shadow-primary/20",
    secondary: "bg-white/5 text-white hover:bg-white/10 border border-white/10 hover:border-white/20",
    outline: "bg-transparent text-white border border-white/20 hover:bg-white/5 hover:border-white/40",
    ghost: "bg-transparent text-muted-text hover:text-white hover:bg-white/5",
    glow: "bg-transparent text-primary hover:text-white border border-primary/30 hover:border-primary/80 shadow-md shadow-primary/5 hover:shadow-primary/25",
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
