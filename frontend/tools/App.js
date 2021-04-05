import React from 'react';
import {Container, Row, Col } from 'reactstrap';

import Image from 'react-bootstrap/Image';
import rlogo from './react-logo.png';
import awslogo from './aws-logo.png';
import hlogo from './heroku-logo.png';
import jlogo from './jira-logo.png';
import nlogo from './nodejs-logo.jpg';
import plogo from './postman-logo.png';

function tools() {
  return (
      <Container fluid>
        <Row noGutters>
          <Col>
            <Image src={rlogo} roundedCircle fluid width="100px" height="100px"/> 
            <Image src={awslogo} roundedCircle fluid width="100px" height="100px"/>
            <Image src={hlogo} roundedCircle fluid width="100px" height="100px"/> 
            <Image src={jlogo} roundedCircle fluid width="100px" height="100px"/> 
            <Image src={nlogo} roundedCircle fluid width="100px" height="100px"/> 
            <Image src={plogo} roundedCircle fluid width="100px" height="100px"/>
          </Col> 
        </Row>
      </Container>
  );
}
export default tools;


