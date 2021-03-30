import React from 'react'
import { List } from 'reactstrap'
import '../styles/Features.css'

//List 
function Features()
{
    return ( 
            <div className="container">
                <div className="row"> 
                {/* Displays title of component "Features" */}
                    <div className="col-3"></div>
                    <h1 className="col-6">Features</h1> 
                    <div className="col-3"></div>
                </div>
                <div className="row">
                    {/* Displays the list of features */}
                    <div className="col-md-1 col-lg-4"></div>
                    <List className="col-md-10 col-lg-6">
                        <li>Choosing yes or no on a TV show</li>
                        <li>Viewing previews of the shows before choosing</li>
                        <li>Keeping track of what matches you've had</li>
                    </List>
                    <div className="col-md-1 col-lg-4"></div>
                </div>
            </div>
    );
}

export default Features