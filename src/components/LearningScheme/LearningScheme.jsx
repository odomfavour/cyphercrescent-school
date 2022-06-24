import React from 'react'

// Import Swiper React components
import { Autoplay, Navigation, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css'; // core Swiper
// import 'swiper/modules/autoplay/autoplay.min.css'; // core Swiper

import { partners } from '../ProgramData/ProgramData';

const LearningScheme = () => {
    return (
        <section className='py-5'>
            <h3 className='text-center section-heading'>Our Clients</h3>
            <div className="py-5">
                <Swiper
                    modules={[Autoplay, Navigation]}
                    slidesPerView={9}
                    spaceBetween={30}
                    speed={2000}
                    navigation
                    loop={true}
                    effect={"fade"}
                    autoplay
                    breakpoints={{
                        320: {
                            slidesPerView: 3,
                        },
                        427: {
                            slidesPerView: 3,
                        },
                        // when window width is <= 999px
                        768: {
                            slidesPerView: 5,
                        },
                        999: {
                            slidesPerView: 9,
                        },

                    }}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                >
                    {partners.map((partner, index) => (
                        <SwiperSlide key={partner.id}>
                        <div className="partner">
                            <img src={partner.image} alt={partner.name} className='img-fluid' />
                        </div>
                    </SwiperSlide>
                    ))}                   
                </Swiper>
            </div>
            {/* <div className="py-5 mt-3 scheme-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12">
                            <img src={scheme} alt="" className='img-fluid' />
                        </div>
                        <div className="col-md-6 col-lg-7 col-12">
                            <h3 className='section-heading'>Cyphercrescent Learning and Development Scheme</h3>
                            <p>Our specialized trainings are inventive, they create sustainable competencies and improved capabilities through systemic and innovative processes.</p>
                            <ul className='scheme-list'>
                                <li className='mb-lg-4'><span><img src={check} alt="" className='img-fluid' /></span> Basic to advanced levels of tailored made courses</li>
                                <li className='mb-lg-4'><span><img src={check} alt="" className='img-fluid' /></span> Unlimited advisory services</li>
                                <li className='mb-lg-4'><span><img src={check} alt="" className='img-fluid' /></span> Professional learning solutions</li>
                            </ul>
                            <button className="btn btn-primary mt-lg-4">
                                Start learning now
                            </button>
                        </div>
                    </div>
                </div>
            </div> */}
        </section>
    )
}

export default LearningScheme