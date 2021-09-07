import React from 'react';
import { Card, CardBody, CardHeader, CardFooter, CardImg, Container } from 'reactstrap';

import '../styles/FilledCard.css';

function FilledCard(props) 
{
    return (
        // Takes props given from the each FilledCard component in the Team component to use for the card's header, image, and footer
        <Container className="filled-card" data-testid="FilledCard"> 
            <Card>
                <CardHeader><strong>{props.title}</strong></CardHeader>
                <CardBody>{props.description}</CardBody>
            </Card>
        </Container>
    )
}

export default FilledCard;