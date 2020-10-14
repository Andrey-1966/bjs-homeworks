"use strict";

function redd(a,b,c) {
	return 2;
}

function getSolutions(a, b, c) {
	let D = Math.pow(b,2) - 4 * a * c;
    let roots = [];

	if (D == 0) {
      roots[0] = -b / (2*a); 
	}
	
	if ( D  > 0 ) {
		roots[0] = (-b - Math.sqrt(D) ) / (2 * a);
		roots[1] = (-b + Math.sqrt(D) ) / (2 * a);
	}

	return {
		D: D, 
		roots: roots
	};
}

function showSolutionsMessage(a, b, c) {
	let result = getSolutions(a, b, c);
	
		let equls = 'Вычисляем корни квадратного уравнения: ';
	if ( a != 0) {
		if ((a != 1) && (a !=(-1))) equls = `${a}x²`;
		else {
			if (a == -1) equls += `-x²`;
			else equls += `x²`;
		}
	}
	if (b != 0) {
		if ((b != 1) && (b !=(-1))) {
			 if (b > 0) equls += `+ ${b}x`;
			 else equls += `- ${Math.abs(b)}x`;
       } else {
       	if (b == -1)  equls += `- x`;
       	else equls += `+ x`;
       }
	}
	
	if (c != 0) {
		
			 if (c > 0) equls += `+ ${c}`;
			 else equls += `- ${Math.abs(c)}`;
       }
	console.log(equls );
	console.log(`Значение дискриминанта: ${result.D}`);
	if (result.D > 0 ) {
		console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
	}
	if (result.D == 0 ) {
		console.log(`Уравнение имеет два ОДИНАКОВЫХ корня. X₁ = ${result.roots[0]}`);
	}
	if (result.D < 0 ) {
		console.log(`Уравнение не имеет ДЕЙСТВИТЕЛЬНЫХ корней`);
	}
	//return `Вычисляем корни квадратного уравнения ${result.D} ${result.roots}`;
    
}

showSolutionsMessage(1, 1, -12);
showSolutionsMessage(1, 2, 3);

//Задание 2
//=======================================================
function getAverageMark(marks) {
  let s = 0;
  if (marks.length > 0) {
	  for (let i=0; i < marks.length; i++) {
	  	s = s + marks[i];
	   }
	   return s/marks.length;
  } else return 0;
}



function getAverageScore(data) {
	let average = 0;
	let i = 0;
	  for (let subj in data) {
	  	average = average + getAverageMark(data[subj]);
		i++;
	  	console.log(`${subj} : ${getAverageMark(data[subj])}`);
    }
    if (i > 0) { 
    average = average/i;	
     console.log(`average : ${average}`);
 } else  console.log(`average : 0`);
}

console.log(getAverageScore( {
	algebra:[2,4,5,2,3,4],
	geometry:[2,4,5]
}));