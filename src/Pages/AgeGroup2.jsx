import React, { useEffect, useState } from 'react';
import './Age1.css';
import { Link, useLocation  } from 'react-router-dom';
function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const location = useLocation();
  useEffect(() => {
    // Fetch the JSON data
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        setData(data);

        const params = new URLSearchParams(window.location.search);
        const age = params.get('age');

        // Filter data based on the age parameter
        if (age) {
          console.log('Filtering data based on age:', age);
          const filtered = data.filter(item => item.ageGroup === age);
          setFilteredData(filtered);
        } else {
          setFilteredData(data); 
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [location.search]);

  const printImage = (url) => {
    const printWindow = window.open('', '', 'width=700,height=800');
    printWindow.document.write(`<html><head><title>Print Image</title></head><body><img src="${url}" style="width:100%; height:auto;" /></body></html>`);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  return (
    <div className="bg-cyan-100 min-h-screen flex flex-col items-center justify-center m-0">
      <div className='flex'>
      <Link to="/age?age=1" className="text-white bg-slate-800 px-4 py-2 rounded-md shadow-md hover:shadow-lg">Age 1</Link>
      <Link to="/age?age=2" className="text-white bg-slate-800 px-4 py-2 rounded-md shadow-md hover:shadow-lg">Age 2</Link>
      <Link to="/age?age=3" className="text-white bg-slate-800 px-4 py-2 rounded-md shadow-md hover:shadow-lg">Age 3</Link>
      </div>

      <div className="App flex flex-wrap justify-center my-10">
        {filteredData.map((item) => (
          <div
            key={item.id} 
            className="m-3 flex flex-col bg-white shadow-sm border border-slate-200 rounded-xl my-6 w-96"
          >
            <div className="m-2.5 overflow-hidden rounded-md h-80 flex justify-center items-center">
              <img
                className="w-full h-full object-contain"
                src={item.url}
                alt={`${item.name}'s profile`}
              />
            </div>
            <div className="p-6 text-center">
              <h4 className="mb-1 text-xl font-semibold text-slate-800">
                {item.name}
              </h4>
            </div>
            <div className="flex justify-center p-6 pt-2 gap-7">
              <button
                className="min-w-32 rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                onClick={() => printImage(item.url)}
              >
                PRINT
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
