import React from 'react'
import CountUp from 'react-countup';


const TrackRecord = () => {
    return (
        <section id="track-records">
            <h2 className='text-center section-heading'>CypherCrescent Track Record</h2>
            <div className="counts">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center flex-wrap text-center">
                        <div className='count-box'>
                            <h3 className='count-number mb-0'><CountUp end={20000} duration={10} delay={4}
                                separator="," />+</h3>
                            <p className='mb-0'>Training Hours</p>
                        </div>
                        <div className='count-box'>
                            <h3 className='count-number mb-0'><CountUp end={3000} duration={10} delay={4} separator="," />+</h3>
                            <p className='mb-0'>Personnel</p>
                        </div>
                        <div className='count-box'>
                            <h3 className='count-number mb-0'><CountUp end={50} duration={10} delay={4} />+</h3>
                            <p className='mb-0'>Companies & Universities</p>
                        </div>
                        <div className='count-box'>
                            <h3 className='count-number mb-0'><CountUp end={40} duration={10} delay={4} />+</h3>
                            <p className='mb-0'>Courses</p>
                        </div>
                        <div className='count-box'>
                            <h3 className='count-number mb-0'><CountUp end={7} duration={10} delay={4} /></h3>
                            <p className='mb-0'>Years</p>
                        </div>
                        <div className='count-box'>
                            <h3 className='count-number mb-0'><CountUp end={3} duration={10} delay={4} /></h3>
                            <p className='mb-0'>Countries</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default TrackRecord