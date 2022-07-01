import React from 'react'
import { Modal } from 'react-bootstrap'

const WaitingForm = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose} size="md" centered>
            <Modal.Header closeButton>
                <Modal.Title>Waiting List Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <section>
                    <iframe className='iframe-holder' title='waitListForm' width="640px" height="480px" src="https://forms.microsoft.com/Pages/ResponsePage.aspx?id=DIIj-uBa3kOWj2nocrxiABNmNa1E3CBJorUovwvmAHBUNVYwS0hITEhTWk84TlRYRkNBNU1ZWEYySS4u&embed=true" frameBorder="0" marginWidth="0" marginHeight="0" style={{ border: 'none', maxWidth: 100 + '%', maxHeight: 100 + "vh" }} allowFullScreen webkitallowfullscreen="true" mozallowfullscreen="true" msallowfullscreen="true"> </iframe>
                </section>
            </Modal.Body>
        </Modal>
    )
}

export default WaitingForm