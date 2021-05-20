// import React, { useState } from 'react';
import React, { Component } from 'react';
import { Card, CardBody, Container, CardHeader, Row, Col, Collapse, Button } from 'reactstrap';
import { AiFillStar } from 'react-icons/ai'
import '../styles/MatchResults.css';
import axios from 'axios';

class MatchResults extends Component 
{
    // const [isOpen, setIsOpen] = useState(false);

    // const toggle = () => setIsOpen(!isOpen);

    constructor(props) 
    {
        super(props);

        this.state = { isOpen: false, matches: [] };

        this.toggle = this.toggle.bind(this);
        this.getMatches = this.getMatches.bind(this);
    }

    toggle()
    {
        this.setState({
            isOpen: !this.state.isOpen
        })

        if(this.state.isOpen)
        {
            this.getMatches();
        }
    }

    getMatches()
    {
        var UID = sessionStorage.getItem("UID");
        axios.get(`/getMatches?id=${UID}`).then((response) => 
        {
            this.setState({
                matches: response.data
            });

            console.log(this.state.matches);
        });
    }

    componentDidMount() 
    {
        this.getMatches();
    }

    render() 
    {
        console.log(this.state)
        return (
            <Container className="matchResults">
                <div className="text-center">
                    <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>View Matches</Button>
                    <Collapse isOpen={this.state.isOpen}>
                        <Row>
                            {
                                this.state.matches.map((item, val) => 
                                {
                                    val += 1;
                                    return (
                                        <Col sm="12" md="6" lg="4">
                                            <Card key={val} className="match-results-card">
                                                <CardHeader>
                                                    <div>
                                                        {item.name}
                                                    </div>
                                                    <span>
                                                        <AiFillStar />
                                                        {item.rating}
                                                    </span>
                                                </CardHeader>
                                                <CardBody>
                                                    {item.description}
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Collapse>
                </div>
            </Container>
        )
    }
}

// function MatchResults(props) 
// {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggle = () => setIsOpen(!isOpen);

//     return (
//         <Container className="matchResults">
//             <div className="text-center">
//                 <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>View Matches</Button>
//                 <Collapse isOpen={isOpen}>
//                     <Row>
//                         {
//                             props.data.map((item, val) => {
//                                 val += 1;
//                                 return (
//                                     <Col sm="12" md="6" lg="4">
//                                         <Card key={val} className="match-results-card">
//                                             <CardHeader>
//                                                 <div>
//                                                     {item.name}
//                                                 </div>
//                                                 <span>
//                                                     <AiFillStar />
//                                                     {item.rating}
//                                                 </span>
//                                             </CardHeader>
//                                             <CardBody>
//                                                 {item.description}
//                                             </CardBody>
//                                         </Card>
//                                     </Col>
//                                 )
//                             })
//                         }
//                     </Row>
//                 </Collapse>
//             </div>

//         </Container>
//     )
// }

export default MatchResults;