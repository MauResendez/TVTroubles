import React from 'react'
import { List } from 'reactstrap'

const listStyle = {
    color: 'black',
    padding: "25px 50px 100px 100px",
    textAlign: "left",
    fontSize: "30px",
  };


const headerStyle = {
    margin: "25px 25px",
    textAlign: "center",
    fontSize: "45px",
};

const componentStyle = {
    backgroundColor: "#F4EAE6",
    fontFamily: "Verdana",
}
 
function Features()
{
    return ( 
        <div style={componentStyle}> 
        <div className="container">
            <div className="row">
                <div className="col-3"></div>
                <h1 style={headerStyle} className="col-6">Features</h1>
                <div className="col-3"></div>
            </div>
            <div className="row">
                <div className="col-md-1 col-lg-3"></div>
                <List style={listStyle} className="col-md-10 col-lg-6">
                    <li>Choosing yes or no on a TV show</li>
                    <li>Viewing previews of the shows before choosing</li>
                    <li>Keeping track of what matches you've had</li>
                </List>
                <div className="col-md-1 col-lg-3"></div>
        </div>
        </div>
        </div>
    );
}

export default Features