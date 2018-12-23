const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const CronJob = require('cron').CronJob;
const path = require('path');

const app = express();
const url = 'http://localhost:';
const port = process.env.PORT || 5000;

// Secret Keys for App
const keys = require('./config/keys');
// const apiKey = keys.API_KEY;
const db =  keys.URI;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// DB config
mongoose
  .connect(db)
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.log(err));

// Connect routes to our App
const router = require('./routes/api');
app.use('/api', router);

// Connect API Updater and Update every hour
const updater = require('./api/updater');
new CronJob('0 0 * * * *', () => {
  console.log('Database Updated.');
  updater.updateMovies();
}, null, true, 'America/Los_Angeles');

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Listen for App
app.listen(port, () => {
  console.log(`App listening on ${url}${port} `);
});