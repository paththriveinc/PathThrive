
import React from 'react';
import { FELLOWS_WORK_AT_LOGOS } from '../constants.tsx';
import { CompanyLogo } from '../types';

const LogoImage = ({ logo, className = "h-7 sm:h-8 md:h-9" }: { logo: CompanyLogo, className?: string }) => (
  <img
    src={logo.logoUrl}
    alt={logo.name}
    title={logo.name}
    className={`${className} object-contain grayscale opacity-70 transition-all duration-300 ease-in-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105`}
  />
);

const TrustedBySection = () => {
  return (
    <section className="py-12 sm:py-16 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* "As featured in" section has been removed */}

        <div className="animate-content-fade-in-up" style={{animationDelay: '0.2s'}}>
          <h2 className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wider mb-6 sm:mb-8">
            Our fellows work at
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 sm:gap-x-10 md:gap-x-12">
            {FELLOWS_WORK_AT_LOGOS.map((company: CompanyLogo) => (
              <div key={company.id} className="group">
                <LogoImage logo={company} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
