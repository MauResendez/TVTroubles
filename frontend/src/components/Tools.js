import React from 'react';
import {Container, Row, Col } from 'reactstrap';

import react from '../images/react-logo.png';
import aws from '../images/aws-logo.png';
import heroku from '../images/heroku-logo.png';
import jira from '../images/jira-logo.png'; 
import nodejs from '../images/node-js-logo.png';
import postman from '../images/postman-logo.png';

import '../styles/Tools.css';

function Tools() 
{
  return (
    <div className="tools">
      <Container>
        <h1 className="toolsTitle">Tools</h1>
        <Row>
          <Col sm="2" md="4"><img src={react} alt="React Logo"/> </Col>
          <Col sm="2" md="4"><img src={aws} alt="Amazon AWS Logo"/></Col>
          <Col sm="2" md="4"> <img src={heroku} alt="Heroku Logo"/> </Col>
          <Col sm="2" md="4"> <img src={jira} alt="Jira Logo"/> </Col>
          <Col sm="2" md="4"> <img src={nodejs} alt="Node.js Logo"/> </Col>
          <Col sm="2" md="4"> <img src={postman} alt="Postman Logo"/></Col>
        </Row>
      </Container>
    </div>
  );
}
export default Tools;


