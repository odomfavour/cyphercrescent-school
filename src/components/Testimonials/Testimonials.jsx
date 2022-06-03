import React from 'react'
import girl from '../../images/avatar.png'
import calista from '../../images/testimony/calista-dikeh.jpg'
import collins from '../../images/testimony/collins-Ikeokwu.jpg'
// import david from '../../images/testimony/david-emenike.jpg'
import israel from '../../images/testimony/israel-nwanyah.jpg'
import mary from '../../images/testimony/mary-akpaessien.jpg'
import miikor from '../../images/testimony/miikor-barilelo.jpg'
// import princess from '../../images/testimony/princess-nwaru.jpg'
// import teyira from '../../images/testimony/teyira-geo-needam.jpg'
// import wellington from '../../images/testimony/wellington-chimenumeze.jpg'
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
                <h3 className='section-heading'>Testimonials</h3>
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
                                <div className="testimonial-card h-100">
                                    <div>
                                        <p>It was an interesting but tasking experience. We were tasked with hands-on
                                            challenges, mathematics/technical solution sourcing, and code implementations.
                                            The program was simply an answer to my needs at a time like this.</p>
                                    </div>
                                    <div className='person-info-test'>
                                        <div className="d-flex align-items-center">
                                            <img src={miikor} alt="" className='testifier me-2' />
                                            <div>
                                                <h5 className='mb-0'> Miikor Barilelo</h5>
                                                <p className='mb-0'>Trainee</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-card h-100">
                                    <div>
                                        <p>For me, the SPE/CypherCrescent digital capacity training is the most engaging tech
                                            program I have ever enrolled in. The course modules, delivery methods, evaluation,
                                            and constant follow-up by tutors, were commendable.</p>
                                    </div>
                                    <div className='person-info-test'>
                                        <div className="d-flex align-items-center">
                                            <img src={collins} alt="" className='testifier me-2' />
                                            <div>
                                                <h5 className='mb-0'>Ikeokwu Chinaza</h5>
                                                <p className='mb-0'>Trainee</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-card h-100">
                                    <div>
                                        <p>My experience in the SPE/CypherCrescent digital capacity training was amazing.
                                            Before I started, I had next to zero knowledge about python programming and
                                            machine learning. I now have the chance to test my knowledge in the real world,
                                            especially in oil and gas.</p>
                                    </div>
                                    <div className='person-info-test'>
                                        <div className="d-flex align-items-center">
                                            <img src={calista} alt="" className='testifier me-2' />
                                            <div>
                                                <h5 className='mb-0'>Calista Uchenna Dike</h5>
                                                <p className='mb-0'>Freelancer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-card h-100">
                                    <div>
                                        <p>I want to use this medium to appreciate SPE and CypherCrescent for the wonderful
                                            lifetime opportunity and training given to me. My experience from the program has
                                            kept me going and recently helped me to secure a learning/work contract with
                                            Explore Data Science Academy. I am grateful for the wonderful experience.</p>
                                    </div>
                                    <div className='person-info-test'>
                                        <div className="d-flex align-items-center">
                                            <img src={girl} alt="" className='testifier me-2' />
                                            <div>
                                                <h5 className='mb-0'>Efugha Chibuikem Godwin</h5>
                                                <p className='mb-0'>Trainee</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-card h-100">
                                    <div>
                                        <p>The SPE/CypherCrescent internship on machine learning was a wonderful
                                            opportunity that introduced me to the world of coding. I had an awesome
                                            experience solving industry problems with great minds and being tutored by
                                            experts from various fields. This was a great privilege.</p>
                                    </div>
                                    <div className='person-info-test'>
                                        <div className="d-flex align-items-center">
                                            <img src={mary} alt="" className='testifier me-2' />
                                            <div>
                                                <h5 className='mb-0'>Mary Akpaesien</h5>
                                                <p className='mb-0'>Trainee</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-card h-100">
                                    <div>
                                        <p>It was a great experience for me. Especially because I went from having no
                                            programming knowledge to being able to do basic data science and machine
                                            learning. It has helped pique my interest in programming.</p>
                                    </div>
                                    <div className='person-info-test'>
                                        <div className="d-flex align-items-center">
                                            <img src={israel} alt="" className='testifier me-2' />
                                            <div>
                                                <h5 className='mb-0'>Israel Nwanyah</h5>
                                                <p className='mb-0'>Trainee</p>
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