import React from 'react'

import Form from './cards/message-form';
import { data } from './datafile/about-data'
import Card from './datafile/about-card'

import Hero from "../assets/about-us/about-hero.svg"
import Hero2 from "../assets/about-us/about-hero-2.svg"

import '../styles/base.css';
import '../styles/about.css';


const About = () => {

  return (
    <>
      <div className="outer-section-about">
        <div className="inner-section-about">
          <div className="about-hero">
            <div className="about-hero-heading">
              <h2 className="about-hero-h2">
                About Amplif
              </h2>
            </div>
            <div className="about-hero-content-outer">
              <div className="about-hero-content">
                <div className="about-hero-content-p">
                  <p className="about-hero-para">
                    At Amplif, We are passionate about empowering brands to thrive in the digital age. Founded with a vision to help digital-first brands, we have dedicated ourselves to providing tailored marketing solutions that drive exponential growth.
                    </p><p className="about-hero-para">
                    We equip Entrepreneurs with the right tools and expertise they need to succeed. Recognizing the challenges faced by them, we set out to become their trusted partner in navigating the complexities of the online landscape.
                </p>
                </div>
                <div className="about-hero-image-outer">
                  <img src={Hero} alt="" className="about-hero-images" />
                </div>
              </div>
              <div className="about-hero-content">
                <div className="about-hero-content-p">
                  <p className="about-hero-para">
                    What sets us apart is our commitment to understand the unique needs of our partnered brands. We believe in the power of collaboration and work closely with our partnered brands to craft personalized strategies that address their specific pain points and goals. With a team of seasoned experts in digital marketing, design, and technology we offer a comprehensive suite of services to support our partners at every stage of their journey. Right from branding and website development to effective advertising campaigns and beyond, we are here to help your business thrive and grow.</p>
                    <p className="about-hero-para">
                    We are not just a marketing agency — we are a dedicated ally on your path to success.</p><p className="about-hero-para">
                    Join us to transform your journey into a success story. Together, lets achieve greatness in the digital world.</p><p className="about-hero-para">
                    Contact Our Team Now!
                 </p>
                </div>
                <div className="about-hero-image-outer">
                  <img src={Hero2} alt="" className="about-hero-images" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="outer-section-our">
        <div className="inner-section-our">
          <div className="about-value">
            <div className="about-value-heading">
              <h2 className="about-value-h2">
                Our Value
              </h2>
            </div>
            <div className="about-value-card-outer">
              <div className="about-value-card-slide">
                <div className="about-value-card-slidein">
                  {
                      data.map(cont =>(
                        <Card key={cont.id} heading={cont.heading} content={cont.content} />
                      ))
                    }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className=" row mx-auto about-form-section">
        <div className="section-title text-center col-12 row mx-auto">
          <h3 className="main-header col-12">
            Get In Touch
          </h3>
        </div>
        <Form />
      </section>
    </>
  )
}

export default About
