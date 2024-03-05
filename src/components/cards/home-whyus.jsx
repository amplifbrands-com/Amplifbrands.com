// this is the code for why choose us section of the home page
import React, {useContext} from 'react'
import '../../styles/base.css';
import '../../styles/home-whyus.css';
function WhyUs({icon, title, subtitle, content, theme}){

    return(
        <div className='card-main-wrapper'>
            <div className='card-title'>
                <div className='icon-wrapper'>
                    <img src={ theme==="light" ? icon.light : icon.dark} alt={`${title} icon`} />
                </div>
                <span>
                    <h5 className='main-header'>{title}</h5>
                    <p className='sub-header'>{subtitle}</p>
                </span>
            </div>
            <div>
                <p className='body-text'>
                    {content}
                </p>
            </div>

        </div>
    )
}
export default WhyUs;