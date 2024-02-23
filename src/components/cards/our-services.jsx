import { ThemeContext } from "../../context/themeContext";
import '../../styles/base.css'
import '../../styles/servi-card.css'
import React, {useContext} from 'react'

function ServiCard({icon, title, content, theme}){
    // const { theme } = useContext(ThemeContext);
    return(

        <div className= 'card-wrapper'>
            <div>
                <h6 className='main-header'>
                    {title}
                </h6>
                <p className='body-text'>{content}</p>
            </div>
            <button type="button" className="text-btn">read more...</button>
            <div className='icon'>
                <img src={ theme==="light" ? icon.light : icon.dark} alt={`${title} icon`} />
            </div>
        </div>
    )
}

export default ServiCard;