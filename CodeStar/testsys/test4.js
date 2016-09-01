// Load first page from test server
var server = 'http://104.199.158.131'
// var server = 'https://icode.run'
// var server = 'http://www.strawberryatkhonsan.com'


var page = require('webpage').create()
page.viewportSize = {width:1024, height:768}
page.onLoadFinished = ready
page.step = 'open'
page.open(server+'/login')

function ready(status) {
	if (page.step == 'open') {
		page.render('test4a.png')
		page.step = 'fill'
		page.evaluate( function() {
				document.querySelector('[name=email]').value = 'elon@tesla.com'
				document.querySelector('[name=password]').value = 'elon123'
				document.querySelector('button').click()
			} 
		)
	} else if (page.step == 'fill') {
			page.render('test4b.png')
			if (page.url == server+'/profile') {
				console.log('test case 4; PASS')
			} else {
				console.log('test case 4: FAILED')
			}
			phantom.exit()
	}
}


/*
function show(status) {
	if (status == 'success') {
		console.log('Test case 4: Success')
		console.log(page.content)
		page.render('test3.png')
	} else {
		console.log('Test case 4: Failed')
	}
	phantom.exit();
}
*/

