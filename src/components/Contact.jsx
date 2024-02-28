import React from 'react';
import '../styles/ContactUs.css';
import Form from './cards/message-form';
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

import Hero from "../assets/contact-us/hero-contact.svg"
import Logo from "../assets/logo.svg";
import GetInTouch from './datafile/GetInTouch';
import '../styles/base.css';

const ContactUsPage = () => {
  return (
    <>
    <section className="contact-us-page-container">
      <div className="contact-details">
        <h1>Contact Us</h1>
        <div className="contact-info">
          <div className="info-item">
            <IoMdMail style={{ fontSize: '26px', marginRight: '8px' }} />
            <span>contact@amplifbrands.com</span>
          </div>
          <div className="info-item">
            <IoLocationSharp style={{ fontSize: '26px', marginRight: '8px', marginTop: '6px' }} />
            <div className="address-item">
              <span>Amplif Brands Private Limited, 3rd Cross Rd, Electronics City Phase 1, Electronic City, </span>
              <br />
              <span className="special-info-item">Bengaluru, Karnataka 560100. </span>
            </div>
          </div>
          <div className="info-item">
            <FaPhoneAlt style={{ fontSize: '26px', marginRight: '8px' }} />
            <span>+91 95457 49447</span>
          </div>
        </div>
      </div>
      <div className="contact-image">
        <img src={Hero} alt="Contact" />
      </div>
    </section>
    <GetInTouch/>
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
