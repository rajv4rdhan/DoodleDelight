import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Box from './Pages/box.jsx';
import AgeGroup1 from './Pages/AgeGroup1';
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
      </Routes>
    </Router>
    
    <Footer/>
    </>
  );
}

export default App;
