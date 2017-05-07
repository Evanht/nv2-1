'use strict'

// import dependency
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a new instance of the mongoose.schema. the Schema rakens and object that shows
// the shape of your database entries.
var SubjectsSchema = new Schema({
  image: String,
  title: String
});

module.exports = mongoose.model('Subject', SubjectsSchema);

