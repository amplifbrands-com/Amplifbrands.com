import React from 'react'
import "../../styles-file/single-service.css"

import { Iconsdata } from "./overview"
import OfferIcons from "../../styles-struc/offer-icon"

export default function SingleStruc({heading1, contentPara, heading2}) {
  return (
    <>

        <div className="outer-section-service">
            <div className="inner-section-service">
                <div className="service-overview">
                    <div className="service-over-inner">
                        <div className="service-over-heading">
                            <h2 className="service-over-h2">
                                {heading1}
                            </h2>
                            <p className="service-over-para">
                                {contentPara}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="our-offering-inner">
                    <div className="our-offering-heading">
                        <h3 className="our-offering-h3">
                            {heading2}
                        </h3>
                    </div>
                    <div className="our-offering-cards-outer">
                        {
                            Iconsdata.map(cont =>(
                                <OfferIcons key={cont.id} heading={cont.heading} content={cont.content} img={cont.img} />
                            ))
                        }
                    </div>
                    <div className="our-offering-button">
                        <button className='cta-btn'>Get A Quote</button>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}
