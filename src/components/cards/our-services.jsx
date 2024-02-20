import { ThemeContext } from "../../context/themeContext";
import '../../styles/base.css'
import '../../styles/servi-card.css'
import React, {useContext} from 'react'

function ServiCard({icon, title, content}){
    const { theme } = useContext(ThemeContext);
    return(

        <div className={`${theme === 'light' ? 'card-wrapper': 'bg-dark card-wrapper'}`}>
            <div>
                <h6 className={`${theme === 'light' ? 'main-header': 'text-light main-header'}`}>
                    {title}
                </h6>
                <p className={`${theme === 'light' ? 'body-text': 'text-light body-text'}`}>{content}</p>
            </div>
            <button type="button" className="text-btn">read more...</button>
            <div className={`${theme === 'light' ? 'icon': 'bg-light icon'}`}>
                <img src={ theme==="light" ? icon.light: icon.dark} alt={`${title} icon`} />
            </div>
        </div>
    )
}

export default ServiCard;