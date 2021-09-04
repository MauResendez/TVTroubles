import React from 'react';
import { Container } from 'reactstrap';
import '../styles/Explanation.css'

function Explanation() 
{
    return (
        <Container className="explanation">
            <h1>Welcome to TV Troubles!</h1>
            <br/>
            <p>We will help you solve the issue of not knowing what to watch on TV.</p>
            <p>We will show you one show description at a time along with a preview video of the show or movie.
                You will then select yes or no to the show or movie.</p>
        </Container>
    )
};

export default Explanation;