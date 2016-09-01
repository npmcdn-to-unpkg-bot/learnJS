// icode.run/code/551

var screen = [
	{width:320, height:568},
	{width:568, height:320},
	{width:375, height:667},
	{width:667, height:375},
	{width:768, height:1024},
	{width:1024, height:768},
	{width:1200, height:1000}
]
var page = require('webpage').create()
var url = 'https://codestar.work/'
page.index = 0
page.viewportSize = screen[0]
page.open(url, save)
function save(status) {
	page.render('test7-' + page.index + '.png')
	page.index++
	if (page.index >= screen.length) {
		phantom.exit()
	} else {
		page.viewportSize = screen[page.index]
		page.open(url, save)
	}
}
