import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../constants.tsx';
import { HowItWorksStep } from '../types';
import Card from './ui/Card';

const HowItWorksSection = () => {
  return (
    <section className="py-20 sm:py-28 bg-indigo-50 animate-content-fade-in-up"> {/* Removed rounded-xl */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            How PathThrive Works
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Getting started is simple. Follow these three easy steps to supercharge your job search.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HOW_IT_WORKS_STEPS.map((step: HowItWorksStep, index: number) => (
            <div key={step.id} className="animate-content-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <Card className="text-center p-8 bg-white group h-full" hoverEffect>
                <div className="flex justify-center items-center mb-6">
                  <div className="bg-indigo-100 p-4 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-lg"> {/* Removed rounded-full */}
                    {/* Icons color updated via constants.tsx */}
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  <span className="text-[#5468FF] font-bold mr-2">Step {index + 1}:</span> {step.title}
                </h3>
                <p className="text-slate-600 text-sm">
                  {step.description}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;