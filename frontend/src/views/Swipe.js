import React from "react";
import MatchResults from "../components/MatchResults";
import Data from '../components/Data';
import { Container, Button } from 'reactstrap';
import { withAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

import '../styles/Swipe.css';

class Swipe extends React.Component 
{
    constructor(props) 
    {
        super(props);

        const { user } = this.props.auth0;

        this.state = { 
            data: {},
            uid: user.sub.split('|')[1],
            matches: []
        };

        this.yesButtonApi = this.yesButtonApi.bind(this);
        this.noButtonApi = this.noButtonApi.bind(this);
        this.getMovie = this.getMovie.bind(this);
        this.getMatches = this.getMatches.bind(this);
    }

    componentDidMount() 
    {
        this.getMovie();
        this.getMatches();
    }

    yesButtonApi() 
    {    
        try 
        {
            var body = {
                uid: this.state.uid,
                mid: this.state.data.id
            }  
    
            axios.post('https://tvtroubles.herokuapp.com/addMatch', body).then(() =>
            {
                this.getMovie();
                this.getMatches();
            });
        } 
        catch (error) 
        {
            console.log(error)
        }
    }

    noButtonApi() 
    {
        try 
        {
            this.getMovie();
        } 
        catch (error) 
        {
            console.log(error);
        }
    }

    getMovie()
    {
        try 
        {
            axios.get('https://tvtroubles.herokuapp.com/getMovie').then((response) =>
            {
                this.setState
                ({
                    data: response.data
                });
            });
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

    render() 
    {
        return (
            <div className="text-center">
                <Container className="swipe">
                    <Data title={this.state.data.title} description={this.state.data.description} rating={this.state.data.rating} preview={this.state.data.video}/>
                    <Button color="success" onClick={this.yesButtonApi} className="ml-sm">Yes</Button>
                    <Button color="danger" onClick={this.noButtonApi} className="ml-sm">No</Button>
                    <MatchResults matches={this.state.matches} uid={this.state.uid}/>
                </Container>
            </div>
        )
    }
}

export default withAuth0(Swipe);