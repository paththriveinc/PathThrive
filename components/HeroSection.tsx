
import React from 'react';
import { Link } from 'react-router-dom';
import Button from './ui/Button';

// Define colors based on the image for consistency
const PRIMARY_BRAND_COLOR = '#5C5FF5'; // Vibrant Blue/Purple
// SECONDARY_ACCENT_COLOR removed as it's no longer used

const HeroSection = () => {
  return (
    <section className="bg-[#FFFBF5] text-slate-900 pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden relative">
      {/* Decorative shapes - Background */}
      <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/4 w-72 h-72 md:w-96 md:h-96 bg-purple-100 rounded-full opacity-30 -z-0" />
      <div className="absolute top-10 right-0 translate-x-1/4 -translate-y-1/4 w-40 h-40 md:w-60 md:h-60 bg-sky-100 rounded-full opacity-40 -z-0" />


      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-1 gap-12 items-center"> {/* Changed to single column */}
          {/* Text Content */}
          <div className="text-center animate-content-fade-in-up"> {/* Centered text */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold !leading-tight mb-6">
              Unlock Your Career Potential with <span style={{ color: PRIMARY_BRAND_COLOR }}>PathThrive</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-700 mb-10 max-w-2xl mx-auto"> {/* Adjusted max-width and margin for centering */}
              Stop wasting time on endless applications. Our expert assistants handle the busywork, customizing your approach so you can focus on acing interviews.
            </p>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center"> {/* Centered buttons */}
              <Link to="/services">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto !px-8 !py-3.5"
                  style={{ backgroundColor: PRIMARY_BRAND_COLOR, borderColor: PRIMARY_BRAND_COLOR }}
                >
                  Explore Platform
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto !px-8 !py-3.5"
                  style={{ borderColor: PRIMARY_BRAND_COLOR, color: PRIMARY_BRAND_COLOR }}
                >
                  Book Free Consultation
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Image and Stats - ENTIRELY REMOVED */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
