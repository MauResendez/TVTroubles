const express = require('express')
const app = express()
const axios = require('axios');
app.use(express.json());


/*
    I will leave this here as an example that you can use
    when building your APIs. I suggest that you try to understand
    what each line is doing. Reach out if you have any questions.
*/
/*
app.get('/exampleApi', function (req, res) {

    axios.get('https://api.agify.io?name=Mike')
    .then(function (response) {
        // handle success and send back a 200 response with the data
        console.log(response.data);
        res.status(200).json(response.data);
    })
    .catch(function (error) {
        
            //It is good practice to handle the error and send back the 
            //error message that was received from the API call
        
        console.log(error)
        res.status(400).json({error:"An error occurred"});
    })
})*/

/*
{
    "id":1,
    "record": {
        "name": "Zootopia",
        "description": "Determined to prove herself, Officer Judy Hopps, the first bunny on Zootopia's police force, jumps at the chance to crack her first case - even if it means partnering with scam-artist fox Nick Wilde to solve the mystery.",
        "rating": 7.7,
        "preview_video":"url"
    }
}
*/

app.post('/addUserMovie', function (req, res) {
    console.log(req.body)

    const body = {
        id: req.body.id,
        record: req.body.record
    }

    axios.post('https://codubee-projects-api.herokuapp.com/tvTroubles/addUserMovie',body)

    .then(function (response) {
         console.log(response.data);
         res.status(200).json(response.data);
    })
    .catch(function (error) {
        console.log(error)
        res.status(400).json({error:"An error occurred with addUserMovie"})
    })
})

app.listen(8080, () => console.log('Listening at locahost:8080'))
