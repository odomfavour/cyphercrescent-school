import React, {useState} from 'react'
import './faq.css'
import { faqs } from './faq'
import PageWrapper from '../../layout/PageWrapper/PageWrapper'
import help from '../../images/help.png'
import { Accordion } from 'react-bootstrap'
import { BsFillInfoCircleFill } from 'react-icons/bs'

const Faqs = () => {
    const [appFaq, setAppFaq] = useState(true);
    const [reqFaq, setReqFaq] = useState(false);
    const [somFaq, setSomFaq] = useState(false);
    // const openReqFaq = () => {
    //     setAppFaq(false); setSomFaq(false);
    //     setReqFaq(true);
    // }
    const openAppFaq = () => {
        setAppFaq(true); setSomFaq(false);
        setReqFaq(false);
    }
    // const openSomFaq = () => {
    //     setAppFaq(false); setSomFaq(true);
    //     setReqFaq(false);
    // }

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
                                        <div className="d-flex align-items-center question-section" onClick={openAppFaq} role="button">
                                            <div className="icon me-3">
                                                <BsFillInfoCircleFill className={appFaq ? "red" : ""}/>
                                            </div>
                                            <div className="info">
                                                <h4>Application Process</h4>
                                                <p>Questions about applying for CypherCrescent can be found here</p>
                                            </div>
                                        </div>
                                        {/* <div className="d-flex align-items-center question-section" onClick={openReqFaq} role="button">
                                            <div className="icon me-3">
                                                <BsFillInfoCircleFill className={reqFaq ? "red" : ""}/>
                                            </div>
                                            <div className="info">
                                                <h4>CypherCrescent Requirement</h4>
                                                <p>Questions about applying for CypherCrescent can be found here</p>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center question-section" onClick={openSomFaq} role="button">
                                            <div className="icon me-3">
                                                <BsFillInfoCircleFill className={somFaq ? "red" : ""}/>
                                            </div>
                                            <div className="info">
                                                <h4>Other Faqs</h4>
                                                <p>other Questions about CypherCrescent can be found here</p>
                                            </div>
                                        </div> */}
                                    </section>
                                </div>
                                <div className="col-md-7">
                                    {appFaq ? <section className=''>
                                        <div className="d-flex align-items-center question-section">
                                            <div className="icon me-3">
                                                <BsFillInfoCircleFill className={appFaq ? "red" : ""}/>
                                            </div>
                                            <div className="info">
                                                <h4>CypherCrescent Application</h4>
                                                <p>Questions about applying for CypherCrescent can be found here</p>
                                            </div>
                                        </div>
                                        <Accordion defaultActiveKey="0">
                                            {faqs.map((faq) => (
                                                <Accordion.Item eventKey={faq.id - 1} key={faq.id}>
                                                    <Accordion.Header><span className='faq-question'>{faq.question}</span></Accordion.Header>
                                                    <Accordion.Body>
                                                        <p dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            ))}
                                        </Accordion>
                                    </section> : ''}
                                    {reqFaq ? <section className=''>
                                        <div className="d-flex align-items-center question-section">
                                            <div className="icon me-3">
                                                <BsFillInfoCircleFill className={reqFaq ? "red" : ""}/>
                                            </div>
                                            <div className="info">
                                                <h4>CypherCrescent Requirement</h4>
                                                <p>Questions about requirements for CypherCrescent can be found here</p>
                                            </div>
                                        </div>
                                        <Accordion defaultActiveKey="0">
                                            {faqs.map((faq) => (
                                                <Accordion.Item eventKey={faq.id - 1} key={faq.id}>
                                                    <Accordion.Header><span className='faq-question'>{faq.question}</span></Accordion.Header>
                                                    <Accordion.Body>
                                                        <p dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            ))}
                                        </Accordion>
                                    </section> : ''}
                                    {somFaq ? <section className=''>
                                        <div className="d-flex align-items-center question-section">
                                            <div className="icon me-3">
                                                <BsFillInfoCircleFill className={somFaq ? "red" : ""}/>
                                            </div>
                                            <div className="info">
                                                <h4>CypherCrescent Requirement</h4>
                                                <p>Questions about some other things about CypherCrescent can be found here</p>
                                            </div>
                                        </div>
                                        <Accordion defaultActiveKey="0">
                                            {faqs.map((faq) => (
                                                <Accordion.Item eventKey={faq.id - 1} key={faq.id}>
                                                    <Accordion.Header><span className='faq-question'>{faq.question}</span></Accordion.Header>
                                                    <Accordion.Body>
                                                        <p dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            ))}
                                        </Accordion>
                                    </section> : ''}

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