import { Resolver, Query, Mutation, Args} from '@nestjs/graphql';
import { BooksService } from './books.service';
import { Book } from './books.model';

@Resolver(() => Book)
export class BooksResolver {
    constructor(private booksService: BooksService) {}

    @Query(() => [Book])
    books(): Book[] {
        return this.booksService.findAll();
    }

    @Mutation(() => Book)
    addBook(
        @Args('title') title: string,
        @Args('author') author: string
    ): Book {
        return this.booksService.createBook(title, author);
    }

}