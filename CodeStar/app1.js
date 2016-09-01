var express = require('express')
var app = express()
app.listen(1000)
app.use(show)
app.get('/', index)

function show(req,res,next) {
	console.log('Time:', Date.now())
	console.log('Request URL:', req.originalUrl)
	next()
}

function index(req,res) {
	res.send({status:'OK'})
}