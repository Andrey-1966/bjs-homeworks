'use strict';


String.prototype.isPalindrome = function isPalindrome() {
const str = this;
   let stro  = str.toLowerCase().replace(/\s/g,"");
   return stro === stro.split("").reverse().join("");
}
//String.prototype.isPalindrome - для задачи №1

function getAverageMark(marks) {
  let average = 0;
  if (marks.length > 0) {
	  for (let i=0; i < marks.length; i++) {
	  	average = average + marks[i];
	   }
	   roundedAverage = Math.round(average/marks.length);
      return roundedAverage;
  } else return 0;
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}