
var express = require('express')
var app = express()
var a = ['Latte','Macha']
app.listen(4000)

app.get('/', home)
app.get('/about',about)
app.get('/data', showData)
app.get('/area', calArea)
app.get('/total', calVat)

function home(req, res) {
    res.send('<i>Welcome</i')
}

function about(req, res) {
    res.send('<b>History of company</b>')
}

function showData(req, res) {
    res.send(a)
}

function calArea(req, res) {
    var a = Math.PI * req.query.radius * req.query.radius
    res.send('<i>The area is ' + a +' square units</i>')
}

function calVat(req, res) {
    var t = req.query.amount * 1.07
    res.send('<b>Total amount</b> ' + t)
}
