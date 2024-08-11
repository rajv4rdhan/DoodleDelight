import React from 'react';
import { Link } from 'react-router-dom';
import './Age.css'
import Subscribe from './CardGallery.jsx';

function Box() {
  return (
    <>
    <div style={{ paddingTop: '0px' }}>
      <img className="blur-image" src="bg.jpg" width={'100%'} />
      <div className="overlay-text">
      A World of Colorful <br/><b>Possibilities</b>
      </div>
      </div>

    <section className="services">
      <h2 className="services-heading">Colouring Sheets</h2>
      <div className="services-list">
        
        <div className="service-item">
        <img className="service-logo" src="1.png" alt="Wedding Planning Logo" />

        <Link to="/age1-1" style={{ textDecoration: 'none' }}> <h3>Toddlers <br/>(Ages 1-3)</h3> </Link>
          
        </div>

        <div className="service-item">
        <img className="service-logo" src="2.png" alt="Photography Logo" />
        <Link to="/age2-2" style={{ textDecoration: 'none' }}> <h3>Preschoolers <br/>(Ages 3-5)</h3> </Link>
          
        </div>

        <div className="service-item">
        <img className="service-logo" src="3.png" alt="Decoration Logo" />

        <Link to="/age3-3" style={{ textDecoration: 'none' }}> <h3>Early Elementary <br/>(Ages 6-8)</h3> </Link>
          
        </div>

        <div className="service-item">
        <img className="service-logo" src="4.png" alt="Decoration Logo" />

        <Link to="/age4-4" style={{ textDecoration: 'none' }}> <h3>Late Elementary <br/> (Ages 9-12)</h3>  </Link>
          
        </div>
        
      </div>
    </section>
    
    <div className='use'>
    <div className='text__data'>
      <h2>Empowering Learning Through Coloring Books</h2>
      <p>Coloring books can be a powerful educational tool for children living in poor parts of India, especially those attending government schools with limited resources. These books provide a creative outlet that stimulates the imagination and helps children develop essential motor skills, such as hand-eye coordination and fine motor control. For students in underprivileged areas, coloring books offer an affordable and accessible way to engage with learning, often introducing them to new concepts, shapes, and colors in a fun and interactive manner. Moreover, the act of coloring can be therapeutic, offering a sense of calm and focus, which is particularly beneficial in challenging environments where children may face daily stress and hardships. By providing a simple yet effective means of self-expression, coloring books can help bridge the gap in educational opportunities, fostering a love for learning and creativity in children who might otherwise have limited exposure to such resources.</p>
    </div>
    <div className='illu__image'>
    <img className="service-image" src="child.png" alt="child image" />
    </div>  
    </div>    
    
    
    
    <Subscribe/>
    
    
    </>
  );
}

export default Box;
