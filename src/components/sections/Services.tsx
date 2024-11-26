import React from 'react';
import ServiceCard from '../ServiceCard';
import { SERVICES } from '../../config/constants';
import { Brush, Trees, Snowflake } from 'lucide-react';

const iconMap = {
  Brush,
  Trees,
  Snowflake
};

export default function Services() {
  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.title}
              Icon={iconMap[service.icon as keyof typeof iconMap]}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}