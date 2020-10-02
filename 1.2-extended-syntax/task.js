function getResult(a,b,c){
  "use strict";
    let arr = [];
    if (a !=0 ) {
    let D = Math.pow(b,2) - 4 * a * c;
    
    if (D > 0 )  {
    	arr.push( (-b - Math.sqrt(D)) / (2*a));
    	arr.push( (-b + Math.sqrt(D)) / (2*a));
    } else if (D ==0) {
    	arr.push( -b / (2 * a));
    } else {
    	arr.push('');
    }
} else {
	if (b !=0 ) {
		arr.push( -c/b);
	} else arr.push('');
    // return x;
}
return arr;
}

function getAverageMark(marks){
	"use strict";
	let lenm = marks.length;
	if (lenm > 5) lenm = 5;
	let aver = 0;
	for (let i = 0; i < lenm; i++) {
       aver += marks[i];  
	}
	aver = aver / lenm;
	return aver;
    // код для задачи №2 писать здесь
    // return averageMark;
}

function askDrink(name,dateOfBirthday){
	"use strict";
	let mes = "";
	let  today = new Date();
	let  year_now = today.getFullYear();
	let  year_B = dateOfBirthday.getFullYear();
	let  diff =  year_now - year_B;
	if (diff >= 18) {
		   mes = "Не желаете ли олд-фэшн," + name;
	} else mes = "Сожалею," + name + ", но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!";
	 return mes;
}