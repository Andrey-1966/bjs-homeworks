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
	constructor(name,releaseDate,pagesCount) {
	     super(name,releaseDate,pagesCount);
	     this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(name,releaseDate,pagesCount,author) {
	     super(name,releaseDate,pagesCount);
	     this.author = author;
	     this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(name,releaseDate,pagesCount,author) {
		super(name,releaseDate,pagesCount,author);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(name,releaseDate,pagesCount,author) {
		super(name,releaseDate,pagesCount,author);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(name,releaseDate,pagesCount,author) {
		super(name,releaseDate,pagesCount,author);
		this.type = "detective";
	}
}

const picknick = new FantasticBook("Пикник на обочине", 1972, 168,"Аркадий и Борис Стругацкие");

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
     if (book.state > 30) this.book.push(book);
	}
}