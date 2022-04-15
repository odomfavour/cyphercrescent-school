import React from 'react'
// import adax from '../../images/ADAX.png'
// import agip from '../../images/AGIP.png'
// import belema from '../../images/belema.png'
// import Conoil from '../../images/Conoil.png'
// import Eroton from '../../images/Eroton.png'
// import FIRST from '../../images/FIRST.png'
// import NAPIMS from '../../images/NAPIMS.png'
// import nd from '../../images/nd.png'
// import NNPC from '../../images/NNPC.png'
// import NPDC from '../../images/NPDC.png'
// import ROCK from '../../images/ROCK.png'
// import SEPLAT from '../../images/SEPLAT.png'
// import SPE from '../../images/SPE.png'
// import SUNTERA from '../../images/SUNTERA.png'
// import WAEP from '../../images/WAEP.png'
import CountUp from 'react-countup';


const TrackRecord = () => {
    return (
        <section id="track-records">
            <h2 className='text-center section-heading'>CypherCrescent Track Record</h2>
            <div className="counts">
                <div className="container-fluid">
                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                        <div className='d-flex align-items-center'>
                            <h3 className='count-number mb-0'><CountUp end={20000} duration={10} delay={4} />+</h3>
                            <p className='mb-0'>Training Hours</p>
                        </div>
                        <div className='d-flex align-items-center'>
                            <h3 className='count-number mb-0'><CountUp end={3000} duration={10} delay={4} />+</h3>
                            <p className='mb-0'>Personnel</p>
                        </div>
                        <div className='d-flex align-items-center'>
                            <h3 className='count-number mb-0'><CountUp end={50} duration={10} delay={4} />+</h3>
                            <p className='mb-0'>Companies & Universities</p>
                        </div>
                        <div className='d-flex align-items-center'>
                            <h3 className='count-number mb-0'><CountUp end={40} duration={10} delay={4} />+</h3>
                            <p className='mb-0'>Courses</p>
                        </div>
                        <div className='d-flex align-items-center'>
                            <h3 className='count-number mb-0'><CountUp end={7} duration={10} delay={4} /></h3>
                            <p className='mb-0'>Years</p>
                        </div>
                        <div className='d-flex align-items-center'>
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