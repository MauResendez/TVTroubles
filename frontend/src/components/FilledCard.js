import React from 'react';
import { Card, CardHeader, CardFooter, CardImg, Container } from 'reactstrap';

function FilledCard(props) 
{
    return (
        // Takes props given from the each FilledCard component in the Team component to use for the card's title, subtitle, and text
        <Container> 
            <Card>
                <CardHeader><strong>{props.name}</strong></CardHeader>
                <CardImg src={props.photo} alt="School Image" className="cardImg"/>
                <CardFooter><h7>{props.intro}</h7></CardFooter>
            </Card>
        </Container>
    )
}

export default FilledCard;
