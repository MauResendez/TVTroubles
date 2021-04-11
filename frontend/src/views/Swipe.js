import React from "react";
import MatchResults from "../components/MatchResults";
import {matchesData} from '../data/matchesData'
import Description from '../components/Description';
import {Container } from 'reactstrap'

function Swipe() {
    return (
        <Container>
            <Description/>
            <MatchResults data={matchesData}/>
        </Container>
    );
}

export default Swipe;