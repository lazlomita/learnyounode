var fs = require('fs')

var content;
// First I want to read the file
fs.readFile(process.argv[2], function read(err, data) {
    if (err) {
        throw err;
    }
    content = data;

    // Invoke the next step here however you like
    processFile();          // Or put the next step in a function and invoke it
});

function processFile() {
    console.log(content.toString().split('\n').length - 1);
}

/*
var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, function (err, contents) {
  // fs.readFile(file, 'utf8', callback) can also be used
  var lines = contents.toString().split('\n').length - 1
  console.log(lines)
})

*/
