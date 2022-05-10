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
                    <iframe title='waitListForm' width="640px" height="480px" src="https://forms.microsoft.com/Pages/ResponsePage.aspx?id=DIIj-uBa3kOWj2nocrxiABNmNa1E3CBJorUovwvmAHBUNVYwS0hITEhTWk84TlRYRkNBNU1ZWEYySS4u&embed=true" frameborder="0" marginwidth="0" marginheight="0" style={{ border: 'none', maxWidth: 100 + '%', maxHeight: 100 + "vh" }} allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>
                </section>
            </Modal.Body>
        </Modal>
    )
}

export default WaitingForm