import React, { useContext,useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css"
import "../styles/base.css"
import "../styles/base.css"
import { IoCall } from "react-icons/io5";
import Mobile from "./mobileNav/mobilenav"
import Logo from "../assets/logo.svg"
import { useLocation } from 'react-router-dom';
import { PopupButton } from "react-calendly";


const Navbar = ({showContact, changeShowContact}) => {

  const location = useLocation();
  const path = location.pathname;

  const seeContacts = () =>{
    changeShowContact()
  }

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0.3 * window.innerHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
   <div className="navigation-container">
      <nav  className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-logo-outer">
          <Link to="/">
            <img src={Logo} alt="" title='' className='nav-logo' />
          </Link>
        </div>
        <div className="nav-links">
          <ul className="nav-links-ul mb-0">
            <li className="nav-links-li"><Link to="/" className='nav-li-links' id={ path === '/' ? 'active' : 'inactive'} >Home</Link></li>
            <li className="nav-links-li"><Link to="/services" className='nav-li-links' id={ path === '/services' ? 'active' : 'inactive'} >Services</Link></li>
            <li className="nav-links-li"><Link to="/portfolio" className='nav-li-links' id={ path === '/portfolio' ? 'active' : 'inactive'} >Portfolio</Link></li>
            <li className="nav-links-li"><Link to="/about" className='nav-li-links' id={ path === '/about' ? 'active' : 'inactive'} >About Us</Link></li>
            <li className="nav-links-li"><Link to="/contact" className='nav-li-links' id={ path === '/contact' ? 'active' : 'inactive'} >Contact Us</Link></li>
          </ul>
        </div>
        <div className="nav-btn-outer"> 
          <div class="">
          <Link to="tel:+919545749447" className="cta-btn"><IoCall /></Link>
        </div>

          <PopupButton
              url="https://calendly.com/amplifbrands/free-consultation-meeting"  
                rootElement={document.getElementById("root")}
                className="cta-btn"
                text="Schedule Meeting"
          />
        </div>
        <div className="mobile-bar">
          <Mobile  showContact={showContact} changeShowContact={changeShowContact} />
        </div>
      </nav>
   </div>
  );
};

export default Navbar;