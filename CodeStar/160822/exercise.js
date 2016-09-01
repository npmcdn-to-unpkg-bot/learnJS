"use strict"

class Product {
	constructor(p) {
		this.price = p;
	}
}

class TaxableProduct extends Product {
	excludeTax(){
		return 100 / 107 * this.price
	}
}

class Book extends TaxableProduct {
	constructor(p,t) {
		super(p)
		this.title = t
	}
}

let p = new TaxableProduct(150)
console.log(p.excludeTax())

let b = new Book(120,'Biology')
console.log(b.title + ' ('+b.price+') not include tax is ' + b.excludeTax())

class Ellipse {
	constructor(a, b) {
		this.major = a;
		this.minor = b;
	}
	area() {
		return Math.PI * this.major * this.minor
	}
}

class Circle extends Ellipse {
	constructor(r) {
		super(r,r)
	}
}

let a = new Circle(5)
console.log('\n---Circle extends')
console.log(a.area().toFixed(2))
console.log('---')

let s = new Set();
s.add(1);
s.add(2);
s.add(1);
console.log('\n--- Set')
console.log(s)
s.delete(2)
console.log(s)
s.clear()
console.log(s)
console.log('---')

class CircleSet extends Set {
	add(e) {
		if (e instanceof Circle) {
			super.add(e);
		}
	}
}

let cs = new CircleSet();
cs.add(new Circle(5));
cs.add(new Ellipse(7,3));
console.log('\n--- Set')
console.log(cs)

class Converter {
	constructor(x) {
		this.calorie = x;
	}
	static calorie2joule(x) {
		return x * 4.184
	}
}

console.log('\n--- Converter')
console.log(Converter.calorie2joule(1000).toFixed(2))

// -- StringSet
class StringSet extends Set {
	add(x) {
		if(typeof x == 'string' || x instanceof String ) {
			super.add(x);
		}
	}
}

let z = new StringSet();
z.add('Hello');
z.add(234);
z.add('World')

console.log('\n--- Add only string');
console.log(z);
