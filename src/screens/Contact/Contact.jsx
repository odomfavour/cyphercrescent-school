import React from 'react'
import PageWrapper from '../../layout/PageWrapper/PageWrapper'
import './contact.css'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import map from '../../images/map-1.png'

const Contact = () => {
    return (
        <PageWrapper>
            <section id='contact-page'>
                <div className="top-section">
                </div>
                <div className="contact-card-section">
                    <div className="contact-card">
                        <h2 className="text-center pb-4 section-heading">Get in Touch</h2>
                        <div className="row">
                            <div className="col-md-4 mb-2">
                                <div className="contact-item text-center">
                                    <div className="about-icon">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <p>Flour mills estate, off street Badagry, Lagos Nigeria</p>
                                </div>
                            </div>
                            <div className="col-md-4 mb-2">
                                <div className="contact-item text-center">
                                    <div className="about-icon">
                                        <FaPhoneAlt />
                                    </div>
                                    <p>+234 (132)-581-5551</p>
                                </div>
                            </div>
                            <div className="col-md-4 mb-2">
                                <div className="contact-item text-center">
                                    <div className="about-icon">
                                        <FaEnvelope />
                                    </div>
                                    <p>Chudi.disha.page</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-form-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 d-flex align-items-center">
                                <div>
                                    <h3>Leave a Message</h3>
                                    <p>Kindly leave us a message, regarding any complaints, enquiries and we’ll be in touch shortly</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="contact-form">
                                    <form>
                                        <div class="mb-3">
                                            <label for="fullName" class="form-label">FullName</label>
                                            <input type="text" class="form-control" id="fullName" aria-describedby="fullName" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="email" class="form-label">Email Address</label>
                                            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="subject" class="form-label">Subject</label>
                                            <input type="text" class="form-control" id="subject" />
                                        </div>
                                        <div className="mb-3">
                                            <label for="message" class="form-label">Message</label>
                                            <textarea name="" id="message" className='form-control'></textarea>
                                        </div>
                                        <div class="d-grid gap-2">
                                            <button class="btn btn-primary" type="button">Send message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="map-section">
                    <div className="container">
                        <h3 className="section-heading text-center pb-3">Drop by the School</h3>
                        <img src={map} alt="school map" className='img-fluid' />
                    </div>
                </div>
            </section>
        </PageWrapper>
    )
}

export default Contact