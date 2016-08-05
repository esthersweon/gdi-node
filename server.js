var express = require('express');
var app = express();

app.set('view engine', 'jade');

/**
Controllers (route handlers)
**/
var homeCtrl = require('./controllers/homeCtrl');
var apiCtrl = require('./controllers/apiCtrl');
var dinosaurCtrl = require('./controllers/dinosaurCtrl');

/** 
Serve static files (i.e. images, scripts, styles, templates) from public/ directory
**/
app.use(express.static('node_modules'));
app.use(express.static('public'));

/**
App routes
**/
app.get('/', homeCtrl.home);
app.get('/about', homeCtrl.about);
app.get('/dinosaurs', dinosaurCtrl.all);

/**
API routes
**/
app.get('/api/dinosaurs', apiCtrl.dinosaurs);

/** 404 Route **/
app.get('/*', homeCtrl.noRoute);

app.listen(3000, function () {
  console.log('Your app is listening on port 3000!');
});
