var express = require("express");
var app = express();

app.use(express.static('public'));

app.get('/demo1.html', function(req, res){
	res.sendFile(__dirname+'/'+'demo1.html');
});

app.get('/process_get', function(req, res){
	var response = {
		"first_name":req.query.firstName,
		"last_name":req.query.lastName
	};
	console.log(response);
	res.end(JSON.stringify(response));
});

var server = app.listen(8888,function(){

})