import React from 'react'
import "../styles/Services.css"
import '../styles/base.css'
import {services} from "../assets/service-page-data"
//from aniket-> adding whatsapp floating import
import Whatsapp from './Whatsapp';
import ScrollToTopButton from './ScrollToTopButton';

const ServiceHero = () => {

    const serviceTitles = [
      "Digital Marketing Consulting",
      "Website Development",
      "Website Maintenance",
      "PPC Management",
      "SEO Services",
      "E-commerce"
    ]

    return (
     <div className="service--hero">
     {/** from aniket adding whatsapp integration starts  */}
  <Whatsapp/>
  {/** from aniket  whatsapp integration ends here   */}
      <div className="hero--content">
        <h1 className=" main-header text-center" >Explore Our Expert Solutions</h1>
        <div className="hero--list">
         { serviceTitles.map((title, index) => (<a href={`#${services[index].title}`} key={index}>{title}</a>)) }
        </div>
      </div>
     </div>
   )
 }

const Deliverable = ({deliverable, theme}) => {
  
  return (
            <div className="deliverables col-12 col-md d-flex justify-content-center">
              <div className=" d-flex flex-md-column flex-row align-items-md-center justify-content-md-center " >
                  <img src={ theme==='light'? deliverable.icon.light: deliverable.icon.dark} alt="" className="deliverable-icon" />
                  <p className="body-text text-center" >{deliverable.subtitle}</p>
              </div>
            </div>
  )
}


const KeyActivity = ({activity, theme}) => {
  return (
          <div className="key-activities mb-4 d-flex align-items-center">
                <img src={ theme==="light" ? activity.icon.light: activity.icon.dark} alt="" className="service-key-icon" />
                <p className='body-text'>{activity.subtitle}</p>
          </div>
  )
}

const ServiceCard = ({service, index, theme}) => {

  return (
    <section  id={service.title} className="">

          <div key={index} className="">

                  <div className="service--info mb-5">
                    <div className="row justify-content-between align-items-md-center g-5">
                        <h4 className="important-header mb-3 d-md-none d-block">{service.title}</h4>

                        <div className={`col-md-6 col-lg-4 col-12 ${index % 2 !== 0 ? 'order-md-2' : ''}`}>
                              <img src={service.image} alt={service.title} className="service-image img-fluid" />
                        </div>

                        <div className={`col-md-6 col-lg-8 col-12 ${index % 2 !== 0 ? 'order-md-1' : ''}`}>
                                <h4 className='important-header mb-3 d-none d-md-block'>{service.title}</h4>
                                <p className='body-text'>{service.description}</p>
                        </div>
                    </div>
                  </div>
                        <div className="service--deliverables mb-5">
                            <h6 className='text-center main-header mb-2'>Deliverables</h6>
                            <div className="row deliverables-wrapper">
                              {service.deliverables.map((deliverable, index) => (
                                  
                                  <Deliverable key={index} deliverable={deliverable} theme={theme} />
                                  
                              ))}
                            </div>
                        </div>
                        <div className="service--activities mb-5">
                            <h6 className='mb-4 main-header' >Key Activities:</h6>
                              { 
                                service.keyActivities.map( (activity, index) => (
                                 <KeyActivity key={index} activity={activity} theme={theme} />
                                ))  
                              }
                        </div>
                        <div className="d-flex justify-content-center">
                              <button className="cta-btn">Learn More</button>
                        </div>                  
                      </div>
    </section>

  )
}

const Services = ({theme}) => {
    
  return (
    <div className="services-container">
       <ServiceHero />
        { services.map( (service, index) => (
          <ServiceCard key={index} service={service} index={index} theme={theme} />
                    )
      )} 
      {/**from aniket-> ScrollTopButton compoonent added  */}
    <ScrollToTopButton/>
    {/**from aniket-> ScrollTopButton component ended  */}     
    </div>
  )
}

export default Services
