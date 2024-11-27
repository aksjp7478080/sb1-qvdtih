import React from 'react';
import SEO from '../components/SEO';
import { Award, Shield, Users, Leaf } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-20">
      <SEO 
        title="About Our Professional Home Services Company"
        description="Learn about HomeRootsCare's professional home services in GTA. Experienced team providing quality house cleaning, yard maintenance, and snow removal services."
        keywords="home service company GTA, professional cleaners Toronto, about HomeRootsCare, trusted cleaning service, yard maintenance company"
      />
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">About HomeRootsCare</h1>
          
          {/* Company Overview */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Excellence in Home Services</h2>
              <p className="text-gray-600 mb-6">
                Since our establishment, HomeRootsCare has been setting the standard for professional home services in the Greater Toronto Area. We combine innovative techniques with eco-friendly practices to deliver outstanding results that transform homes and workspaces.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-700">Certified Experts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-700">Insured Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-700">Trained Staff</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Leaf className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-700">Eco-Friendly</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80" 
                alt="Professional home service" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Service Excellence Sections */}
          <div className="space-y-16">
            {/* Cleaning Excellence */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Home & Workspace Cleaning Excellence</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-600 mb-4">
                    Our cleaning division employs advanced techniques and premium eco-friendly products to ensure your spaces aren't just clean, but healthy. We understand that every space is unique, which is why we offer customized cleaning solutions that address your specific needs.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">✓</span>
                      State-of-the-art cleaning equipment
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">✓</span>
                      Certified cleaning professionals
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">✓</span>
                      Customized cleaning protocols
                    </li>
                  </ul>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80" 
                  alt="Professional cleaning" 
                  className="rounded-lg h-64 w-full object-cover"
                />
              </div>
            </div>

            {/* Yard Management Excellence */}
            <div className="bg-emerald-50 rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Yard Management Expertise</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <img 
                  src="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80" 
                  alt="Yard maintenance" 
                  className="rounded-lg h-64 w-full object-cover"
                />
                <div>
                  <p className="text-gray-600 mb-4">
                    Our landscaping team brings years of horticultural expertise to every project. We focus on sustainable yard management practices that not only beautify your outdoor spaces but also promote environmental health.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">✓</span>
                      Expert landscape designers
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">✓</span>
                      Sustainable gardening practices
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">✓</span>
                      Year-round maintenance programs
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Snow Removal Excellence */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Snow Removal Specialists</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-600 mb-4">
                    When winter strikes, our dedicated snow removal team ensures your property remains safe and accessible. We utilize modern equipment and efficient techniques to provide prompt and thorough snow clearing services.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">✓</span>
                      24/7 emergency response
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">✓</span>
                      Professional snow removal equipment
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">✓</span>
                      Comprehensive winter maintenance
                    </li>
                  </ul>
                </div>
                <img 
                  src="https://images.pexels.com/photos/4325328/pexels-photo-4325328.jpeg" 
                  alt="Snow removal" 
                  className="rounded-lg h-64 w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Ready to Experience the Difference?</h2>
            <a 
              href="/contact" 
              className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}