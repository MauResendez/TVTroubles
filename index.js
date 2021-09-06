const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080;

// Load env
dotenv.config({ path: './config.env' });

// Routes
app.use('/', require('./routes/routes'));

if(process.env.NODE_ENV === 'production')
{
    app.use(express.static(path.join(__dirname, 'build'))); 

    app.get('/', (req, res) => 
    {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
}

app.listen(PORT, () => console.log(`Listening at localhost ${PORT}`));