// Exposing a method: https://nodejs.org/api/modules.html#modules_modules
// Rendering a template: http://expressjs.com/en/api.html#res.render

exports.home = function (req, res) {
  res.render('home');
}

exports.about = function (req, res) {
  res.render('about');
}

exports.noRoute = function(req, res) {
  res.render('404');
}
