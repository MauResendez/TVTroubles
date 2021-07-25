import React from 'react';
import { Row, Col, Container, CardDeck } from 'reactstrap';
import FilledCard from './FilledCard';

import '../styles/Team.css';

function Team() 
{
    return (
        <div className="team">
            <Container>
                <h1 className="teamTitle">Team</h1>
                <Row className="teamRow">
                    <Col><FilledCard title="Varsha George" photo="https://cdn.freelogovectors.net/wp-content/uploads/2018/03/ut-dallas-logo02.png" description="I'm Varsha George. I'm currently in my Freshman year of my Computer Science degree at the University of Texas at Dallas"/></Col>
                    <Col><FilledCard title="Nam Nguyen" photo="https://cdn.freelogovectors.net/wp-content/uploads/2018/03/ut-dallas-logo02.png" description="I'm Nam Nguyen. I'm currently in my Senior year of my Computer Science degree at the University of Texas at Dallas"/></Col>
                    <Col><FilledCard title="Jason Kluge" photo="https://cdn.freelogovectors.net/wp-content/uploads/2018/03/ut-dallas-logo02.png" description="I'm Jason Kluge. I'm currently in my Sophmore year of my Computer Science degree at the University of Texas at Dallas"/></Col>
                    <Col><FilledCard title="Mauricio Resendez" photo="https://www.utrgv.edu/prem/_files/images/logos/utrgv.png" description="I'm Mauricio Resendez. I'm currently in my Senior year of my Computer Engineering degree at the University of Texas Rio Grande Valley"/></Col>
                    <Col><FilledCard title="Nivetha Narayanan" photo="https://cdn.freelogovectors.net/wp-content/uploads/2018/03/ut-dallas-logo02.png" description="I'm Nivetha Narayanan. I'm currently in my Sophomore year of my Computer Science degree at the University of Texas at Dallas"/></Col>
                </Row>
            </Container>
        </div>


        // <CardDeck style={{display: 'flex', flexDirection: 'row', width: '20em', justifyContent: 'center'}}>
        //     <FilledCard style={{flex: 1}} title="Varsha George" photo="https://cdn.freelogovectors.net/wp-content/uploads/2018/03/ut-dallas-logo02.png" description="I'm Varsha George. I'm currently in my Freshman year of my Computer Science degree at the University of Texas at Dallas"/>
        //     <FilledCard style={{flex: 1}} title="Nam Nguyen" photo="https://cdn.freelogovectors.net/wp-content/uploads/2018/03/ut-dallas-logo02.png" description="I'm Nam Nguyen. I'm currently in my Senior year of my Computer Science degree at the University of Texas at Dallas"/>
        //     <FilledCard style={{flex: 1}} title="Jason Kluge" photo="https://cdn.freelogovectors.net/wp-content/uploads/2018/03/ut-dallas-logo02.png" description="I'm Jason Kluge. I'm currently in my Sophmore year of my Computer Science degree at the University of Texas at Dallas"/>
        //     <FilledCard style={{flex: 1}} title="Mauricio Resendez" photo="https://www.utrgv.edu/prem/_files/images/logos/utrgv.png" description="I'm Mauricio Resendez. I'm currently in my Senior year of my Computer Engineering degree at the University of Texas Rio Grande Valley"/>
        //     <FilledCard style={{flex: 1}} title="Nivetha Narayanan" photo="https://cdn.freelogovectors.net/wp-content/uploads/2018/03/ut-dallas-logo02.png" description="I'm Nivetha Narayanan. I'm currently in my Sophomore year of my Computer Science degree at the University of Texas at Dallas"/>
        // </CardDeck>
    )
}

export default Team;

