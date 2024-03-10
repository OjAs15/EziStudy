import React, { useState } from "react";
import { Link } from "react-router-dom";

const Summary = ({ id, name, sum4, sum6 }) => {
    const [show, setShow] = useState(false);

    return (
        <div className='wrapper'>
            <div className='output-display'>
                <div><h2 className='sr-re'>{id}</h2></div>
                <div><h2 className='title-re'>{name}</h2></div>
                <div className='view-button'>
                    <Link to='' onClick={() => setShow(!show)}>
                        <buttons className='btn-re'>View</buttons>
                    </Link>
                </div>
            </div>
            <div className={`summary ${show ? "show-summary" : null}`}>
                <span>{sum4}</span>
            </div>
        </div>
    );
};

export default Summary;