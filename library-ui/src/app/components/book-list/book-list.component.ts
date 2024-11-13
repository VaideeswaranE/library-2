import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-book-list',
  standalone: true,  // <-- Add this line
  imports: [CommonModule,RouterModule],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [
    new Book(1, 'The Catcher in the Rye', 'J.D. Salinger', 'Fiction', 1951, 'Book1.jpg'),
    new Book(2, 'To Kill a Mockingbird', 'Harper Lee', 'Fiction', 1960, 'Book2.jpg'),
    new Book(3, '1984', 'George Orwell', 'Dystopian', 1949, 'Book3.jpg'),
    new Book(4, 'Pride and Prejudice', 'Jane Austen','Romance', 1813, 'Book4.jpg'),
    new Book(5, 'The Great Gatsby', 'F.Scott Fitgerald','Classic', 1925, 'Book5.jpg')

  ];

  constructor() {}

  ngOnInit(): void {}
}
