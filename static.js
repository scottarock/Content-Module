module.exports = function(request, response) {

  let fs = require('fs');

  console.log(`Request: ${request.url}`);

  // initial routing that handles specific files
  if ( request.url === '/' ) {
    fs.readFile('views/index.html', 'utf8', function(errors, contents) {
      response.writeHead(200, {'Content-Type' : 'text/html'});
      response.write(contents);
      response.end();
    });
  } else if ( request.url === '/dojo.html' ) {
    fs.readFile('views/dojo.html', 'utf8', function(errors, contents) {
      response.writeHead(200, {'Content-Type' : 'text/html'});
      response.write(contents);
      response.end();
    });
  } else if ( request.url === '/stylesheets/style.css' ) {
    fs.readFile('stylesheets/style.css', 'utf8', function(errors, contents) {
      response.writeHead(200, {'Content-Type' : 'text/css'});
      response.write(contents);
      response.end();
    });
  } else {
    response.writeHead(404);
    response.end('File not found!!!')
  }

}
