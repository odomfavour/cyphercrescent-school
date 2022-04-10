import React from 'react'
import adax from '../../images/ADAX.png'
import agip from '../../images/AGIP.png'
import belema from '../../images/belema.png'
import Conoil from '../../images/Conoil.png'
import Eroton from '../../images/Eroton.png'
import FIRST from '../../images/FIRST.png'
import NAPIMS from '../../images/NAPIMS.png'
import nd from '../../images/nd.png'
import NNPC from '../../images/NNPC.png'
import NPDC from '../../images/NPDC.png'
import ROCK from '../../images/ROCK.png'
import SEPLAT from '../../images/SEPLAT.png'
import SPE from '../../images/SPE.png'
import SUNTERA from '../../images/SUNTERA.png'
import WAEP from '../../images/WAEP.png'


const TrackRecord = () => {
    return (
        <section id="track-records">
            <h2 className='text-center'>CypherCrescent Track Record</h2>
            <div className="counts">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 mb-3">
                            <div className="count-box">
                                <div>
                                    <h3>5000+</h3>
                                    <p>Training Hours</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 mb-3">
                            <div className="count-box">
                                <div>
                                    <h3>1000+</h3>
                                    <p>Personnel</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 mb-3">
                            <div className="count-box">
                                <div>
                                    <h3>5000+</h3>
                                    <p>Companies & Universities</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 mb-3">
                            <div className="count-box">
                                <div>
                                    <h3>15+</h3>
                                    <p>Courses</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 mb-3">
                            <div className="count-box">
                                <div>
                                    <h3>7</h3>
                                    <p>Years</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 mb-3">
                            <div className="count-box">
                                <div>
                                    <h3>3</h3>
                                    <p>Countries</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="partners py-5">
                <div className="container">
                    <div className="d-flex flex-wrap">
                        <div className="partner">
                            <img src={adax} alt="adax logo" className='img-fluid' />
                        </div>
                        <div className="partner">
                            <img src={agip} alt="adax logo" className='img-fluid' />
                        </div>
                        <div className="partner">
                            <img src={belema} alt="adax logo" className='img-fluid' />
                        </div>
                        <div className="partner">
                            <img src={Conoil} alt="adax logo" className='img-fluid' />
                        </div>
                        <div className="partner">
                            <img src={Eroton} alt="adax logo" className='img-fluid' />
                        </div>
                        <div className="partner">
                            <img src={FIRST} alt="adax logo" className='img-fluid' />
                        </div>
                        <div className="partner">
                            <img src={NAPIMS} alt="adax logo" className='img-fluid' />
                        </div>
                        <div className="partner">
                            <img src={nd} alt="adax logo" className='img-fluid' />
                        </div>
                        <div className="partner">
                            <img src={NNPC} alt="adax logo" className='img-fluid' />
                        </div>
                        <div className="partner">
                            <img src={NPDC} alt="adax logo" className='img-fluid' />
                        </div>
                        <div className="partner">
                            <img src={ROCK} alt="adax logo" className='img-fluid' />
                        </div>
                        <div className="partner">
                            <img src={SEPLAT} alt="adax logo" className='img-fluid' />
                        </div>
                        <div className="partner">
                            <img src={SPE} alt="adax logo" className='img-fluid' />
                        </div>
                        <div className="partner">
                            <img src={SUNTERA} alt="adax logo" className='img-fluid' />
                        </div>
                        <div className="partner">
                            <img src={WAEP} alt="adax logo" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TrackRecord