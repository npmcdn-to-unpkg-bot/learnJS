import { Component } from 'angular2/core'
import { bootstrap } from 'angular2/platform/browser'


@Component({
	selector: 'test',
	template: `
		<button (click)='refresh()'>Refresh</button>
		<hr>
		<ul>
			<li *ngFor='let c of data'> {{ c }} </li>
		</ul>
		<hr>
	`
})

class Test {

	constructor() {
		this.data = []
	}

	refresh() {
		fetch('http://icode.run:4000/coffee')
			.then( r => r.json() )
			.then(d => this.data = d )
		
	}

}

bootstrap(Test)

