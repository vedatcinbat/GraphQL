using NETGraphQLApi.Models;

namespace NETGraphQLApi.GraphQL
{
    public class Mutation
    {
        private static readonly List<Book> Books = new();

        public Book AddBook(string title, string author)
        {
            var book = new Book { Id = Books.Count + 1, Title = title, Author = author };
            Books.Add(book);
            return book;
        }
    }
}