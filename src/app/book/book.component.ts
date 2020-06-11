import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../book.service';

@Component({
	selector: 'app-book',
	templateUrl: './book.component.html',
	styleUrls: [ './book.component.scss' ]
})
export class BookComponent implements OnInit {
	@Input() book;

	constructor(private bookService: BookService) {}

	ngOnInit(): void {}

	removeBook(book) {
		this.bookService.removeBook(book);
	}
}
