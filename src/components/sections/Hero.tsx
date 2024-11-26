import React from 'react';

export default function Hero() {
  return (
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
  );
}