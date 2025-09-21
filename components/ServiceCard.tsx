
import React from 'react';
import { Service } from '../types';
import Card from './ui/Card';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <Card className="p-6 h-full" hoverEffect>
      <div className="flex items-start space-x-4">
        {service.icon && React.isValidElement(service.icon) && (
          <div className="flex-shrink-0 mt-1 text-blue-600"> {/* text-blue-600 ensures icon color */}
            {React.cloneElement(service.icon as React.ReactElement<{ className?: string }>, { className: "w-8 h-8" })}
          </div>
        )}
        <div>
          <h3 className="text-xl font-semibold text-slate-800 mb-2">{service.title}</h3>
          <p className="text-slate-600 text-sm">{service.description}</p>
        </div>
      </div>
    </Card>
  );
};

export default ServiceCard;