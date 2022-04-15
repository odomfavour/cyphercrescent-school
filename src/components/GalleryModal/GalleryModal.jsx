import React from 'react'
import { Modal } from 'react-bootstrap'

const GalleryModal = ({show, handleClose, imageDetail}) => {
  return (
    <Modal show={show} onHide={handleClose} size="md" centered>
            <Modal.Header closeButton>
                <Modal.Title>Industry School</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <section>
                    <div className="text-center">
                        <img src={imageDetail.source} alt="" className='img-fluid'/>
                    </div>
                    <h5>{imageDetail.name}</h5>
                </section>
            </Modal.Body>
        </Modal>
  )
}

export default GalleryModal