var net = require('net')

var serverPort = process.argv[2]

var server = net.createServer(function (socket) {
  date = new Date()
  var stringMonth = ""
  if ((date.getMonth()+1)<10) {
    stringMonth = '0'+(date.getMonth()+1)
  } else {
    stringMonth = date.getMonth()+1
  }
  var stringHours = ""
  if (date.getHours()<10) {
    stringHours = '0'+(date.getHours())
  } else {
    stringHours = date.getHours()
  }
  var stringMinutes = ""
  if (date.getMinutes()<10) {
    stringMinutes = '0'+(date.getMinutes())
  } else {
    stringMinutes = date.getMinutes()
  }
  data = date.getFullYear()+'-'+stringMonth+'-'+date.getDate()+' '+stringHours+':'+stringMinutes
  socket.end(data)

})
server.listen(serverPort)
