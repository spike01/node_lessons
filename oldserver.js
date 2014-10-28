var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(request, response){
  console.log("THIS IS A SERVER");
  var path = url.parse(request.url).pathname;

    switch(path){
      case '/':
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write('This is the home page');
        break;
      case '/page2':
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write('This is page 2');
        break;
      default:
        response.writeHead(404);
        response.write("404 - Page not found");
    } 
    response.end();
    });      
  server.listen(9292);
  console.log("Server up and running");
