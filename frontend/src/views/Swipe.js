import React from "react";
import MatchResults from "../components/MatchResults";
import { matchesData } from '../data/matchesData'
import Description from '../components/Description';
import { Container, Button } from 'reactstrap'
import '../styles/Swipe.css'
import axios from 'axios'

class Swipe extends React.Component 
{
    submit()
    {
        alert('hello world')
    }

    constructor(props) 
    {
        super(props);

        var UID = 0;

        if(!sessionStorage.getItem('UID'))
        {
            UID = Math.floor(Math.random() * 100);
            sessionStorage.setItem('UID', UID);
        }

        this.state = { 
            data: {},
            userId: UID
        };

        this.noButtonApi = this.noButtonApi.bind(this);
        this.yesButtonApi = this.yesButtonApi.bind(this);
        this.getMovie = this.getMovie.bind(this);
    }

    componentDidMount() 
    {   
        this.getMovie();
    }

    noButtonApi() 
    {
        this.getMovie();
    }

    yesButtonApi() 
    {    
        var body = {
            id: this.state.userId,
            record: this.state.data
        }

        axios.post('/addUserMovie', body).then((response) => 
        {
            console.log(response);
        }).then(() =>
        {
            this.getMovie();
        }).catch(function (error) 
        {
            console.log(error)
            // res.status(400).json({error: "An error occurred"});
        })
    }

    getMovie()
    {
        axios.get('/getDescription')
        .then((response) => 
        {
            console.log(response);
            this.setState
            ({
                data: response.data
            })
        }).then(() => 
        {
            if(this.state.data.name)
            {
                axios.get(`/getPreview?name=${this.state.data.name}`)
                .then((response) => 
                {
                    console.log(response.data);
                    
                    this.setState(prevState => {
                        let data = { ...prevState.data };
    
                        data.preview = response.data.url;                
    
                        return { data }; 
                    })
                }).catch(function (error) 
                {
                    console.log(error)
                    // res.status(400).json({error: "An error occurred"});
                })
            }
        })
    }

    render() 
    {
        return (
            <Container>
                <Description title={this.state.data.title} description={this.state.data.description} rating={this.state.data.rating} preview={this.state.data.preview}/>
                <div className="text-center">
                    <Button color="success" onClick={this.yesButtonApi} >Yes</Button>
                    <Button color="danger" onClick={this.noButtonApi} className="ml-sm">No</Button>
                </div>
                {/* <MatchResults data={matchesData} /> */}
                <MatchResults userId={this.state.userId}/>
            </Container>
        )
    }
}

export default Swipe;