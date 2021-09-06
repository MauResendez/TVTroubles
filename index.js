// const express = require('express');
// const dotenv = require('dotenv');
// // const cors = require('cors');
// const app = express();

// app.use(express.json());
// // app.use(cors());

// const PORT = process.env.PORT || 8080;

// // Load env
// dotenv.config({ path: './config.env' });

// app.use((req, res, next) => 
// {
//     res.append('Access-Control-Allow-Origin', ['*']);
//     res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     res.append('Access-Control-Allow-Headers', 'Content-Type');
//     res.append('Content-Type', 'application/json');
//     next();
// });

// // Routes
// app.use('/', require('./routes/routes'));

// if(process.env.NODE_ENV === 'production')
// {
//     app.use(express.static(path.join(__dirname, 'build'))); 

//     app.get('/*', (req, res) => 
//     {
//         res.sendFile(path.join(__dirname, 'build', 'index.html'));
//     });
// }

// app.listen(PORT, () => console.log(`Listening at localhost ${PORT}`));

const express = require("express");
const dotenv = require("dotenv");
const path = require('path');

// Load env
dotenv.config({ path: './config.env' });

const app = express();
app.use(express.json());

// Routes
app.use('/', require('./routes/routes'));

const port = process.env.PORT || 8080;

if(process.env.NODE_ENV === 'production')
{
    app.use(express.static(path.join(__dirname, 'build'))); 

    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
}

app.listen(port, () => {
    console.log(`Listening at port ${port}`);
});