// sample code for OOP 
// Node 4.x doesn't support, we have to use strict.

"use strict" 

class Rectangle {
	constructor(w,h) {
		this.width = w
		this.height = h
	}
	area() {
		return this.width * this.height
	}
}

class Square extends Rectangle { 
	constructor(x) {
		super(x,x)
 	}
};

let r = new Rectangle(12,7)
console.log( r.area() )

let s = new Square(6);
console.log( s.area())

console.log('\n\n')

class Burger {
	constructor(c) {
		this.calorie = c
	}
	get joule() {
		return 4.184 * this.calorie
	}

	set joule(j) {
		this.calorie = j / 4.184
	}

}

console.log('Burger calorie-joule')
let b = new Burger(1100)
console.log (b.joule)

b.joule = 5000
console.log( b.joule + ' joule =' + b.calorie + ' calorie')
console.log( b.joule)
console.log ('\n\n\n')

class Circle {
	constructor(r) {
		this.radius = r;
	}

	area() {
		return Math.PI * this.radius * this.radius;
	}

	set diameter(d) {
		this.radius = d /2;
	}

	get diameter() {
		return this.radius * 2;
	}

//	static area(r) {
//		return Math.PI * r * r;
//	}
}

let c = new Circle(5);
console.log("Radius is " + c.radius)
c.radius = 7
console.log("Radius is " + c.radius)



class Shirt {
	constructor(s,p) {
		this.size = s;
		this.price = p;
	}
	specialPrice() {
		return this.price * 0.9
	}
}

class Ellipse {
	constructor(a, b) {
		this.major = a;
		this.minor = b;
	}
	area() {
		return Math.PI * this.major * this.minor
	}
}


/*
let c1 = new Circle(5);
let c2 = new Circle(7)
console.log("----")
console.log(c1 instanceof Circle)
console.log("Area of C1 = "+ c1.area())
console.log("Area of C2 = "+ c2.area())
console.log(Circle.area(5))
console.log(Circle.area(7))
console.log("----\n")

let s = new Shirt('S',180);
console.log(s);
console.log(s.specialPrice());

let e = new Ellipse(8,5);
let a = e.area();
console.log(a);
*/