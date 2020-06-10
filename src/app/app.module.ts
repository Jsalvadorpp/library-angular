import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { NewBookFormComponent } from './new-book-form/new-book-form.component';
import { BookComponent } from './book/book.component';
import { BookService } from './book.service';

@NgModule({
	declarations: [ AppComponent, NavbarComponent, MainComponent, NewBookFormComponent, BookComponent ],
	imports: [ BrowserModule, FormsModule ],
	providers: [ BookService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
