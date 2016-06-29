var express = require("express");
var path = require("path");

// sugar.js to handle dates
require("sugar");

// load express
var app = express();

// define static content (css)
app.use(express.static(__dirname + '/views'));

// configure app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// define routes
app.use(require('./api'));

// start server
var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});