import React, { useState, useEffect } from 'react'
// import { PaystackButton } from 'react-paystack'
import { Modal } from 'react-bootstrap'
import './paystack.css'

const Paystack = ({ show, handleClose, amount, courseName, ProductLink }) => {
    const publicKey = process.env.REACT_APP_PAYSTACK_PUBLIC_KEY;
    // const amount = 1000000 // Remember, set in kobo!
    // const [email, setEmail] = useState("")
    // const [name, setName] = useState("")
    // const [phone, setPhone] = useState("")
    // const [course, setCourse] = useState("")



    // const componentProps = {
    //     email,
    //     amount,
    //     courseName,
    //     metadata: {
    //         name,
    //         phone,
    //     },
    //     publicKey,
    //     text: "Pay Now",
    //     onSuccess: () => {

    //         alert("Payment Successful")
    //         handleClose()
    //     },

    //     onClose: () => { console.log(courseName); alert("Wait! Don't leave :("); handleClose(); },
    // }
    return (
        <Modal show={show} onHide={handleClose} size="md" centered>
            <Modal.Header closeButton>
                <Modal.Title>Pay With Paystack</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <section className='iframe-holder'>
                    <iframe title='waitListForm' width="640px" height="480px" src={ProductLink} frameborder="0" marginwidth="0" marginheight="0" style={{ border: 'none', maxWidth: 100 + '%', maxHeight: 100 + "vh" }} allowfullscreen webkitallowfullscreen mozallowfullscreen="true" msallowfullscreen="true"> </iframe>
                </section>
            </Modal.Body>
        </Modal>

    )
}

export default Paystack