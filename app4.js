var express = require('express')
var app = express()
var ejs = require('ejs')
app.listen(4000)
app.engine('html', ejs.renderFile)

app.get('/', home)
app.get('/about', showAbout)
app.get('/start',start)
app.get('/result',result)

function home(req, res) {
    res.render('index.html')
}

function showAbout(req, res) {
    res.render('about.html')
}

function start(req, res) {
    res.render('start.html')
}

function result(req, res) {
    var i = req.query.balance * 1.25 / 100
    res.render('result.html', {interest: i})
}