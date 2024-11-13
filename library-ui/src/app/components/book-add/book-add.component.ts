// src/app/components/book-add/book-add.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from '../../models/book';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-book-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent {
  @Output() bookAdded = new EventEmitter<Book>();

  bookTitle: string = '';
  bookAuthor: string = '';
  bookCategory: string = '';
  bookYear: number = new Date().getFullYear();
  bookImageUrl: string = '';  // Add this field

  addBook(): void {
    if (this.bookTitle && this.bookAuthor && this.bookCategory && this.bookYear && this.bookImageUrl) {
      const newBook = new Book(
        Math.floor(Math.random() * 1000),
        this.bookTitle,
        this.bookAuthor,
        this.bookCategory,
        this.bookYear,
        this.bookImageUrl   // Include imageUrl argument
      );
      this.bookAdded.emit(newBook);
      this.bookTitle = '';
      this.bookAuthor = '';
      this.bookCategory = '';
      this.bookYear = new Date().getFullYear();
      this.bookImageUrl = '';  // Reset the image URL field
    }
  }
}
