
// import dependency
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a new instance of the mongoose.schema. the Schema rakens and object that shows
// the shape of your database entries.
const SubjectSchema = new Schema({
  image: String,
  title: String
});

const SubjectModel = mongoose.model('Subject', SubjectSchema);

export default Subjectmodel
