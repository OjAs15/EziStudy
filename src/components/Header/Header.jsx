import React from 'react'
import './Header.css';
import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png';



const Header = () => {
  return (
    <div className='header'>
        <img src={Logo} alt="" className='logo'/>

      
      <ul className='header-menu'>
        <li><Link to='/' style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>Home</Link></li>
        <li><Link to='/Research' style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>Research</Link></li>
        <li><Link to='/About us' style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>About us</Link></li>
        <li><Link to='/Login' style={{ textDecoration: 'none', color: 'yellow', fontWeight: 'bold' }}>Login</Link></li>
        </ul>
    </div>
  )
}

export default Header

