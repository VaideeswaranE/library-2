// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // Don't import AppRoutingModule here
  template: `
    <nav>
      <a routerLink="/">Books</a>  <!-- Navigates to Book List -->
      <a routerLink="/borrower-details">Borrowers</a>  <!-- Navigates to Borrower Details -->
    </nav>
    <router-outlet></router-outlet>  <!-- Routed content will be displayed here -->
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'library-ui';
}
