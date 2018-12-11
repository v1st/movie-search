const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const url = 'http://localhost/';
const port = process.env.PORT || 5000;

const keys = require('./config/keys');
const apiKey = keys.API_KEY;
const URI = keys.URI;

const db = URI;

// Middleware
app.use(bodyParser.json());

// DB config
mongoose
  .connect(db)
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.log(err));


app.get('/', (req, res) => res.send('hi'));

const updater = require('./api/updater');

updater.updatePopularMovies();

app.listen(port, () => {
  console.log(`App listening on ${url}${port} `);
});