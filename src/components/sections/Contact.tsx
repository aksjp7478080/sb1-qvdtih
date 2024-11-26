import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from '../ContactForm';

export default function Contact() {
  return (
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
          <ContactForm />
        </div>
      </div>
    </section>
  );
}