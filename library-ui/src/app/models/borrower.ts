// src/app/models/borrower.model.ts
export class Borrower {
    id: number;
    name: string;
    phoneNumber: string;
    dueDate: string;
  
    constructor(id: number, name: string, phoneNumber: string, dueDate: string) {
      this.id = id;
      this.name = name;
      this.phoneNumber = phoneNumber;
      this.dueDate = dueDate;
    }
  }
  