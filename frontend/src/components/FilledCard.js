import React from 'react';
import { Card, CardHeader, CardFooter, CardImg, Container } from 'reactstrap';

import '../styles/FilledCard.css';

function FilledCard(props) 
{
    return (
        // Takes props given from the each FilledCard component in the Team component to use for the card's header, image, and footer
        <Container> 
            <Card>
                <CardHeader><strong>{props.title}</strong></CardHeader>
                <CardImg src={props.photo} alt="Image" className="cardImg"/>
                <CardFooter>{props.description}</CardFooter>
            </Card>
        </Container>
    )
}

export default FilledCard;
