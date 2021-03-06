import React from 'react'
import { useNavigate } from 'react-router-dom'
import { news } from '../ProgramData/ProgramData'
import './news.css'

const News = () => {
    const navigate = useNavigate();
    const openNews = (news) => {
        localStorage.setItem('news', JSON.stringify(news));
        navigate('/single-news');
    }
    return (
        <section className='py-5'>
            <div className="container">
                <div className="text-center">
                    <h3 className='section-heading'>News</h3>
                    <p>Stay up to date with news from our Industry school</p>
                </div>
                <div className="py-4">
                    <div className="row">
                        {news.map((newsItem, index) => (
                            <div className="col-lg-6 col-md-6 col-12" key={newsItem.id}>
                                <div className="news-card h-100">
                                    <div className="news-img text-center">
                                        <img src={newsItem.image} alt="" className='img-fluid' />
                                    </div>
                                    <div className="news-detail p-3">
                                        <div className="d-flex justify-content-between">
                                            <p>{newsItem.tip}</p>
                                            <p>09 April 22</p>
                                        </div>
                                        <h5>{newsItem.title}</h5>
                                        <p>{newsItem.shortDescription}</p>
                                        <div className="d-flex justify-content-end py-3">
                                            <button onClick={() => { openNews(newsItem) }} className='btn btn-primary' >read more</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default News