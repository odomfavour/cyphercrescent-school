import React, { useEffect, useState } from 'react'
import PayButtonModal from '../../components/PayButtonModal/PayButtonModal';
import WaitingForm from '../../components/WaitingForm/WaitingForm';
import PageWrapper from '../../layout/PageWrapper/PageWrapper'

const Program = () => {
    const [programDetails, setProgramDetails] = useState({});
    // const [show, setShow] = useState(false);
    const [buttonShow, setButtonShow] = useState(false);

    const [showWaitListForm, setshowWaitListForm] = useState(false);
    const [radioValue, setRadioValue] = useState('virtual');

    const handleCloseWaitListForm = () => setshowWaitListForm(false);
    const handleShowWaitListForm = () => setshowWaitListForm(true);

    const getPrice = (selectedLocation) => {
        let a = programDetails.location.find(element => element.place === selectedLocation);
        return a.price
    }

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

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
                            <div className="program text-center">
                                <img src={programDetails.image} alt="" className='img-fluid' />
                            </div>
                        </div>
                        <div className="col-md-6 d-flex align-items-center">
                            <div>
                                <h2>{programDetails.name}</h2>
                                <p>{programDetails.description}</p>
                                {/* <h5 className='mt-3'>&#36; {programDetails.price}</h5> */}
                                <h5 className='mt-3'>&#36; {programDetails.location ? getPrice(radioValue) : programDetails.price}</h5>
                                {/* <p>Location: {programDetails.location}</p> */}
                                {programDetails.location ? <div className='mb-3'>
                                    <p>Select your plan</p>
                                    {programDetails.location.map((e, index) => (
                                        <div key={index}>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={e.place} checked={radioValue === e.place}
                                                    onChange={(e) => setRadioValue(e.currentTarget.value)} />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    {e.place}
                                                </label>
                                            </div>
                                        </div>
                                    ))}
                                </div> : ""
                                }

                                {programDetails.availableSoon === true ? <div>
                                    <p className='fw-bold'>Course will be available soon.</p>
                                    <a href="#link" className="btn btn-primary" onClick={handleShowWaitListForm}>Join waiting list</a> </div> : <div>
                                    <div className="d-flex">
                                        <button className="btn btn-outline-primary me-3">Make Reservation</button>
                                        {/* <button className="btn btn-primary" onClick={handleShow}>Pay for Course</button> */}
                                        <button className="btn btn-primary" onClick={() => { setButtonShow(true) }}>Pay for Course</button>
                                    </div>
                                </div>}
                                <p className='mt-5'>The Lagos and Uyo short courses can also be taken out of the country at $4500 per person</p>
                            </div>
                        </div>
                    </div>
                    <div className="py-5">
                        {/* <h2 className='section-heading'>About Course</h2> */}
                        {/* <div dangerouslySetInnerHTML={{ __html: programDetails.note }}>
                        </div> */}
                        <div>
                            <h4>Who is this training for?</h4>
                            <p>{programDetails.trainingFor}</p>
                            <h5>The following professionals can benefit from this course</h5>
                            <ul dangerouslySetInnerHTML={{ __html: programDetails.professionals }}>

                            </ul>
                            {programDetails.objectives !== "" ?
                                <div>
                                    <h4>What are the objectives?</h4>
                                    <p>At the end of this training participants will:</p>
                                    <ul dangerouslySetInnerHTML={{ __html: programDetails.objectives }}>

                                    </ul>
                                </div> : ""
                            }

                            <div className="py-4">
                                <div className="row">
                                    <div className="col-md-5">
                                        <h2>Apply for {programDetails.name}</h2>
                                        {programDetails.availableSoon === true ? <div>
                                            <p className='fw-bold'>Course will be available soon.</p>
                                            <a href="#link" className="btn btn-primary" onClick={handleShowWaitListForm}>Join waiting list</a> </div> : <div>
                                            <div className="d-flex">
                                                <button className="btn btn-outline-primary me-3">Make Reservation</button>
                                                {/* <button className="btn btn-primary" onClick={handleShow}>Pay for Course</button> */}
                                                <button className="btn btn-primary" onClick={() => { setButtonShow(true) }}>Pay for Course</button>
                                            </div>
                                        </div>}

                                    </div>
                                    <div className="col-md-7">
                                        {/* 
                                            <h4>Training Perks</h4>
                                            <p>Training benefits include:</p>
                                            <ul>
                                                <li>kjjfk</li>
                                            </ul> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <Paystack show={show} handleClose={handleClose} amount={programDetails.price + "00"} courseName={programDetails.name} ProductLink={programDetails.link} /> */}
                        <WaitingForm show={showWaitListForm} handleClose={handleCloseWaitListForm} />
                        <PayButtonModal show={buttonShow} handleClose={() => setButtonShow(false)} program={programDetails} selectedRadio={radioValue} />
                    </div>
                </div>
            </section>
        </PageWrapper>
    )
}

export default Program