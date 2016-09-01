import { Component } from 'angular2/core'
import { bootstrap } from 'angular2/platform/browser'

@Component({
	selector: 'pizza',
	template: `
		<div>
			<h1>Welcome to {{ nameP }}</h1>
			<select>
				<option *ngFor='let p of pizza'> {{ p }} </option>
			</select>
		</div>
	`
})

class Pizza { 
	constructor() {
		this.nameP = "Pizz Pizz Zz"
		this.pizza = ['Hawaiian', 'Super Deluxe','PizPiz']
	}

}

bootstrap(Pizza)