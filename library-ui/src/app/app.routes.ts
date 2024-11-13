// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { BorrowerDetailsComponent } from './components/borrower-details/borrower-details.component';

export const appRoutes: Routes = [
  { path: '', component: BookListComponent },  // Default route showing the book list
  { path: 'borrower-details', component: BorrowerDetailsComponent },  // Borrower details page
  { path: '**', redirectTo: '', pathMatch: 'full' }  // Wildcard route for any unknown paths
];
