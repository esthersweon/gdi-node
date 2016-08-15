// Create an Express app
// https://expressjs.com/en/starter/hello-world.html
var express = require('express');
var app = express();

// Set template engine to Jade
// http://jade-lang.com/
// https://expressjs.com/en/guide/using-template-engines.html
app.set('view engine', 'jade');
app.set('views', './views');

// Helpers to POST data
var bodyParser = require('body-parser');
app.use( bodyParser.json() );

// Define controllers to handle routes
var pageCtrl = require('./controllers/pageCtrl');
var apiCtrl = require('./controllers/apiCtrl');

// Define static routes to serve static assets like images, styles, etc.
// https://expressjs.com/en/starter/static-files.html
app.use(express.static('node_modules'));
app.use(express.static('public'));

// Define page routes to specify which URLs will be handled by which controllers
app.get('/', pageCtrl.home);
app.get('/about', pageCtrl.about);
app.get('/dinosaurs', pageCtrl.dinosaurs);

// Define API routes to serve up application data
app.get('/api/dinosaurs', apiCtrl.getDinosaurs);
app.post('/api/dinosaurs', apiCtrl.addDinosaur);

// Define a catch-all 404 route
// https://expressjs.com/en/guide/routing.html
app.get('/*', pageCtrl.noRoute);

// Start your Express app up on port 3000
app.listen(3000, function () {
  console.log('Your app is listening on port 3000!');
});
