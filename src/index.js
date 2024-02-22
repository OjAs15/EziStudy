import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Research from './components/Research/Research';
import Aboutus from './components/Aboutus/Aboutus';
import Login from './components/Login/Login.jsx';
import Admin from './components/Admin/Admin.jsx';


import {
    createBrowserRouter,
    RouterProvider,
    //Route,
} from "react-router-dom";

//Paths for each page are defined by creating  router
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "Research",
        element: <Research />,
    },
    {
        path: "About us",
        element: <Aboutus />,
    },
    {
        path: "Login",
        element: <Login />,
    },
    {
        path: "Admin",
        element: <Admin />,
    }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals