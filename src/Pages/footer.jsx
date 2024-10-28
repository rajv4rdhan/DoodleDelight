import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">KidsColor</h4>
              <p className="text-purple-200">
                Making coloring fun and educational for children around the world.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-purple-200 hover:text-white">Home</a></li>
                <li><a href="#" className="text-purple-200 hover:text-white">Gallery</a></li>
                <li><a href="#" className="text-purple-200 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-purple-200 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Categories</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-purple-200 hover:text-white">Animals</a></li>
                <li><a href="#" className="text-purple-200 hover:text-white">Fairy Tales</a></li>
                <li><a href="#" className="text-purple-200 hover:text-white">Space</a></li>
                <li><a href="#" className="text-purple-200 hover:text-white">Nature</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
              <p className="text-purple-200 mb-4">
                Subscribe to get updates on new coloring pages!
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-l-full w-full focus:outline-none text-gray-800"
                />
                <button className="bg-purple-600 px-6 py-2 rounded-r-full hover:bg-purple-700 transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-purple-800 mt-8 pt-8 text-center text-purple-200">
            <p>&copy; 2024 KidsColor. All rights reserved.</p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
