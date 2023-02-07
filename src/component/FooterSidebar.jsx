import React from 'react'

const FooterSidebar = () =>{
    return(
        <>
        <div className="footer-sidebar">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <div className="footer-widget">
                            <h4>About company</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus a, dolorem nihil id laboriosam sit minima?</p>

                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, distinctio.</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="footer-widget">
                            <h4>Company News</h4>
                            <ul>
                                <li><a href="">Lorem ipsum dolor sit amet consectetur.</a></li>
                                <li><a href="">Lorem ipsum dolor sit amet consectetur.</a></li>
                                <li><a href="">Lorem ipsum dolor sit amet consectetur.</a></li>
                                <li><a href="">Lorem ipsum dolor sit amet consectetur.</a></li>
                                <li><a href="">Lorem ipsum dolor sit amet consectetur.</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="footer-widget">
                            <h4>Company Address</h4>
                            <b>Web design company</b><br />
                            first floar flan road near to flan twon <br />
                            Phone:3223323432
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default FooterSidebar;