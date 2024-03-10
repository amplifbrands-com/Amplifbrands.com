import React from 'react'
import Banner from "/single-service-pages/service-banner-img.svg"

import "../styles-file/single-service.css"

export default function SingleService({heading1, heading2, headingSpan, contentPara}) {
  return (
    <>
        <div className="outer-section-call-banner">
            <div className="inner-section-call-banner">
                <div className="call-banner-outer">
                    <div className="call-banner-content">
                        <h2 className="call-banner-content-h2">
                            {heading1} 
                            <span className='call-banner-content-span'> {headingSpan} </span> 
                            {heading2}
                        </h2>
                        <p className="call-banner-content-para">
                            {contentPara}
                        </p>
                        <button className='cta-btn service-mid-banner'>
                            Contact Us
                        </button>
                    </div>
                    <div className="call-banner-image-outer">
                        <img src={Banner} alt="" className='call-banner-image' />
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}
