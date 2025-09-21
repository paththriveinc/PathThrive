
import React from 'react';
import { PRICING_PLANS_DATA, ADD_ON_SERVICES_DATA } from '../constants.tsx';
import PricingCard from '../components/PricingCard';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const PricingPage = () => {
  const mainPlan = PRICING_PLANS_DATA[0]; // There's only one main plan now

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
          Our Comprehensive Career Accelerator Plan
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Everything you need to supercharge your job search, all in one powerful package.
        </p>
      </div>

      {/* Single Main Plan Section */}
      <div className="mb-16 flex justify-center">
        <div className="w-full max-w-md"> {/* Adjusted for single, centered card */}
          {mainPlan && <PricingCard plan={mainPlan} />}
        </div>
      </div>
      
      {/* Add-On Services Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
          Specialized Coaching & Optimization Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ADD_ON_SERVICES_DATA.map(addOn => (
            <Card key={addOn.id} className="p-6 flex flex-col">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">{addOn.name}</h3>
              <p className="text-slate-600 text-sm mb-3 flex-grow">{addOn.description}</p>
              <p className="text-2xl font-bold text-[#5468FF] mb-4">{addOn.price}</p>
              <Button variant="outline" size="md" className="w-full mt-auto">
                Learn More
              </Button>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-50 p-8 sm:p-12 text-center"> {/* Removed rounded-xl */}
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">
          Need a Custom Solution or Have Questions?
        </h2>
        <p className="text-slate-700 mb-8 max-w-xl mx-auto">
          Our team is here to help. Book a free consultation to discuss your job search goals and find the perfect PathThrive solution for you.
        </p>
        <Link to="/contact">
            <Button variant="primary" size="lg">Book Free Consultation</Button>
        </Link>
      </div>
    </div>
  );
};

export default PricingPage;