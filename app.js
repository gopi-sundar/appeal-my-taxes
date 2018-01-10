var express = require('express');
var app = express();
var path    = require("path");

var port = process.env.PORT || 3000;

app.set('view engine','ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.listen(port);
