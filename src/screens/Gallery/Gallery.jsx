import React, { useState } from 'react'
import Masonry from 'react-responsive-masonry'
import { characters } from '../../components/GalleryData/GalleryData'
import { ResponsiveMasonry } from 'react-responsive-masonry'
import GalleryModal from '../../components/GalleryModal/GalleryModal'
import PageWrapper from '../../layout/PageWrapper/PageWrapper'

const Gallery = () => {
    const columnsCountBreakPoints = { 350: 1, 750: 2, 900: 3 };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [imageDetail, setImageDetail] = useState({})

    const openSidebar = (e, picDetail) => {
        handleShow()
        console.log(picDetail)
        setImageDetail({
            name: picDetail.name,
            source: picDetail.image,
            description: picDetail.description
        })
    }

    return (
        <PageWrapper>
            <section className='py-5'>
                <div className="container">
                    <div className="text-center py-4">
                        <h3 className='section-title'>Gallery</h3>
                    </div>
                    <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
                        <Masonry gutter={15}>
                            {characters.map((image) => (
                                <img src={image.image} alt={image.name} role="button" key={image.id} onClick={(e) => openSidebar(e, image)} />
                            ))}
                        </Masonry>
                    </ResponsiveMasonry>
                    <GalleryModal show={show} handleClose={handleClose} imageDetail={imageDetail} />
                </div>
            </section>
        </PageWrapper>
    )
}

export default Gallery