// npm install -g phantomjs

// Test case 1: Load Airbnb using smartphone


var page = require('webpage').create();
page.open('http://chookiat.com', show);

function show(status) {
	if (status == 'success') {
		console.log('Test case 1: Success')
		page.render('test1.png')
	} else {
		console.log('Test case 1: Failed')
	}
	phantom.exit();
}