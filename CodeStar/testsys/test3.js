// Load first page from test server
// var server = 'http://104.199.158.131'
// var server = 'https://icode.run'
var server = 'http://www.strawberryatkhonsan.com'

var page = require('webpage').create()
// page.viewportSize = {width:1024, height:768}
page.open(server+'/login', show)

function show(status) {
	if (status == 'success') {
		console.log('Test case 3: Success')
		console.log(page.content)
		page.render('test3.png')
	} else {
		console.log('Test case 3: Failed')
	}
	phantom.exit();
}