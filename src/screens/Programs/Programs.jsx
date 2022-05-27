import React from 'react'
import { programs, otherPrograms } from '../../components/ProgramData/ProgramData'
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';

const Programs = () => {
    const navigate = useNavigate();
    const displayProgram = (program) => {
        console.log(program)
        localStorage.setItem('programDetails', JSON.stringify(program));
        navigate("/program")
    }
    return (
        <PageWrapper>
            <div className="programs-section pt-200">
                <div className="container">
                    <div className="my-5">
                        <h3 className='mb-5 text-center'>Short Courses</h3>
                        <h5 className='text-center pb-5'>Ready to take your interest further and register for one of our programs? Check out the range of
                            programs we have available below</h5>
                        <div className="row">
                            {programs.map((program) => (
                                <div className="col-md-6 col-lg-3 col-12 mb-3" key={program.id}>
                                    <div className="school-program">
                                        <div className="school-program-inner">
                                            <div className="card-front">
                                                <img src={program.image} alt={program.title} className='img-fluid' />
                                                <h3>{program.name}</h3>
                                            </div>
                                            <div className="card-back">
                                                <h3>{program.name}</h3>
                                                <p>{program.description}</p>
                                                <button className='btn btn-primary mt-3' onClick={() => displayProgram(program)}>View Detail</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="my-5">
                        <div className="row">
                            {otherPrograms.map((program) => (
                                <div className="col-md-6 col-lg-3 col-12 mb-3" key={program.id}>
                                    <div className="school-program">
                                        <div className="school-program-inner">
                                            <div className="card-front">
                                                <img src={program.image} alt={program.title} className='img-fluid' />
                                                <h3>{program.name}</h3>
                                            </div>
                                            <div className="card-back">
                                                <h3>{program.name}</h3>
                                                <p>{program.description}</p>
                                                <button className='btn btn-primary mt-3' onClick={() => displayProgram(program)}>View Detail</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    )
}

export default Programs