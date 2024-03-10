import React from 'react'

import "../../styles-file/single-service.css"


import { Iconsdata } from "./past-data"
import OfferIcons from "../../styles-struc/past-result"

export default function SingleService() {
  return (
    <>
       
        <div className="outer-section-pastresult">
            <div className="inner-section-pastresult">
                <div className="past-result-inner">
                    <div className="past-result-heading">
                        <h2 className="past-result-h2">
                            Past Results
                        </h2>
                        <p className="past-result-para">
                            Here are some highlights of our past Google Ads PPC campaigns
                        </p>
                    </div>
                    <div className="past-result-card-outer">
                        <div className="past-result-card-slider">
                            {
                                Iconsdata.map(cont =>(
                                    <OfferIcons key={cont.id} pastPara1={cont.pastPara1} pastPara2={cont.pastPara2} pastSpan={cont.pastSpan} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}
