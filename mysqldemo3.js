var mysql = require("mysql");
var connection = mysql.createConnection({
	host:"localhost",
	port:"3306",
	database:"test",
	user:"root",
	password:"root"
});
connection.connect();
var sql = "insert into websites(Id,name,url,alexa,country) values(0,?,?,?,?)";
var sqlParams = ['百度', "https://www.baidu.com","123342", "CN"];
connection.query(sql, sqlParams, function(error,result){
	if(error){
		console.log(error.message);
		return;
	}
	console.log('INSERT ID: ', result);
});
connection.end();