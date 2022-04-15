import React from 'react'
import { programs } from '../ProgramData/ProgramData'
import { useNavigate } from 'react-router-dom'

const SchoolPrograms = () => {
    const navigate = useNavigate();
    const displayProgram = (program) => {
        console.log(program)
        localStorage.setItem('programDetails', JSON.stringify(program));
        navigate("/programs")
        // setImageDetail({
        //     name: picDetail.name,
        //     source: picDetail.image,
        //     description: picDetail.description
        // })
    }

    return (
        <section id="programs-section">
            <div className="container">
                <h2 className='mt-5 text-center section-heading'>CypherCrescent Industry School programs</h2>
                <div className="my-5">
                    <div className="row">
                        {programs.map((program) => (
                            <div className="col-md-3 mb-3" key={program.id}>
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
                    <div className="d-flex align-items-center justify-content-end my-3">
                        <a href="#programs" className='text-blue'>View all Courses</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SchoolPrograms