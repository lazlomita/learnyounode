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
