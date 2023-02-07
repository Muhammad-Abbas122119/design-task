import React from 'react'
import logo from '../img/logo.png'
const Header = () =>{
    return(
        <div id="header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <h1 className='logo pt-1'><img src={logo} alt="" />Our Designs</h1>
                    </div>
                    <div className='col-lg-8'>
                        <ul id='menu' className='float-md-right'>
                            <li><a href="">Home</a></li>
                            <li><a href="">Product</a></li>
                            <li><a href="">Contact</a></li>
                            <li><a href="">About</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;