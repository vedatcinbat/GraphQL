import { Injectable } from "@nestjs/common";
import { Book } from "./books.model";

@Injectable()
export class BooksService {
    private books: Book[] = [
        {id: "1", title: "Harry Potter", author: "J.K. Rowling"},
        {id: "2", title: "The Lord of the Rings", author: "J.R.R. Tolkien"},
    ]

    findAll(): Book[] {
        return this.books;
    }

    createBook(title: string, author: string): Book {
        const newBook: Book = {id: (this.books.length + 1).toString(), title, author};
        this.books.push(newBook);
        return newBook;
    }
}