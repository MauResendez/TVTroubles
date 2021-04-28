const express = require('express')
const app = express()
const axios = require('axios');

app.use(express.json());

/*
    I will leave this here as an example that you can use
    when building your APIs. I suggest that you try to understand
    what each line is doing. Reach out if you have any questions.
*/

app.get('/getMatches', async (req, res) => 
{
    try 
    {
        id = req.query.id;

        console.log(req.query);

        axios.get(`https://codubee-projects-api.herokuapp.com/tvTroubles/getUserMatches?id=${id}`).then((response) => 
        {
            data = response.data;
            res.status(200).json(data);
        });
    } 
    catch (err) 
    {
        res.status(400).json(err);
    }
})

app.listen(8080, () => console.log('Listening at localhost:8080'))
