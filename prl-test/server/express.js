var morgan = require('morgan');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var crypt = require("./crypt.js");

var key = "ba4d0e7e93da63610300c0893b26074cf90600d525a65a67488e736cdd35ba43";
var wallet = "0x3ac7d0818abfb7f971e7d37d5308718473c45fd9";

// we need this for reasons ~ computes a valid path for local dependencies
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

  app.use('/encrypt', function(req, res, next) {
    // find the private key 
    // ecrypt text ~
    // :)
    res.json({
      value: crypt.encrypt(req.body.text, key)
    });
  });

  app.use('/decrypt', function(req, res, next) {
    // find the private key 
    // ecrypt text ~
    // :)
    res.json({
      value: crypt.decrypt(req.body.text, key)
    });
  });

  // Wildcard for everything else
  app.use('/*', function(req, res, next) {
    // passing variables if needed
    res.render('home', {
      path: validPath(req)
    });
  });

  return app;
};