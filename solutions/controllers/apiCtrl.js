// fs module: https://nodejs.org/api/fs.html#fs_fs_readfile_file_options_callback
// path module: https://nodejs.org/api/path.html#path_path_join_path

var path = require('path');
var fs = require('fs');
var jsonPath = path.join(__dirname, '/../database/dinosaurs.json');

exports.getDinosaurs = function (req, res) {
  fs.readFile(jsonPath, 'utf-8', function(err, data) {
    if (err) throw err;

    res.send(JSON.parse(data));
  });
}

exports.addDinosaur = function (req, res) {
  // get all data
  fs.readFile(jsonPath, 'utf-8', function(err, data) {
    if (err) throw err;
    
    // need to format and add new data
    var arrayOfDinos = JSON.parse(data); // parse the JSON data
    arrayOfDinos.push(req.body); // add the new dindosaur

    // save new data to the database
    fs.writeFile(jsonPath, JSON.stringify(arrayOfDinos), function(err, info) {
      if (err) throw err;
      res.send(arrayOfDinos); // render dinosaur list
    });

  });
};
