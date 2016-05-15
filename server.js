var express = require('express');
var app = express();

app.set('view engine', 'jade');

/**
Controllers (route handlers)
**/
var homeController = require('./controllers/home');

/** 
Serve static files (i.e. images, scripts, styles, templates) from public/ directory
**/
app.use(express.static('node_modules'));
app.use(express.static('public'));

/**
App routes
**/
app.get('/', homeController.home);
app.get('/about', homeController.about);
app.get('/*', homeController.noRoute);

app.listen(3000, function () {
  console.log('Your app is listening on port 3000!');
});
