const express = require("express");
const dotenv = require("dotenv");
const path = require('path');
const cors = require('cors');

// Load env
dotenv.config({ path: './config.env' });

const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.use('/', require('./routes/routes'));

process.env.PWD = process.cwd();

if(process.env.NODE_ENV === 'production')
{
    // app.use(express.static(path.join(__dirname, 'client', 'build')))

    // app.get('/*', (req, res) => {
    //     res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    // });

    app.use(express.static(path.join(process.env.PWD, 'client', 'build')))

    app.get('/*', (req, res) => {
        res.sendFile(path.join(process.env.PWD, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Listening at port ${port}`);
});