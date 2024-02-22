import React from 'react'
import './Aboutus.css';
import Header from '../Header/Header';

// import face from '../../assets/face.png';
import sarthakimg from '../../assets/sarthakimg.jpeg';
import ojasimg from '../../assets/ojasimg.jpeg';
import kevinimg from '../../assets/kevinimg.jpg';
import tanmayimg from '../../assets/tanmayimg.jpg';

import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

//import { Link } from "react-router-dom";

const aboutus = () => {
  return (
    <div className='about-main'>
      <Header />
      <section className='aboutusection'>
        <div className='container1'>
          <div className='text-center'>
            <h1 className='aboutus-title'>
              The Team behind EziStudy
            </h1>
            <p className='aboutus-subtitle'>
              Meet our dynamic team, a synergy of diverse talents and expertise, dedicated to driving success in every project through seamless collaboration and unwavering commitment.
            </p>
          </div>
        
          <div className='row'>
            <div className='text-center2'>
              <div className='team-item'>

                <img src={ojasimg} alt="" className='team-img' />
                <h3>OJAS MHATRE</h3>
                <div className='team-info'>
                  <p>info1</p>

                  <ul className='team-icon'>
                    <li><a href='https://www.linkedin.com/in/ojas-mhatre-5b2776246/' className='linkedin'>
                        {/* <i className='fa fa-linkedin'></i> */}
                        <FaLinkedin />
                      </a></li>
                    <li><a href='https://www.instagram.com/ojas_mhatre/' className='instagram'>
                      {/* <i className='fa fa-instagram'></i> */}
                        <FaInstagram />
                      </a></li>
                  </ul>

                </div>
              </div>
            </div>

            <div className='text-center2'>
              <div className='team-item'>

                <img src={sarthakimg} alt="" className='team-img' />
                <h3>SARTHAK WAGHMARE</h3>
                <div className='team-info'>
                  <p>info2</p>

                  <ul className='team-icon'>
                    <li><a href='https://www.linkedin.com/in/sarthak-waghmare-20b796227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' className='linkedin'>
                      {/* <i className='fa fa-linkedin'></i> */}
                      <FaLinkedin />
                    </a></li>
                    <li><a href='https://www.instagram.com/sarthug_waghmare?igsh=MTU5aTV0NXJoa3pnZQ%3D%3D&utm_source=qr' className='instagram'>
                      {/* <i className='fa fa-instagram'></i> */}
                      <FaInstagram />
                    </a></li>
                  </ul>

                </div>
              </div>
            </div>

            <div className='text-center2'>
              <div className='team-item'>

                <img src={kevinimg} alt="" className='team-img' />
                <h3>KEVIN KURUVILLA</h3>
                <div className='team-info'>
                  <p>info3</p>
                  
                  <ul className='team-icon'>
                    <li><a href='https://www.linkedin.com/in/ojas-mhatre-5b2776246/' className='linkedin'>
                      {/* <i className='fa fa-linkedin'></i> */}
                      <FaLinkedin />
                    </a></li>
                    <li><a href='https://www.instagram.com/ojas_mhatre/' className='instagram'>
                      {/* <i className='fa fa-instagram'></i> */}
                      <FaInstagram />
                    </a></li>
                  </ul>

                </div>
              </div>
            </div>

            <div className='text-center2'>
              <div className='team-item'>

                <img src={tanmayimg} alt="" className='team-img' />
                <h3>TANMAY SINGH</h3>
                <div className='team-info'>
                  <p>info4</p>

                  <ul className='team-icon'>
                    <li><a href='https://www.linkedin.com/in/tanmay-singh-5a3500268' className='linkedin'>
                      {/* <i className='fa fa-linkedin'></i> */}
                      <FaLinkedin />
                    </a></li>
                    <li><a href='http://instagram.com/tanmaymays' className='instagram'>
                      {/* <i className='fa fa-instagram'></i> */}
                      <FaInstagram />
                    </a></li>
                  </ul>

                </div>
              </div>
            </div>


            





          </div>
        </div>
      </section>
    </div>
  )
}

export default aboutus
