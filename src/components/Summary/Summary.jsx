import React from "react";

const Summary = (props) => {
    const {id , name , sum} = props;
    return (
        <div>
            <h4>{ '${id} ${name} ${sum}'}</h4>
        </div>
    );
};

export default Summary;