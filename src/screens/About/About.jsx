import React from 'react'
import PageWrapper from '../../layout/PageWrapper/PageWrapper'
import './about.css'
import vision from '../../images/vision.png'
import mission from '../../images/mission.png'
import logo from '../../images/c-logo.png'

const About = () => {
    return (
        <PageWrapper>
            <section id='about-page'>
                <div className="top-section text-center">
                    <div className="container">
                        <div className="d-flex align-items-center justify-content-center centered-box">
                            <div>
                                <h1 className='fw-bold'>Cyphercrescent Industry School</h1>
                                <p>Cyphercrescent industry School was established to solve practical industry problems by bringing the skill gap in the E&p, energy & technology industries driving research and innovation for susstainable development.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-section py-5">
                    <div className="container">
                        <div className="mb-5">
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={logo} alt="cyphercrescent logo" className='img-fluid' />
                                </div>
                                <div className="col-md-6 d-flex align-items-center">
                                    <div>
                                        <h2 className='section-heading pt-100'>CypherCrescent Industry<br />School</h2>
                                        <div className="word-underline"></div>
                                        <p>CypherCrescent Industry school was established to solve practical industry problems by bridging the skill gap in the E&P, energy & technology industries driving research and innovation for sustainable development. We are passionate about human capacity building and equipping people with practical skills required to create value in the dynamic business world. The industry school is a subsidiary of CypherCrescent Group.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-5">
                            <div className="row">
                                <div className="col-md-6 d-flex align-items-center">
                                    <div>
                                        <h2 className='section-heading'>Our Vision</h2>
                                        <p>To create a learning hub that will leverage on people, processes, and technologies to faster collaborations between professionals in the industry, government, and higher institutions.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <img src={vision} alt="cyphercrescent vison" className='img-fluid' />
                                </div>
                            </div>
                        </div>
                        <div className="mb-5">
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={mission} alt="cyphercrescent mission" className='img-fluid' />
                                </div>
                                <div className="col-md-6 d-flex align-items-center">
                                    <div>
                                        <h2 className='section-heading'>Our Mission</h2>
                                        <p>To create a unique learning environment for the development of professionals that will produce innovative solutions to solve emerging local and global challenges.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <h4>We also do the following:</h4>
                            <ul>
                                <li>Teaching and Learning</li>
                                <li>Capacity Building through Seminars, Applied Technology Workshops (ATW), Seminars/Webinars, Tech Blog, etc</li>
                                <li>Continuing Education through Short Courses, Bootcamps, e-learning etc; Publish Book & Monographs Series; Impact Reports ...</li>
                                <li>Research & Development</li>
                                <li>Innovation, Commercialisation and Entrepreneurship Ecosystem Development, Tech Incubators, Tech Hubs and Platforms</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </PageWrapper>
    )
}

export default About