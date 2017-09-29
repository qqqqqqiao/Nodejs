var mysql = require('mysql');
var connection = mysql.createConnection({
	host	:'localhost',
	user	:'root',
	password:'root',
	database:'test'
});
connection.connect();
connection.query('select 1 + 1 as solution', function(error, results, fields){
	if(error) throw error;
	console.log('The solution is: ', results[0].solution);
});