import React from 'react'
import news1 from '../../images/news-1.png'
import news2 from '../../images/news-2.png'
import news3 from '../../images/news-3.png'
import './news.css'

const News = () => {
    return (
        <section className='py-5'>
            <div className="container">
                <div className="text-center">
                    <h3 className='section-heading'>News</h3>
                    <p>Stay Enlightened with our top notch news</p>
                </div>
                <div className="py-4">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="news-card">
                                <div className="news-img">
                                    <img src={news1} alt="" className='img-fluid' />
                                </div>
                                <div className="news-detail p-3">
                                    <div className="d-flex justify-content-between">
                                        <p>Students get rewarded</p>
                                        <p>09 April 22</p>
                                    </div>
                                    <h5>The Long awaited Cyphercrescent website is Live</h5>
                                    <p>Our specialized trainings are inventive, they create sustainable competencies and improved capabilities through sytemic and innivative processes through trainings sustainable competencies and...............</p>
                                    <div className="d-flex justify-content-end py-3">
                                        <a href="#read" className='text-blue'>read more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="news-card">
                                <div className="news-img">
                                    <img src={news2} alt="" className='img-fluid' />
                                </div>
                                <div className="news-detail p-3">
                                    <div className="d-flex justify-content-between">
                                        <p>Cyphercrescent Launches</p>
                                        <p>09 April 22</p>
                                    </div>
                                    <h5>The Long awaited Cyphercrescent website is Live</h5>
                                    <p>Our specialized trainings are inventive, they create sustainable competencies and improved capabilities through sytemic and innivative processes through trainings sustainable competencies and...............</p>
                                    <div className="d-flex justify-content-end py-3">
                                        <a href="#read" className='text-blue'>read more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="news-card">
                                <div className="news-img">
                                    <img src={news3} alt="" className='img-fluid' />
                                </div>
                                <div className="news-detail p-3">
                                    <div className="d-flex justify-content-between">
                                        <p>Cyphercrescent Launches</p>
                                        <p>09 April 22</p>
                                    </div>
                                    <h5>The Long awaited Cyphercrescent website is Live</h5>
                                    <p>Our specialized trainings are inventive, they create sustainable competencies and improved capabilities through sytemic and innivative processes through trainings sustainable competencies and...............</p>
                                    <div className="d-flex justify-content-end py-3">
                                        <a href="#read" className='text-blue'>read more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default News