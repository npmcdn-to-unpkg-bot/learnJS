var page = require('webpage').create()
var url = 'https://www.uber.com/a/join'

page.onLoadFinished = signup
page.step = 'open'
page.open(url)

function signup(status) {
	if(status != 'success') {
		console.log('Failed to open page!!!');
		phantom.exit();
	}

	if(page.step == 'open') {
		page.step = 'fill'
		page.evaluate(function() {
			document.querySelector('[placeholder="Pick a username"]').value = 'Elon20160833'
			document.querySelector('[placeholder="Your email address"]').value = 'Elon20160833@tesla.com'
			document.querySelector('[placeholder="Create a password"]').value = '08882222345'
			document.querySelector('[type="submit"').click()
			
		})
	} else if (page.step = 'fill') {
		page.render('test8.png')
		phantom.exit()
	}
}