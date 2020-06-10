import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: [ './main.component.scss' ]
})
export class MainComponent implements OnInit {
	bookCollection: any[];

	constructor(private bookServices: BookService) {}

	ngOnInit(): void {
		this.bookCollection = this.bookServices.getBooks();
	}

	openForm() {
		let modalWrapper = document.getElementById('modal-wrapper');
		modalWrapper.style.display = 'grid';
	}
}
