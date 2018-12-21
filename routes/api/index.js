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

// Get movie data for landing pages slides
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

// Get landing page carousel data
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

// Grab API data for movie detail page
router.post('/movie/:id', async (req, res) => {
  const detailsURL = `https://api.themoviedb.org/3/movie/${req.body.id}?api_key=${API_KEY}&language=en-US`;
  const castURL = `https://api.themoviedb.org/3/movie/${req.body.id}/credits?api_key=${API_KEY}`;
  const videoURL = `https://api.themoviedb.org/3/movie/${req.body.id}/videos?api_key=${API_KEY}&language=en-US`;
  let cast, details, video;

  await axios.get(castURL)
    .then(response => cast = response)
    .catch(err => console.log(err))
  await axios.get(detailsURL)
    .then(response => details = response)
    .catch(err => console.log(err))
  await axios.get(videoURL)
    .then(response => video = response)
    .catch(err => console.log(err))

  res.status(200).send({
    param: {
      cast: cast.data.cast,
      details: details.data,
      video: video.data
    }
  })
});

// Post movie search and serve results
router.post('/search', async (req, res) => {
  const searchQuery = req.body.query.replace(' ', '%20');
  const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`;
  let results;

  await axios.get(searchURL)
    .then(response => results = response)
    .catch(err => console.log(err))

  res.status(200).send({
    payload: results.data
  })
});

module.exports = router;