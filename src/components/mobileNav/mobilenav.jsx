import React, { useState, useContext } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';
import { PopupButton } from "react-calendly";


import Logo from "../../assets/logo.svg"
import "../../styles/Navbar.css"
import '../../styles/base.css'

const MobileNav = ({showContact, changeShowContact}) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const closeMenu = () => {
      setIsMenuOpen(false);
    };
  
    const handleMenuClick = (e) => {
      e.stopPropagation();
    };

    const seeContacts = () =>{
      setIsMenuOpen(false);
      changeShowContact();
    }
  
    return (
      <div className="mobile-nav">
        <div className="hamburger-menu" onClick={toggleMenu}>
          <FaBars className="ham-icon" />
        </div>
        {isMenuOpen && (
          <div className="menu-overlay" onClick={closeMenu}>
            <div className="menu-container" onClick={handleMenuClick}>
              <div className="nav-menu">
                <div className="mobile-nav-logo-outer">
                  <Link to="/">
                    <img src={Logo} alt="" title='' className='mobile-nav-logo' />
                  </Link>
                  <FaTimes className="close-icon" onClick={closeMenu} />
                </div>
                <ul className='mobile-nav-ul'>
                  <li className='mobile-nav-li'>
                    <Link to="/" className="mobile-nav-link" onClick={closeMenu}>Home</Link>
                  </li>
                  <li className='mobile-nav-li'>
                    <Link to="/about" className="mobile-nav-link" onClick={closeMenu}>About Us</Link>
                  </li>
                  <li className='mobile-nav-li'>
                    <Link to="/services" className="mobile-nav-link" onClick={closeMenu}>Services</Link>
                  </li>
                  <li className="mobile-nav-li"><Link to="/portfolio" className='mobile-nav-link' onClick={closeMenu}>Portfolio</Link></li>
                  <li className='mobile-nav-li'>
                    <Link to="/contact" className="mobile-nav-link" onClick={closeMenu}>Contact Us</Link>
                  </li>
                  {/** from aniket call button integration  starts */}
                  <li className='mobile-nav-li'>
                  <a href="tel:+919007579469" className="mobile-nav-link" onClick={closeMenu}>Call Us</a>
                </li>
          
           {/** call button integration  ends */}
                   <li className='mobile-nav-li'>
                     {/* <button className='nav-btn cta-btn' onClick={seeContacts}>Book A Meeting</button>  */}
                      {/* <PopupButton
                      url="https://calendly.com/amplifbrands/free-consultation-meeting"
                       
                         rootElement={document.getElementById("root")}
                         className="nav-btn cta-btn"
                         text="Book A Meeting" />   */}
                      
                  </li> 
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default MobileNav;