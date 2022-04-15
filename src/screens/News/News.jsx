import React from 'react'
import PageWrapper from '../../layout/PageWrapper/PageWrapper'
import mission from '../../images/mission.png'
import video from '../../images/video.png'
import { FaClock } from 'react-icons/fa'
import './news.css'

const News = () => {
    return (
        <PageWrapper>
            <section id="news-page">
                <div className="container">
                    <h3 className='section-heading'>Top Stories</h3>
                    <div className="py-4" id="main-news">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="news-card">
                                    <div className="news-image">
                                        <img src={mission} alt="news about stuff" className='img-fluid' />
                                    </div>
                                    <div className="news-content">
                                        <h6 className='pt-3'>Injuries in Brooklyn <span>- Tue 11, April 2022</span></h6>
                                        <h5>Atleast 18 people injured in Brooklyn Subway shooting, undetonated devices found</h5>
                                        <p>“I remember saying at the opening of the 2016 IPI world congress in Qatar that the government of the day in Nigeria is not a threat to the media, and that is not about to change, and that it is not about to stifle press freedom or deny anyone his or her constitutionally guaranteed rights. That statement remains true...................</p>
                                        <button className="btn btn-primary mt-4">Read More</button>
                                    </div>
                                </div>
                                <div className="news-card">
                                    <div className="news-image">
                                        <img src={mission} alt="news about stuff" className='img-fluid' />
                                    </div>
                                    <div className="news-content">
                                        <h6 className='pt-3'>Injuries in Brooklyn <span>- Tue 11, April 2022</span></h6>
                                        <h5>Atleast 18 people injured in Brooklyn Subway shooting, undetonated devices found</h5>
                                        <p>“I remember saying at the opening of the 2016 IPI world congress in Qatar that the government of the day in Nigeria is not a threat to the media, and that is not about to change, and that it is not about to stifle press freedom or deny anyone his or her constitutionally guaranteed rights. That statement remains true...................</p>
                                        <button className="btn btn-primary mt-4">Read More</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div id="featured-section">
                                    <h5>Featured</h5>
                                    <div className="pt-3">
                                        <div className="video-card mb-3">
                                            <div className="row">
                                                <div className="col-md-5">
                                                    <div className="video">
                                                        <img src={video} alt="children smiling" className='img-fluid' />
                                                    </div>
                                                </div>
                                                <div className="col-md-7">
                                                    <div className="video-content">
                                                        <p className='mb-0'>VIDEO: Election coming soon, as the Vice president declares to run for the upcoming election</p>
                                                        <div className="d-flex align-items-center video-info">
                                                            <div className="time-icon">
                                                                <FaClock />
                                                            </div>
                                                            <div className="day-block px-2">
                                                                <p className='mb-0'>3 days ago</p>
                                                            </div>
                                                            <div className="news-category px-2">
                                                                <p className='mb-0'>Politics</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="video-card mb-3">
                                            <div className="row">
                                                <div className="col-md-5">
                                                    <div className="video">
                                                        <img src={video} alt="children smiling" className='img-fluid' />
                                                    </div>
                                                </div>
                                                <div className="col-md-7">
                                                    <div className="video-content">
                                                        <p className='mb-0'>VIDEO: Election coming soon, as the Vice president declares to run for the upcoming election</p>
                                                        <div className="d-flex align-items-center video-info">
                                                            <div className="time-icon">
                                                                <FaClock />
                                                            </div>
                                                            <div className="day-block px-2">
                                                                <p className='mb-0'>3 days ago</p>
                                                            </div>
                                                            <div className="news-category px-2">
                                                                <p className='mb-0'>Politics</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="video-card mb-3">
                                            <div className="row">
                                                <div className="col-md-5">
                                                    <div className="video">
                                                        <img src={video} alt="children smiling" className='img-fluid' />
                                                    </div>
                                                </div>
                                                <div className="col-md-7">
                                                    <div className="video-content">
                                                        <p className='mb-0'>VIDEO: Election coming soon, as the Vice president declares to run for the upcoming election</p>
                                                        <div className="d-flex align-items-center video-info">
                                                            <div className="time-icon">
                                                                <FaClock />
                                                            </div>
                                                            <div className="day-block px-2">
                                                                <p className='mb-0'>3 days ago</p>
                                                            </div>
                                                            <div className="news-category px-2">
                                                                <p className='mb-0'>Politics</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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