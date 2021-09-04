import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import FilledCard from './FilledCard';

import utd from '../images/ut-dallas.png';
import utrgv from '../images/utrgv.png';

import '../styles/Team.css';

function Team() 
{
    return (
            <Container className="team">
                <h1 className="team-title">Team</h1>
                <Row className="team-row" xs={1} lg={5} sm={1}>
                    <Col><FilledCard title="Varsha George" photo={utd} description="I'm Varsha George. I'm currently in my Freshman year of my Computer Science degree at the University of Texas at Dallas"/></Col>
                    <Col><FilledCard title="Nam Nguyen" photo={utd} description="I'm Nam Nguyen. I'm currently in my Senior year of my Computer Science degree at the University of Texas at Dallas"/></Col>
                    <Col><FilledCard title="Jason Kluge" photo={utd} description="I'm Jason Kluge. I'm currently in my Sophmore year of my Computer Science degree at the University of Texas at Dallas"/></Col>
                    <Col><FilledCard title="Mauricio Resendez" photo={utrgv} description="I'm Mauricio Resendez. I'm currently in my Senior year of my Computer Engineering degree at the University of Texas Rio Grande Valley"/></Col>
                    <Col><FilledCard title="Nivetha Narayanan" photo={utd} description="I'm Nivetha Narayanan. I'm currently in my Sophomore year of my Computer Science degree at the University of Texas at Dallas"/></Col>
                </Row>
            </Container>
    )
}

export default Team;

