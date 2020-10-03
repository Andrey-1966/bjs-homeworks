"use strict";

function getResult(a,b,c){
    
	let arr = [];
		if (a !=0 ) {
			let D = Math.pow(b,2) - 4 * a * c;
    		if (D > 0 )  {
    			arr.push( (-b - Math.sqrt(D)) / (2*a));
    			arr.push( (-b + Math.sqrt(D)) / (2*a));
    		} else if (D ==0) {
    			arr.push( -b / (2 * a));
    		} 
		} else {
			if (b !=0 ) {
				arr.push( -c/b);
			} 
		}
	return arr;
}

function getAverageMark(marks){
	
	if (marks.length == 0) return 0;
	else {
		if (marks.length > 5) marks = marks.slice(0,5);
			let average = 0;
		for (let i = 0; i < marks.length; i++) {
	        average += marks[i];  
		}
			return average / marks.length;
	}
}

function askDrink(name,dateOfBirthday){
	let age = new Date().getFullYear() - dateOfBirthday.getFullYear();
	if (age >= 18) {
		   return`Не желаете ли олд-фэшн, ${name}`;
	} else return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
	 
}