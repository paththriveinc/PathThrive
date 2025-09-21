
import React from 'react';
import { Testimonial } from '../types';
import Card from './ui/Card';

interface TestimonialCardProps {
  testimonial: Testimonial;
  detailed?: boolean;
}

interface StarIconProps {
  filled: boolean;
}

const StarIcon = ({ filled }: StarIconProps) => (
  <svg className={`w-5 h-5 ${filled ? 'text-amber-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.959a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.365 2.448a1 1 0 00-.364 1.118l1.287 3.959c.3.921-.755 1.688-1.54 1.118l-3.365-2.448a1 1 0 00-1.175 0l-3.365 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.959a1 1 0 00-.364-1.118L2.072 9.386c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
  </svg>
);

const TestimonialCard = ({ testimonial, detailed = false }: TestimonialCardProps) => {
  return (
    <Card className={`flex flex-col ${detailed ? 'p-8' : 'p-6'} h-full`}>
      <div className="flex items-center mb-4">
        <img 
          src={testimonial.photoUrl} 
          alt={testimonial.name} 
          className="w-16 h-16 mr-4 object-cover" // Removed rounded-full
        />
        <div>
          <h4 className="font-semibold text-lg text-slate-800">{testimonial.name}</h4>
          <p className="text-sm text-slate-500">{testimonial.jobTitle}</p>
          <div className="flex items-center">
            {testimonial.companyLogoUrl && (
              <img src={testimonial.companyLogoUrl} alt={`${testimonial.companyName} logo`} className="h-5 mr-2 object-contain"/>
            )}
            <p className="text-sm text-slate-500">{testimonial.companyName}</p>
          </div>
        </div>
      </div>
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} filled={i < testimonial.rating} />
        ))}
      </div>
      <p className={`text-slate-600 ${detailed ? 'text-base leading-relaxed' : 'text-sm italic'} mb-4 flex-grow`}>
        {detailed && testimonial.fullStory ? `"${testimonial.fullStory}"` : `"${testimonial.quote}"`}
      </p>
      {!detailed && testimonial.fullStory && (
        <a href={`#/wall-of-love#${testimonial.id}`} className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          Read full story &rarr;
        </a>
      )}
    </Card>
  );
};

export default TestimonialCard;