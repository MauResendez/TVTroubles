import React from "react";
import {Button} from "reactstrap"

class YesNoButton extends React.Component {
  render() {
    return (
      <div class="text-center"> 
        <Button color="success" onClick={this.submit} >Yes</Button>
         &nbsp; &nbsp; &nbsp;
        <Button color="danger" onClick={this.submit} >No</Button>
      </div>
    );
  }
}

export default YesNoButton;