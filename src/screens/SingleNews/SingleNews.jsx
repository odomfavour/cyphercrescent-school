import React, {useState} from 'react'
import PageWrapper from '../../layout/PageWrapper/PageWrapper'
import { Link } from 'react-router-dom'
import comment from '../../images/comment.svg'
import { FaShareAlt, FaHeart } from 'react-icons/fa'

const SingleNews = () => {
    const [news, setNews] = useState(JSON.parse(localStorage.getItem('news')));
    const setting = () => {
        setNews(JSON.parse(localStorage.getItem('news')));
    }
    
    return (
        <PageWrapper>
            <section className='pt-200'>
                <div className="container" >
                    <div className="back-btn">
                        <Link to='/news' className="btn btn-primary">Back</Link>
                    </div>
                    <section className='ps-lg-5 ps-0'>
                        <div className="news-content">
                            <h6 className='pt-3'>{news.tip}<span>- Tue 11, April 2022</span></h6>
                            <h5>{news.title}</h5>
                            <p>News by - Chudi Victor</p>
                            <div className="news-image text-center mb-3">
                                <img src={news.image} alt={news.tip} className='img-fluid' />
                            </div>
                            <div className="full-news">
                                <p>{news.body}</p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center action-btns py-4">
                                <div className="like-section" onClick={setting}>
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
                                            <div className="mb-3">
                                                <label htmlFor="fullName" className="form-label">FullName</label>
                                                <input type="text" className="form-control" id="fullName" aria-describedby="fullName" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="email" className="form-label">Email Address</label>
                                                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="subject" className="form-label">Subject</label>
                                                <input type="text" className="form-control" id="subject" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="message" className="form-label">Message</label>
                                                <textarea name="" id="message" className='form-control'></textarea>
                                            </div>
                                            <div className="d-grid gap-2">
                                                <button className="btn btn-primary" type="button">Send message</button>
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