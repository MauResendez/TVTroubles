import React from "react";
import MatchResults from "../components/MatchResults";
// import { matchesData } from '../data/matchesData'
import Data from '../components/Data';
import { Container, Button } from 'reactstrap'
import '../styles/Swipe.css'
import axios from 'axios'

class Swipe extends React.Component 
{
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

        this.yesButtonApi = this.yesButtonApi.bind(this);
        this.noButtonApi = this.noButtonApi.bind(this);
        this.getMovie = this.getMovie.bind(this);
    }

    componentDidMount() 
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
        });
    }

    noButtonApi() 
    {
        this.getMovie();
    }

    getMovie()
    {
        // axios.get('/getDescription').then((response) => 
        // {
        //     console.log(response);
        //     this.setState
        //     ({
        //         data: response.data
        //     })
        // }).then(() => 
        // {
        //     if(this.state.data.name)
        //     {
        //         axios.get(`/getPreview?name=${this.state.data.name}`).then((response) => 
        //         {
        //             console.log(response.data);
                    
        //             this.setState(prevState => {
        //                 let data = { ...prevState.data };
    
        //                 data.preview = response.data.url;                
    
        //                 return { data }; 
        //             })
        //         }).catch(function (error) 
        //         {
        //             console.log(error)
        //             // res.status(400).json({error: "An error occurred"});
        //         })
        //     }
        // }).catch(function (error) 
        // {
        //     console.log(error)
        // });

        try 
        {
            axios.get('/getMovie').then((response) =>
            {
                this.setState
                ({
                    data: response.data
                })
            }).catch(function (error) 
            {
                console.log(error)
            });

            
        } 
        catch (err) 
        {
            console.log(err);
        }
    }

    render() 
    {
        return (
            <Container>
                <Data title={this.state.data.title} description={this.state.data.description} rating={this.state.data.rating} preview={this.state.data.video}/>
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