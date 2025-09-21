
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverEffect?: boolean;
  style?: React.CSSProperties; 
}

const Card = ({ children, className = '', onClick, hoverEffect = false, style }: CardProps) => {
  const baseClasses = "bg-white shadow-xl overflow-hidden"; 
  const hoverClasses = hoverEffect ? "transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1.5" : "";
  
  return (
    <div 
      className={`${baseClasses} ${hoverClasses} ${className}`}
      onClick={onClick}
      style={style} 
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => (e.key === 'Enter' || e.key === ' ') && onClick() : undefined}
    >
      {children}
    </div>
  );
};

export default Card;
