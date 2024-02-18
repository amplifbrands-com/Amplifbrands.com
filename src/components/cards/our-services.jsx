import '../../styles/base.css'
import '../../styles/servi-card.css'
import { useState } from 'react';

function ServiCard({icon, title, content}){

    function getColorTheme (){
        const colorTheme = window.matchMedia('(prefers-color-scheme: dark)');
        
        return  colorTheme.matches ? 'dark' : 'light';
    };
    
    const [theme, changeTheme] = useState(getColorTheme);

    window.matchMedia('(prefers-color-scheme:dark)').addEventListener('change',event => {
        return event.matches ? changeTheme(getColorTheme) : changeTheme(getColorTheme); 
    })

    return(

        <div className="card-wrapper">
            <div>
                <h6 className="main-header ">
                    {title}
                </h6>
                <p className="body-text">{content}</p>
            </div>
            <button type="button" className="text-btn">read more...</button>
            <div className="icon">
                {
                   theme === 'dark' ? (<img src={icon.dark} alt={`${title} icon`} />) : (<img src={icon.light} alt={`${title} icon`} />) 
                }
            </div>
        </div>
    )
}

export default ServiCard;