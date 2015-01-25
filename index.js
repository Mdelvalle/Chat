var express = require('express');
var http = require('http');

var app = express();
var server = http.Server(app);

app.get('/', function(req, res) {
  res.send('<h1>Hello World</h1>');
});

server.listen(1337, function() {
  console.log('listening on *:1337');
});
