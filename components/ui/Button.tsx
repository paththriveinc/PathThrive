import React from 'react';

interface ButtonBaseProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

interface ButtonAsButtonProps extends ButtonBaseProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps | 'type'> {
  asLink?: false;
  href?: never;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

interface ButtonAsLinkProps extends ButtonBaseProps, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps | 'href'> {
  asLink: true;
  href: string;
  type?: never;
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const Button = (props: ButtonProps) => {
  const { variant = 'primary', size = 'md', children, className = '' } = props;

  const baseStyles = "font-semibold focus:outline-none transition-all duration-150 ease-in-out inline-flex items-center justify-center"; // Removed rounded-lg

  const variantStyles = {
    primary: "bg-gradient-to-r from-[#5D6DFF] to-[#4C5CE4] text-white shadow-lg hover:shadow-xl focus:ring-[#5468FF] focus:ring-offset-2 transform hover:-translate-y-px",
    secondary: "bg-indigo-100 text-[#5468FF] hover:bg-indigo-200 hover:text-[#4355E4] focus:ring-[#5468FF] focus:ring-offset-2 hover:shadow-sm",
    outline: "border-2 border-[#5468FF] text-[#5468FF] hover:bg-[#5468FF] hover:text-white focus:ring-[#5468FF] focus:ring-offset-2",
    ghost: "text-[#5468FF] hover:bg-indigo-100 focus:ring-[#5468FF] focus:ring-offset-2",
    link: "text-[#5468FF] hover:text-[#4355E4] hover:underline focus:ring-[#5468FF] focus:ring-offset-1",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3 text-lg",
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (props.asLink) {
    const { 
      variant: _v, 
      size: _s, 
      children: _c, 
      className: _cl, 
      asLink: _aL, 
      href, 
      type: _t, 
      ...anchorSpecificProps 
    } = props;
    return (
      <a 
        href={href} 
        className={combinedClassName} 
        {...(anchorSpecificProps as Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps | 'href' | 'asLink' | 'type'>)}
      >
        {children}
      </a>
    );
  } else {
    const { 
      variant: _v, 
      size: _s, 
      children: _c, 
      className: _cl, 
      asLink: _aL, 
      href: _h, 
      type, 
      ...buttonSpecificProps 
    } = props;
    return (
      <button 
        type={type || 'button'} 
        className={combinedClassName} 
        {...(buttonSpecificProps as Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps | 'type' | 'asLink' | 'href'>)}
      >
        {children}
      </button>
    );
  }
};

export default Button;