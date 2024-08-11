import React from 'react';
import './CardGallery.css'; // Import the CSS file for styling

const Subscribe = () => {
    return (
      <section className="wrapper">
        <div className="container_gallery">
          <div className="img__container">
            <img 
              src="https://img.freepik.com/premium-photo/old-lady-with-umbrella-urban-steps_961875-283687.jpg?w=740" 
              alt="salad" 
              className="img" 
            />
          </div>
          <div className="content">
            <h2 className="subtitle">Subscribe today</h2>
            <h1 className="title">Never miss a Drawing</h1>
            <input 
              type="text" 
              className="mail" 
              placeholder="Your email address" 
              name="mail" 
              required 
            />
            <input 
              type="submit" 
              value="Subscribe" 
              className="subscribe" 
            />
            <p className="text">We won’t send you spam. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Subscribe;