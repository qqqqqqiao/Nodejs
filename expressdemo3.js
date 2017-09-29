var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res){
	res.send('Hello world');
})

var server = app.listen(8888, function(){
	
})