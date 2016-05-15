var path = require('path');
var fs = require('fs');

exports.dinosaurs = function (req, res) {
  var jsonPath = path.join(__dirname, '/../database/dinosaurs.json');
  fs.readFile(jsonPath, 'utf-8', function(err, data) {
    if (err) throw err;

    res.send(JSON.parse(data));
  });
}
