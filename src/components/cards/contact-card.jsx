import { Link } from 'react-router-dom';

import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

import "../../styles/contact-card.css";
import "../../styles/base.css";
import "../../styles/footer.css";

import IG from '../../assets/social-icons/cont-ig.svg';
import FB from '../../assets/social-icons/cont-fb.svg';
import WApp from '../../assets/social-icons/cont-wa.svg';
import YT from  '../../assets/social-icons/cont-yt.svg';
import X from '../../assets/social-icons/cont-x.svg';
import XDark from '../../assets/social-icons/cont-x-dark.svg';
import Cancel from '../../assets/social-icons/cont-cancel.svg';

function ContactCard({theme, changeShowContact, showContact}) {

    const seeContacts = () =>{
      changeShowContact();
    };

    return(
        <div className="underlay">
            <div className="wrapper">
                <button type="button" onClick={changeShowContact} className='cancel--btn'>
                    <img src={Cancel}  alt='facebook link' />
                </button>
                <div>
                    <h5 className="main-header text-center">
                        contact us now
                    </h5>
                    <h6 className="sub-header text-center mt-4">for a free consultation</h6>
                </div>

                <div className="contacts--wrapper">
                    <a href="">
                        <img className='cont--img' src={ theme==="light" ? X : XDark} alt='X link' />
                    </a>
                    <a href="">
                        <img className='cont--img' src={IG} alt='instagram link' />
                    </a>
                    <a href="">
                        <img className='cont--img' src={FB} alt='facebook link' />
                    </a>
                    <a href="">
                        <img className='cont--img' src={YT} alt='youtube link' />
                    </a>
                    <a href="">
                        <img className='cont--img' src={WApp} alt="whatsapp link" />
                    </a>
                </div>
                <div className="divider">
                    <hr />
                    <small>
                        or
                    </small>
                    <hr />
                </div>
                <div className="other--contacts footer-add-content">
                    <Link to="" className="footer-add-links"><IoMdMail className='footer-add-icons'/>contact@amplifbrands.com</Link><br /> 
                    <Link to="" className="footer-add-links">
                    <IoLocationSharp className='footer-add-icons' />Amplif Brands Private Limited, 3rd Cross Rd, Electronics City Phase 1, Electronic City, Bengaluru<br />
                      Karnataka 560100.
                    </Link><br /> 
                    <Link to="" className="footer-add-links"><FaPhone className='footer-add-icons' />+91 95457 49447</Link>
                </div>

            </div>
        </div>
    )
}

export default ContactCard