//server.js
'use strict'

//first we import our dependencies...
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Subject = require('./model/subjects');
var LectureNotes = require('./model/LectureNotes')
//and create our instances
var app = express();
var router = express.Router();

//set our port to either a predetermined port number if you have set it up, or 3001
var port = process.env.API_PORT || 3001;

// db config
mongoose.connect('mongodb://evanhtnotabl:password1996@ds133251.mlab.com:33251/notabl')

//now we should configure the API to use bodyParser and look for JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//To prevent errors from Cross Origin Resource Sharing, we will set our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  //and remove cacheing so we get the most recent comments
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

//now  we can set the route path & initialize the API
router.get('/', function(req, res) {
  res.json({ message: 'API Initialized!'});
});

// SUBJECTS ROUTES ----------------------------------------------
// We add the /subjects route to our /api router
router.route('/subjects')
  // retrieve all subjects from the database
  .get(function(req, res) {
    // looks at our subject schema
    Subject.find(function(err, subjects) {
      if (err)
        res.send(err);
      // respons wirth a json object of our database subjects
      res.json(subjects)
    });
  })
  // post new subject to the database
  .post(function(req, res) {
    var Newsubject = new Subject({
      title: req.body.title,
      image: req.body.image
    });
    // body parser lets us use the req.body
    // subject.title = req.body.title;
    // subject.image = req.body.image;

    Newsubject.save(function(err, subject) {
      if (err)
        res.send(err);
      res.json(subject);
    });
  });

// LECTURE ROUTES -------------------------------------------------
router.route('/lecture-notes')
  .get(function (req, res) {
    LectureNotes.find(function(err, LectureNotes){
      if (err)
        res.send(err);
      res.json(LectureNotes)
    });
  })

  .post(function(req, res) {
    var NewLectureNotes = new LectureNotes({
      title: req.body.title,
      downloadCount: req.body.downloadCount,
      rating: req.body.rating
    });

    NewLectureNotes.save(function(err, NewLectureNotes) {
      if (err)
        res.send(err);
      res.json(NewLectureNotes)
    });
  })


//Use our router configuration when we call /api
app.use('/api', router);

//starts the server and listens for requests
app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
