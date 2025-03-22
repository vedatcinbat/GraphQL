using System.Collections.Generic;
using NETGraphQLApi.Models;

namespace NETGraphQLApi.GraphQL
{
    public class Query
    {
        public IEnumerable<Book> GetBooks() => new List<Book> {
            new Book { Id = 1, Title = "C# in Depth", Author = "Jon Skeet" },
            new Book { Id = 2, Title = "ASP.NET Core in Action", Author = "Andrew Lock" },
            new Book { Id = 3, Title = "Blazor in Action", Author = "Chris Sainty" },
            new Book { Id = 4, Title = "Entity Framework Core in Action", Author = "Jon P Smith" },
            new Book { Id = 5, Title = "GraphQL in .NET Core", Author = "test" }
        };
    }
}