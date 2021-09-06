const express = require('express');
const dotenv = require('dotenv');
// const mysql = require('mysql2');
const cors = require('cors');
// const path = require('path');
const app = express();

app.use(express.json());
app.use(cors());

// Load env
dotenv.config({ path: './config.env' });

// const db = mysql.createPool
// ({
//     user: `${process.env.USER}`,
//     host: `${process.env.HOST}`,
//     password: `${process.env.PASSWORD}`,
//     database: `${process.env.DATABASE}`,
//     connectionLimit: 10,
//     waitForConnections: true,
// });

// app.get('/user', (req, res) => 
// {
//     try 
//     {
//         let id = req.query.id;
//         let admin = 0;

//         // Check database to see if there's a user with the same ID as the one given to us.
//         // If not, create a new user

//         db.query("SELECT * FROM users WHERE id = ?", [id], (err, result) => 
//         {                    
//             if(result.length == 0)
//             {
//                 db.query("INSERT INTO users (id, admin) VALUES (?, ?)", [id, admin]);
//             }

//             return res.status(200).json({"result": result});
//         });
//     } 
//     catch (err) 
//     {
//         console.log(err);
//         return res.status(400).json({error: "An error occurred with user"});
//     }
// });

// app.post('/addMatch', (req, res) =>
// {
//     try 
//     {
//         let uid = req.body.uid;
//         let mid = req.body.mid;
           
//         db.query("INSERT INTO matches (uid, mid) VALUES (?, ?)", [uid, mid], (err, result) => 
//         {
//             return res.status(200).json({"result": result});              
//         });
//     } 
//     catch (err) 
//     {        
//         console.log(err);
//         return res.status(400).json({error: "An error occurred with addMatch"});
//     }
// });

// app.post('/deleteMatch', (req, res) =>
// {
//     try 
//     {
//         let uid = req.body.uid;
//         let mid = req.body.mid;
           
//         db.query("DELETE FROM matches WHERE uid = ? AND mid = ?", [uid, mid], (err, result) => 
//         {
//             return res.status(200).json({"result": result});              
//         });
//     } 
//     catch (err) 
//     {        
//         console.log(err);
//         return res.status(400).json({error: "An error occurred with deleteMatch"});
//     }
// });

// app.get('/getMatches', (req, res) =>
// {
//     try 
//     {
//         let id = req.query.id;

//         db.query("SELECT * FROM media WHERE id IN (SELECT mid FROM matches WHERE uid = ?);", [id], (err, matches) => 
//         {
//             return res.status(200).json(matches);
//         });
//     } 
//     catch (err) 
//     {
//         console.log(err);
//         return res.status(400).json({error: "An error occurred with getMatches"});       
//     }
// });

// app.get('/getMovie', (req, res) =>
// {
//     try 
//     {
//         let id = Math.floor(Math.random() * 50) + 1;

//         db.query(`SELECT * FROM media WHERE id = ${id}`, (err, result) => 
//         {
//             return res.status(200).json(result[0]);
//         });
//     } 
//     catch (err) 
//     {
//         console.log(err);
//         return res.status(400).json({error: "An error occurred with getMovie"});
//     }
// });

// Routes
app.use('/', require('./routes/routes'));

if(process.env.NODE_ENV === 'production')
{
    app.use(express.static(path.join(__dirname, 'build'))); 

    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
}

app.listen(process.env.PORT || 8080, () => console.log('Listening at localhost'));