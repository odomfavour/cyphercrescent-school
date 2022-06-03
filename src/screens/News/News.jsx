import React from 'react'
import PageWrapper from '../../layout/PageWrapper/PageWrapper'
// import mission from '../../images/mission.png'
// import video from '../../images/video.png'
// import pic5 from "../../images/gallery/pic-5.JPG"
import { FaClock } from 'react-icons/fa'
import './news.css'
import { news } from '../../components/ProgramData/ProgramData'
import { Link } from 'react-router-dom'

const News = () => {
    return (
        <PageWrapper>
            <section id="news-page" className='pt-200'>
                <div className="container">
                    <h3 className='section-heading'>Top Stories</h3>
                    <div className="py-4" id="main-news">
                        <div className="row">
                            <div className="col-md-7">
                                {news.map((newsItem, index) => (
                                    <div className="news-card" key={newsItem.id}>
                                        <div className="news-image text-center">
                                            <img src={newsItem.image} alt="news about stuff" className='img-fluid' />
                                        </div>
                                        <div className="news-content">
                                            <h6 className='pt-3'>{newsItem.tip} <span>- Tue 11, April 2022</span></h6>
                                            <h5>{newsItem.title}</h5>
                                            <p>{newsItem.shortDescription}</p>
                                            <Link to="/single-news" className="btn btn-primary mt-4">Read More</Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="col-md-5">
                                <div id="featured-section">
                                    <h5>Featured</h5>
                                    <div className="pt-3 featured-section-inner">
                                        {news.map((newsItem, index) => (
                                            <div className="video-card mb-3" key={newsItem.id}>
                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <div className="video">
                                                            <img src={newsItem.image} alt="children smiling" className='img-fluid' />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-7">
                                                        <div className="video-content">
                                                            <p className='mb-0'>VIDEO: {newsItem.title}</p>
                                                            <div className="d-flex align-items-center video-info">
                                                                <div className="time-icon">
                                                                    <FaClock />
                                                                </div>
                                                                <div className="day-block px-2">
                                                                    <p className='mb-0'>3 days ago</p>
                                                                </div>
                                                                <div className="news-category px-2">
                                                                    <p className='mb-0'>General</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PageWrapper>
    )
}

export default News