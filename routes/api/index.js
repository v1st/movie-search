const express = require('express');
const router = express.Router();

// Popular movie model
const Popular = require('../../models/Popular');

// API call to /api

router.get('/', async (req, res) => {
  // Return array of data

  let popularMovieData = await Popular.findById({
    '_id': "5c0f1b8ca3f36837941eed2e"
  }, (err, data) => {
    if (err) {
      return console.log(err);
    };
    return data;
  });

  res.status(200).send(
    popularMovieData.pageResults.results
  );
});

module.exports = router;
