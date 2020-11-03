//Задание 2
//-------------------------------------------
function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  // Замедление на половину секунды.
  sleep(100); // Можно использовать другое значение замедления.
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}

function compareArrays( arr1, arr2 ) {
	if ( (arr1.length === arr2.length) && (arr1.every((n, i) => n === arr2[i])) )
		return true;
	else return false;
}


function memorize(fn, limit,...args) {
  let cache = [];
  let check = false;
  //args - массив из n фкгументов
  //Наш cache - это массив объектов 
  //cache = [
  //       {arg[0]:args[0],..,arg[n]:args[n], result:fn}, -1-й объект
  //       {arg[0]:args[0],..,arg[n]:args[n], result:fn}, -2-й объект
  //       ......
  //       {arg[0]:args[0],..,arg[n]:args[n], result:fn},  - limit-объект
  //       ]

  for (let k=0; k < cache.length; k++) { //пробегаем объекты массива
  	let ind = 0; //счетчик совпадений агрументов args со значениями свойств объекта

      for (key in cache[k]) {     //пробегаем по объекту k
      	  //если очередной аргумент args совпадает 
      	  //со значением свойства объекта
      	  //то увеличиваем счетчик на 1
  	     if (cache[k][key] ===args[key]) ind++; 

       }
       //если число совпадений равно числу агрументов, то 
       // мы нашли объект, значения свойств которого совпадают
       // с массивом аргументов. Тогда мы обрываем проверку дальнейшую,
       //и запоминаем номер объекта k в переменную ind (не пропадать же ей зря?)
       if (ind == args.length) { check =true; ind = k; break;} 
  }
  
  //И выводим результат
   if (check) {
     return cashe[ind].result;   
   } else { 
   	//если все свойства объектов не свопали с массивом аргументов,
   	//то производим вычисления:
   	 let result = fn();
   	 
   	 //если число объектов не превышает допустимого значения, 
   	 // добавляем новый объект в cache. Обзовем его mas:
     let mas = `{`;   	 
     if (cache.length < limit) {
       for (let i=0;i<args.length;i++) {
       	mas += `${arg[i]}:${args[i]},`
       }
       mas += `result: ${result} }`;
       cache.push(mas); //Добавили 
       return result;   //и возратили результат
     }
    }
}
