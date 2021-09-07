import React, { Fragment } from 'react';
import ReactPlayer from 'react-player';

import '../styles/Data.css';

function Data(props) 
{
    return (
        <Fragment>
            <div className="video-wrapper" id="video-wrapper" data-testid="video">
                <ReactPlayer url={props.preview} controls={true} playing={true} width='100%' height='100%'/>
            </div>
            <div className="title" id="title">
                <h5>Title</h5>
                <p>{props.title}</p>
            </div>
            <div className="description" id="description">
                <h5>Description</h5>
                <p>{props.description}</p>
            </div>
            <div className="rating" id="rating">
                <h5>Rating</h5>
                <p>
                    {props.rating}/10
                    <svg stroke="currentColor" fill="gold" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" >
                        <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z">
                        </path>
                    </svg>
                </p>
            </div>
        </Fragment>
    )
};

export default Data;