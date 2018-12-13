const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const MovieSchema = new Schema({
  pageResults: {
    type: Object,
    required: true
  }
});

module.exports = Movie = mongoose.model('Movie', MovieSchema);