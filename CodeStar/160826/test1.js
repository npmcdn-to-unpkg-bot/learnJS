import { Component } from 'angular2/core'
import { bootstrap } from 'angular2/platform/browser'


@Component({
	selector: 'test',
	template: `
		<input #userName >
		<button (click)='hello(userName)'> Say </button>
		<button (click)='helloV(userName.value)'> SayV </button>
		<input (keyup.enter) = 'helloK($event)'>
	`
})

class Test {

	constructor() {
		
	}

	hello(x) {
		alert('Hello ' + x.value)
	}

	helloV(y) {
		alert('HelloV ' + y)
	}

	helloK(e) {
		alert('HelloK ' + e.target.value)
	}

}

bootstrap(Test)

