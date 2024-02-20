import React, {useContext} from 'react'
import "../styles/Services.css"
import {services} from "../assets/service-page-data"
import { ThemeContext } from "../context/themeContext";

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
                  <p className={`${theme === 'light' ? 'sub-header text-center': 'text-light sub-header text-center'}`}>{deliverable.subtitle}</p>
              </div>
            </div>
  )
}


const KeyActivity = ({activity, theme}) => {
  return (
          <div className="key-activities mb-4 d-flex align-items-center">
                <img src={ theme==="light" ? activity.icon.light: activity.icon.dark} alt="" className="service-key-icon" />
                <p className={`${theme === 'light' ? 'body-text': 'text-light body-text text-center'}`}>{activity.subtitle}</p>
          </div>
  )
}

const ServiceCard = ({service, index, theme}) => {

  return (
    <section className={`${theme === 'light' ? 'service-wrapper': 'service-wrapper-dark'}`} id={service.title}>

          <div key={index} >

                  <div className="service--info mb-5">
                      <div className="row justify-content-between align-items-md-center g-5">
                          <h4 className="important-header mb-3 d-md-none d-block">{service.title}</h4>

                          <div className={`col-md-6 col-lg-8 col ${index % 2 !== 0 ? 'order-md-2' : ''}`}>
                              <h4 className={`${theme === 'light' ? 'body-text': 'text-light body-text'}`}>{service.title}</h4>
                              <p className={`${theme === 'light' ? 'body-text': 'text-light body-text'}`}>{service.description}</p>
                          </div>
                          <div className={`col-md-6 col-lg-4 col ${index % 2 !== 0 ? 'order-md-1' : ''}`}>
                              <img src={service.image} alt={service.title} className="service-image img-fluid" />
                          </div>
                        </div>
                  </div>
                        <div className="service--deliverables mb-5">
                            <h6 className={`${theme === 'light' ? 'text-center main-header mb-2': 'text-light text-center main-header mb-2'}`}>Deliverables</h6>
                            <div className="row deliverables-wrapper">
                              {service.deliverables.map((deliverable, index) => (
                                  
                                  <Deliverable key={index} deliverable={deliverable} theme={theme} />
                                  
                              ))}
                            </div>
                        </div>
                        <div className="service--activities mb-5">
                            <h6 className={`${theme === 'light' ? 'mb-4 main-header': 'text-light mb-4 main-header'}`}>Key Activities:</h6>
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

const Services = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="services-container">
       <ServiceHero />
        { services.map( (service, index) => (
          <ServiceCard key={index} service={service} index={index} theme={theme} />
                    )
      )}      
    </div>
  )
}

export default Services
