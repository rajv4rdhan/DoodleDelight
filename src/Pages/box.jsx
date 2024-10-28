import React from 'react';
import { ArrowRight, Download, Palette, Users, Heart, Star } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Unleash Your Child's
              <span className="text-purple-600"> Creativity</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Discover hundreds of fun coloring pages that will keep your children entertained
              while developing their artistic skills and imagination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors flex items-center justify-center">
                Start Coloring Now
                <Palette className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full hover:bg-purple-600 hover:text-white transition-colors flex items-center justify-center">
                Download Pages
                <Download className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <img 
              src="/api/placeholder/600/400" 
              alt="Children coloring" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose KidsColor?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Endless Variety</h3>
              <p className="text-gray-600">
                Hundreds of coloring pages across different themes and difficulty levels
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Kid-Friendly</h3>
              <p className="text-gray-600">
                Safe and easy-to-use interface designed specifically for children
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Educational</h3>
              <p className="text-gray-600">
                Promotes creativity, focus, and motor skill development
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Categories */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Popular Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Animals', 'Fairy Tales', 'Space', 'Nature'].map((category) => (
            <div key={category} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="/api/placeholder/300/200" 
                alt={category} 
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{category}</h3>
                <div className="flex items-center mt-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600 ml-1">4.8</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      
    </div>
  );
};

export default LandingPage;