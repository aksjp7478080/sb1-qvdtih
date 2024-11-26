import React from 'react';
import { Home } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center mb-4">
          <Home className="h-8 w-8 text-emerald-400" />
          <span className="ml-2 text-xl font-bold">HomeRootsCare</span>
        </div>
        <p className="text-gray-400">© {new Date().getFullYear()} HomeRootsCare. All rights reserved.</p>
      </div>
    </footer>
  );
}