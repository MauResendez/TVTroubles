import React from 'react';
import { Table, Container } from 'reactstrap';

import '../styles/MatchResults.css';

function MatchResults() 
{
    return (
        <Container className="matchResults">
            <h1 className="matchResultsTitle">Your choices</h1>
            <Table bordered>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Rating</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Breaking Bad</td>
                    <td>Set in Albuquerque, New Mexico, between 2008 and 2010, Breaking Bad follows Walter White, a meek high school chemistry teacher who transforms into a ruthless player in the local methamphetamine drug trade, driven by a desire to financially provide for his family after being diagnosed with terminal lung cancer.</td>
                    <td>9.5/10</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Game Of Thrones</td>
                    <td>In the mythical continent of Westeros, several powerful families fight for control of the Seven Kingdoms. As conflict erupts in the kingdoms of men, an ancient enemy rises once again to threaten them all. Meanwhile, the last heirs of a recently usurped dynasty plot to take back their homeland from across the Narrow Sea.</td>
                    <td>9.3/10</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>House</td>
                    <td>The series follows the life of anti-social, pain killer addict, witty and arrogant medical doctor Gregory House (Hugh Laurie) with only half a muscle in his right leg. He and his team of medical doctors try to cure complex and rare diseases from very ill ordinary people in the United States of America.</td>
                    <td>8.7/10</td>
                </tr>
                </tbody>
            </Table>  
        </Container>
    )
}

export default MatchResults;