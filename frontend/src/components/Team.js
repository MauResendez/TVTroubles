import React from 'react';
import { Row, Col } from 'reactstrap';
import FilledCard from './FilledCard';

function Team() 
{
    return (
        <Row>
            <Col><FilledCard name="Varsha George" photo="https://cdn.freelogovectors.net/wp-content/uploads/2018/03/ut-dallas-logo02.png" major="Computer Science" intro="I'm Varsha George. I'm currently in my sophomore year of my Computer Science degree at the University of Texas at Dallas"/></Col>
            <Col><FilledCard name="Nam Nguyen" photo="https://cdn.freelogovectors.net/wp-content/uploads/2018/03/ut-dallas-logo02.png" major="Computer Science" intro="I'm Nam Nguyen. I'm currently in my sophomore year of my Computer Science degree at the University of Texas at Dallas"/></Col>
            <Col><FilledCard name="Jason Kluge" photo="https://cdn.freelogovectors.net/wp-content/uploads/2018/03/ut-dallas-logo02.png" major="Computer Science" intro="I'm Jason Kluge. I'm currently in my sophomore year of my Computer Science degree at the University of Texas at Dallas"/></Col>
            <Col><FilledCard name="Mauricio Resendez" photo="https://www.utrgv.edu/prem/_files/images/logos/utrgv.png" major="Computer Engineering" intro="I'm Mauricio Resendez. I'm currently in my senior year of my Computer Engineering degree at the University of Texas Rio Grande Valley"/></Col>
            <Col><FilledCard name="Nivetha Narayanan" photo="https://cdn.freelogovectors.net/wp-content/uploads/2018/03/ut-dallas-logo02.png" major="Computer Science" intro="I'm Nivetha Narayanan. I'm currently in my sophomore year of my Computer Science degree at the University of Texas at Dallas"/></Col>
        </Row>
    )
}

export default Team;

