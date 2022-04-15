import React from 'react'
import icon1 from '../../images/icons/Bridge the gap between theory and practice.png';
import icon2 from '../../images/icons/Digital Capacity Training.png';
import icon3 from '../../images/icons/Earn a degree while working.png';
import icon4 from '../../images/icons/Industry placement for some programmes.png';
import icon5 from '../../images/icons/Triple Helix Model.png';
import icon6 from '../../images/icons/Industry focused education.png';
import icon7 from '../../images/icons/Courses are delivered by global subject matter experts.png';

const Why = () => {
    return (
        <div className="">
            <section className="py-5"></section>
            <section className='why-section'>
                <div className="container">
                    <h1 className='pt-5'>Why Industry School?</h1>
                    <div className="reasons py-5">
                        <div className="row mb-3">
                            <div className="col-md-3 col-6 mb-3">
                                <div className="reason-box">
                                    <div className="icon-box">
                                        <img src={icon1} alt="" className='img-fluid' />
                                    </div>
                                    <h3>Bridge the gap between theory and practice</h3>
                                </div>
                            </div>
                            <div className="col-md-3 col-6 mb-3">
                                <div className="reason-box">
                                    <div className="icon-box">
                                        <img src={icon2} alt="" className='img-fluid' />
                                    </div>
                                    <h3>Digital Capacity Training</h3>
                                </div>
                            </div>
                            <div className="col-md-3 col-6 mb-3">
                                <div className="reason-box">
                                    <div className="icon-box">
                                        <img src={icon3} alt="" className='img-fluid' />
                                    </div>
                                    <h3>Earn a degree while working</h3>
                                </div>
                            </div>
                            <div className="col-md-3 col-6 mb-3">
                                <div className="reason-box">
                                    <div className="icon-box">
                                        <img src={icon7} alt="" className='img-fluid' />
                                    </div>
                                    <h3>Courses are delivered by global subject matter experts</h3>

                                </div>
                            </div>
                        </div>
                        <div className="lower-row">
                            <div className="row">
                                <div className="col-md-4 col-6 mb-3">
                                    <div className="reason-box">
                                        <div className="icon-box">
                                            <img src={icon5} alt="" className='img-fluid' />
                                        </div>
                                        <h3>Triple Helix Model</h3>
                                    </div>
                                </div>
                                <div className="col-md-4 col-6 mb-3">
                                    <div className="reason-box">
                                        <div className="icon-box">
                                            <img src={icon4} alt="" className='img-fluid' />
                                        </div>
                                        <h3>Industry placement for some programmes</h3>
                                    </div>
                                </div>
                                <div className="col-md-4 col-6 mb-3">
                                    <div className="reason-box">
                                        <div className="icon-box">
                                            <img src={icon6} alt="" className='img-fluid' />
                                        </div>
                                        <h3>Industry focused education</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Why