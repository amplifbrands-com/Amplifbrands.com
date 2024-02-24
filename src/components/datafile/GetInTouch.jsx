import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import '../../styles/contactus.css'; 

const GetInTouch = () => {
  return (
    <div className="get-in-touch-container">
      <h2 className="git-heading">Get in touch</h2>
      <p className="git-text">We'd love to hear from you. Here's how you can reach us:</p>
      <Link to="" className="cta-btn" style={{ textDecoration:'none' }} >Live Chat</Link>
      <div className="git-contact-cards">
        <div className="git-contact-card">
          <IoMdMail className="git-contact-icon" />
          <h3>Email</h3>
          <p>contact@amplifbrands.com</p>
          <Link to="" className="cta-btn" style={{ textDecoration:'none' }} >Send Email</Link>
        </div>
        <div className="git-contact-card">
          <FaPhoneAlt className="git-contact-icon" />
          <h3>Phone</h3>
          <p>+91 95457 49447</p>
          <Link to="" className="cta-btn" style={{ textDecoration:'none' }} >Call Now</Link>
        </div>
        <div className="git-contact-card">
          <IoLocationSharp className="git-contact-icon" />
          <h3>Office </h3>
          <p>Amplif Brands Private Limited, 3rd Cross Rd, Electronics City Phase 1, Electronic City, Bengaluru,
                  Karnataka 560100.</p>
          <Link to="" className="cta-btn" style={{ textDecoration:'none' }} >Get Directions</Link>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
