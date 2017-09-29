var mysql = require("mysql");
var connection = mysql.createConnection({
	host:"localhost",
	prot:"3306",
	database:"test",
	user:"root",
	password:"root"
});
connection.connect();
var sql = 'delete from websites where id = ?';
var sqlParams = [6];
connection.query(sql, sqlParams, function(error, result){
	if(error){
		console.log(error.message);
	}
	console.log(result.affectedRows);
});
connection.end();