import React from 'react';
import Features from '../components/Features'
import Team from '../components/Team';
import Explanation from '../components/Explanation'

function LandingPage(){
    return(
        <div>
            <Team/>
            <Explanation/>
            <Features/>
        </div>
    )
}

export default LandingPage;