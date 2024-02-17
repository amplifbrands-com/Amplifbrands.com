import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';


import Logo from "../../assets/logo.svg"
import "../../styles/Navbar.css"
import '../../styles/base.css'



const MobileNav = () => {
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
                    <Link to="/" className='mobile-nav-link' onClick={closeMenu}>Home</Link>
                  </li>
                  <li className='mobile-nav-li'>
                    <Link to="/about" className='mobile-nav-link' onClick={closeMenu}>About Us</Link>
                  </li>
                  <li className='mobile-nav-li'>
                    <Link to="/services" className='mobile-nav-link' onClick={closeMenu}>Services</Link>
                  </li>
                  <li className='mobile-nav-li'>
                    <Link to="/contact" className='mobile-nav-link' onClick={closeMenu}>Contact Us</Link>
                  </li>
                  <li className='mobile-nav-li'>
                    <button className='nav-btn cta-btn'>Book A Meeting</button>
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