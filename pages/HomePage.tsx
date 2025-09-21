
import React from 'react';
import HeroSection from '../components/HeroSection';
import TrustedBySection from '../components/TrustedBySection';
import HowItWorksSection from '../components/HowItWorksSection';
import TestimonialsSection from '../components/TestimonialsSection';
import StatsSection from '../components/StatsSection';
// Note: A final CallToActionSection might have been here previously.
// If needed, it can be re-added or a new one created.
// For now, re-instating the primary content sections.

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <HowItWorksSection />
      <TestimonialsSection />
      <StatsSection />
      {/* 
        If there was a specific CallToActionSection component here, 
        it can be uncommented or re-implemented if its content is available.
        The "Book Free Consultation" CTA is present in the Navbar.
      */}
    </>
  );
};

export default HomePage;