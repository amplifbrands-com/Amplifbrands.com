import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css"
<<<<<<< refs/remotes/origin/emmanuel
const Navbar = () => {
  return (
   <div>
   
=======
import "../styles/base.css"
import "../styles/base.css"

import Mobile from "./mobileNav/mobilenav"
import Logo from "../assets/logo.svg"
import { useLocation } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';

import { ThemeContext } from '../context/themeContext';


const Navbar = ({showContact, changeShowContact}) => {

  const location = useLocation();
  const path = location.pathname;


  const {theme, handleOnClick} = useContext(ThemeContext);

  const seeContacts = () =>{
    changeShowContact()
  }

  return (
   <div className="navigation-container">
      <nav className="navbar">
        <div className="nav-logo-outer">
          <Link to="/">
            <img src={Logo} alt="" title='' className='nav-logo' />
          </Link>
        </div>
        <div className="nav-links">
          <ul className="nav-links-ul mb-0">
            <li className="nav-links-li"><Link to="/" className='nav-li-links' id={ path === '/' ? 'active' : 'inactive'} >Home</Link></li>
            <li className="nav-links-li"><Link to="/services" className='nav-li-links' id={ path === '/services' ? 'active' : 'inactive'} >Services</Link></li>
            <li className="nav-links-li"><Link to="/about" className='nav-li-links' id={ path === '/about' ? 'active' : 'inactive'} >About Us</Link></li>
          </ul>
        </div>
        <div className="nav-btn-outer">
          <button className="cta-btn" onClick={seeContacts}>
            Book A Meeting
          </button>
        </div>
        <div className="dark-mode-toggle" onClick={handleOnClick}>
          {theme === 'light' ? <FaMoon className="mode-icon-moon" /> : <FaSun className="mode-icon-sun" />}
        </div>
        <div className="mobile-bar">
          <Mobile  showContact={showContact} changeShowContact={changeShowContact} />
        </div>
      </nav>
>>>>>>> local
   </div>
  );
};

export default Navbar;
