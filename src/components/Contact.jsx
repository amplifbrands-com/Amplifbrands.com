import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ContactUs.css';
import Form from './cards/message-form';
import { IoMdMail } from "react-icons/io";
import { LiaGlobeSolid } from "react-icons/lia";
import { MdLocalPhone } from "react-icons/md";


import Hero from "../assets/contact-us/hero-contact.svg"
import Banner from "../assets/contact-us/banner-contact.svg"
import '../styles/base.css';


const ContactUsPage = () => {
  return (
    <>
    <div className="outer-section">
      <div className="inner-section">
        <div className="contact-hero-outer">
          <div className="contact-hero-heading">
            <h4 className="contact-hero-h4">
              Contact <span className="contact-hero-span">Us</span>
            </h4>
          </div>
          <div className="contact-hero-image-outer">
            <img src={Hero} alt="" className="contact-hero-image" />
          </div>
        </div> 
      </div>
    </div>

    <div className="outer-section-get">
      <div className="inner-section-get">
        <div className="contact-get-in-touch">
          <div className="contact-getin-heading">
            <h2 className="contact-getin-h2">
              <span className="contact-getin-span">Get In</span> Touch
            </h2>
          </div>
          <div className="contact-getin-card-outer">
            <div className="getin-card">
              <div className="gitin-card-up">
                <IoMdMail className="getin-icons" />
                <h4 className="getin-card-h4">Email Address</h4>
              </div>
              <a href="mailto:contact@amplifbrands.com" className="getin-link" >contact@amplifbrands.com</a>
            </div>
            <div className="getin-card">
              <div className="gitin-card-up">
                <LiaGlobeSolid className="getin-icons" />
                <h4 className="getin-card-h4">Website</h4>
              </div>
              <Link to="/" className="getin-link" >www.amplifbrands.com</Link>
            </div>
            <div className="getin-card">
              <div className="gitin-card-up">
                <MdLocalPhone className="getin-icons" />
                <h4 className="getin-card-h4">Phone Number</h4>
              </div>
              <a href="tel:+919545749447" className="getin-link" >+91 9545749447</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    <div className="outer-section-partner">
      <div className="inner-section-partner">
        <div className="contact-us-partner">
          <div className="contact-partner-image-outer">
            <img src={Banner} alt="" className="contact-partner-image" />
          </div>
          <div className="contact-partner-content">
            <h3 className="contact-partner-h3">
              Partner with us Today!<br />
              Give Us a Call Now!
            </h3>
            <a href="tel:+919545749447" className="cta-btn contact-partner-link">+91 9545749447</a>
          </div>
        </div>
      </div>
    </div>



    <section className=" row mx-auto about-form-section">
        <div className="section-title text-center col-12 row mx-auto">
          <h3 className="main-header col-12">
            Get In Touch
          </h3>
          <h6 className="sub-header col-12 col-sm-8 mx-auto about-form-h6">Ready to elevate your digital presence and achieve your business goals? Contact us today to learn more about our services and discover how Amplif can help you succeed in the digital age.</h6>
        </div>
        <Form />
      </section>
    </>

  );
}

export default ContactUsPage;
