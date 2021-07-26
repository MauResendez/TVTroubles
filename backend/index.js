const express = require('express');
const app = express();
const axios = require('axios');
const dotenv = require('dotenv');
var mysql = require('mysql2');
var cors = require('cors');

// Load env
dotenv.config({ path: './config.env' });

const db = mysql.createConnection({
    user: `${process.env.USER}`,
    host: `${process.env.HOST}`,
    password: `${process.env.PASSWORD}`,
    database: `${process.env.DATABASE}`
})

app.use(express.json());
app.use(cors());

app.get('/getMatches', function async (req, res)
{
    try 
    {
        id = req.query.id;

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

app.post('/addUserMovie', function (req, res) 
{
    const body = {
        id: req.body.id,
        record: req.body.record
    }

    axios.post('https://codubee-projects-api.herokuapp.com/tvTroubles/addUserMovie', body).then(function (response) 
    {
        res.status(200).json(response.data);
    })
    .catch(function (error) 
    {
        console.log(error)
        res.status(400).json({error: "An error occurred with addUserMovie"})
    })
})

// Backend route to get the movie/show description
app.get('/getDescription', function (req, res) 
{

    axios.get('https://codubee-projects-api.herokuapp.com/tvTroubles/getDescription').then(function (response) 
    {
        res.status(200).json(response.data);
    })
    .catch(function (error) 
    {
        console.log(error)
        res.status(400).json({error: "An error occurred"});
    })
})

app.get('/getPreview', function (req, res) 
{
    var name = req.query.name
    axios.get('https://codubee-projects-api.herokuapp.com/tvTroubles/getPreview?name='+ name).then(function (response) 
    {
        res.status(200).json(response.data);
    })
    .catch(function (error) 
    {
        console.log(error)
        res.status(400).json({error: "An error occurred"});
    })
})

app.get('/getMovie', function (req, res)
{
    let id = Math.floor(Math.random() * 50) + 1;

    db.query(`SELECT * FROM media WHERE id = ${id}`, (err, result) => 
    {
        if(err)
        {
            console.log(err);
        }

        res.status(200).json(result[0]);
    });
});

app.listen(8080, () => console.log('Listening at localhost:8080'));
