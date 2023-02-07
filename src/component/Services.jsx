import React from 'react'
const Services = () => {
    return (
        <>
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className='section-head'>
                                Services that we are selling
                            </h2>
                        </div>

                        <div className='col-md-6 col-lg-4'>
                            <div className='service-box'>
                                <i className='fa fa-dice-d6'>
                                </i>
                                <h3>
                                    Service heading
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsum aliquam blanditiis!
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className='service-box'>
                            <i className="fa fa-anchor" aria-hidden="true" ></i>
                                
                                <h3>
                                    Service heading
                                </h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, aut minima. Possimus?</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="service-box">
                                <i className="fa fa-chart-line"></i>
                                <h3>Service heading</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nesciunt sapiente dicta!
                                </p>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Services;