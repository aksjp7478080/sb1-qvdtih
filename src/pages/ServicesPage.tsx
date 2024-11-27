import React from 'react';
import SEO from '../components/SEO';
import { SERVICES, SERVICE_AREAS } from '../config/constants';
import ServiceCard from '../components/ServiceCard';
import { Brush, Trees, Snowflake } from 'lucide-react';

const iconMap = {
  Brush,
  Trees,
  Snowflake
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <SEO 
        title="Professional Home Services - Cleaning, Yard Care & Snow Removal"
        description="Expert home services in GTA: Professional house cleaning, yard maintenance, and reliable snow removal. Serving Toronto, Markham, Scarborough, and surrounding areas."
        keywords="house cleaning service GTA, yard maintenance Toronto, snow removal service, professional home cleaning, garden care, winter services GTA"
      />
      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Services</h1>
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

      {/* Service Areas Section */}
      <section className="py-16 px-4 bg-emerald-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Service Areas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICE_AREAS.map((area) => (
              <div key={area.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48">
                  <img 
                    src={area.image} 
                    alt={area.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{area.name}</h3>
                  <p className="text-gray-600">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}