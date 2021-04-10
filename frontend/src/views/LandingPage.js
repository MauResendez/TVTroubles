import React from 'react';
import Features from '../components/Features'
import Team from '../components/Team';
import Explanation from '../components/Explanation'
import MatchResults from '../components/MatchResults';

function LandingPage(){
    return(
        <div>
            <Explanation/>
            <Features/>
            <MatchResults/>
            <Team/>
        </div>
    )
}

export default LandingPage;