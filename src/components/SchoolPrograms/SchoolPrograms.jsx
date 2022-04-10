import React from 'react'

const SchoolPrograms = () => {
  return (
    <section>
        <div className="container">
            <h2 className='mt-5'>CypherCrescent Industry School programs</h2>
            <div className="my-5">
                <div className="row">
                    <div className="col-md-3 mb-3">
                        <div className="school-program">
                            <h3>Reservoir Performance Analysis</h3>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div className="school-program">
                            <h3>Reservoir Performance Analysis</h3>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div className="school-program">
                            <h3>Reservoir Performance Analysis</h3>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div className="school-program">
                            <h3>Reservoir Performance Analysis</h3>
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-end my-3">
                    <button className="btn btn-primary">More Courses</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SchoolPrograms