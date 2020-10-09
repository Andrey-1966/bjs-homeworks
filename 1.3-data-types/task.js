"use strict";

function rdns(a,k) {
	  let m = Math.pow(10,k);
	  return Math.round(a*m)/m;
    
}

function monthDiffrent(data1, data2) {
    let months;
    months = (data2.getFullYear() - data1.getFullYear()) * 12;
    months -= data1.getMonth() + 1; //данный месяц не считаем
    months += data2.getMonth();
    return months <= 0 ? 0 : months;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    
    //провекрка на "вшивость" введенных данных
    if (typeof percent != "number") {
        percent = Number.parseInt(percent);
    }
   if (typeof contribution != "number") {
        contribution = Number.parseInt(contribution);
    }
    if (typeof amount != "number") {
        amount = Number.parseInt(amount);
    } 

    let P = (percent / 12) /100;
    let now = new Date(); //Сегодняшняя дата. 
    let n = monthDiffrent(now, date); //подсчет месяцев между датами. Текущий месяц не считается!!!
    let S = amount - contribution; //Тело кредита
    
    let Total = S * (P + P / ( Math.pow((1 + P),n)-1));
    //Формула, данная в задании (вот она, сверху) не работает.
    //Если решить задачу с равномерным уменьшением остатком по кредиту
    //ежемесячно, то вот рабочая формула:

   // let Total = S *(1 + (n + 1) / 2 * P / 100);
    // return "Total = " + rdns(Total,2) + ": за " + n + " месяцев (сегодняшний месяц не учитывается!)";
    return rdns(Total,2);
}

function getGreeting(name) {
     // код для задачи №2 писать здесь
     if ((!name) || (name.trim().length == 0)) return `Привет, мир! Меня зовут Аноним`;
     else  return `Привет, мир! Меня зовут ${name}`;
}