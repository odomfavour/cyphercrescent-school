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
                            <div className="col-lg-3 col-md-6 col-12 mb-3">
                                <div className="reason-box">
                                    <div className="icon-box">
                                        <img src={icon1} alt="" className='img-fluid' />
                                    </div>
                                    <h3>Bridging the gap between theory and practice</h3>
                                    <div className='reason-note'>
                                        <h5 className='text-center fw-bold'>Bridging the gap between theory and practice</h5>
                                        <p className='mb-0'>We are not just churning out graduates with certificates. Our courses are tailored such that
                                            practical skills are inculcated into the participants. While we appreciate theories, we believe that
                                            most of the jobs in the industry require practical skills and have tailored our curriculum to meet
                                            these needs</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12 mb-3">
                                <div className="reason-box">
                                    <div className="icon-box">
                                        <img src={icon2} alt="" className='img-fluid' />
                                    </div>
                                    <h3>Digital Capacity Training</h3>
                                    <div className="reason-note">
                                        <h5 className='text-center fw-bold'>Digital Capacity Training</h5>
                                        <p className='mb-0'>Our industry school is designed to equip participants with the digital skills necessary to stand tall in
                                            the energy industry. We provide practical learning experiences facilitated by seasoned experts and
                                            faculty.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12 mb-3">
                                <div className="reason-box">
                                    <div className="icon-box">
                                        <img src={icon3} alt="" className='img-fluid' />
                                    </div>
                                    <h3>Earn a degree while working</h3>
                                    <div className="reason-note">
                                        <h5 className='text-center fw-bold'>Earn a degree while working</h5>
                                        <p className='mb-0'> We understand the challenges of having to leave the workplace environment to engage in studies or
                                            training. So, we have provided a customised online and onsite learning platform that will make it
                                            possible for you to study while still working.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12 mb-3">
                                <div className="reason-box">
                                    <div className="icon-box">
                                        <img src={icon7} alt="" className='img-fluid' />
                                    </div>
                                    <h3>Courses are delivered by global subject matter experts</h3>
                                    <div className="reason-note">
                                        <h5 className='text-center fw-bold'>Courses are delivered by global subject matter experts</h5>
                                        <p className='mb-0'>Our facilitators are renowned professionals with decades of industry experience and are making
                                            significant impacts in their respective fields.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lower-row">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-12 mb-3">
                                    <div className="reason-box">
                                        <div className="icon-box">
                                            <img src={icon5} alt="" className='img-fluid' />
                                        </div>
                                        <h3>Triple Helix Model</h3>
                                        <div className="reason-note">
                                            <h5 className='text-center fw-bold'>Triple Helix Model</h5>
                                            <p className='mb-0'>CypherCrescent industry school is designed to run on the triple helix model which entails a
                                                strategic collaboration between industry, government, and academia. This model will engender
                                                research & development suitable to fill the practical skill gaps in the energy and technology
                                                industry and produce industry professionals with relevant skill sets to solve contemporary industry
                                                problems</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12 mb-3">
                                    <div className="reason-box">
                                        <div className="icon-box">
                                            <img src={icon4} alt="" className='img-fluid' />
                                        </div>
                                        <h3>Industry placement for some programmes</h3>
                                        <div className="reason-note">
                                            <h5 className='text-center fw-bold'>Industry placement for some programmes</h5>
                                            <p className='mb-0'>We will leverage our strong industry networks and support, to provide opportunities for solving
                                                problems facing different energy and digital technology industries</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12 mb-3">
                                    <div className="reason-box">
                                        <div className="icon-box">
                                            <img src={icon6} alt="" className='img-fluid' />
                                        </div>
                                        <h3>Industry focused education</h3>
                                        <div className="reason-note">
                                            <h5 className='text-center fw-bold'>Industry focused education</h5>
                                            <p className='mb-0'>Our industry school provides a carefully curated blend of industry-based curricula to equip you
                                                with the right skills to solve typical industry challenges. Our courses are constantly updated and
                                                consider trends in the industry. Our courses are supported by practical learning experiences
                                                facilitated by seasoned experts and faculty.</p>
                                        </div>
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