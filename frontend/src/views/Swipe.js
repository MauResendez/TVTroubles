import React from "react";
import MatchResults from "../components/MatchResults";
import { matchesData } from '../data/matchesData'
import Description from '../components/Description';
import { Container, Button } from 'reactstrap'
import '../styles/Swipe.css'

class Swipe extends React.Component {

    submit(){
        alert('hello world')
    }

    constructor(props)
    {
        super(props);
        this.state = {
            
        }
        this.yesButtonApi = this.yesButtonApi.bind(this);
    }

    yesButtonApi() {
        var id = Math.floor(Math.random()*500);
        var body = {
            id: id,
            record: this.state.data
        }

        axios.post('/addUserMovie', body)

        .then((response) => {
            console.log(response);
        })
    }

    render() {
        return (
            <Container>
                <Description />
                <div class="text-center">
                    <Button color="success" onClick={this.yesButtonApi} >Yes</Button>
                    <Button color="danger" onClick={this.submit} className="ml-sm">No</Button>
                </div>
                <MatchResults data={matchesData} />
            </Container>
        )
    }
}

export default Swipe;