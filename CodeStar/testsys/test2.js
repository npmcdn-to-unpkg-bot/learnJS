// Test case 2: load airbnb.com using Desktop browser

var page = require('webpage').create()
page.viewportSize = {width:1024, height:768}
page.open('http://airbnb.com', show)

function show(status) {
	if (status == 'success') {
		console.log('Test case 2: Success')

		for (var k in page.cookies) {
			for (var j in page.cookies[k]) {
				console.log(j + " = " + page.cookies[k][j])	
			}
			
		}
		
		console.log(page.content)
		page.render('test2.png')
	} else {
		console.log('Test case 2: Failed')
	}
	phantom.exit();
}