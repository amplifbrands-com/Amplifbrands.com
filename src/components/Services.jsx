import React from 'react'
import "../styles/Services.css"
import '../styles/base.css'
import { services } from '../assets/servies-page-data2';
import heroImg from '../assets/service-page-icons/hero-icon.svg'

import Whatsapp from './Whatsapp';
import ScrollToTopButton from './ScrollToTopButton';

const ServiceHero = () => {

  // const serviceTitles = [
  //   "Digital Marketing Consulting",
  //   "Website Development",
  //   "Website Maintenance",
  //   "PPC Management",
  //   "SEO Services",
  //   "E-commerce"
  // ]
  return (
    <section className='hero-sec'>
      <div className="hero-card">
        <h1 className="hero-card-title-yellow">
          explore our expert solutions
        </h1>

        <div className="hero-card-links-wrapper">
          <a href="" className="hero-card-link me-sm-5 mb-5 mb-sm-0">PPC advertising</a>
          <a href="" className="hero-card-link hero-card-link-active">website servies</a> 
        </div>
      </div>
      <img src={heroImg} alt="" className="sevice-hero-img" />
    </section>
  )

}

// const Deliverable = ({deliverable, theme}) => {
  
//   return (
//             <div className="deliverables col-12 col-md d-flex justify-content-center">
//               <div className=" d-flex flex-md-column flex-row align-items-md-center justify-content-md-center " >
//                   <img src={ theme==='light'? deliverable.icon.light: deliverable.icon.dark} alt="" className="deliverable-icon" />
//                   <p className="body-text text-center" >{deliverable.subtitle}</p>
//               </div>
//             </div>
//   )
// }


// const KeyActivity = ({activity, theme}) => {
//   return (
//           <div className="key-activities mb-4 d-flex align-items-center">
//                 <img src={ theme==="light" ? activity.icon.light: activity.icon.dark} alt="" className="service-key-icon" />
//                 <p className='body-text'>{activity.subtitle}</p>
//           </div>
//   )
// }

const ServiceCard = ({title, index, offerings, img}) => {

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
          <a href="" className='cta-btn mx-auto mx-0'>learn more</a>
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
          <ServiceCard key={index} title={service.title} offerings={service.offerings} img={service.img} index={index} theme={theme} />
                    )
      )} 
      {/**from aniket-> ScrollTopButton compoonent added  */}
    <ScrollToTopButton/>
    {/**from aniket-> ScrollTopButton component ended  */}     
    </div>
  )
}

export default Services
