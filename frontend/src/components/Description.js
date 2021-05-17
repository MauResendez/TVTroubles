import React from 'react';
import '../styles/Description.css'

function Description(props) {
    return (
        <div className="text-center mt-lg">
            <p>Name: {props.title}</p>
            <p>Description: {props.description}</p>
            <p>Rating: {props.rating}</p>
        </div>
    )
};

export default Description;