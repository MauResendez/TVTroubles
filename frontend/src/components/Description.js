import React from 'react';
import '../styles/Description.css'

function Description(props) {
    return (
        <div className="centersDescription">
            <div className="descriptionComponenets">
                <p>Name: {props.name}</p>
                <p>Description: {props.description}</p>
                <p>Rating: {props.rating}</p>
            </div>
        </div>
    )
};

export default Description;

/*
    <p className="descriptionGeneral">Name:{props.name}
    <br></br>Description:{props.description}
     <br></br>Rating:{props.rating}</p> 

     <div style={{textAlign: "center"}}>
            <div style={{display: "inline-block", textAlign: "left"}}>


    <div className= "descriptionLeftAlign">
                Name:{props.name}<br />
                Description:{props.description}<br />
                Rating:{props.rating}<br />
            </div>
*/