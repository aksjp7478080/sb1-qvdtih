import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-emerald-50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Why Choose HomeRootsCare?</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                We take pride in delivering exceptional service to homes and businesses across the Greater Toronto Area. 
                Our team of professionals is committed to maintaining the highest standards of quality and customer satisfaction.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">✓ Experienced & Professional Team</li>
                <li className="flex items-center">✓ Eco-friendly Solutions</li>
                <li className="flex items-center">✓ Reliable & Timely Service</li>
                <li className="flex items-center">✓ Competitive Pricing</li>
              </ul>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80" 
              alt="Professional cleaning team" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}