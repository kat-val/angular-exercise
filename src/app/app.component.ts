import { Component, VERSION } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  book: Book[];
  constructor(private MyService: BookService) {
    this.book = this.MyService.getBooks();
    console.log(this.MyService.getBooks);
  }
}
