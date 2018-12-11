const axios = require('axios');
const Popular = require('../models/Popular');

const API_KEY = require('../config/keys').API_KEY;
const db = require('../config/keys').URI;

const popularURL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
// const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=spider%20man&page=1&include_adult=false`;

module.exports = {
  updatePopularMovies: function () {
    axios.get(popularURL)
      .then(async res => {
        // const popular = new Popular({
        //   pageResults: res.data
        // })

        await Popular.findOneAndUpdate({
          '_id': "5c0f1b8ca3f36837941eed2e"
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
  }
}