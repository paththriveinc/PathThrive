import React from 'react';
import { TESTIMONIALS_DATA } from '../constants.tsx';
import TestimonialCard from './TestimonialCard';
import Button from './ui/Button';
import { Link } from 'react-router-dom';

const TestimonialsSection = () => {
  const homePageTestimonials = TESTIMONIALS_DATA.slice(0, 3);

  return (
    <section className="py-20 sm:py-28 bg-white animate-content-fade-in-up"> {/* Removed rounded-xl */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Loved by Job Seekers Worldwide
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Hear what our users say about their success with PathThrive.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homePageTestimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="animate-content-fade-in-up h-full" style={{ animationDelay: `${index * 0.1}s` }}>
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/wall-of-love">
            <Button variant="outline" size="lg">
              View All Testimonials
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;