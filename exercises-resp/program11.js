var http = require('http')
var concatStream = require('concat-stream')

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var response1 = ""
var response2 = ""
var response3 = ""

var flag1 = false
var flag2 = false
var flag3 = false

http.get(url1, function (response) {
  response.pipe(concatStream(function (data) {
    data = data.toString()
    response1 = data
    flag1 = true
    printResponses()
  }))
})


http.get(url2, function (response) {
  response.pipe(concatStream(function (data) {
    data = data.toString()
    response2 = data
    flag2 = true
    printResponses()
  }))
})

http.get(url3, function (response) {
  response.pipe(concatStream(function (data) {
    data = data.toString()
    response3 = data
    flag3 = true
    printResponses()
  }))
})

function printResponses() {
  if (flag1 && flag2 && flag3) {
    console.log(response1)
    console.log(response2)
    console.log(response3)
  }
}
