var express = require('express');
var app = express();

app.use(express.compress());
app.use(express.static(__dirname + '/public'));


//
//  Use the following for a single page app a la backbone  
//
app.get('*', function(req, res){
  res.sendfile('./index.html');
});


/*
//
//  Use the following for anything else
//
app.get('/', function(req, res){
  res.sendfile('./index.html');
});
*/

app.listen(5000);
