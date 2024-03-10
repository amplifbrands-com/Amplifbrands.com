import React from 'react'
import "../styles-file/single-service.css"


import { Link } from "react-router-dom"
import Testimonials from '../../cards/testimonials'

export default function SingleService({heading, content, img}) {
  return (
    <>
        <div className="outer-section">
            <div className="inner-section">
                <div className="single-serv-hero-outer">
                    <div className="single-serv-hero-heading">
                        <h4 className="single-serv-hero-h4">
                            {heading}
                        </h4>
                        <p className="single-serv-hero-para">
                            {content}
                        </p>
                    </div>
                    <div className="single-serv-hero-image-outer">
                        <img src={img} alt="" className="single-serv-hero-image" />
                    </div>
                </div> 
            </div>
        </div>

    </>
  )
}
