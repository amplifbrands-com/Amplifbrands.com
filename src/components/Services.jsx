import React from 'react'
import "../styles/Services.css"
import {services} from "../assets/service-page-data.js"

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
      <div className="hero--content">
        <h1 className="text-center" >Explore Our Expert Solutions</h1>
        <div className="hero--list">
         { serviceTitles.map((title) => (<p>{title}</p>)) }
        </div>
      </div>
     </div>
   )
 }

const Deliverable = ({deliverable}) => {
  return (
            <div className="deliverables col-12 col-md d-flex justify-content-center">
              <div className=" d-flex flex-md-column flex-row align-items-md-center justify-content-md-center " >
                  <img src={deliverable.icon} alt="" className="deliverable-icon" />
                  <p className="text-center">{deliverable.subtitle}</p>
              </div>
            </div>
  )
}


const KeyActivity = ({activity}) => {
  return (
          <div className="key-activities mb-4 d-flex align-items-center">
                <img src={activity.icon} alt="" className="service-key-icon" />
                <p className="body-text">{activity.subtitle}</p>
          </div>
  )
}

const ServiceCard = ({service, index}) => {

  return (
    <div className="service-wrapper">

          <div key={index} className="service-card">

                  <div className="service--info mb-5">
                      <div className="row justify-content-between align-items-md-center g-5">
                          <h2 className="important-header mb-3 d-md-none d-block">{service.title}</h2>

                          <div className={`col-md-6 col-lg-8 col ${index % 2 !== 0 ? 'order-md-2' : ''}`}>
                              <h2 className="important-header mb-3 d-md-block d-none">{service.title}</h2>
                              <p className="body-text">{service.description}</p>
                          </div>
                          <div className={`col-md-6 col-lg-4 col ${index % 2 !== 0 ? 'order-md-1' : ''}`}>
                              <img src={service.image} alt={service.title} className="service-image img-fluid" />
                          </div>
                        </div>
                  </div>
                        <div className="service--deliverables mb-5">
                            <h4 className="text-center mb-4">Deliverables</h4>
                            <div className="row">
                              {service.deliverables.map((deliverable, index) => (
                                  
                                  <Deliverable key={index} deliverable={deliverable} />
                                  
                              ))}
                            </div>
                        </div>
                        <div className="service--activities mb-5">
                            <h4 className="mb-4" >Key Activities:</h4>
                              { 
                                service.keyActivities.map( (activity, index) => (
                                 <KeyActivity key={index} activity={activity} />
                                ))  
                              }
                        </div>
                        <div className="d-flex justify-content-center">
                              <button className="cta-btn">Learn More</button>
                        </div>                  
                      </div>
       </div>

        )
}

const Services = () => {
  
  return (
    <div className="services-container">
       <ServiceHero />
        { services.map( (service, index) => (
          <ServiceCard key={index} service={service} index={index} />
                    )
      )}      
    </div>
  )
}

export default Services
