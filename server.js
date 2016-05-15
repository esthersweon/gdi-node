var express = require('express');
var app = express();

/**
Controllers (route handlers)
**/
var homeController = require('./controllers/home');

/** 
Serve static files (i.e. images, scripts, styles, templates) from public/ directory
**/
app.use(express.static('public'));

/**
App routes
**/
app.get('/', homeController.index);
app.get('/about', homeController.about);

app.listen(3000, function () {
  console.log('Your app is listening on port 3000!');
});
