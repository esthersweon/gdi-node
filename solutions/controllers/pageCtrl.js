var request = require('request');

// Exposing a method: https://nodejs.org/api/modules.html#modules_modules
// Rendering a template: http://expressjs.com/en/api.html#res.render
exports.home = function (req, res) {
  res.render('home');
}

exports.about = function (req, res) {
  res.render('about');
}

exports.noRoute = function(req, res) {
  res.render('noRoute');
}

// request module: https://www.npmjs.com/package/request
// Passing arguments to a template: http://expressjs.com/en/api.html#res.render
exports.dinosaurs = function (req, res) {
  request('http://localhost:3000/api/dinosaurs', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.render('dinosaurs', {
        dinosaurs: JSON.parse(body)
      });
    }
  })
}