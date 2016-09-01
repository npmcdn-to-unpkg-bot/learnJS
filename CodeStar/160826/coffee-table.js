import { Component } from 'angular2/core'
import { bootstrap } from 'angular2/platform/browser'


@Component({
	selector: 'coffee-table',
	template: `
		<h2 align='center'>Coffee Table</h2>
		<div class='container'>
			<table class='table'>
				<thead>
					<tr><td>Name</td><td>Price</td></tr>
				</thead>
				<tbody>
					<tr *ngFor='let d of data'>
						<td>{{d.name}}</td>
						<td>{{d.price}}</td>
					</tr>
				</tbody>
			</table>
		</div>
		<h2>Order list </h2>
		<ol><li *ngFor='let d of data'>{{d.name}} -- {{d.price}}</li>
	`
})

class CoffeeTable {

	constructor() {
		this.data = []
		fetch('http://icode.run:4000/table')
			.then( r => r.json() )
			.then( d => this.data = d)
	}



}

bootstrap(CoffeeTable)
