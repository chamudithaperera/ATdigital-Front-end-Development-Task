import React from 'react';
import { servicesData } from '../../data/servicesData';
import type { ServiceItem } from '../../data/servicesData';

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const isImageLeft = service.layout === 'imageLeft';
  
  return (
    <div className={`grid lg:grid-cols-2 gap-16 items-center ${index > 0 ? 'mt-32' : ''}`}>
      {/* Image */}
      <div className={`flex justify-center ${isImageLeft ? 'lg:justify-start' : 'lg:justify-end lg:order-2'}`}>
        <div className="relative">
          <img src={service.image} alt={service.title} className="max-w-full h-auto" />
        </div>
      </div>

      {/* Content */}
      <div className={`space-y-6 ${!isImageLeft ? 'lg:order-1' : ''}`}>
        <h2 className="text-3xl lg:text-3xl font-bold text-primary leading-tight">
          {service.title}
        </h2>
        <p className="text-gray-600 text-lg font-semibold leading-relaxed">
          {service.description}
        </p>
        <button className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-3 rounded transition-all duration-300">
          {service.buttonText}
        </button>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {servicesData.map((service, index) => (
          <ServiceCard 
            key={service.id} 
            service={service} 
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
