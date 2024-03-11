import React from 'react';
import "../styles/portfolio.css"
import Whatsapp from './Whatsapp';
import ScrollToTopButton from './ScrollToTopButton';
import {projects} from "../assets/portfolio-page-data";
import { Link } from 'react-router-dom';



const ImageGallery = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      background: 'linear-gradient(to right, #5D9FB5 3%, #5D9FB5 100%)',
      marginBottom:'10px',
      marginTop:'30px'
      
    }}>
      <img 
        className="image" 
        src="../src/assets/portfolio/fabocast.png" 
        alt="Image 1" 
        style={{ width: '200px', height: '75px', margin: '0 10px' }}
      />
      <img 
        className="image" 
        src="../src/assets/portfolio/jinmart.png" 
        alt="Image 2" 
        style={{ width: '200px', height: '75px', margin: '0 10px' }}
      />
      <img 
        className="image" 
        src="../src/assets/portfolio/rankfast.png" 
        alt="Image 3" 
        style={{ width: '200px', height: '75px', margin: '0 10px' }}
      />
      <img 
        className="image" 
        src="../src/assets/portfolio/haricurus.png" 
        alt="Image 4" 
        style={{ width: '200px', height: '75px', margin: '0 10px' }}
      />
      <img 
        className="image" 
        src="../src/assets/portfolio/eazygrad.png" 
        alt="Image 5" 
        style={{ width: '200px', height: '75px', margin: '0 10px' }}
      />
    </div>
  );
};



const PortfolioHero = () => {
  return (
   
    
    <div className="portfolio--hero">
      <div className="row align-items-center">
        <div className="col-12 col-md">
          <h1 className="hero--title mb-3">Your Digital <span className="hero--highlight">Success</span> Partner</h1>
          <p className="hero--desc">Unlock the full potential of your brand with our expert digital marketing solutions. Together, let's dominate the digital landscape and achieve your goals.</p>
        </div>
        <div className="col-12 col-md">
          <img src="/portfolio-page/portfolio-hero.png" alt="portfolio" className="img-fluid hero-image" />
        </div>
        
      </div>
      
    </div>

    
  )
}

const Project = ({project, index}) =>{
  return(
    <section className="project-item">
      
      <div className="row align-items-center g-5">
        <div className={`col-12 col-md ${index % 2 !== 0 ? 'order-2' : ''}`}>
            <img src={project.mainImage} alt={project.title} className="project-image img-fluid" />

        </div>
        <div className={`col-12 col-md ${index % 2 !== 0 ? 'order-1' : ''}`}>
            <h4 className="important-header my-4">{project.title}</h4>
            <p className='body-text mb-4'>{project.subtitle}</p>
            <Link to={`/portfolio/${project.id}`} className="text-btn">read more...</Link>
        </div>
      </div>
    
    {/* Add more details as needed */}
  </section>
  )
}



const Portfolio = () => {
  return (
    <div>
    
   
    <div className="portfolio-container">
    
        <Whatsapp/>
        <PortfolioHero />
        
        < ImageGallery/>
        

        <h1 className="text-center my-5">Our Projects</h1>
       
        
       
        { projects.map( (project, index) => (
            <Project key={index} project={project} index={index} />
                      )
                      
        )} 
         
        
      <ScrollToTopButton/>
     
 </div>
 </div>
  );
};

export default Portfolio;