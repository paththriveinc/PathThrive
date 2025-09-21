
import React from 'react';
import { SERVICES_DATA } from '../constants.tsx';
import ServiceCard from '../components/ServiceCard';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const ServicesPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
          Our Comprehensive Services
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          We offer a suite of services designed to streamline your job search and maximize your chances of landing your dream job.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {SERVICES_DATA.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      <div className="bg-indigo-50 p-8 sm:p-12 text-center shadow-lg"> {/* Removed rounded-xl */}
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-slate-700 mb-8 max-w-xl mx-auto">
          Let our expert assistants take the load off your shoulders. Explore our plans or contact us for a personalized consultation.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link to="/pricing">
            <Button variant="primary" size="lg">View Pricing Plans</Button>
          </Link>
          <Link to="/contact">
            <Button variant="secondary" size="lg">Contact Us</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;