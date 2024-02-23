import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/base.css';
import '../styles/home.css';
import { whyUsData } from '../assets/why-us-data';
import WhyUs from './cards/home-whyus';
import ServiCard from './cards/our-services';
import { serviceData } from '../assets/service-card-data';
import Form from './cards/message-form';


import { ThemeContext } from "../context/themeContext";


const Home = ({theme}) => {
  // const { theme } = useContext(ThemeContext);
  return (
  <div>
    <header className="container mx-auto">

    </header>
    <section className="text-center row mx-auto col-12">
      <h3 className="main-header">
        our mission
      </h3>
      <p className="sub-header col-12 col-sm-8 mx-auto">Our mission at Amplif is to empower startup entrepreneurs with tailored marketing solutions crafted by our experts, addressing their unique pain points, driving exponential growth, and unleashing their full potential.</p>
    </section>
    <section className=" row mx-auto">
      <div className="section-title text-center row col-12 mx-auto">
        <h3 className="main-header col-12">
          why choose us?
        </h3>
        <h6 className="sub-header col-12 col-sm-8 mx-auto">Navigating the Digital Frontier</h6>
      </div>
      <div className="whyus-sec col-12">
        {
          whyUsData.map(cont =>(
            <WhyUs key={cont.title} icon={cont.icon} title={cont.title} subtitle={cont.subtitle} content={cont.content}  />
          ))
        }
      </div>
    </section>
    <section className=" row mx-auto">
      <div className="section-title row text-center col-12 mx-auto">
        <h3 className="main-header col-12">
        Our Services
        </h3>
        <h6 className="sub-header col-12 col-sm-8 mx-auto">Transformative Digital Solutions Tailored for Your Success</h6>
      </div>

      <div className="servi-sec col-12">
        {
          serviceData.map(cont =>(
            <ServiCard key={cont.title} icon={cont.icon} title={cont.title}  content={cont.content}  />
          ))
        }
      </div>
    </section>
    <section className=" row mx-auto">
      <div className="section-title text-center col-12 row mx-auto">
        <h3 className="main-header col-12">
          Hello!
        </h3>
        <h6 className="sub-header col-12 col-sm-8 mx-auto">If you have a requirement to discuss or want to learn more about how we work, feel free to reach out.</h6>
      </div>
      <Form />
    </section>
  </div>
  )
}

export default Home
