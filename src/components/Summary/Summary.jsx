import React from "react";
import { Link } from "react-router-dom";

const Summary = (props) => {
    const { id, name, sum } = props;

    return (
        <div className='wrapper'>

            <div className='output-display'>
                <div><h2 className='sr-re'>{id}</h2></div>
                <div><h2 className='title-re'>{name}</h2></div>
                <div className='view-button'>
                    <Link to=''>
                        <buttons className='btn-re'>View</buttons>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Summary;