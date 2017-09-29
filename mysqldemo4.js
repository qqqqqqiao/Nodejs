var mysql = require("mysql");
var connection = mysql.createConnection({
	host:"localhost",
	port:"3306",
	database:"test",
	user:"root",
	password:"root"
});
connection.connect();
var sql = "update websites set name=? where id=?";
var sqlParams = ['baidu','7'];
connection.query(sql, sqlParams, function(error, result){
	if(error){
		console.log(error.message);
		return;
	}
	console.log(result.affectedRows);
});
connection.end();