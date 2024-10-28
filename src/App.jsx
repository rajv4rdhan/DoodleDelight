import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Box from './Pages/box.jsx';
import AgeGroup1 from './Pages/AgeGroup1';
import AgeGroup2 from './Pages/AgeGroup2';
import AgeGroup3 from './Pages/AgeGroup3';
import AgeGroup4 from './Pages/AgeGroup4';
import Navbar from './Pages/nav.jsx';
import './index.css';
import Footer from './Pages/footer.jsx';
import AnalyticsTracker from './AnalyticsTracker';

import ContactPage from './Pages/contactus.jsx';


function App() {
  


  return (
    <>
    <Navbar/>
    
    <Router>
    <AnalyticsTracker />
      <Routes>
        <Route path="/" element={<Box />} />
        <Route path="/age" element={<AgeGroup1 />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/age3-3" element={<AgeGroup3 />} />
        <Route path="/age4-4" element={<AgeGroup4 />} />
      </Routes>
    </Router>
    
    <Footer/>
    </>
  );
}

export default App;
