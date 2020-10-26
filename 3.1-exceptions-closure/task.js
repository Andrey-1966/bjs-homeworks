function parseCount(str) {
if (isNaN(str)) {
	throw new Error('Недопустимое значение');
}
return Number.parseInt(str);
}

function validateCount(str) {
try {
	return parseCount(str);
} catch {
	throw new Error('Недопустимое значение');
}

}

//Задача 2
class Triangle {
	constructor(a,b,c) {
		if ((a+b <= c) || (a+c <= b) || (b+c <= a)) {
			throw new Error('Треугольник с такими сторонами не существует');
		}
		this.a = a;
		this.b = b;
		this.c = c;
	}

	getPerimeter() {
		return this.a + this.b + this.c;
	}

	getArea() {
		let p = this.getPerimeter() /2;
		return +Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(2);
	}

}

//const tri = new Triangle(3,4,5);

function getTriangle(a,b,c) {
	try {
      return new Triangle(a,b,c);
	} catch(e) {
      throw new Error('Ошибка! Треугольник не существует');
      
	}
	//return tris;
}