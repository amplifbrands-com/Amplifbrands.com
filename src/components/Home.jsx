import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import '../styles/base.css';
import '../styles/home.css';
import { whyUsData } from '../assets/why-us-data';
import WhyUs from './cards/home-whyus';
import ServiCard from './cards/our-services';
import { serviceData } from '../assets/service-card-data';
import Form from './cards/message-form';
import Testimonials from './cards/testimonials';

import { PopupButton } from "react-calendly";
import { FaArrowRightLong } from "react-icons/fa6";


const Home = ({theme}) => {
  return (
  <div>
    <section className="hero-sec hero-sec-reverse row mx-auto">
        <div className="section-title row text-center col-12"></div>
        <div className="row">
          <div className="col-lg-8 col-md-8">
            <div className="content">
          <h1 className='main-header '>We help digital-first businesses  maximize their revenue with paid advertising campaigns and stunning websites</h1>

            <h5 className="sub-header pt-2">
            Stop wasting your money and time on ineffective ad campaigns and low-quality websites.
            </h5>
            <h5 className="body-text pt-5">
            Partner with <span className="highligh">Amplif </span>
             Today and skyrocket your sales 🚀 
            </h5>
            </div>
            <PopupButton
              url="https://calendly.com/amplifbrands/free-consultation-meeting"
              rootElement={document.getElementById("root")}
              className="cta-btn mt-5 ms-5 d-none d-md-block"
              text={<h5> Schedule FREE Audit Call Now <FaArrowRightLong className="arrow" /></h5>}
              />
           <PopupButton
              url="https://calendly.com/amplifbrands/free-consultation-meeting"
                   
                rootElement={document.getElementById("root")}
                className="cta-btn mt-5 ms-5 d-block d-md-none"
                text="Book a meeting"
          />
            
          </div>
          <div className="col-lg-4 col-md-4 mt-3 p-3 ">
            
          </div>
        </div>
      </section>
    <section className=" mission text-center mx-auto col-12">
      <h2 className='main-header mb-3'>
        Our Mission
      </h2>
      <p className='sub-header col-12 col-sm-8 mx-auto'>Our mission is to empower digital brands to thrive by delivering exceptional services. Client success is our top priority. We achieve this by maximizing their revenue and crafting remarkable online experiences. </p>
    </section>
    <section className=" row mx-auto why-us">
      <div className="section-title  text-center row col-12 mx-auto">
        <h3 className='main-header col-12'>
          Why Choose Us?
        </h3>
      </div>


     <div className="slider-home-outer">
        <div className="whyus-sec col-12">
          {
            whyUsData.map(cont =>(
              <div className="whyus-item" key={cont.title}>
                <WhyUs icon={cont.icon} title={cont.title} subtitle={cont.subtitle} content={cont.content} theme={theme} />
              </div>
            ))
          }
        </div>
      </div>

    </section>
    <section className=" row mx-auto">
      <div className="section-title row text-center col-12 mx-auto">
        <h2 className='main-header col-12 mb-5'>
        Our Services
        </h2>
        {serviceData.map( (item, index) =>(
          <div className="col-md-6" key={index}>
          <h5 className='sub-header col-12 col-sm-8 mb-3' >{item.name}</h5>
          <div className="service-card">
            <div className="service-slider">
              
            
            {
            item.services.map(cont =>(
          <ServiCard key={cont.title} icon={cont.icon} title={cont.title} />))
        }
          </div>
          </div>
          </div>
        ))}
       
      </div>
    </section>
    {/* <section>
      <Testimonials />
    </section> */}
    {/* <section className=" row mx-auto form-sec">
      <div className="section-title text-center col-12 row mx-auto">
        <h3 className="main-header col-12">
          Hello!
        </h3>
        <h6 className="sub-header col-12 col-sm-8 mx-auto">If you have a requirement to discuss or want to learn more about how we work, feel free to reach out.</h6>
      </div>
      <Form />
    </section> */}

  </div>
  )
}

export default Home
