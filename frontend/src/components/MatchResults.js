import React from 'react';
import { Card, CardBody, Container, CardHeader, Row,Col } from 'reactstrap';
import { AiFillStar } from 'react-icons/ai'
import '../styles/MatchResults.css';

function MatchResults(props) {
    return (
        <Container className="matchResults">
            <h1 className="matchResultsTitle">Your choices</h1>
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
        </Container>
    )
}

export default MatchResults;