var http = require('http')

var urlToExecute = process.argv[2]

//"http://localhost:8181/learnyounode/exercise.php?cs=123"

http.get(urlToExecute, function(response) {
  //console.log("Got response code: " + response.statusCode);
  response.on("data", function (data) {
    console.log(data.toString());
  })
  //console.log("Got response complete: " + res.toString());
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});

/*
var http = require('http')

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8')
  response.on('data', console.log)
  response.on('error', console.error)
})
*/
