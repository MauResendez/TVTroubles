import React from "react";
import MatchResults from "../components/MatchResults";
import { matchesData } from '../data/matchesData'
import Description from '../components/Description';
import { Container, Button } from 'reactstrap'
import '../styles/Swipe.css'
import axios from 'axios'

class Swipe extends React.Component {

    submit(){
        alert('hello world')
    }

    constructor(props) {
        super(props);
        this.state = { 
            data: {}
        };
    }

    componentDidMount() {
        axios.get('/getDescription')
        .then((response) => {
            console.log(response);
            this.setState({
                data: response.data
            })
        })
    }

    render() {
        return (
            <Container>
                <Description name={this.state.data.title} description={this.state.data.description} rating={this.state.data.rating} />
                <div class="text-center">
                    <Button color="success" onClick={this.submit} >Yes</Button>
                    <Button color="danger" onClick={this.submit} className="ml-sm">No</Button>
                </div>
                <MatchResults data={matchesData} />
            </Container>
        )
    }
}

export default Swipe;