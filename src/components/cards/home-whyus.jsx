// this is the code for why choose us section of the home page
import React, {useContext} from 'react'
import '../../styles/base.css';
import '../../styles/home-whyus.css';
import { ThemeContext } from "../../context/themeContext";
function WhyUs({icon, title, subtitle, content}){
    const { theme } = useContext(ThemeContext);
    return(
        <div className={`${theme === 'light' ? 'card-main-wrapper': 'bg-dark card-main-wrapper-dark'}`}>
            <div className='card-title'>
                <div className='icon-wrapper'>
                    <img src={ theme==="light" ? icon.light: icon.dark} alt={`${title} icon`} />
                </div>
                <span>
                    <h6 className={`${theme === 'light' ? 'main-header': 'text-light main-header'}`}>{title}</h6>
                    <small className={`${theme === 'light' ? 'sub-header': 'text-light sub-header'}`}>{subtitle}</small>
                </span>
            </div>
            <div>
                <p className={`${theme === 'light' ? 'body-text': 'text-light body-text'}`}>
                    {content}
                </p>
            </div>

        </div>
    )
}
export default WhyUs;