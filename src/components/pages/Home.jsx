import React from 'react'
import NewArrival from './NewArrival';
import Navbar from './Navbar';
import Title from './Title';
import Hero from './Hero';
import './navbar.css';
import ImgContainer from './imgcontainer';
import './Homestyle.css';


function Home() {
  return (
    <div>
        <Title/>{''}
        <Navbar/>{''}
        <Hero/>{''}
        <NewArrival/>
        <ImgContainer/>
        <div classname="whatsappbtn">
            <button >whta's app us</button>
        </div>
    </div>
  )
}

export default Home

