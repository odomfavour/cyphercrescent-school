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
                                        <p>CypherCrescent L&D is a subsidiary of the CypherCrescent group that runs an industry school. Our
                                            industry school is dedicated to solving practical industry problems by educating and bridging the
                                            practical skill gap in the E&P industry, allowing industry professionals to earn an academic degree
                                            or industry certification in recognition of the skills, knowledge, and experience garnered while
                                            working</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-5">
                            <div className="row">
                                <div className="col-md-6 d-flex align-items-center">
                                    <div>
                                        <h2 className='section-heading'>Our Vision</h2>
                                        <p>A centre of excellence for upskilling and reskilling professionals in the industry, government,
                                            and higher institution </p>
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
                                        <p>To create a uniquely practical learning experience for professionals to solve emerging local
                                            and global challenges by leveraging people, processes, and technology. </p>
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