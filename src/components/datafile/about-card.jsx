import "../../styles/about.css"
import React from 'react';

function Card({heading, content}){
return(
    <div className="about-value-card">
        <div className="about-value-top-card">
            <h4 className="about-value-h4">
                {heading}
            </h4>
        </div>
        <div className="about-value-bottom-card">
            <p className="about-value-para">{content}</p>
        </div>
    </div>
    )
}
export default Card;