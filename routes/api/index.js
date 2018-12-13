const express = require('express');
const router = express.Router();

// Movie model
const Movie = require('../../models/Movie');

const popular = {
  id: '5c12862fedff43043c807f50'
}
const upcoming = {
  id: '5c12862fedff43043c807f4f'
}
const nowPlaying = {
  id: '5c12862fedff43043c807f4e'
}

// API call to /api
router.get('/', async (req, res) => {
  const documents = [popular, upcoming, nowPlaying];

  let payload = await Promise.all( documents.map(doc => {
    return Movie.findById({
      '_id': doc.id
    }, (err, data) => {
      if (err) {
        return console.log(err);
      }
      return data;
    });
  }));

  // Return array of data
  res.status(200).send(
    payload
  );
});

module.exports = router;
