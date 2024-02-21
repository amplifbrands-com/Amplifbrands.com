import React, {useContext} from 'react'
import { testimonialData } from "../../assets/testimonials-data"

import "../../styles/Testimonials.css";
import { ThemeContext } from "../../context/themeContext";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';


const TestimonialCard = ({data}) =>{
    const { theme } = useContext(ThemeContext);
    return (
        <div className='testimonial--card'>
            <img src={data.image} alt="" className="testimonial--image" />
            <div className="testimonial--content" >
                <h5 className='text-center'>{data.name}</h5>
                <p className='text-center'>{data.designation}</p>
                <p className='text-center'>{data.testimonial}</p>
            </div>
        </div>
    )
}


const Testimonials = ()  => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className='testimonial'>
            <h2 className={`${theme === 'light' ? 'text-center main-header': 'text-light text-center main-header'}`}>Testimonial</h2>
            <h5 className={`${theme === 'light' ? 'text-center sub-header mb-5': 'text-light text-center sub-header mb-5'}`}>Voices of Success</h5>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                    { testimonialData.map((item, index) => ( <SwiperSlide key={index} ><TestimonialCard data={item} key={index} /></SwiperSlide> ))}

            </Swiper>

        </div>
    )
}

export default Testimonials