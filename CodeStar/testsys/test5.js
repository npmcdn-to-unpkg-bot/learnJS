// Login with incorrect password
var server = 'http://104.199.158.131'
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



