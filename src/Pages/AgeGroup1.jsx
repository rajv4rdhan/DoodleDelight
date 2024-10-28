import React, { useEffect, useState } from 'react';
import './Age1.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { Link, useLocation  } from 'react-router-dom';

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const location = useLocation();
  const currentAge = new URLSearchParams(location.search).get('age');
  const group = {0:"All",1:"one",2:"two",3:"three"};
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
        }
        else {
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
    <div className='bg-gradient-to-b from-purple-100 to-pink-100'>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& > *': {
            m: 1,
          },
        }}
      >
         <ButtonGroup variant="text" aria-label="Basic button group" sx={{ minHeight: '48px' }}>
          
          {[0,'1', '2', '3'].map((age) => (
            <Link to={age === 0 ? '/age' : `/age?age=${age}`} key={age}>
              <Button
                sx={{
                  color: currentAge === age ? "#ffff" : "#9333ea", // Change text color if active
                  backgroundColor: currentAge === age ? "#9333ea" : "transparent", // Change background if active
                  width: '150px',  // Set a fixed width
                  '&:hover': { backgroundColor: currentAge === age ? "#9333ea" : '#9333ea', color: currentAge === age ? "#ffff" : "#ffff" },
                }}
              >
                {age === 0 ? `${group[age]} Age Group`: `Age Group ${group[age]}`}
              </Button>
            </Link>
          ))}
        </ButtonGroup>
      </Box>
    <div className="bg-gradient-to-b from-purple-100 to-pink-100 min-h-screen flex flex-col items-center justify-center m-0">



    <div className="App flex flex-wrap justify-center my-10">
    {filteredData.map((item) => (
  <div key={item.id} className="m-3 flex flex-col bg-white shadow-md border border-slate-200 rounded-xl my-6 w-96">
    <div className="m-2.5 overflow-hidden rounded-md h-80 flex justify-center items-center bg-white">
      <img
        className="w-full h-full object-contain"
        src={item.url}
        alt={`${item.name}'s profile`}
      />
    </div>
    <div className="p-6 text-center">
      <h4 className="mb-1 text-xl font-semibold text-slate-800">{item.name}</h4>
      <h6 className="mb-1 text-xs font-sans text-purple-600">Age Group {item.ageGroup}</h6>
    </div>
    <div className="flex justify-center p-6 pt-2 gap-7">
    <Button
      variant="contained"
      color="primary"
      onClick={() => printImage(item.url)}
      sx={{
        backgroundColor: '#7c3aed', 
        '&:hover': {
          backgroundColor: '#6d28d9', 
        },
      }}
      className="min-w-32 rounded-md text-sm text-white transition-all shadow-md hover:shadow-lg    focus:shadow-none active:shadow-none disabled:opacity-50"
    >
        PRINT
      </Button>
    </div>
  </div>
))}
      </div>
    </div>

    </div>
  );

  
}

export default App;
