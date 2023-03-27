import React from 'react'
import './home.css'
import { NavLink } from 'react-router-dom'

const Home1 = () => {
    return (
        <>
               <div className="Mian_page">
         <div className="videoup" >
              <video autoPlay loop muted className="video">
              <source src="/1.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="main-right" data-aos="flip-left">
                    <div className="main-right-top" style={{overflow : "hidden"}}>

                        <h1 style={{ color: "white" }}>Rental Boat</h1>
                        <h3 style={{ color: "white" }}>you Can Rent Boats and Jetski</h3>
                        <NavLink to="/shop"> <button> Rent Now</button></NavLink>
                    </div>
                </div>
                <div className="main-left">
             {/* <img src="https://img1.wsimg.com/isteam/stock/10556/:/rs=w:1160" alt="" /> */}
                </div>
                
            </div>


            <div className="home2upper">
           <div className="home2">
                <div className="innerhome2">
                <h1>We provide Rental Services 22 hours a day, Five days a week.</h1>
                </div>
                <NavLink to="/contact">  
                <button>Contact Us</button>
                </NavLink>
            </div>
           </div>

        </>
    )
}

export default Home1