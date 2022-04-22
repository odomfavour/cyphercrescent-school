import React from 'react'
import PageWrapper from '../../layout/PageWrapper/PageWrapper'
import { Link } from 'react-router-dom'
import mission from '../../images/mission.png'
import comment from '../../images/comment.svg'
import { FaShareAlt, FaHeart } from 'react-icons/fa'

const SingleNews = () => {
    return (
        <PageWrapper>
            <section className='pt-200'>
                <div className="container">
                    <div className="back-btn">
                        <Link to='/news' className="btn btn-primary">Back</Link>
                    </div>
                    <section className='ps-lg-5 ps-0'>
                        <div className="news-content">
                            <h6 className='pt-3'>Injuries in Brooklyn <span>- Tue 11, April 2022</span></h6>
                            <h5>Atleast 18 people injured in Brooklyn Subway shooting, undetonated devices found</h5>
                            <p>News by - Chudi Victor</p>
                            <div className="news-image text-center mb-3">
                                <img src={mission} alt="news about stuff" className='img-fluid' />
                            </div>
                            <div className="full-news">
                                <p>“I remember saying at the opening of the 2016 IPI world congress in Qatar that the government of the day in Nigeria is not a threat to the media, and that is not about to change, and that it is not about to stifle press freedom or deny anyone his or her constitutionally guaranteed rights. That statement remains true “I remember saying at the opening of the 2016 IPI world congress in Qatar that the government of the day in Nigeria is not a threat to the media, and that is not about to change, and that it is not about to stifle press freedom or deny anyone his or her constitutionally guaranteed rights. That statement remains true “I remember saying at the opening of the 2016 IPI world congress in Qatar that the government of the day in Nigeria is not a threat to the media, and that is not about to change, and that it is not about to stifle press freedom or deny anyone his or her constitutionally guaranteed rights. That statement remains true.</p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center action-btns py-4">
                                <div className="like-section">
                                    <FaHeart className='me-2' />
                                    <span>Like</span>
                                </div>
                                <div className="comment-section">
                                    <img src={comment} alt="" className='img-fluid' />
                                    <span className='ms-2'>30</span>
                                </div>
                                <div className="share-section">
                                    <button className="btn btn-share">Share<span className='ms-2'><FaShareAlt /></span></button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <h3>Leave a Comment</h3>
                                    <div className="contact-form mb-5">
                                        <form>
                                            <div class="mb-3">
                                                <label for="fullName" class="form-label">FullName</label>
                                                <input type="text" class="form-control" id="fullName" aria-describedby="fullName" />
                                            </div>
                                            <div class="mb-3">
                                                <label for="email" class="form-label">Email Address</label>
                                                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" />
                                            </div>
                                            <div class="mb-3">
                                                <label for="subject" class="form-label">Subject</label>
                                                <input type="text" class="form-control" id="subject" />
                                            </div>
                                            <div className="mb-3">
                                                <label for="message" class="form-label">Message</label>
                                                <textarea name="" id="message" className='form-control'></textarea>
                                            </div>
                                            <div class="d-grid gap-2">
                                                <button class="btn btn-primary" type="button">Send message</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>


            </section>
        </PageWrapper>
    )
}

export default SingleNews