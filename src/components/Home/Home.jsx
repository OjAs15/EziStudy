import React from 'react'
import './Home.css';
import Header from '../Header/Header';
import { Link } from "react-router-dom";
// import design1 from '../../assets/design1.png';
//import imagename from "../../assets/imagename.png"



const Home = () => {
  return (
    <div className='Home'>
      <div className='lefth'>
        <Header/>

        <div className='emptyspace'>

        </div>
        {/* Catchy Phrase: Snap,Crackle,Summarize */}
        <div className='caption'>
            <div>
                <span>Snap</span>
            </div>
            <div>
                <span>Crackle</span>
            </div>
            <div>
                <span className='stroke-text'>Summarize</span>
            </div>
            <div>
                <span>Effortlessly distill complex research papers into concise insights with our intuitive text summarizer platform.</span>
            </div>
        </div>

        {/* get started button */}

 

        <div className='home-button' >
          <Link to='/Research' style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>
          <buttons className='btn'>Get Started</buttons>
          </Link>
        </div>
        {/* <img src={design1} alt="" className='home-design1' /> */}

      </div>


    </div>
  )
}

export default Home
// control plus space for auto suggestion