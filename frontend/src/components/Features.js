import React from 'react'
import { List } from 'reactstrap'
import '../styles/Features.css'

function Features()
{
    return ( 
            <div className ="featuresBackground">
            <div className="container">
                    <h1 className="featuresTitle">Features</h1> 
                <div className="row">
                    <div className="col-md-1 col-lg-4"></div>
                    <List className="col-md-10 col-lg-6 featuresListItems">
                        <li>Choosing yes or no on a TV show</li>
                        <li>Viewing previews of the shows before choosing</li>
                        <li>Keeping track of what matches you've had</li>
                    </List>
                    <div className="col-md-1 col-lg-4"></div>
                </div>
            </div>
        </div>
    );
}

export default Features