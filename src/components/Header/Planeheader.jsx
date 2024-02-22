import React from 'react'
import './Planeheader.css';
import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png';



const Planeheader = () => {
  return (
    <div className='planeheader'>
        <img src={Logo} alt="" className='logo'/>

      <ul className='planeheader-menu'>
        <li><Link to='/' style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>Log Out</Link></li>
      </ul>
    </div>
  )
}

export default Planeheader

