// request module: https://www.npmjs.com/package/request
// Passing arguments to a template: http://expressjs.com/en/api.html#res.render

var path = require('path');
var fs = require('fs');
var request = require('request');

exports.all = function (req, res) {
  request('http://localhost:3000/api/dinosaurs', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.render('dinosaurs', {
        dinosaurs: JSON.parse(body)
      });
    }
  })
}
