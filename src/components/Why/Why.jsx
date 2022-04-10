import React from 'react'
import {BsFillJournalBookmarkFill, BsLightbulbFill} from 'react-icons/bs'
import {FaChalkboardTeacher, FaParachuteBox} from 'react-icons/fa'

const Why = () => {
  return (
    <section className='why-section'>
        <div className="container">
            <h1>Why Industry School?</h1>
            <div className="reasons py-5">
                <div className="row">
                    <div className="col-md-3 col-6">
                        <div className="reason-box">
                            <div className="icon-box">
                                <BsFillJournalBookmarkFill/>
                            </div>
                            <h3>Quality<br></br>Content</h3>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="reason-box">
                            <div className="icon-box">
                                <BsLightbulbFill/>
                            </div>
                            <h3>Flexible<br></br>Learning Plan</h3>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="reason-box">
                            <div className="icon-box">
                                <FaChalkboardTeacher/>
                            </div>
                            <h3>Experienced<br></br>Instructors</h3>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="reason-box">
                            <div className="icon-box">
                                <FaParachuteBox/>
                            </div>
                            <h3>Effective<br></br>Delivery</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Why