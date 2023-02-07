import '../index.css'
import React from 'react'
import Header from './Header'
import Banner from './Banner' 
import Services from './Services'
import Testimonial from './Testimonial'
import News from './News'
import FooterSidebar from './FooterSidebar'
import Footer from './Footer'

class App extends React.Component{
    constructor (){
        super()

    }

    render(){
        return(
            <>
            <Header />
            <Banner />
            <Services />
            <Testimonial />
            <News />
            <FooterSidebar />
            <Footer />
            </>
        )
    }
}

export default App;



// import React,{Component} from "react";



// class App extends Component{
//     constructor(){
//         super()
//     }

//     render(){
//         return(
//             <>
//             <Header />
//             <SearchBar />
//             </>
//         )
//     }
    
// }

// export default App;