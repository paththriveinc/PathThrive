
import React from 'react';
import { PricingPlan } from '../types';
import Button from './ui/Button';

interface PricingCardProps {
  plan: PricingPlan;
}

interface CheckIconProps {
  className?: string;
}

const CheckIcon = ({ className }: CheckIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={className || "w-5 h-5"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
);

const PricingCard = ({ plan }: PricingCardProps) => {
  return (
    <div 
      className={`bg-white shadow-lg p-8 flex flex-col h-full
                  ${plan.isPopular ? 'border-4 border-[#5468FF] relative' : 'border border-slate-200'}`} // Removed rounded-xl
    >
      {plan.isPopular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#5468FF] text-white text-xs font-semibold px-4 py-1 shadow-md"> {/* Removed rounded-full */}
          MOST POPULAR
        </div>
      )}
      <h3 className="text-2xl font-bold text-slate-800 mb-2 text-center">{plan.name}</h3>
      <p className="text-4xl font-extrabold text-[#5468FF] mb-1 text-center"> {/* Price text to new blue */}
        {plan.price}
        {plan.priceDescription && <span className="text-base font-normal text-slate-500 ml-1">{plan.priceDescription}</span>}
      </p>
      <p className="text-slate-500 text-sm mb-6 text-center">Billed {plan.priceDescription === '/month' ? 'monthly' : 'once'}</p>
      
      <ul className="space-y-3 mb-8 flex-grow">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
            <span className="text-slate-600 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        variant={plan.isPopular ? 'primary' : 'outline'} 
        size="lg" 
        className="w-full"
      >
        {plan.ctaText}
      </Button>
    </div>
  );
};

export default PricingCard;