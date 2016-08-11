// npm install express ejs mongodb
var express = require('express')
var app = express()
var ejs = require('ejs')
var mongo = require('mongodb')
var client = mongo.MongoClient

app.engine('html', ejs.renderFile)
app.listen(4000)
app.get('/', home)
app.get('/result', search)

function search(req, res) {
	client.connect('mongodb://127.0.0.1/zip',
		(error, db) => {
			db.collection('data').find(
				{code: req.query.code}
			).toArray(
				(error, data) => {
					if (data.length > 0) {
						res.render('result.html', 
							{ city: data[0].city })
					} else {
						res.render('result.html', 
							{city: 'not found'})
					}
				}
			)
		}
	)
}

function home(req, res) {
	res.render('index.html')
}
