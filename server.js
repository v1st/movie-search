const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const url = 'http://localhost/';
const port = process.env.PORT || 5000;

const config = require('./config');
const apiKey = config.API_KEY;

const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=spider%20man&page=1&include_adult=false`;


app.get('/', (req, res) => res.send('hi'));



app.listen(port, () => { console.log(`App listening on ${url}${port} `); });
