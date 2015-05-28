var p6m=require('./program6module.js'), path=process.argv[2], ext=process.argv[3]

p6m(path, ext, function(err,files) {
  if(err) {
    return console.log.error('Error occured:', err)
  };

  files.forEach(function(file){
    console.log(file)
  })
})
