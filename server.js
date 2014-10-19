var server = require('express')();
var http = require('http').Server(server);
var io = require('socket.io')(http)

server.set('views', __dirname + '/views');
server.set('view engine', 'ejs');

server.get('/', function(request, response){
  response.render('index');
});

server.get('/page3', function(request, response){
  response.send('<h1>The Sun is a terrible newspaper</h1>');
});

http.listen(3000, function(){
  console.log('listening on port 3000');
});

io.on('connection', function (socket) {
  socket.emit('news', { text: 'hello world' });
  });

