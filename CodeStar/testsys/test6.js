// Log in using existing user, then log out
var url = 'http://104.199.158.131'
var page = require('webpage').create()
page.onLoadFinished = ready
page.step = 'open'
page.open(url + '/login')

function ready(status) {
	console.log('Ready : ' + page.step)
	if (page.step == 'open') {
		page.render('test4a.png')
		page.step = 'fill'
		page.evaluate( function() {
			document.querySelector('[name=email]').value='elon@tesla.com'
			document.querySelector('[name=password]').value='elon123'
			document.querySelector('button').click()			
		})
	} else if (page.step == 'fill') {
		page.step = 'logout'
		page.evaluate( function() {
			document.querySelector('[href="/logout"]').click()
		})
	} else if (page.step == 'logout') {
		page.step = 'goback'
		page.open(url + '/profile')
	} else if (page.step == 'goback') {
		if (page.url == url + '/login') {
			console.log('Test Case 6: PASSED')
		} else {
			console.log('Test Case 6: FAILED')
		}
	}
}