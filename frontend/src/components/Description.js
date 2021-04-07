import React from 'react';

function Description(props) {
    return (
        <div>
            <p>Name:{props.name}
            <br></br>Description:{props.description}
            <br></br>Rating:{props.rating}</p>
        </div>
    )
};

export default Description;