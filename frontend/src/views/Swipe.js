import React from "react";
import MatchResults from "../components/MatchResults";
import {matchesData} from '../data/matchesData'
import Description from '../components/Description';
import {Container } from 'reactstrap'
import YesNoButton from '../components/YesNoButton';

function Swipe() {
    return (
        <Container>
            <Description/>
            <MatchResults data={matchesData}/>
            <YesNoButton/>
        </Container>
    );
}

export default Swipe;