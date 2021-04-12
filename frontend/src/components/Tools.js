import React from 'react';
import {Container, Row, Col } from 'reactstrap';

import rlogo from '../images/react-logo.png';
import awslogo from '../images/aws-logo.png';
import hlogo from '../images/heroku-logo.png';
import jlogo from '../images/jira-logo.png'; 
import nlogo from '../images/nodejs-logo.jpg';
import plogo from '../images/postman-logo.png';

function Tools() {
  return (
      <Container fluid>
        <Row noGutters>
          <Col sm="12" md="4" ><img src={rlogo} roundedCircle fluid/> </Col>
          <Col sm="12" md="4" ><img src={awslogo} roundedCircle fluid/></Col>
          <Col sm="12" md="4" > <img src={hlogo} roundedCircle fluid/> </Col>
          <Col sm="12" md="4" > <img src={jlogo} roundedCircle fluid/> </Col>
          <Col sm="12" md="4" > <img src={nlogo} roundedCircle fluid/> </Col>
          <Col sm="12" md="4" > <img src={plogo} roundedCircle fluid/></Col>
        </Row>
      </Container>
  );
}
export default Tools;


