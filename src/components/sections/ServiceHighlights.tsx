import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Star, Clock } from 'lucide-react';

export default function ServiceHighlights() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Price Guarantee Banner */}
        <div className="bg-emerald-50 rounded-lg p-8 mb-16 text-center">
          <h2 className="text-3xl font-bold text-emerald-800 mb-4">Best Price Guarantee</h2>
          <p className="text-lg text-gray-700 mb-6">
            We guarantee the most competitive prices in the GTA. Find a better price? We'll match it and give you an additional 5% off!
          </p>
          <div className="flex justify-center space-x-8">
            <div className="flex items-center">
              <Shield className="h-6 w-6 text-emerald-600 mr-2" />
              <span className="text-gray-700">Price Match</span>
            </div>
            <div className="flex items-center">
              <Star className="h-6 w-6 text-emerald-600 mr-2" />
              <span className="text-gray-700">Quality Service</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-6 w-6 text-emerald-600 mr-2" />
              <span className="text-gray-700">Timely Delivery</span>
            </div>
          </div>
        </div>

        {/* Home & Office Cleaning */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Professional Home & Office Cleaning</h2>
              <ul className="space-y-4 text-gray-600 mb-8">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">✓</span>
                  Deep cleaning of all rooms and surfaces
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">✓</span>
                  Eco-friendly cleaning products
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">✓</span>
                  Regular maintenance programs available
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">✓</span>
                  Specialized cleaning for carpets and upholstery
                </li>
              </ul>
              <Link to="/services" className="text-emerald-600 font-semibold hover:text-emerald-700">
                Learn more about our cleaning services →
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80" 
                alt="Professional cleaning" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Yard Management */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80" 
                alt="Yard maintenance" 
                className="w-full h-[400px] object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Complete Yard Management</h2>
              <ul className="space-y-4 text-gray-600 mb-8">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">✓</span>
                  Professional lawn care and maintenance
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">✓</span>
                  Garden design and landscaping
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">✓</span>
                  Tree trimming and pruning
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">✓</span>
                  Seasonal cleanup and maintenance
                </li>
              </ul>
              <Link to="/services" className="text-emerald-600 font-semibold hover:text-emerald-700">
                Explore our yard management services →
              </Link>
            </div>
          </div>
        </div>

        {/* Snow Removal */}
        <div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Reliable Snow Removal</h2>
              <ul className="space-y-4 text-gray-600 mb-8">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">✓</span>
                  24/7 emergency snow removal
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">✓</span>
                  Residential and commercial properties
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">✓</span>
                  De-icing and salt application
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">✓</span>
                  Seasonal contracts available
                </li>
              </ul>
              <Link to="/services" className="text-emerald-600 font-semibold hover:text-emerald-700">
                View our snow removal services →
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1516648064-c0929e14f1df?auto=format&fit=crop&q=80" 
                alt="Snow removal" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}