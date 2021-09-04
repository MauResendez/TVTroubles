import React, { Component } from 'react';
import { Card, CardBody, Container, CardHeader, Row, Col, Collapse, Button } from 'reactstrap';
import { AiFillStar } from 'react-icons/ai';
import '../styles/MatchResults.css';
import axios from 'axios';

class MatchResults extends Component 
{
    constructor(props) 
    {
        super(props);

        this.state = { isOpen: false, matches: this.props.matches, uid: this.props.uid };

        this.toggle = this.toggle.bind(this);
        this.getMatches = this.getMatches.bind(this);
        this.deleteButtonApi = this.deleteButtonApi.bind(this);
    }

    componentDidMount() 
    {
        this.getMatches();
    }

    componentDidUpdate(prevProps)
    {
        if(this.props !== prevProps)
        {
            this.setState
            ({
                matches: this.props.matches
            });
        }
    }

    toggle()
    {
        try 
        {
            this.setState
            ({
                isOpen: !this.state.isOpen
            });

            if(this.state.isOpen)
            {
                this.getMatches();
            }
        } 
        catch (error) 
        {
            console.log(error);
        }
    }

    getMatches()
    {
        try 
        {
            let uid = this.state.uid;

            axios.get(`/getMatches?id=${uid}`).then((response) => 
            {
                this.setState
                ({
                    matches: response.data
                });
            });
        } 
        catch (error) 
        {
            console.log(error);
        }
    }

    deleteButtonApi(e)
    {
        try 
        {
            var body = {
                uid: this.state.uid,
                mid: e.target.value
            }
    
            axios.post('/deleteMatch', body).then(() =>
            {
                this.getMatches();
            });
        } 
        catch (error) 
        {
            console.log(error);
        }
    }

    render() 
    {
        return (
            <Container className="match-results">
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
                                                        {item.title}
                                                    </div>
                                                    <span>
                                                        <AiFillStar />
                                                        {item.rating}
                                                    </span>
                                                </CardHeader>
                                                <CardBody>
                                                    {item.description}
                                                </CardBody>
                                                <Button className="deleteBtn" color="danger" onClick={this.deleteButtonApi} value={item.id}>Delete</Button>
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

export default MatchResults;