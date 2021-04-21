import React, { useState } from 'react';
import { Card, CardBody, Container, CardHeader, Row, Col, Collapse, Button } from 'reactstrap';
import { AiFillStar } from 'react-icons/ai'
import '../styles/MatchResults.css';

function MatchResults(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Container className="matchResults">
            <div className="text-center">
                <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>View Matches</Button>
                <Collapse isOpen={isOpen}>
                    <Row>
                        {
                            props.data.map((item, val) => {
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

export default MatchResults;