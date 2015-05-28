var fs=require('fs'), ph=require('path'), exports = module.exports={}

module.exports =  FindFilesByExtension;

function FindFilesByExtension(path, ext, callback) {

  fs.readdir(path,function(err,files){

     if(err){
          return callback(err,null)
     }

    files=files.filter(

     function(file){

     return ph.extname(file)==="."+ext
         }
     )
     return callback(null,files)})
}
