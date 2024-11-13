// src/app/models/book.ts
export class Book {
  constructor(
    public id: number,
    public title: string,
    public author: string,
    public category: string,        // Ensure this is of type `string`
    public publishedYear: number,
    public imageUrl: string         // Ensure this is of type `string`
  ) {}
}
