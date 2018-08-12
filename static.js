module.exports = function(request, response) {

  let fs = require('fs'),
      data = {
        code: 200,
        endMsg: null,
      };

  console.log(`Request: '${request.url}'`);

  // initial routing that handles specific files
  if ( request.url === '/' ) {
   console.log('/ matched');
    fs.readFile('views/index.html', 'utf8', function(errors, contents) {
      data.contentType = 'text/html';
      data.contents = contents;
      sendResponse(data, response);
    });
  } else if ( request.url === '/dojo.html' ) {
    fs.readFile('views/dojo.html', 'utf8', function(errors, contents) {
      data.contentType = 'text/html';
      data.contents = contents;
      sendResponse(data, response);
    });
  } else if ( request.url === '/stylesheets/style.css' ) {
    fs.readFile('stylesheets/style.css', 'utf8', function(errors, contents) {
      data.contentType = 'text/css';
      data.contents = contents;
      sendResponse(data, response);
    });

  } else {
    data.code = 404;
    data.endMsg = 'File not found!!!';
    sendResponse(data, response);
  }

}

function sendResponse(data, response) {
  if ( data.contentType ) {
    response.writeHead(data.code, {'Content-Type' : data.contentType});
    response.write(data.contents);
  } else {
    response.writeHead(data.code);
  }
  response.end(data.endMsg);
}
