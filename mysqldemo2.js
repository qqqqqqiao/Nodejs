var mysql = require('mysql');
var connection = mysql.createConnection({
	host: "localhost",
	port: "3306",
	database: "test",
	user: "root",
	password: "root"  
});
connection.connect();

var sql = "select * from websites";
connection.query(sql,function(error, result){
	if(error){
		console.log('[SELECT ERROR]-'+error.message);
		return;
	}
	console.log("------------------------------");
	console.log(result);
	console.log("------------------------------");
});
connection.end();