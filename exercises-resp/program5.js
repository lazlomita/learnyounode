var fs = require('fs')
var path = process.argv[2]
var extension = process.argv[3]

fs.readdir(path, function (err, files) {
  for (var fileIndex in files) {
    //console.log(files[fileName])
    if (files[fileIndex].indexOf("."+extension) > -1){
      console.log(files[fileIndex])
    }
  }
})

/*
var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function (err, list) {
  list.forEach(function (file) {
    if (path.extname(file) === '.' + process.argv[3])
      console.log(file)
  })
})
*/
