var http = require('http')
var server = http.createServer(handle)
server.listen(4000)
var coffee = [{"name":"Mocha","price":90},{"name":"Latte","price":80},{"name":"Americano","price":70}]

function handle(req, res) {
    if(req.url == '/') {
        res.writeHead(200, {"Content-Type": "text/html"})
        res.write('<i>Home</i><br>')
        res.write('<b>Home</b>')
    } else if(req.url == '/about') {
        res.writeHead(200, {"Content-Type": "text/html"})
        res.write('<i>About</i><br>')
    } else if(req.url == '/product') {
        res.writeHead(200, {"Content-Type": "text/html"})
        res.write('<b>Product</b>')
    } else if(req.url == '/data') {
        res.writeHead(200, {"Content-Type": "text/html"})
        var x = JSON.stringify(coffee)
        res.write(x)
    } else {
        res.writeHead(404, {"Content-Type": "text/html"})
        res.write("<b>404 Not Found</b>")
    }
    res.end()
}