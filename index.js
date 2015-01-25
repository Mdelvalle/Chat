var express = require('express');
var http = require('http');

var app = express();
var server = http.Server(app);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

server.listen(1337, function() {
  console.log('listening on *:1337');
});
