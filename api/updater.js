const axios = require('axios');
const Movie = require('../models/Movie');
const API_KEY = require('../config/keys').API_KEY;

const popular = {
  url: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  id: '5c12862fedff43043c807f50'
}
const upcoming = {
  url: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  id: '5c12862fedff43043c807f4f'
}
const nowPlaying = {
  url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
  id: '5c12862fedff43043c807f4e'
}

// const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=spider%20man&page=1&include_adult=false`;

module.exports = {
  updateMovies: () => {
    const documents = [popular, upcoming, nowPlaying];

    documents.map(doc => {
      axios.get(doc.url)
        .then(async res => {
          // const newDoc = new Movie({
          //   pageResults: res.data
          // })
          await Movie.findOneAndUpdate({
            '_id': doc.id
          }, {
            pageResults: res.data
          }, {
            new: true,
            upsert: true,
            setDefaultsOnInsert: true
          }, err => {
            if (err) {
              console.log("Something wrong when updating data!");
            }
          });
        })
        .catch(err => console.log(err));
    });
  }
}