import React, { useState } from 'react'
import { PaystackButton } from 'react-paystack'
import { Modal } from 'react-bootstrap'

const Paystack = ({show, handleClose, amount }) => {
    const publicKey = process.env.REACT_APP_PAYSTACK_PUBLIC_KEY;
    // const amount = 1000000 // Remember, set in kobo!
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")

    const componentProps = {
        email,
        amount,
        metadata: {
            name,
            phone,
        },
        publicKey,
        text: "Pay Now",
        onSuccess: () => {
            alert("Payment Successful")
            handleClose()
        },
            
        onClose: () => {alert("Wait! Don't leave :("); handleClose();},
    }
    return (
        <Modal show={show} onHide={handleClose} size="md" centered>
            <Modal.Header closeButton>
                <Modal.Title>Pay With Paystack</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <section>

                    <div className="checkout-form">
                        <div className="checkout-field mb-3">
                            <label class="form-label">Name</label>
                            <input
                                type="text"
                                id="name"
                                className='form-control'
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="checkout-field mb-3">
                            <label className='form-label'>Email</label>
                            <input
                                type="email"
                                id="email"
                                className='form-control'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="checkout-field mb-3">
                            <label className='form-label'>Phone</label>
                            <input
                                type="tel"
                                id="phone"
                                className='form-control'
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        <div className="checkout-field mb-3">
                            <label className='form-label'>Amount(in Kobo)</label>
                            <input
                                type="text"
                                id="phone"
                                className='form-control'
                                value={amount}
                                disabled
                            />
                        </div>
                        <PaystackButton className="paystack-button btn btn-primary" {...componentProps} />
                    </div>
                </section>
            </Modal.Body>
        </Modal>

    )
}

export default Paystack