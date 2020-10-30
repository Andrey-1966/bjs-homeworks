//constructor(name = 'weapon', attack = 3, durability = 3, range = 1)

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

//которая будет возвращать имена всех оружий
function getNames() {
	return weapons.forEach(item =>item.name);
}

//принимает значение прочности (strength) 
//и возвращает количество оружий больше принимаемой прочности
//Если прочность - это durability, то: 
//отфильтровываем и суммируем
function getCountReliableWeapons(strength) {
  return weapons.filter(weap =>weap.durability > strength)
         .reduce((acc) =>{
         	return acc++;
         },0);
}

//принимает значение прочности 
//и возвращает вердикт: есть ли оружия прочней принимаемой прочности?
//Решение: если  возвращаемый массив ненулевой длины, то true
function hasReliableWeapons(strength) {
   if  (weapons.some(weap =>weap.durability > strength).length > 0)
   	return true; else return false;
}

//принимает значение прочности (strength)
//и возвращает имена оружий, которые прочней полученного значения.
function getReliableWeaponsNames(strength) {
	return weapons.every(weap =>weap.durability > strength).name;
}

//вернёт общую сумму урона всех оружий
//Решение: если getDamage() - метод, подсчитывающий урон для каждого оружия,
//то суммируем их
function getTotalDamage() {
	return weapons.reduce((acc) =>{
		return acc+this.getDamage();
	},0)
}



