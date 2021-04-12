import React from 'react';
import {Container, Row, Col } from 'reactstrap';

import react from '../images/react-logo.png';
import aws from '../images/aws-logo.jpeg';
import heroku from '../images/heroku-logo.png';
import jira from '../images/jira-logo.png'; 
import nodejs from '../images/nodejs-logo.jpg';
import postman from '../images/postman-logo.jpeg';

function Tools() {
  return (
      <Container >
        <Row >
          <Col sm="12" md="4" ><img src={react}   fluid alt=""/> </Col>
          <Col sm="12" md="4" ><img src={aws}   fluid alt=""/></Col>
          <Col sm="12" md="4" > <img src={heroku}   fluid alt=""/> </Col>
          <Col sm="12" md="4" > <img src={jira}   fluid alt=""/> </Col>
          <Col sm="12" md="4" > <img src={nodejs}   fluid alt=""/> </Col>
          <Col sm="12" md="4" > <img src={postman}   fluid alt=""/></Col>
        </Row>
      </Container>
  );
}
export default Tools;


