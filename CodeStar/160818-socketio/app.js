var express = require('express');
var ejs = require('ejs')
var io = require('socket.io')();
var app = express();
app.engine('html', ejs.renderFile);
io.listen(app.listen(2000));

app.get('/', (req,res) => res.render('index.html'));

var count = 0;
io.on('connection', socket => {
	socket.send('Welcome to chat system.')
	count++
	console.log('total user = ' + count);
	socket.on('disconnect', () => {
		count--
		console.log('total user = ' + count)
	})
})