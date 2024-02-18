import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css"
import "../styles/base.css"

import Mobile from "./mobileNav/mobilenav"
import Logo from "../assets/logo.svg"

import { ThemeContext } from '../context/themeContext';


const Navbar = () => {

  const {theme, handleOnClick} = useContext(ThemeContext);

  return (
   <div className="navigation-container">
      <nav className="navbar">
        <div className="nav-logo-outer">
          <Link to="/">
            <img src={Logo} alt="" title='' className='nav-logo' />
          </Link>
        </div>
        <div className="nav-links">
          <ul className="nav-links-ul">
            <li className="nav-links-li"><Link to="/" className='nav-li-links' >Home</Link></li>
            <li className="nav-links-li"><Link to="/services" className='nav-li-links' >Services</Link></li>
            <li className="nav-links-li"><Link to="/" className='nav-li-links' >Portfolios</Link></li>
            <li className="nav-links-li"><Link to="/about" className='nav-li-links' >About Us</Link></li>
          </ul>
        </div>
        <div className="nav-btn-outer">
          <button className={`btn ${theme === "dark" ? "cta-btn" : "cat-btn" }`} onClick={handleOnClick}>
            {theme ===  'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
        <div className="mobile-bar">
          <Mobile />
        </div>
      </nav>
   </div>
  );
};

export default Navbar;
