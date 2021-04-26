const express = require('express')
const app = express()
const axios = require('axios');
app.use(express.json());

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
