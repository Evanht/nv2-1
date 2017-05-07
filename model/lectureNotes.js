'use strict'

// import dependency
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a new instance of the mongoose.schema. the Schema rakens and object that shows
// the shape of your database entries.
var LectureNotesSchema = new Schema({
  title: String,
  downloadCount: Number,
  rating: Number
});

module.exports = mongoose.model('LectureNotes', LectureNotesSchema);
