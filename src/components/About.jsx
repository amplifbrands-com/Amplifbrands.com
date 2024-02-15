import React from 'react'

import Form from './cards/message-form';
import { data } from './datafile/about-data'
import Card from './datafile/about-card'

import '../styles/base.css';
import '../styles/about.css';


const About = () => {
  return (
    <>
      <section className="about-hero">
        <div className="about-hero-inner">
          <div className="about-hero-heading">
            <h4 className="about-hero-h4">
              About Amplif
            </h4>
          </div>
          <div className="about-hero-main">
            <div className="about-hero-content">
              <p className="about-hero-para">
                At Amplif, we're passionate about empowering businesses to thrive in the digital age. Founded with a vision to support startups and digital-first businesses, we've dedicated ourselves to providing tailored marketing solutions that drive exponential growth and unlock untapped potential.
              </p>
              <p className="about-hero-para">
                Our journey began with a simple yet powerful mission: to empower startup entrepreneurs with the tools and expertise they need to succeed. Recognizing the challenges faced by digital-first businesses, we set out to become their trusted partner in navigating the complexities of the online landscape.
              </p>
              <p className="about-hero-para">
                What sets us apart is our commitment to understanding the unique needs and aspirations of each of our partners. We believe in the power of collaboration and work closely with businesses to craft personalized strategies that address their specific pain points and goals.
              </p>
              <p className="about-hero-para">
                With a team of seasoned experts in digital marketing, design, and technology, we offer a comprehensive suite of services to support our partners at every stage of their journey. From branding and website development to SEO, PPC management, and beyond, we're here to help businesses thrive and grow.s.
              </p>
              <p className="about-hero-para">
                At Amplif, we're not just another marketing agency—we're a dedicated ally on your path to success. Join us as we transform startups into success stories and small businesses into industry leaders. Together, let's amplify your potential and achieve greatness in the digital world.
              </p>
            </div>
            <div className="about-hero-image">
              <img src="" alt="" title='' width={494} height={494} className='about-hero-pic' />
            </div>
          </div>
        </div>
      </section>

      <section className="about-value">
        <div className="about-value-inner">
          <h4 className="about-value-h4">
            Our Value
          </h4>
          <div className="about-value-card-content">
            <div className="about-value-card-outer">
              <div className="about-value-card-inner">
                <img src="" alt="" title='' className='about-value-icon' width={200} height={200} />
              </div>
              <div className="about-value-card-inner">
                <img src="" alt="" title='' className='about-value-icon' width={200} height={200} />
              </div>
              <div className="about-value-card-inner">
                <img src="" alt="" title='' className='about-value-icon' width={200} height={200} />
              </div>
              <div className="about-value-card-inner">
                <img src="" alt="" title='' className='about-value-icon' width={200} height={200} />
              </div>
            </div>
            <div className="about-value-content-outer">
              <div className="about-value-content">
                <p className="about-value-para">
                  <span className="about-value-span">Integrity: </span>
                  We uphold the highest standards of integrity, honesty, and transparency in all of our interactions, building trust and credibility with our partnered businesses.
                </p>
              </div>
              <div className="about-value-content">
                <p className="about-value-para">
                  <span className="about-value-span">Empowerment: </span>
                  We empower entrepreneurs with the right tools, knowledge, and support they need to succeed in their ventures.
                </p>
              </div>
              <div className="about-value-content">
                <p className="about-value-para">
                  <span className="about-value-span">Collaboration: </span>
                  We value collaboration and teamwork, understanding that working together leads to greater success.
                </p>
              </div>
              <div className="about-value-content">
                <p className="about-value-para">
                  <span className="about-value-span">Excellence: </span>
                  We are committed to excellence in everything we do, striving to deliver the highest quality services and results to our partnered businesses.
                </p>
              </div>
              <div className="about-value-content">
                <p className="about-value-para">
                  <span className="about-value-span">Impact: </span>
                  We are driven by the desire to make a meaningful impact, helping entrepreneurs and businesses achieve their goals and help them to reach their full potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-meet-expert">
        <div className="about-meet-inner">
          <div className="about-meet-heading">
            <h4 className="about-meet-h4">
              Meet Our Experts
            </h4>
          </div>
          <div className="about-meet-card-outer">
            <ul className="about-meet-ul">
              {
                data.map(cont =>(
                  <Card key={cont.id} image={cont.image} name={cont.name} position={cont.position} about={cont.about}  />
                ))
              }
            </ul>
            <p className="about-meet-card-para">
              At Amplif, our team is our greatest asset. Comprised of talented professionals with diverse backgrounds and expertise, we're united by a shared vision and a commitment to delivering results. Meet the faces behind Amplif and discover the passion and expertise that drive our success.
            </p>
          </div>
        </div>
      </section>
      
      <section className=" row mx-auto about-form-section">
        <div className="section-title text-center col-12 row mx-auto">
          <h3 className="main-header col-12">
            Get In Touch
          </h3>
          <h6 className="sub-header col-12 col-sm-8 mx-auto about-form-h6">Ready to elevate your digital presence and achieve your business goals? Contact us today to learn more about our services and discover how Amplif can help you succeed in the digital age.</h6>
        </div>
        <Form />
      </section>
    </>
  )
}

export default About
