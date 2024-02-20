import React from 'react';
import { Link } from 'react-router-dom';

import Logo from "../assets/logo.svg"
import Facebook from "../assets/social-icons/facebook.svg"
import Instagram from "../assets/social-icons/instagram.svg"
import Twitter from "../assets/social-icons/twitter.svg"
import Youtube from "../assets/social-icons/youtube.svg"

import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";


import "../styles/footer.css"
import "../styles/base.css"


const Footer = () => {
  return (
    <>
      {/* Don't change it again. I use div cause section margins need to be corrected and for nav tag it is for seo so don't remove it.  */}
      <div className="footer-main-outer">
        <nav className="footer-main-inner">
          <div className="footer-logo-social">
            <div className="footer-logo-outer">
              <Link to="/">
                <img src={Logo} alt="" title='' className='footer-logo' />
              </Link>
            </div>
            <div className="footer-social-outer destop-social">
              <div className="footer-social-heading">
                <h6 className="footer-social-h6">
                  Follow us on
                </h6>
              </div>
              <div className="footer-social-icons">
                <Link to="" className="footer-social-link"><img src={Twitter} alt="" title='' className='footer-social-img' /></Link>
                <Link to="" className="footer-social-link"><img src={Instagram} alt="" title='' className='footer-social-img' /></Link>
                <Link to="https://www.facebook.com/share/p/QXwaD8UEd9bw9jWb/?mibextid=oFDknk" className="footer-social-link"><img src={Facebook} alt="" title='' className='footer-social-img' /></Link>
                <Link to="" className="footer-social-link"><img src={Youtube} alt="" title='' className='footer-social-img' /></Link>
              </div>
            </div>
          </div>
          <div className="footer-quick-add-outer">
            <div className="footer-quick-outer">
              <div className="footer-quick-heading">
                <h6 className="footer-quick-h6">
                  Quick Links
                </h6>
              </div>
              <ul className="footer-quick-ul">
                <li className="footer-quick-li"><Link to="/services" className="footer-quick-links">Service</Link></li>
                <li className="footer-quick-li"><Link to="/portfolio" className="footer-quick-links">Portfolio</Link></li>
                <li className="footer-quick-li"><Link to="/Pricing" className="footer-quick-links">Pricing</Link></li>
                <li className="footer-quick-li"><Link to="/contact" className="footer-quick-links">Contact Us</Link></li>
                <li className="footer-quick-li"><Link to="/our-team" className="footer-quick-links">Our Team</Link></li>
              </ul>
            </div>
            <div className="footer-add-outer">
              <div className="footer-add-heading">
                <h6 className="footer-add-h6">
                  Contact Us
                </h6>
              </div>
              <div className="footer-add-content">
                <Link to="" className="footer-add-links"><IoMdMail className='footer-add-icons'/>info@amplif.com</Link><br /> 
                <Link to="" className="footer-add-links">
                <IoLocationSharp className='footer-add-icons' />Amplif Brands Private Limited, 3rd Croos Rd, Electonics City Phase 1, Electronic City, Bengaluru,<br />
                Karnataka 560100
                </Link><br /> 
                <Link to="" className="footer-add-links"><FaPhone className='footer-add-icons' />+91 95457 49447</Link>
              </div>
            </div>
            <div className="footer-social-outer mobile-social">
              <div className="footer-social-heading">
                <h6 className="footer-social-h6">
                  Follow us on
                </h6>
              </div>
              <div className="footer-social-icons">
                <Link to="" className="footer-social-link"><img src={Twitter} alt="" title='' className='footer-social-img' /></Link>
                <Link to="" className="footer-social-link"><img src={Instagram} alt="" title='' className='footer-social-img' /></Link>
                <Link to="" className="footer-social-link"><img src={Facebook} alt="" title='' className='footer-social-img' /></Link>
                <Link to="" className="footer-social-link"><img src={Youtube} alt="" title='' className='footer-social-img' /></Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
   </>
  );
};

export default Footer;