var http = require('http');

var server = http.createServer(function(request, response){
  console.log("THIS IS A SERVER");
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write('hello world! =)');
  response.end();
});
  server.listen(9292);
  console.log("Server up and running");
