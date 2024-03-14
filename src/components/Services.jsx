import React from 'react'
import { Link } from 'react-router-dom';

import "../styles/Services.css"
import '../styles/base.css'

import { services } from '../assets/servies-page-data2';
import heroImg from '../assets/service-page-icons/hero-icon.svg'
import ScrollToTopButton from './ScrollToTopButton';


const ServiceHero = () => {
  return (
    <section className='hero-sec'>
      <div className="hero-card">
        <h1 className="hero-card-title-yellow">
          explore our expert solutions
        </h1>

        <div className="hero-card-links-wrapper">
          <Link to="/google-ads" className="hero-card-link me-sm-5 mb-5 mb-sm-0">PPC advertising</Link>
          <Link to="/custom" className="hero-card-link hero-card-link-active">website servies</Link> 
        </div>
      </div>

      <img src={heroImg} alt="" className="sevice-hero-img" />
    </section>

  )

}

const ServiceCard = ({title, index, offerings, img, link}) => {

  return (

    <section   id={title} className={index % 2 === 0 ? 'service blue-sec reversed' : 'service'}>
      <div className="service-card-details">
        <h2 className="service-title main-header blue mb-5">
         {title}
        </h2>

        <div className="offerings">
          <h5 className='text-capitalize mb-3'>what we offer:</h5>
          <ul className='ms-5 mb-5'>
            {
              offerings.map((offer, index)=>{
                return (
                  <li key={index} className='body-text'>
                    {offer}
                  </li>
                )
              })
            }
          </ul>
          <Link to={link} className='cta-btn mx-auto mx-0'>learn more</Link>
        </div>
      </div>
      <img src={img} alt={`${title} image`} className='service-img' />
    </section>

  )
}

const Services = ({theme}) => {
    
  return (
    <div className="services-container">
       <ServiceHero />
        { services.map( (service, index) => (
          <ServiceCard key={index} title={service.title} link={service.link} offerings={service.offerings} img={service.img} index={index} theme={theme} />
          )
      )} 
    <ScrollToTopButton/>  
    </div>
  )
}

export default Services
