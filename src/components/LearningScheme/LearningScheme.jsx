import React from 'react'
import scheme from '../../images/scheme.png'
import check from '../../images/check.png'

// Import Swiper React components
import { Autoplay, Navigation, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css'; // core Swiper
// import 'swiper/modules/autoplay/autoplay.min.css'; // core Swiper

import adax from '../../images/adax-1.png'
// import agip from '../../images/AGIP.png'
import belema from '../../images/belemaoil-1.png'
import Conoil from '../../images/conoil-1.png'
import Eroton from '../../images/erotron-1.png'
// import FIRST from '../../images/FIRST.png'
// import NAPIMS from '../../images/NAPIMS.png'
import nd from '../../images/nd-1.png'
import NNPC from '../../images/nnpc-1.png'
// import NPDC from '../../images/NPDC.png'
// import ROCK from '../../images/ROCK.png'
import SEPLAT from '../../images/seplat-1.png'
import SPE from '../../images/spe-1.png'
import resolve from '../../images/resolve.png'
// import SUNTERA from '../../images/SUNTERA.png'
import WAEP from '../../images/waep-1.png'

const LearningScheme = () => {
    return (
        <section className='py-5'>
            <h3 className='text-center section-heading'>Clients</h3>
            <div className="py-5 partner-slider">
                <Swiper
                    modules={[Autoplay, Navigation]}
                    slidesPerView={9}
                    spaceBetween={10}
                    speed={2000}
                    navigation
                    loop={true}
                    effect={"fade"}
                    autoplay
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                        },
                        427: {
                            slidesPerView: 2,
                        },
                        // when window width is <= 999px
                        768: {
                            slidesPerView: 4,
                        },
                        999: {
                            slidesPerView: 9,
                        },

                    }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div className="partner">
                            <img src={adax} alt="" className='img-fluid' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="partner">
                            <img src={belema} alt="" className='img-fluid' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="partner">
                            <img src={Conoil} alt="" className='img-fluid' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="partner">
                            <img src={SEPLAT} alt="" className='img-fluid' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="partner">
                            <img src={WAEP} alt="" className='img-fluid' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="partner">
                            <img src={nd} alt="" className='img-fluid' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="partner">
                            <img src={Eroton} alt="" className='img-fluid' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="partner">
                            <img src={NNPC} alt="" className='img-fluid' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="partner">
                            <img src={adax} alt="" className='img-fluid' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="partner">
                            <img src={SPE} alt="" className='img-fluid' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="partner">
                            <img src={resolve} alt="" className='img-fluid' />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="py-5 mt-3 scheme-section">
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
                                <li className='mb=lg-4'><span><img src={check} alt="" className='img-fluid' /></span> Unlimited advisory services</li>
                                <li className='mb-lg-4'><span><img src={check} alt="" className='img-fluid' /></span> Professional learning solutions</li>
                            </ul>
                            <button className="btn btn-primary mt-lg-4 ">
                                Start learning now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LearningScheme