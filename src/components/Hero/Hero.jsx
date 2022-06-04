import React from 'react'
// Import Swiper React components
import { Autoplay, Navigation, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css'; // core Swiper
// import 'swiper/modules/autoplay/autoplay.min.css'; // core Swiper
import './hero.css';

const Hero = () => {
    return (
        <section id="hero-section">
            <div className="main-slider">
                <Swiper
                    modules={[Autoplay, Navigation]}
                    slidesPerView={1}
                    spaceBetween={0}
                    speed={2000}
                    navigation
                    loop={true}
                    effect={"fade"}
                    autoplay
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        427: {
                            slidesPerView: 1,
                        },
                        // when window width is <= 999px
                        768: {
                            slidesPerView: 1,
                        },
                        999: {
                            slidesPerView: 1,
                        },

                    }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div className="hero-bg hero-bg-three">
                            <div className="container">
                                <div className='slider-content'>
                                    <h1>Bridging the digital skill gap for professionals in the industry, government and higher institutions</h1>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero-bg hero-bg-one">
                            <div className="container">
                                <div className='slider-content'>
                                    <h1>Acquire practical skills and not just certificates</h1>
                                    <p>We are passionate about human capacity building and revisiting the traditional learning
                                        system to meet the requirements of our ever-changing world.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero-bg hero-bg-two">
                            <div className="container">
                                <div className='slider-content'>
                                    <h1>Industry focused education leveraging advanced digital technologies</h1>
                                    <p>We leverage an industry-based curriculum to proffer solutions to contemporary problems
                                        in the energy and digital technology industry</p>
                                    {/* <button className="btn btn-primary px-4 mt-3">Get Started</button> */}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero-bg hero-bg-five">
                            <div className="container">
                                <div className='slider-content'>
                                    <h1> A hybrid learning experience that is affordable, flexible and industry-focused</h1>
                                    <p>You do not have to leave your comfort place to take our programs. We provide a flexible
                                        learning experience with minimum distractions to your already busy schedule.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero-bg hero-bg-four">
                            <div className="container">
                                <div className='slider-content'>
                                    <h1>Learn from global subject matter experts</h1>
                                    <p>We have implemented a learning model that rounds the learning experience-powered by a
                                        partnership with experienced facilitators from industry experts and institutions locally and
                                        globally
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

        </section>
    )
}

export default Hero