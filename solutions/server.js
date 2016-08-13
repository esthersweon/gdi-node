// Create an Express app
// https://expressjs.com/en/starter/hello-world.html
var express = require('express');
var app = express();

// Set template engine to Jade
// http://jade-lang.com/
// https://expressjs.com/en/guide/using-template-engines.html
app.set('view engine', 'jade');

// Helpers to POST data
var bodyParser = require('body-parser');
app.use( bodyParser.json() );

// Define controllers to handle routes
var homeCtrl = require('./controllers/homeCtrl');
var apiCtrl = require('./controllers/apiCtrl');
var dinosaurCtrl = require('./controllers/dinosaurCtrl');

// Define static routes to serve static assets like images, styles, etc.
app.use(express.static('node_modules'));
app.use(express.static('public'));

// Define page routes to specify which URLs will be handled by which controllers
app.get('/', homeCtrl.home);
app.get('/about', homeCtrl.about);
app.get('/dinosaurs', dinosaurCtrl.all);

// Define API routes to serve up application data
app.get('/api/dinosaurs', apiCtrl.dinosaurs);
app.post('/api/dinosaurs', apiCtrl.addDinosaurs);

// Define a catch-all 404 route
app.get('/*', homeCtrl.noRoute);

// Start your Express app up on port 3000
app.listen(3000, function () {
  console.log('Your app is listening on port 3000!');
});
