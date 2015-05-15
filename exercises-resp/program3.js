var fs = require('fs')

var buf = fs.readFileSync(process.argv[2])

var str = buf.toString()

var res = str.split("\n").length

console.log(res);
