// npm: jquery http

var http = require('http');
//var $ = require('jquery');

http.get('http://ipinfo.io', (res) => console.log(res))

// $.getJSON('http://ipinfo.io', (data) => console.log(data))
