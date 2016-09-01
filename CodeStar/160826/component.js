import { Component } from 'angular2/core'
import { bootstrap } from 'angular2/platform/browser'

@Component({
	selector: 'app',
	template: `<b>Hello Angular 2</b>`
/*	templateUrl: 'component.html' */

})

class MyComponent { }

bootstrap(MyComponent)