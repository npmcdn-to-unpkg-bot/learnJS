var mysql = require('mysql');
var express = require('express');
var app = express();
app.listen(2000);

var connection = mysql.createConnection( {
	host: 'localhost',
	user: 'js',
	password: 'js',
	database: 'coffee_shop'
});

app.get('/coffee',showCoffee);
app.get('/show',showByPrice);

function showByPrice(req,res) {
	connection.query('select * from coffee where price between ? and ?', [req.query.min, req.query.max], (error, data) => res.send(data) );
}

function showCoffee(req,res) {
	connection.query("select * from coffee where available='Y'", (error,data) => res.send(data));
}

/*
connection.query("select * from coffee where available='N'",show);
connection.query("select * from coffee where available='Y'",show);
connection.end();

function show(error, data) {
	console.log(data)
}
*/
