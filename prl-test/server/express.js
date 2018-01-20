var morgan = require('morgan');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

function validPath(req) {
  var results = [];

  if (req.originalUrl) {
    var path = req.originalUrl;
    var var_array = path.split("/");
    for (var i = 0; i < var_array.length; i++) {
      results.push("../");
    }
  }

  return results.join("");
}

//======================================================================================================================
// Backed routing Hub
//======================================================================================================================
module.exports.init = function() {

  // Connect to database
  // mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true });

  // initialize app
  var app = express();

  // enable request logging for development debugging
  app.use(morgan('dev'));

  // body parsing middleware
  app.use(bodyParser.json());

  // views is directory for all template files
  app.set('views', __dirname + '/../client');
  app.set('view engine', 'ejs');

  // serve static files
  app.use('/', express.static(__dirname + '/../client'));

  // Wildcard for everything else
  app.use('/*', function(req, res, next) {
    // passing variables if needed

    res.render('home', {
      path: validPath(req)
    });
  });

  return app;
};