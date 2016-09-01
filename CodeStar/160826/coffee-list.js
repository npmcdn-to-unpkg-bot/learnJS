import { Component } from 'angular2/core'
import { bootstrap } from 'angular2/platform/browser'


@Component({
	selector: 'coffee-list',
	template: `
		<select #coffee (change)='ok(coffee.value)'>
			<option *ngFor='let d of data'>{{d}}</option>
		</select>
	`
})

class CoffeeList {

	constructor() {
		this.data = []
		fetch('http://icode.run:4000/coffee')
			.then( r => r.json() )
			.then( d => this.data = d)
	}

	ok(c) {
		alert("You've selected " + c)
	}


}

bootstrap(CoffeeList)
