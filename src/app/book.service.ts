import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable()
export class BookService {
  private book: Book[] = [
    new Book('CleanCode', 'Robert Martin', 2012),
    new Book('Extemme Programing', 'Kent Beck', 2010),
    new Book('Extemme Programing 2', 'Kent Beck', 2020),
  ];
  constructor() {
    console.log('El servicio Books está corriendo');
  }

  getBooks() {
    return this.book;
  }
}
