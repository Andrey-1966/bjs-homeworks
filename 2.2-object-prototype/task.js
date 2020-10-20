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
	equls += `${a}x^2+${b}x+${c}`;
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
	let res ={};
	let aver = 0;
	let i=0;
	for (let subj in data) {
          res[subj] = getAverageMark(data[subj]);
          aver = aver + getAverageMark(data[subj]);
          i++;
	 	}
	if (i > 0) { 
        aver = aver / i;
    } else aver = 0;
    res['average'] = aver;	
	return res;
 
}

console.log(getAverageScore( {
	algebra:[2,4,5,2,3,4],
	geometry:[2,4,5]
}));