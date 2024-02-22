import React from 'react'
import './Login.css';
import Logo from '../../assets/logo.png';
import { Link } from "react-router-dom";

import {FaUser} from "react-icons/fa";
import {FaLock} from "react-icons/fa";



const Login = () => {
  return (
    <div className='body1'>
        <div className='login-main'>
          <img src={Logo} alt="" className='logo1' />
          {/* <form action="" style={{ background: 'transparent' }} className='formbox'> */}
            <h1>ADMIN</h1>
            
            <div className='input-box'>
                <input type='text' placeholder='Username' required/>
                <FaUser className='icon'/>
            </div>

            <div className='input-box'>
                <input type='password' placeholder='Password' required />
                <FaLock className='icon'/>
            </div>

            <div className='remember'>
                <label><input type='checkbox'/>Remember me</label>
                {/* <a href='#'>Forgot Password?</a> */}
            </div>

            {/* -------------------------------------------------------------------------------------------------------------- */}

            <div className='container'>
            {/* <a href" class="button type--C"> */}
            {/* <a class="button type--C"> */}
              <Link to='/Admin' class="button type--C">
              <div class="button__line"></div>
              <div class="button__line"></div>
              {/* //<span class="button__text">SUBMIT</span> */}
              <buttons className='button__text'>submit</buttons>
              <div class="button__drow1"></div>
              <div class="button__drow2"></div>
              {/* </a> */}
              </Link>
            </div>  


            {/* -------------------------------------------------------------------------------------------------------------- */}
        {/* </form> */}
      </div>
    </div>
  )
}

export default Login
