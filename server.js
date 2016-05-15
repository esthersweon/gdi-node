var express = require('express');
var app = express();

/**
Controllers (route handlers)
**/
var homeController = require('./controllers/home');

/**
App routes
**/
app.get('/', homeController.index);

app.listen(3000, function () {
  console.log('Your app is listening on port 3000!');
});
