import React from 'react';
import Tools from '../components/Tools';
import Features from '../components/Features'
import Team from '../components/Team';
import Explanation from '../components/Explanation'

function LandingPage(){
    return(
        <div>
            <Explanation/>
            <Features/>
            <Team/>
            <Tools/>
        </div>
    )
}

export default LandingPage;