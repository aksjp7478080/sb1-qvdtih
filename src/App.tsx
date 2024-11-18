import React from 'react';
import Navbar from './components/Navbar';
import ServiceCard from './components/ServiceCard';
import { Home, Brush, Trees, Snowflake, Mail, Phone, MapPin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-20 relative">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div 
          className="h-[600px] bg-cover bg-center relative"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80')`
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center text-white px-4">
              <h1 className="text-5xl font-bold mb-6">Your Home, Office, and Yard—Spotless, Every Season.</h1>
              <p className="text-xl mb-8">Your trusted partner for cleaning, yard management, and snow removal</p>
              <a 
                href="#contact" 
                className="bg-emerald-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-colors"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              Icon={Brush}
              title="Home & Office Cleaning"
              description="Professional cleaning services tailored to your needs, ensuring a spotless and healthy environment."
              image="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80"
            />
            <ServiceCard
              Icon={Trees}
              title="Yard Management"
              description="Complete yard maintenance including lawn care, gardening, and landscape management."
              image="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80"
            />
            <ServiceCard
              Icon={Snowflake}
              title="Snow Removal"
              description="Reliable snow removal services to keep your property safe and accessible during winter."
              image="https://images.unsplash.com/photo-1516648064-c0929e14f1df?auto=format&fit=crop&q=80"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-emerald-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Why Choose HomeRootsCare?</h2>
              <div className="space-y-4">
                <p className="text-gray-600">We take pride in delivering exceptional service to homes and businesses across the Greater Toronto Area. Our team of professionals is committed to maintaining the highest standards of quality and customer satisfaction.</p>
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-emerald-600" />
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <a href="mailto:homerootscare.ca@gmail.com" className="text-emerald-600 hover:text-emerald-700">
                    homerootscare.ca@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-emerald-600" />
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <a href="tel:+16476464478" className="text-emerald-600 hover:text-emerald-700">
                    +1 (647) 646-4478
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-emerald-600" />
                <div>
                  <h3 className="font-semibold text-gray-800">Service Area</h3>
                  <p className="text-gray-600">Greater Toronto Area</p>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-600 text-white px-6 py-3 rounded-md hover:bg-emerald-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Home className="h-8 w-8 text-emerald-400" />
            <span className="ml-2 text-xl font-bold">HomeRootsCare</span>
          </div>
          <p className="text-gray-400">© {new Date().getFullYear()} HomeRootsCare. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;