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

import Whatsapp from './Whatsapp';
import ScrollToTopButton from './ScrollToTopButton';


const Home = ({theme}) => {
  return (
  <div>
  <Whatsapp/>
    <section className="hero-sec row mx-auto">
        <div className="section-title row text-center col-12"></div>
        <div className="row">
        <h1 className='main-header d-block d-md-none'>Ready to Amplif Your Brand?</h1>

          <div className="col-lg-8 col-md-8 order-2 order-md-1">
          <h1 className='main-header d-none d-md-block'>Ready to Amplif Your Brand?</h1>

            <h6 className="sub-header pt-2">
              Partner with Amplif - Your Accelerator in the Digital Era
            </h6>
            <p className="body-text pt-5">
              Welcome to Amplif, where we turn brand visions into realities.
              With creativity as our compass and strategy as our guide, we're
              here to propel your brand forward. Let's embark on a journey to
              redefine success together.
            </p>
            <button type="button" className="cta-btn mt-5" >Get a Free Consultation</button>
            
          </div>
          <div className="col-lg-4 col-md-4 mt-3 p-3 order-1 order-md-2">
            <img src="/hero-image.png" alt="heroImage" className="img-fluid" />
          </div>
        </div>
      </section>
    <section className="text-center row mx-auto col-12">
      <h3 className='main-header'>
        Our Mission
      </h3>
      <p className='sub-header col-12 col-sm-8 mx-auto'>Our mission at Amplif is to empower startup entrepreneurs with tailored marketing solutions crafted by our experts, addressing their unique pain points, driving exponential growth, and unleashing their full potential.</p>
    </section>
    <section className=" row mx-auto">
      <div className="section-title text-center row col-12 mx-auto">
        <h3 className='main-header col-12'>
          Why Choose Us?
        </h3>
        <h6 className='sub-header col-12 col-sm-8 mx-auto'>Navigating the Digital Frontier</h6>
      </div>


     <div class="slider-home-outer">
      <div class="whyus-sec col-12">
        {
          whyUsData.map(cont =>(
            <div class="whyus-item" key={cont.title}>
              <WhyUs icon={cont.icon} title={cont.title} subtitle={cont.subtitle} content={cont.content} theme={theme} />
            </div>
          ))
        }
      </div>
    </div>

    </section>
    <section className=" row mx-auto">
      <div className="section-title row text-center col-12 mx-auto">
        <h3 className='main-header col-12'>
        Our Services
        </h3>
        <h6 className='sub-header col-12 col-sm-8 mx-auto' >Transformative Digital Solutions Tailored for Your Success</h6>
      </div>

      <div className="servi-sec col-12">
        {
          serviceData.map(cont =>(
            <ServiCard key={cont.title} icon={cont.icon} title={cont.title}  content={cont.content}  theme={theme} />
          ))
        }
      </div>
    </section>
    <section>
      <Testimonials />
    </section>
    {/* <section className=" row mx-auto form-sec">
      <div className="section-title text-center col-12 row mx-auto">
        <h3 className="main-header col-12">
          Hello!
        </h3>
        <h6 className="sub-header col-12 col-sm-8 mx-auto">If you have a requirement to discuss or want to learn more about how we work, feel free to reach out.</h6>
      </div>
      <Form />
    </section> */}

    <ScrollToTopButton/>

  </div>
  )
}

export default Home
