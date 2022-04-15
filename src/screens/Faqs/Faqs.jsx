import React from 'react'
import './faq.css'
import PageWrapper from '../../layout/PageWrapper/PageWrapper'
import help from '../../images/help.png'
import { Accordion } from 'react-bootstrap'
import { BsFillInfoCircleFill } from 'react-icons/bs'

const Faqs = () => {
    return (
        <PageWrapper>
            <section className="pt-200 faq-page">
                <div className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 d-flex align-items-center text-blue">
                                <div>
                                    <h1>CypherCrescent Industry  School Help Centre</h1>
                                    <p >Let us know if you have any questions, we are here to help</p>
                                    <div className="mt-5">
                                        <button className='btn btn-primary'>Chat with us</button>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-6">
                                <img src={help} alt="" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
                <section>
                    <div className="container">
                        <h3 className="text-center section-heading">Frequently Asked Questions</h3>
                        <div className="search">
                            <form action="">
                                <div class="input-group mb-3">

                                    <input type="text" class="form-control" placeholder="Search Question Here......" aria-label="Search Question Here......" aria-describedby="button-addon2" />
                                    <button class="btn btn-primary" type="button" id="button-addon2">Search</button>
                                </div>
                            </form>

                        </div>
                        <div className='py-5'>
                            <div className="row">
                                <div className="col-md-5">
                                    <section className="question-tags">
                                        <div className="d-flex align-items-center question-section">
                                            <div className="icon me-3">
                                                <BsFillInfoCircleFill />
                                            </div>
                                            <div className="info">
                                                <h4>Application Process</h4>
                                                <p>Questions about applying for CypherCrescent can be found here</p>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center question-section">
                                            <div className="icon me-3">
                                                <BsFillInfoCircleFill />
                                            </div>
                                            <div className="info">
                                                <h4>CypherCrescent Requirement</h4>
                                                <p>Questions about applying for CypherCrescent can be found here</p>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center question-section">
                                            <div className="icon me-3">
                                                <BsFillInfoCircleFill />
                                            </div>
                                            <div className="info">
                                                <h4>CypherCrescent Requirement</h4>
                                                <p>Questions about applying for CypherCrescent can be found here</p>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-md-7">
                                    <section className=''>
                                        <div className="d-flex align-items-center question-section">
                                            <div className="icon me-3">
                                                <BsFillInfoCircleFill />
                                            </div>
                                            <div className="info">
                                                <h4>CypherCrescent Requirement</h4>
                                                <p>Questions about applying for CypherCrescent can be found here</p>
                                            </div>
                                        </div>
                                        <Accordion defaultActiveKey="0">
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>How do I register for the program?</Accordion.Header>
                                                <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                                    est laborum.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header>What is the mode of payment?</Accordion.Header>
                                                <Accordion.Body>
                                                    Education is very different from the other sectors so all the payment modes may not be applicable. When deciding on the payment modes to accept online payments, you can enable modes that are relevant based on the kind of transactions you are expecting and avoid overcrowding the checkout page with too many payment modes.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </section>
        </PageWrapper>
    )
}

export default Faqs