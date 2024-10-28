import React from 'react';
import { Award, Users, Aperture } from 'lucide-react';

const PurposeSection = () => {
  return (
    <div className="bg-purple-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Born from a Passion to Empower Children
            </h2>
            <p className="text-lg text-gray-600 mb-8">
            During my community development project at a local government school in a rural area, I observed that coloring pages significantly engage children. They enhance focus, promote learning about shapes and colors, and foster creativity. However, I found that many coloring sheets available online are either paid or difficult to download and print, which limits access for these children. To address this gap, I propose the creation of a dedicated website offering free, easily accessible coloring sheets for children. This platform will feature a variety of themes, including animals, nature, holidays, and educational topics, encouraging creativity and learning in a fun way.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Award className="h-6 w-6 text-purple-600" />
                <span className="text-gray-600">Award-Winning</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-6 w-6 text-purple-600" />
                <span className="text-gray-600">User-Friendly</span>
              </div>
              <div className="flex items-center space-x-2">
                <Aperture className="h-6 w-6 text-purple-600" />
                <span className="text-gray-600">Creative Focus</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <img
              src="/file.png"
              alt="Children Coloring"
            //   className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurposeSection;