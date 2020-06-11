import { Injectable } from '@angular/core';
import { Book } from './models/book';

@Injectable({
	providedIn: 'root'
})
export class BookService {
	bookList = [];

	constructor() {}

	getBooks() {
		return this.bookList;
	}

	addBook(book: Book) {
		this.bookList.push(book);
	}

	removeBook(book: Book) {
		this.bookList.splice(this.bookList.indexOf(book), 1);
	}
}
