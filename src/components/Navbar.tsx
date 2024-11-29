import React, { useState } from 'react';
import { Menu, X, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About Us' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-emerald-600 font-semibold' : 'text-gray-700 hover:text-emerald-600';
  };

  return (
    <div className="fixed w-full z-50 px-4 pt-4">
      <nav className="max-w-6xl mx-auto bg-white/75 backdrop-blur-md border-2 border-white/20 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] transition-shadow duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center group">
                <div className="p-2 rounded-xl bg-emerald-50/80 group-hover:bg-emerald-100/90 transition-all duration-300">
                  <Home className="h-6 w-6 text-emerald-600" />
                </div>
                <span className="ml-2 text-xl font-bold text-gray-800/90">HomeRootsCare</span>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`${isActive(path)} transition-all duration-300 py-2 px-3 rounded-lg hover:bg-white/50`}
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="p-2 rounded-lg text-gray-600 hover:bg-white/50 transition-all duration-300"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden border-t-2 border-white/20">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`${isActive(path)} block px-3 py-2 rounded-lg hover:bg-white/50 transition-all duration-300`}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}