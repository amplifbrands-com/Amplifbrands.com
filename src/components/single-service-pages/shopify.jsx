import React from 'react'
import Single from "./styles-struc/service-sturc"

import PastData from "./data-files/shopify/past-result"

import { BannerData } from "./data-files/shopify/shopify-banner"
import BannerCard from "./styles-struc/banner-struc"

import { ServiceData } from "./data-files/shopify/service-over"
import SingleStruc from "./data-files/shopify/our-offering"

import { MidBannerData } from "./data-files/shopify/banner"
import ServiceStruc from "./styles-struc/service-sturc"


import Testimonials from '../cards/testimonials'

export default function Shopify() {
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
