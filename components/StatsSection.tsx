
import React from 'react';
import { STATISTICS_DATA } from '../constants.tsx';
import { StatItem } from '../types';

const StatsSection = () => {
  return (
    <section className="py-20 sm:py-28 bg-indigo-50 animate-content-fade-in-up"> {/* Removed rounded-xl */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {STATISTICS_DATA.map((stat: StatItem) => (
            <div 
              key={stat.id} 
              className="p-6"
            >
              <p className="text-4xl sm:text-5xl font-extrabold text-slate-800 mb-2">
                {stat.value}
              </p>
              <p className="text-lg text-slate-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;