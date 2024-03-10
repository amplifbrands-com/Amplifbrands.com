import React from 'react'
import "../styles-file/single-service.css"

export default function OfferIcons({heading, content, img}) {
  return (
    <div className="our-offering-cards">
        <div className="offering-cards-image">
            <img src={img} alt="" className='card-offering-image' />
        </div>
        <div className="offering-card-content">
            <h4 className="offering-card-h4">
                {heading}
            </h4>
            <p className="offering-card-para">
                {content}
            </p>
        </div>
    </div>
  )
}
