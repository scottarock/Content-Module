// http server
// static_contents returns a function to route all the static files contained in the site
const http = require('http'),
      static_contents = require('./static.js'),
      port = 8000;

// create the server
server = http.createServer(function (request, response) {
  static_contents(request, response);
});

// start the server
server.listen(port);
// log successful start up
console.log(`Running in localhost at port ${port}`);
