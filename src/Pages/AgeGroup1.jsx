import React, { useEffect, useState } from 'react';
import './Age1.css';
import Button from '@mui/material/Button';
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch the JSON data
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const printImage = (url) => {
    const printWindow = window.open('', '', 'width=700,height=800');
    printWindow.document.write(`<html><head><title>Print Image</title></head><body><img src="${url}" style="width:100%; height:auto;" /></body></html>`);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  return (
    <div className="App">
      <h1>Color Book</h1>
      <div className="card-list">
        {data.map(item => (
          <div key={item.id} className="card">
            <img src={item.url} alt={item.name} className="box-image" />
            <h2>{item.name}</h2>
            <p>{item.description}<br/><br/>
            <Button onClick={() => printImage(item.url)} className="print-button" variant="outlined">Print Image</Button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
