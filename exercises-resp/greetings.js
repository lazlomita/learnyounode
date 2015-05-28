// var exports = module.exports = {};

exports.sayHelloInEnglish = function() {
  return "HELLO";
};

exports.sayHelloInSpanish = function() {
  return "Hola";
};

exports.getFileNames = function(myPath, myFilter) {
  var fs = require('fs')
  var path = require('path')

  var response = []

  response.push(myPath)
  response.push(myFilter)
  /*response.push(file)

  fs.readdir(myPath, function (err, list) {
    list.forEach(function (file) {
      if (path.extname(file) === '.' + myFilter)
        response.push(file)
    })
    return response;
  })*/
};
