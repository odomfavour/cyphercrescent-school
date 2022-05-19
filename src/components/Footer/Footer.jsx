import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer className='py-5'>
            <div className="container">
                <div className="top-section py-3">
                    <div className="row">
                        <div className="col-md-4">
                            <h5 className='section-title'>About Us</h5>
                            <p>Cyphercrescent industry School was established to solve practical industry problems by bringing the skill gap in the E&p, energy & technology industries driving research and innovation for susstainable development.</p>
                        </div>
                        <div className="col-md-4">
                            <h5 className='section-title'>Stay Updated</h5>
                            <form action="">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your Email'/>
                                </div>
                                <button className="btn btn-light">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                        <div className="col-md-4">
                            <h5 className='section-title'>Find us on socials</h5>
                            <ul className="d-flex justify-content-between">
                                <li><a href="#facebook">Facebook</a></li>
                                <li><a href="#twitter">Twitter</a></li>
                                <li><a href="#instagram">Instagram</a></li>
                                <li><a href="#telegram">Telegram</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bottom-section py-3">
                    <div className="row">
                        <div className="col-md-4">
                            <h2 className='section-title'>CypherCrescent</h2>
                            <p>Our specialized training are inventive, they create sustainable competencies and improved capabilities through systemic innovative processes</p>
                        </div>
                        <div className="col-md-3">
                            <p className='section-title'>Quick Links</p>
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#home">FAQ</a></li>
                                <li><a href="#home">About Us</a></li>
                                <li><a href="#home">Terms & COnditions</a></li>
                                <li><a href="#home">Teach on CypherCrescent</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <p className='section-title'>Links</p>
                            <ul>
                                <li><a href="#home">Help & support</a></li>
                                <li><a href="#home">Privacy policy</a></li>
                                <li><a href="#home">Careers</a></li>
                                <li><a href="#home">Blog</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <p className='section-title'>Contact</p>
                            <ul>
                                <li>Aberdeen@cyphercrescent.com</li>
                                <li>+44(0)7493823427</li>
                                <li>Cyphercresecent UK-Suite 9, 53-67 Whitehall Road, Aberdeen, AB25 2PQ, United Kingdom.</li>
                                <li><a href="https://www.cyphercrescent.com.ng/" rel='noreferrer' target='_blank'>Energy Services</a></li>
                                <li><a href="https://www.cyphercrescent.com.ng/" rel='noreferrer' target='_blank'>Information Technology</a></li>
                                <li><a href="https://www.cyphercrescent.com.ng/" rel='noreferrer' target='_blank'>CypherCrescent E&P</a></li>
                                


                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer