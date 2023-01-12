var express = require('express');
var { createProxyMiddleware } = require('http-proxy-middleware');

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(createProxyMiddleware('/', { target: 'http://localhost:3000' }));

app.listen(3000, function () {
  console.log('Listening on port 3000');
});
