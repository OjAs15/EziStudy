import React, { useRef } from 'react'
import './Login.css';
import Logo from '../../assets/logo.png';
import { Link, useNavigate } from "react-router-dom";

import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const Login = () => {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();

    const handleSubmit = async () => {
        const payload = {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        };

        // Directly redirecting...
        return navigate("/Admin");


        try {
            const response = await fetch('http://localhost:8000/admin/signin', {
                method: "POST",
                body: JSON.stringify(payload)
            });
            const result = await response.json()
            console.log('success', result);
        } catch (error) {
            console.error("Error: ", error);
        }
    };

    return (
        <div className='body1'>
            <div className='login-main'>
                <img src={Logo} alt="" className='logo1' />
                <h1>ADMIN</h1>

                <div className='input-box'>
                    <input ref={usernameRef} type='text' placeholder='Username' name='username' required />
                    <FaUser className='icon' />
                </div>

                <div className='input-box'>
                    <input ref={passwordRef} type='password' placeholder='Password' name='password' required />
                    <FaLock className='icon' />
                </div>

                <div className='remember'>
                    <label><input type='checkbox' />Remember me</label>
                </div>

                <div className='container'>
                    <div onClick={handleSubmit} class="button type--C">
                        <div class="button__line"></div>
                        <div class="button__line"></div>
                        <buttons className='button__text'>submit</buttons>
                        <div class="button__drow1"></div>
                        <div class="button__drow2"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
