import React from 'react'
import { Modal } from 'react-bootstrap'
const SignupForm = ({show, handleClose}) => {
    return (
        <Modal show={show} onHide={handleClose} size="md" centered>
            <Modal.Header closeButton>
                <Modal.Title>Registration</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <section>
                    <iframe className="iframe-holder" title="signupform" width="640px" height="480px" src="https://forms.office.com/r/SrMurvbkN1?embed=true" frameborder="0" marginwidth="0" marginheight="0" style={{ border: 'none', maxWidth: 100 + '%', maxHeight: 100 + "vh" }} allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>
                </section>
            </Modal.Body>
        </Modal>
    )
}

export default SignupForm