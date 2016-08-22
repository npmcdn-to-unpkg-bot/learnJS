const http = require('http');

http.get('http://ipinfo.io', function(res) {
  console.log(res)
})

