var express = require('express');
var app = express();

app.get('/', function(req, res){
	console.log('get request');
	res.send("hello get");
});

app.post('/', function(req, res){
	console.log('post request');
	res.send("hello post");
});
app.get('/user_list', function(req, res){
	res.send('user list');
});

var server = app.listen(8888, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log(host, port);
})