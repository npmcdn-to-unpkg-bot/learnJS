import { Component } from 'angular2/core'
import { bootstrap } from 'angular2/platform/browser'

@Component({
	selector: 'coffee',
	template: `
		<div>
			<h1>Welcome to {{ name }}</h1>
			<select>
				<option *ngFor='let c of coffee'> {{ c }} </option>
			</select>
		</div>
	`
})

class Coffee { 
	constructor() {
		this.name = "Park Coffee"
		this.coffee = ['Mocha', 'Latte', 'Espresso', 'Americano']
	}

}

bootstrap(Coffee)

