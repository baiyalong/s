var http = require('http')
var socket = require('socket.io')
var routes = require('./routes')
var config = require('../config')

exports.init = c => {
  var server = http.createServer((req, res) => res.end())
  var io = socket(server)
  io.on('connection', routes)
  server.listen(config.port, c)
}
