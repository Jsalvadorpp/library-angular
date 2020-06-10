import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from '../book.service';

@Component({
	selector: 'app-new-book-form',
	templateUrl: './new-book-form.component.html',
	styleUrls: [ './new-book-form.component.scss' ]
})
export class NewBookFormComponent implements OnInit {
	BookInfo = {
		title: '',
		author: '',
		status: 'read'
	};

	constructor(private bookService: BookService) {}

	ngOnInit(): void {
		let modalWrapper = document.getElementById('modal-wrapper');

		//- close the modal if the user click outside the form
		window.addEventListener('click', (e) => {
			if (e.target == modalWrapper) {
				this.cleanForm();

				//-close form
				modalWrapper.style.display = 'none';
			}
		});
	}

	cleanForm() {
		let inputs = <any>document.querySelectorAll(".book-form input[type='text']");

		inputs.forEach((input) => {
			input.value = '';
		});
	}

	newBook() {
		let book = new Book(this.BookInfo);
		this.bookService.addBook(book);
	}
}
