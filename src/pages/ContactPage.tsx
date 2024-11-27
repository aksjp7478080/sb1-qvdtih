import React from 'react';
import SEO from '../components/SEO';
import Contact from '../components/sections/Contact';

export default function ContactPage() {
  return (
    <div className="pt-20">
      <SEO 
        title="Contact Us - HomeRootsCare Services in GTA"
        description="Contact HomeRootsCare for professional home services in GTA. Get quotes for house cleaning, yard maintenance, and snow removal services."
        keywords="contact cleaning service GTA, home service quote Toronto, book house cleaning, schedule yard maintenance, snow removal quote"
      />
      <Contact />
    </div>
  );
}