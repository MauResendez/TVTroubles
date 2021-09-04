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
      <Container className="tools">
          <h1 className="tools-title">Tools</h1>
          <Row md={2} lg={3}>
            <Col><img src={react} alt="React Logo"/> </Col>
            <Col><img src={aws} alt="Amazon AWS Logo"/></Col>
            <Col><img src={heroku} alt="Heroku Logo"/> </Col>
            <Col><img src={jira} alt="Jira Logo"/> </Col>
            <Col><img src={nodejs} alt="Node.js Logo"/> </Col>
            <Col><img src={postman} alt="Postman Logo"/></Col>
          </Row>
      </Container>
  );
}
export default Tools;


