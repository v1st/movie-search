const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PopularSchema = new Schema({
  pageResults: {
    type: Object,
    required: true
  }
});

module.exports = Popular = mongoose.model('Popular', PopularSchema);