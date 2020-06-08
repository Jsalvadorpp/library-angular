import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: [ './main.component.scss' ]
})
export class MainComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}

	openForm() {
		let modalWrapper = document.getElementById('modal-wrapper');
		modalWrapper.style.display = 'grid';
	}
}
