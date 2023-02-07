import React from 'react'
import newsPost1 from '../img/news-post1.jpg'
import newsPost2 from '../img/news-post2.jpg'
import newsPost3 from '../img/news-post3.jpg'
import newsPost4 from '../img/news-post4.jpg' 

const News =()=>{
    return(
        <>
        <div id="news" className="section">
            <div className="container">
                
                <div className="row">

                    <div className="col-md-12">
                        <h2 className="section-head"> Recent News </h2>
                    </div>

                    <div className="col-md-6 col-lg-3">
                        <div className="news-post">
                            <img src= {newsPost1} alt="" />
                            <h3><a href="" className="news-heading">News Heading</a></h3>
                            <div className="post-date">dec 20 222</div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                            <a href="" className ="read-more">Read More</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="news-post">
                            <img src= {newsPost2} alt="" />
                            <h3><a href="" className="news-heading">News Heading</a></h3>
                            <div className="post-date">dec 20 222</div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                            <a href="" className ="read-more">Read More</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="news-post">
                            <img src= {newsPost3} alt="" />
                            <h3><a href="" className="news-heading">News Heading</a></h3>
                            <div className="post-date">dec 20 222</div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                            <a href="" className ="read-more">Read More</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="news-post">
                            <img src= {newsPost4} alt="" />
                            <h3><a href="" className="news-heading">News Heading</a></h3>
                            <div className="post-date">dec 20 222</div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                            <a href="" className ="read-more">Read More</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}

export default News;