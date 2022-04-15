import React, {useState} from 'react'
import PageWrapper from '../../layout/PageWrapper/PageWrapper'
// import mission from '../../images/mission.png'

const Programs = () => {
    let program = localStorage.getItem('programDetails');
    const [programDetails, setProgramDetails] = useState(JSON.parse(program));
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
                                <button className="btn btn-primary">Pay for Course</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PageWrapper>
    )
}

export default Programs