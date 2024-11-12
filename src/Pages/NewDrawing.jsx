import { useEffect, useState } from "react";

const NewDrawings = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json"); 
        const data = await response.json();

        
        const last4Images = data.slice(-4);
        setImages(last4Images.reverse()); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
      Recently added Drawings
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {images.map((image) => (
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
          <img 
            src={image.url} 
            alt={image.name} 
            className="w-full h-fit object-cover"
          />
          <div className="p-4 flex flex-col justify-between flex-grow">
            <h3 className="text-lg font-semibold text-gray-800 mt-auto">{image.name}</h3>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default NewDrawings;
