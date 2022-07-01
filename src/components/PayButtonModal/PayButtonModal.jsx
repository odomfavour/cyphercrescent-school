import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import Paystack from '../Paystack/Paystack'

const PayButtonModal = ({ show, handleClose, program, selectedRadio }) => {
    const [openPaystack, setOpenPaystack] = useState(false)
    const getLink = (selectedLocation) => {
        if (typeof program.location !== Array) {
            let a = program.location.find(element => element.place === selectedLocation);
            return a.link
        }

    }
    const payModal = () => {
        handleClose();
        setOpenPaystack(true)
    }
    return (
        <div className="">
            <Modal show={show} onHide={handleClose} size="sm" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Pay In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <section>
                        <div className="d-flex justify-content-center">
                            {/* {program.locatio} */}
                            <button className="btn btn-primary me-3" onClick={payModal}>Pay Naira</button>
                            <button className="btn btn-primary">Pay Dollars</button>
                        </div>
                    </section>
                </Modal.Body>
            </Modal>
            <Paystack show={openPaystack} handleClose={() => setOpenPaystack(false)} amount={program.price + "00"} courseName={program.name} ProductLink={typeof program.location == Array ? getLink(selectedRadio) : program.link} />
        </div>
    )
}

export default PayButtonModal