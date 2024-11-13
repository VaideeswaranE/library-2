import { Component, OnInit, inject } from '@angular/core';
import { BorrowerService } from '../../services/borrower.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Borrower } from '../../models/borrower';// Import the Borrower model

@Component({
  selector: 'app-borrower-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  providers: [BorrowerService],
  templateUrl: './borrower-details.component.html',
  styleUrls: ['./borrower-details.component.css']
})
export class BorrowerDetailsComponent implements OnInit {
  borrowers: Borrower[] = [];  // Use the Borrower model for proper type checking
  private borrowerService = inject(BorrowerService);

  ngOnInit(): void {
    this.borrowerService.getBorrowers().subscribe((data: Borrower[]) => {
      this.borrowers = data;
    });
  }

  isOverdue(dueDate: string): boolean {
    const today = new Date();
    const due = new Date(dueDate);
    return due < today;
  }
}
