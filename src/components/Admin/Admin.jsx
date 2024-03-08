import React, { useState } from 'react';
import './Admin.css';
import Planeheader from '../Header/Planeheader';
//import Header from '../Header/Header';

const Admin = () => {

    const [file, setFile] = useState();

    function handleFile(event) {
        setFile(event.target.files[0]);
        //console.log(event.target.files[0]);
    }

    function handleUpload(event) {
        event.preventDefault(); // Prevent default form submission
        const formData = new FormData();
        formData.append('pdf', file);
        fetch(
            'http://127.0.0.1:8000/user/upload', // Corrected URL
            {
                method: "POST",
                body: formData
            }
        ).then((response) => response.json())
            .then((result) => {
                console.log('success', result);
            })
            .catch(error => {
                console.error("Error: ", error);
            });
    }

    return (
        <div className='Admin'>
            <div className='Admin-main'>
                <Planeheader />
                {/* <Header /> */}
                <h2>Update Research Papers</h2>
                <form onSubmit={handleUpload}>
                    <input type='file' name='file' onChange={handleFile} />
                    <button type='submit' className='admbtn'>Upload</button>
                </form>
            </div>
        </div>
    );
}

export default Admin;
