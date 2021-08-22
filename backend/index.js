const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const mysql = require('mysql2');
const cors = require('cors');

const salt = 12;

const app = express();

// Load env
dotenv.config({ path: './config.env' });

const db = mysql.createPool({
    user: `${process.env.USER}`,
    host: `${process.env.HOST}`,
    password: `${process.env.PASSWORD}`,
    database: `${process.env.DATABASE}`
})

function handleDisconnect() 
{
  var connection = db;                    // Recreate the connection, since
                                          // the old one cannot be reused.
  connection.getConnection(function(err) 
  {                                  
    if(err)                               // The server is either down or restarting (takes a while sometimes).
    {                                     
      console.log('Error when connecting to DB:', err);
      setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
    }                                     // to avoid a hot loop, and to allow our node script to
  });                                     // process asynchronous requests in the meantime.
                                          // If you're also serving http, display a 503 error.
  connection.on('error', function(err) 
  {
    console.log('DB Error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') 
    {                                             // Connection to the MySQL server is usually
      handleDisconnect();                         // lost due to either server restart, or a
    } 
    else 
    {                                             // connnection idle timeout (the wait_timeout
      throw err;                                  // server variable configures this)
    }
  });
}

handleDisconnect();

app.use(express.json());
app.use(cors());

app.get('/user', (req, res) => 
{
    let id = req.query.id;
    let admin = 0;

    // Check database to see if there's a user with the same ID as the one given to us.
    // If not, create a new user

    db.query(`SELECT * FROM users WHERE id = ?`, [id], (err, result) => 
    {
        if(result.length == 0)
        {
            db.query("INSERT INTO users (id, admin) VALUES (?, ?)", [id, admin]);
        }
    })
});

app.get('/getMatches', async (req, res) =>
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
});

app.post('/addUserMovie', (req, res) =>
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
});

app.get('/getMovie', (req, res) =>
{
    try 
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
    } 
    catch (err) 
    {
        console.log(error)
        res.status(400).json({error: "An error occurred"});
    }
});

app.listen(8080, () => console.log('Listening at localhost:8080'));