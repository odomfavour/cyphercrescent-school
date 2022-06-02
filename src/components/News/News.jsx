import React from 'react'
import { Link } from 'react-router-dom'
import news1 from '../../images/news-1.png'
import news2 from '../../images/news-2.png'
import news3 from '../../images/news-3.png'
import './news.css'

const News = () => {
    return (
        <section className='py-5'>
            <div className="container">
                <div className="text-center">
                    <h3 className='section-heading'>Blogs</h3>
                    <p>Stay up to date with news from our Industry school</p>
                </div>
                <div className="py-4">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="news-card h-100">
                                <div className="news-img">
                                    <img src={news1} alt="" className='img-fluid' />
                                </div>
                                <div className="news-detail p-3">
                                    <div className="d-flex justify-content-between">
                                        <p>CypherCrescent Website</p>
                                        <p>09 April 22</p>
                                    </div>
                                    <h5>The Long-awaited CypherCrescent Learning and
                                        Development website is Live
                                    </h5>
                                    <p>CypherCrescent Learning and Development Limited is pleased to announce the launch of her
                                        new website.</p>
                                    <p> Our website will serve as a digital space for us to provide our customers and visitors with an
                                        easier way to learn more about our learning programs and be updated with our news and
                                        instructional resources</p>
                                    <div className="d-flex justify-content-end py-3">
                                        <Link to="/single-news" className='text-blue'>read more</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12">
                            <div className="news-card h-100">
                                <div className="news-img">
                                    <img src={news2} alt="" className='img-fluid' />
                                </div>
                                <div className="news-detail p-3">
                                    <div className="d-flex justify-content-between">
                                        <p>Industry school</p>
                                        <p>09 April 22</p>
                                    </div>
                                    <h5>CypherCrescent launches industry school appoints
                                        New Managing director of its new subsidiary</h5>
                                    <p>As a part of CypherCrescent’s commitment to providing innovative business intelligence
                                        solutions and ensuring human capacity development, the company is proud to announce the
                                        commencement of our technology and energy industry school, which will be managed under
                                        CypherCrescent Learning & Development Limited (CypherCrescent L&D), a new subsidiary
                                        of CypherCrescent Group.</p>
                                    <div className="d-flex justify-content-end py-3">
                                        <Link to="/single-news" className='text-blue'>read more</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12">
                            <div className="news-card h-100">
                                <div className="news-img">
                                    <img src={news3} alt="" className='img-fluid' />
                                </div>
                                <div className="news-detail p-3">
                                    <div className="d-flex justify-content-between">
                                        <p>CypherCrescent Launches</p>
                                        <p>09 April 22</p>
                                    </div>
                                    <h5>The Long awaited Cyphercrescent website is Live</h5>
                                    <p>Our specialized trainings are inventive, they create sustainable competencies and improved capabilities through sytemic and innivative processes through trainings sustainable competencies and...............</p>
                                    <div className="d-flex justify-content-end py-3">
                                        <Link to="/single-news" className='text-blue'>read more</Link>
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