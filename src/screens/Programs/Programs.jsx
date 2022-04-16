import React, { useEffect, useState } from 'react'
import Paystack from '../../components/Paystack/Paystack';
import PageWrapper from '../../layout/PageWrapper/PageWrapper'
// import mission from '../../images/mission.png'

const Programs = () => {
    const [programDetails, setProgramDetails] = useState({});
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        console.log(process.env)
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
                                <h5 className='mt-3'>&#8358;{programDetails.price}</h5>
                                <button className="btn btn-primary" onClick={handleShow}>Pay for Course</button>
                            </div>
                        </div>
                    </div>
                    <div className="py-5">
                        <h2 className='section-heading'>About Course</h2>
                        <div dangerouslySetInnerHTML={{ __html: programDetails.note }}>
                        </div>
                        <Paystack show={show} handleClose={handleClose} amount={programDetails.price + "00"} />
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

export default Programs