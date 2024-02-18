// this is the code for why choose us section of the home page

import '../../styles/base.css';
import '../../styles/home-whyus.css';
import { useState, useEffect } from 'react';
function WhyUs({icon, title, subtitle, content}){
    
    function getColorTheme (){
        const colorTheme = window.matchMedia('(prefers-color-scheme: dark)');
        
        return  colorTheme.matches ? 'dark' : 'light';
    };
    
    const [theme, changeTheme] = useState(getColorTheme);

    window.matchMedia('(prefers-color-scheme:dark)').addEventListener('change',event => {
        return event.matches ? changeTheme(getColorTheme) : changeTheme(getColorTheme); 
    })
    
    return(
        <div className='card-main-wrapper'>
            <div className='card-title'>
                <div className='icon-wrapper'>
                    {
                        theme === 'dark' ? (<img src={icon.dark} alt={`${title} icon`} />) : (<img src={icon.light} alt={`${title} icon`} />)
                    }
                </div>
                <span>
                    <h6 className='main-header'>{title}</h6>
                    <small className='sub-header'>{subtitle}</small>
                </span>
            </div>
            <div>
                <p className="body-text">
                    {content}
                </p>
            </div>

        </div>
    )
}
export default WhyUs;