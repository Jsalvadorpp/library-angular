interface bookInfo {
	title: string;
	author: string;
	status: string;
}

export class Book {
	title: string;
	author: string;
	status: string;

	constructor(book: bookInfo) {
		this.title = book.title;
		this.author = book.author;
		this.status = book.status;
	}
}
