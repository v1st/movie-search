const express = require('express');
const router = express.Router();
const axios = require('axios');

const {
  API_KEY
} = require('../../config/keys');

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

  let payload = await Promise.all(documents.map(doc => {
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

router.get('/header', async (req, res) => {
  let payload = await Movie.findById({
    '_id': '5c12862fedff43043c807f50'
  }, (err, data) => {
    if (err) {
      return console.log(err);
    }
    return data;
  });

  res.status(200).send(
    payload
  );
});

router.post('/movie/:id', async (req, res) => {
  const detailsURL = `https://api.themoviedb.org/3/movie/${req.body.id}?api_key=${API_KEY}&language=en-US`;
  const castURL = `https://api.themoviedb.org/3/movie/${req.body.id}/credits?api_key=${API_KEY}`;
  let cast, details;

  await axios.get(castURL)
    .then(response => cast = response)
    .catch(err => console.log(err))
  await axios.get(detailsURL)
    .then(response => details = response)
    .catch(err => console.log(err))



  res.status(200).send({
    param: {
      cast: cast.data.cast,
      details: details.data
    }
  })
});

module.exports = router;