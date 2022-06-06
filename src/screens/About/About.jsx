import React from 'react'
import PageWrapper from '../../layout/PageWrapper/PageWrapper'
import './about.css'
import vision from '../../images/vision-one.jpg'
import mission from '../../images/mission.png'
import logo from '../../images/logo-one.jpg'

const About = () => {
    return (
        <PageWrapper>
            <section id='about-page'>
                <div className="top-section text-center">
                    <div className="container">
                        <div className="d-flex align-items-center justify-content-center centered-box">
                            <div>
                                <h1 className='fw-bold'>CypherCrescent Industry School</h1>
                                <p>CypherCrescent Industry School was established to solve practical industry problems by bringing the skill gap in the E&P, energy & technology industries driving research and innovation for sustainable development.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-section py-5">
                    <div className="container">
                        <div className="mb-5">
                            <div className="row">
                                <div className="col-md-6 d-flex align-items-center justify-content-center">
                                    <img src={logo} alt="cyphercrescent logo" className='img-fluid' />
                                </div>
                                <div className="col-md-6 d-flex align-items-center">
                                    <div>
                                        <h2 className='section-heading pt-100'>CypherCrescent Industry<br />School</h2>
                                        <div className="word-underline"></div>
                                        {/* <p>CypherCrescent L&D is a subsidiary of the CypherCrescent group that runs an industry school. Our
                                            industry school is dedicated to solving practical industry problems by educating and bridging the
                                            practical skill gap in the E&P industry, allowing industry professionals to earn an academic degree
                                            or industry certification in recognition of the skills, knowledge, and experience garnered while
                                            working</p> */}
                                        <p>
                                            CypherCrescent is an applied research & development company with core expertise in mathematical modelling, information technology, petroleum engineering, geosciences, software development, machine learning, and human capacity development.</p>

                                        <p>Launched in 2012, CypherCrescent, has expanded and diversified its services across four subsidiaries that offer integrated technology services across the E&P, Education, Information Technology, and Enterprise Energy Transition industries. With its growing client base, the company remains committed to providing cost-effective technology services and business intelligence solutions that offer a collaborative platform and improve operational excellence through optimal allocation of resources and eliminating non-productive time (NPT).</p>

                                        <p>CypherCrescent L&D is a subsidiary of the CypherCrescent Group that runs an Industry School operationalising Triple Helix of partnership with Government (MDAs)-Academia-Industry with a strong niche for driving innovation and solving practical industry problems.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-5">
                            <h4>Our Industy School</h4>
                            <div>
                                <p>As a registered member of the international triple helix association, CypherCrescent industry school programmes are designed to run on the triple helix plus model, which entails a strategic collaboration between industry, government, academia, as well as reputable professional associations to fill the practical skill gaps in the energy and technology industry. Through the model, we can identify gaps in the Nigerian oil & gas industry and develop relevant technology skillsets to solve them, thereby fostering value creation in the Nigerian economy.</p>
                                <p>This approach will engender research & development, birth innovations, and produce industry professionals with relevant skill sets to solve contemporary industry problems.</p>
                                <p>Our industry school is dedicated to solving practical industry problems by educating and bridging the functional skill gap in the E&P industry, allowing industry professionals to earn an academic degree or industry certification in recognition of the skills, knowledge, and experience garnered while working.</p>
                                <p>In addition to equipping new graduates and young professionals with practical and dynamic problem-solving skills in the energy and technology space, it shall also allow practising professionals to upskill and reskill.
                                    Our industry school offers dedicated boot camps, diplomas, short courses, certifications, and postgraduate degrees to oil & gas professionals through a curated industry-based curriculum delivered by subject matter experts worldwide. Our industry school promotes innovation and knowledge transfer and produces oil & gas professionals who are well equipped for their employers.
                                </p>
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
                                    <div className="vision-box">
                                        <img src={vision} alt="cyphercrescent vison" className='img-fluid' />
                                    </div>
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
                        {/* <div className="">
                            <h4>We also do the following:</h4>
                            <ul>
                                <li>Structured Training (Certificates, Diploma, MSc,)</li>
                                <li>Industry Training (Continuing Education through short courses, in-house training, boot camps etc.)</li>
                                <li>Capacity Building (Conferences, Symposia, Colloquia, Applied Technology Workshops; Publication of Books, Journals, Magazines, Blogs; Library and Information Services)</li>
                                <li>Research & Development (Digital technology development for sustainable development & tackling typical industry challenges)</li>
                                <li>Entrepreneurship (Developing Innovation, Commercialisation and Entrepreneurial ecosystems, Innovation hubs etc.)</li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </section>
        </PageWrapper >
    )
}

export default About