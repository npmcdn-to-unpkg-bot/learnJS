import { Component } from 'angular2/core'
import { bootstrap } from 'angular2/platform/browser'


@Component({
	selector: 'coffee-panel',
	template: `
		<div class='container'>
			<h2>Coffee List</h2>
			<ol>
				<li *ngFor='let d of data'>{{d.name}} -- {{d.price}}</li>
			</ol>
		</div>
		
	`
})

class CoffeePanel {

	constructor() {
		this.data = []
		fetch('http://icode.run:4000/table')
			.then( r => r.json() )
			.then( d => this.data = d)
	}



}

bootstrap(CoffeePanel)
