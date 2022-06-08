import React from 'react'
import './footer.css'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaMobileAlt, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='py-5'>
            <div className="container">
                {/* <div className="top-section py-3">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <h5 className='section-title'>About Us</h5>
                            <p>CypherCrescent L&D is a subsidiary of the CypherCrescent group that runs an industry school. Our
                                industry school is dedicated to solving practical industry problems by educating and bridging the
                                practical skill gap in the E&P industry, allowing industry professionals to earn an academic degree
                                or industry certification in recognition of the skills, knowledge, and experience garnered while
                                working</p>
                        </div>
                        <div className="col-lg-8 col-md-6">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-12 mb-3">
                                    <h5 className='section-title'>Stay Updated</h5>
                                    <form action="">
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your Email' />
                                        </div>
                                        <button className="btn btn-light">
                                            Subscribe
                                        </button>
                                    </form>
                                </div>
                                <div className="col-md-12 col-lg-6 col-12">
                                    <h5 className='section-title'>Stay connected with us on</h5>
                                    <ul className="d-flex justify-content-between flex-wrap">
                                        <li><a href="https://www.facebook.com/CypherCrescent-Industry-School-106233015348408/" rel='noreferrer' target='_blank'>Facebook</a></li>
                                        <li><a href="https://twitter.com/CypherC_lnd" rel='noreferrer' target='_blank'>Twitter</a></li>
                                        <li><a href="https://instagram.com/ccl_industryschool/" rel='noreferrer' target='_blank'>Instagram</a></li>
                                        <li><a href="https://www.linkedin.com/showcase/cyphercrescentindustryschool" rel='noreferrer' target='_blank'>LinkedIn</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div> */}
                <div className="bottom-section py-3">
                    <div className="row">
                        {/* <div className="col-md-4">
                            <h2 className='section-title'>CypherCrescent</h2>
                            <p>Our specialized training are inventive, they create sustainable competencies and improved capabilities through systemic innovative processes</p>
                        </div> */}
                        <div className="col-lg-3 col-md-3 col-6">
                            <p className='section-title'>Quick Links</p>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/faqs">FAQ</a></li>
                                <li><a href="/about">About Us</a></li>
                                <li><a href="#home">Terms of Use</a></li>
                                <li><a href="#home">Teach on CypherCrescent</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-3 col-6">
                            <p className='section-title'>Links</p>
                            <ul>
                                <li><a href="#home">Help & support</a></li>
                                <li><a href="/privacy-policy">Privacy policy</a></li>
                                <li><a href="#home">Careers</a></li>
                                <li><a href="/blog">Blog</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <p className='section-title'>Contact Information</p>
                            <ul>
                                <li>
                                    <div className="d-flex">
                                        <div className="contact-heading me-3">
                                            <FaMapMarkerAlt/>
                                        </div>
                                        <div className="contact-info">
                                            Plot 76A Fiddil Avenue, Off Ordinance Road,
                                            Trans Amadi Industrial Layout,
                                            Port Harcourt, Nigeria
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex">
                                        <div className="contact-heading me-3">
                                            <FaMobileAlt/>
                                        </div>
                                        <div className="contact-info">
                                            08111113957
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex">
                                        <div className="contact-heading me-3">
                                            <FaEnvelope/>
                                        </div>
                                        <div className="contact-info">
                                            learning@cyphercrescent.com
                                        </div>
                                    </div>
                                </li>
                                {/* <li><a href="https://www.cyphercrescent.com.ng/" rel='noreferrer' target='_blank'>Energy Services</a></li>
                                <li><a href="https://www.cyphercrescent.com.ng/" rel='noreferrer' target='_blank'>Information Technology</a></li>
                                <li><a href="https://www.cyphercrescent.com.ng/" rel='noreferrer' target='_blank'>CypherCrescent E&P</a></li> */}
                            </ul>
                        </div>
                        <div className="col-lg-4">
                            <h5 className='section-title'>Stay connected with us on</h5>
                            <ul className="d-flex social-icons">
                                <li><a href="https://www.facebook.com/CypherCrescent-Industry-School-106233015348408/" rel='noreferrer' target='_blank'><FaFacebookF /></a></li>
                                <li><a href="https://twitter.com/CypherC_lnd" rel='noreferrer' target='_blank'><FaTwitter /></a></li>
                                <li><a href="https://instagram.com/ccl_industryschool/" rel='noreferrer' target='_blank'><FaInstagram /></a></li>
                                <li><a href="https://www.linkedin.com/showcase/cyphercrescentindustryschool" rel='noreferrer' target='_blank'><FaLinkedinIn /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer