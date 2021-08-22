import React, { Fragment } from 'react';
import Tools from '../components/Tools';
import Features from '../components/Features'
import Team from '../components/Team';
import Explanation from '../components/Explanation';

function LandingPage() 
{
    return (
        <Fragment>
            <Explanation/>
            <Features/>
            <Team/>
            <Tools/>
        </Fragment>
    )
}

export default LandingPage;