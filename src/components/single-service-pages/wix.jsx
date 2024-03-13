import React from 'react'
import Single from "./styles-struc/service-sturc"

import PastData from "./data-files/wix/past-result"

import { BannerData } from "./data-files/wix/wix-banner"
import BannerCard from "./styles-struc/banner-struc"

import { ServiceData } from "./data-files/wix/service-over"
import SingleStruc from "./data-files/wix/our-offering"

import { MidBannerData } from "./data-files/wix/banner"
import ServiceStruc from "./styles-struc/service-sturc"


import Testimonials from '../cards/testimonials'

export default function Wix() {
  return (
    <>
      {
        BannerData.map(cont =>(
        <BannerCard heading={cont.heading} content={cont.content} img={cont.img} />
        ))
      }
      
      {
        ServiceData.map(cont =>(
        <SingleStruc heading1={cont.heading1} contentPara={cont.contentPara} heading2={cont.heading2} />
        ))
      }

      <PastData />

      {
        MidBannerData.map(cont =>(
        <ServiceStruc heading1={cont.heading1} contentPara={cont.contentPara} heading2={cont.heading2} headingSpan={cont.headingSpan} />
        ))
      }

      {/* <div className="outer-section-testimonial">
          <div className="inner-section-testimonial">
              <Testimonials />
          </div>
      </div> */}
    </>
  )
}
