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
            name: '',
            description: '',
            rating: '' 
        };
        

    }

    componentDidMount() {
        axios.get('/getDescription')
        .then((response) => {
            console.log(response);
            this.setState({
                name: response.title,
                description: response.overview,
                rating: response.vote_average
            })
        })
    }

    render() {
        return (
            <Container>
                <Description name={this.state.name} description={this.state.description} rating={this.state.rating} />
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