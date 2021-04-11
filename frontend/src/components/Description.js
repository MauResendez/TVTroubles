import React from 'react';
import '../styles/Description.css'

function Description(props) {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Description: {props.description}</p>
            <p>Rating: {props.rating}</p>
        </div>
    )
};

export default Description;