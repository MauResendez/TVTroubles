import React from 'react';
import { Row, Col } from 'reactstrap';
import FilledCard from './FilledCard';
import { Container } from 'reactstrap'
import '../styles/Features.css';

function Features() {
    return (
        <Container className="features">
            <h1 className="featuresTitle">Features</h1>
            <Row className="featuresRow">
                <Col><FilledCard className="featuresCard" title="View previews of the show" photo="https://cdn.freelogovectors.net/wp-content/uploads/2018/03/ut-dallas-logo02.png" description="Be able to view the preview of the given show to help you show what it's about and to see if you're interested in watching or not."/></Col>
                <Col><FilledCard className="featuresCard" title="Choose if you're interested or not" photo="https://cdn.freelogovectors.net/wp-content/uploads/2018/03/ut-dallas-logo02.png" description="Decide if you were interested in the show from what you saw in the preview or not."/></Col>
                <Col><FilledCard className="featuresCard" title="Keeping track of the shows you were interested in" photo="https://cdn.freelogovectors.net/wp-content/uploads/2018/03/ut-dallas-logo02.png" description="Be able to view the shows you're interested in so you can start watching them later."/></Col>
            </Row>
        </Container>
    );
}

export default Features