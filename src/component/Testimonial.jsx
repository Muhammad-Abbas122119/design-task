import React from 'react'
import author from '../img/author.PNG'
import author2 from '../img/author2.jpg'
const Testimonial = () => {
    return (
        <div id="testimonials" className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <h2 className='section-head'>Testimonials</h2>
                    </div>
                
                    <div className="col-md-6">
                        <div className="testimonial">
                        <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto deleniti cupiditate temporibus.
                        </p>
                        <img src={author2} alt="" />
                        <div className="author">Khan</div>
                        <div className="author-company">Khan Company</div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="testimonial">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt possimus iure nostrum?
                        </p>

                        <img src={author} alt="" />
                        <div className="author">Bilal</div>
                        <div className='author-company'>Bilal textiles</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial;