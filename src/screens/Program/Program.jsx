import React, { useEffect, useState } from 'react'
import Paystack from '../../components/Paystack/Paystack';
import WaitingForm from '../../components/WaitingForm/WaitingForm';
import PageWrapper from '../../layout/PageWrapper/PageWrapper'
// import mission from '../../images/mission.png'

const Program = () => {
    const [programDetails, setProgramDetails] = useState({});
    const [show, setShow] = useState(false);

    const [showWaitListForm, setshowWaitListForm] = useState(false);
    const handleCloseWaitListForm = () => setshowWaitListForm(false);
    const handleShowWaitListForm = () => setshowWaitListForm(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        let program = localStorage.getItem('programDetails');
        setProgramDetails(JSON.parse(program));
    }, [])
    return (
        <PageWrapper>
            <section className='pt-200 my-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={programDetails.image} alt="" className='img-fluid' />
                        </div>
                        <div className="col-md-6 d-flex align-items-center">
                            <div>
                                <h2>{programDetails.name}</h2>
                                <p>{programDetails.description}</p>
                                <h5 className='mt-3'>&#8358; {programDetails.price}</h5>
                                {programDetails.availableSoon === true ? <div> 
                                    <p className='fw-bold'>Course will be available soon.</p>
                                    <a href="#link" className="btn btn-primary" onClick={handleShowWaitListForm}>Join waiting list</a> </div>: <button className="btn btn-primary" onClick={handleShow}>Pay for Course</button>}
                                
                            </div>
                        </div>
                    </div>
                    <div className="py-5">
                        {/* <h2 className='section-heading'>About Course</h2> */}
                        <div dangerouslySetInnerHTML={{ __html: programDetails.note }}>
                        </div>
                        <div>
                            <h4>Who is this training for?</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo ea ducimus omnis deleniti, perferendis eos nihil nisi dolorum ad, blanditiis numquam repellat excepturi explicabo, consequuntur unde. Consequuntur nulla ipsa totam.</p>
                            <h5>The following professionals can benefit from this course</h5>
                            <ul dangerouslySetInnerHTML={{ __html: programDetails.professionals }}>
                                
                            </ul>
                           {programDetails.objective ? <div> <h4>What are the objectives?</h4>
                            <p>At the end of this training participants will:</p>
                            <ul dangerouslySetInnerHTML={{ __html: programDetails.objectives }}>

                            </ul>
                            <h4>How will this course be presented</h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos porro ipsam optio maxime. Minus quasi earum quidem assumenda dolores possimus non, ducimus a, repellat perspiciatis explicabo odit. Vel, voluptas amet?</p>
                            <div className="py-4">
                                <div className="row">
                                    <div className="col-md-5">
                                        <h2>Apply for {programDetails.name}</h2>
                                        <button className='btn btn-primary'>pay for course &#8358; {programDetails.price}</button>
                                    </div>
                                    <div className="col-md-7">
                                        <h4>Training Perks</h4>
                                        <p>Training benefits include:</p>
                                        <ul>
                                            <li>kjjfk</li>
                                        </ul>
                                    </div>
                                </div>
                            </div></div> : ""}
                        </div>
                        <Paystack show={show} handleClose={handleClose} amount={programDetails.price + "00"} courseName={programDetails.name}/>
                        <WaitingForm show={showWaitListForm} handleClose={handleCloseWaitListForm}/>
                        {/* <div>
                            <form id="paymentForm">
                                <div class="form-group">
                                    <label for="email">Email Address</label>
                                    <input type="email" id="email-address" required />
                                </div>
                                <div class="form-group">
                                    <label for="amount">Amount</label>
                                    <input type="tel" id="amount" required />
                                </div>
                                <div class="form-group">
                                    <label for="first-name">First Name</label>
                                    <input type="text" id="first-name" />
                                </div>
                                <div class="form-group">
                                    <label for="last-name">Last Name</label>
                                    <input type="text" id="last-name" />
                                </div>
                                <div class="form-submit">
                                    <button type="submit" onclick="payWithPaystack()"> Pay </button>
                                </div>
                            </form>
                        </div> */}
                    </div>
                </div>
            </section>
        </PageWrapper>
    )
}

export default Program