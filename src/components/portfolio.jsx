import React from 'react';
import "../styles/portfolio.css"
import {projects} from "../assets/portfolio-page-data";
import { Link } from 'react-router-dom';


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
    
  </section>
  )
}



const Portfolio = () => {
  return (
    <div className="portfolio-container">
        <PortfolioHero />
        <h1 className="text-center my-5">Our Projects</h1>
        { projects.map( (project, index) => (
            <Project key={index} project={project} index={index} />
        )
        )} 
     
 </div>
  );
};

export default Portfolio;