import * as React from 'react';
import { ArrowRight, Palette } from 'lucide-react';
const pages = ['Home', 'policy', 'Blog'];

function Navbar() {

  return (
    <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Palette className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-bold text-purple-600">DOODLE</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-600 hover:text-purple-600">Home</a>
            <a href="/age" className="text-gray-600 hover:text-purple-600">Gallery</a>
            <a href="#" className="text-gray-600 hover:text-purple-600">About</a>
            <a href="/contact" className="text-gray-600 hover:text-purple-600">Contact</a>
          </div>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors flex items-center">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </nav>
  );
}
export default Navbar;
