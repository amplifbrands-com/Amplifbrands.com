
import '../../styles/base.css'
import '../../styles/servi-card.css'
import React from 'react'

function ServiCard({icon, title}){
    return(

        <div className= 'card-wrapper'>
             <div className='icon'>
                <img src={icon} alt={`${title} icon`} />
            </div> 
            <div>
                <h4 className='main-header'>
                    {title}
                </h4>
                {/* <p className='body-text'>{content}</p> */}
            </div>
            {/* <button type="button" className="text-btn">read more...</button> */}
            
        </div>
    )
}

export default ServiCard;