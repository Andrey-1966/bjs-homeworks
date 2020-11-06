'use strict';

class PrintEditionItem {
	constructor(name,releaseDate,pagesCount) {
	     this.name = name;
	     this.releaseDate = releaseDate;
	     this.pagesCount = pagesCount;
	     this.state = 100;
	     this.type = null;
	}
	
	fix() {
		return this.state *= 1.5;
	}
	
	set state(state) {
		this._state = state;
		if (state < 0) this._state = 0;
		if (state > 100) this._state = 100;
	}

	get state() {
		return this._state;
	}

}

const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);

console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100

class Magazine extends PrintEditionItem {
	constructor(author,name,releaseDate,pagesCount) {
	     super(name,releaseDate,pagesCount);
	     this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author,name,releaseDate,pagesCount) {
	     super(name,releaseDate,pagesCount);
	     this.author = author;
	     this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(author,name,releaseDate,pagesCount) {
		super(author,name,releaseDate,pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author,name,releaseDate,pagesCount) {
		super(author,name,releaseDate,pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author,name,releaseDate,pagesCount) {
		super(author,name,releaseDate,pagesCount);
		this.type = "detective";
	}
}

const picknick = new FantasticBook("Аркадий и Борис Стругацкие","Пикник на обочине", 1972, 168);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15

//===== ЗАДАНИЕ 2

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
     if (book.state > 30) this.books.push(book);
	}

	findBookBy(type, value) {
      //проверяем, есть ли такой элемент (функция some)
      if ( this.books.some(val => val[type] === value)) {
      	return this.books.find(val => val[type] === value)[type];
	} else return null;
}
   
   giveBookByName(bookName) {
   	let ind = this.books.findIndex(i => i.name === bookName);
    if ( ind > -1) {
   	 	this.books.splice(ind, 1); //Удаляем из массива 1 элемент
   	 	return bookName;
   	 } else return null;
   }


}


const library = new Library("Библиотека имени Ленина");
library.addBook(new Magazine("Мурзилка", 1924, 60));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));

console.log("1 "+library.findBookBy("name", "Пикник на обочине"));
console.log("2 "+library.findBookBy("name", "Кот"));

console.log(library.giveBookByName("Кот"));
console.log(library.giveBookByName("Пикник на обочине"));