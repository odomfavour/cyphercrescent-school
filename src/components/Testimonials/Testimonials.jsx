import React from 'react'
import girl from '../../images/girl.png'
// Import Swiper React components
import { Autoplay, Navigation, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css'; // core Swiper
// import 'swiper/modules/autoplay/autoplay.min.css'; // core Swiper
import './testimonial.css'

const Testimonials = () => {
    return (
        <section className='pb-4'>
            <div className="page-header text-center py-3">
                <h3 className='section-heading'>Success stories from our past & present trainees of Cyphercrescent</h3>
            </div>
            <div className="testimony-section">
                <div className="container">
                    <div className="slider-section">
                        <Swiper
                            modules={[Autoplay, Navigation]}
                            spaceBetween={15}
                            slidesPerView={2}
                            navigation
                            autoplay
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetweenSlides: 50
                                },
                                427: {
                                    slidesPerView: 1,
                                    spaceBetweenSlides: 10
                                },
                                // when window width is <= 999px
                                768: {
                                    slidesPerView: 2,
                                    spaceBetweenSlides: 10
                                },
                                999: {
                                    slidesPerView: 2,
                                    spaceBetweenSlides: 10
                                },

                            }}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide>
                                <div className="testimonial-card">
                                    <div>
                                        <p>We were looking for a logo with a touch of modernism. Arlo grasped our needs and produced a stunning design. Awesome to work with Arlo. Incredibly organized, easy to communicate with, responsive with next iterations.</p>
                                    </div>
                                    <div>
                                        <div className="d-flex align-items-center">
                                            <img src={girl} alt="" className='testifier me-3' />
                                            <div>
                                                <h5 className='mb-0'>John Doe</h5>
                                                <p className='mb-0'>Freelancer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-card">
                                    <div>
                                        <p>We were looking for a logo with a touch of modernism. Arlo grasped our needs and produced a stunning design. Awesome to work with Arlo. Incredibly organized, easy to communicate with, responsive with next iterations.</p>
                                    </div>
                                    <div>
                                        <div className="d-flex align-items-center">
                                            <img src={girl} alt="" className='testifier me-3' />
                                            <div>
                                                <h5 className='mb-0'>John Doe</h5>
                                                <p className='mb-0'>Freelancer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-card">
                                    <div>
                                        <p>We were looking for a logo with a touch of modernism. Arlo grasped our needs and produced a stunning design. Awesome to work with Arlo. Incredibly organized, easy to communicate with, responsive with next iterations.</p>
                                    </div>
                                    <div>
                                        <div className="d-flex align-items-center">
                                            <img src={girl} alt="" className='testifier me-3' />
                                            <div>
                                                <h5 className='mb-0'>John Doe</h5>
                                                <p className='mb-0'>Freelancer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-card">
                                    <div>
                                        <p>We were looking for a logo with a touch of modernism. Arlo grasped our needs and produced a stunning design. Awesome to work with Arlo. Incredibly organized, easy to communicate with, responsive with next iterations.</p>
                                    </div>
                                    <div>
                                        <div className="d-flex align-items-center">
                                            <img src={girl} alt="" className='testifier me-3' />
                                            <div>
                                                <h5 className='mb-0'>John Doe</h5>
                                                <p className='mb-0'>Freelancer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-card">
                                    <div>
                                        <p>We were looking for a logo with a touch of modernism. Arlo grasped our needs and produced a stunning design. Awesome to work with Arlo. Incredibly organized, easy to communicate with, responsive with next iterations.</p>
                                    </div>
                                    <div>
                                        <div className="d-flex align-items-center">
                                            <img src={girl} alt="" className='testifier me-3' />
                                            <div>
                                                <h5 className='mb-0'>John Doe</h5>
                                                <p className='mb-0'>Freelancer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-card">
                                    <div>
                                        <p>We were looking for a logo with a touch of modernism. Arlo grasped our needs and produced a stunning design. Awesome to work with Arlo. Incredibly organized, easy to communicate with, responsive with next iterations.</p>
                                    </div>
                                    <div>
                                        <div className="d-flex align-items-center">
                                            <img src={girl} alt="" className='testifier me-3' />
                                            <div>
                                                <h5 className='mb-0'>John Doe</h5>
                                                <p className='mb-0'>Freelancer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-card">
                                    <div>
                                        <p>We were looking for a logo with a touch of modernism. Arlo grasped our needs and produced a stunning design. Awesome to work with Arlo. Incredibly organized, easy to communicate with, responsive with next iterations.</p>
                                    </div>
                                    <div>
                                        <div className="d-flex align-items-center">
                                            <img src={girl} alt="" className='testifier me-3' />
                                            <div>
                                                <h5 className='mb-0'>John Doe</h5>
                                                <p className='mb-0'>Freelancer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials