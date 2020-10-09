"use strict";

function rdns(a,k) {
	  let m = Math.pow(10,k);
	  return Math.round(a*m)/m;
    
}

function monthDiffrent(data1, data2) {
    let months;
    months = (data2.getFullYear() - data1.getFullYear()) * 12;
    months -= data1.getMonth(); 
    months += data2.getMonth();
    return months <= 0 ? 0 : months;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    let Total = '';
    let counts = true;
    //провекрка на "вшивость" введенных данных
    if (!isNaN(percent)) {
        percent = Number.parseInt(percent);
    } else {
    	Total = `Параметр percent содержит неправильное значение ` + `${percent}`;
    	counts = false;
	}

   if (!isNaN(contribution)) {
        contribution = Number.parseInt(contribution);
    } else {
    	Total += `Параметр contribution содержит неправильное значение ` + `${contribution}`;
    	counts = false;
	}

    if (!isNaN(amount)) {
        amount = Number.parseInt(amount);
    } else {
    	Total += `Параметр amount содержит неправильное значение ` + `${amount}`;
    	counts = false;
	}

	if (counts) {
	    let P = (percent / 12) /100;
	    let now = new Date(); //Сегодняшняя дата. 
	    let n = monthDiffrent(now, date); //подсчет месяцев между датами. Текущий месяц не считается!!!
	    let S = amount - contribution; //Тело кредита
	    
	    let Total = n * S * (P + P / ( Math.pow((1 + P),n)-1));
	    return rdns(Total,2);
	} else return Total;
    //Формула, данная в задании (вот она, сверху) не работает.
    //Если решить задачу с равномерным уменьшением остатком по кредиту
    //ежемесячно, то вот рабочая формула:

   // let Total = S *(1 + (n + 1) / 2 * P / 100);
    // return "Total = " + rdns(Total,2) + ": за " + n + " месяцев (сегодняшний месяц не учитывается!)";
    
}

function getGreeting(name) {
     let hello = `Привет, мир! Меня зовут `;
     
   hello += ((!name) || (name.trim().length == 0)) ? ` Аноним` : `${name}`;
    return hello;
}