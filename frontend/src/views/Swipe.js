import React from "react";
import MatchResults from "../components/MatchResults";
import {matchesData} from '../data/matchesData'

function Swipe() {
    return (
        <MatchResults data={matchesData}/>
    );
}

export default Swipe;