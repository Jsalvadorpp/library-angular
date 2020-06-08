import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-new-book-form',
	templateUrl: './new-book-form.component.html',
	styleUrls: [ './new-book-form.component.scss' ]
})
export class NewBookFormComponent implements OnInit {
	constructor() {}

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
		let inputs = document.querySelectorAll(".book-form input[type='text']");

		inputs.forEach((input) => {
			input.value = '';
		});
	}
}
