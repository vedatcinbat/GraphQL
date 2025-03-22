const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const typeDefs = gql`
    type Book {
        id: ID!
        title: String!
        author: String!
    }

    type Query {
        books: [Book!]!
    }

    type Mutation {
        addBook(title: String!, author: String!): Book!
    }

`;

let Books = [
    {id: '1', title: 'Harry Potter', author: 'J.K. Rowling'},
    {id: '2', title: 'The Hunger Games', author: 'Suzanne Collins'}
]



const resolvers = {
    Query: {
        books: () => Books
    },
    Mutation: {
        addBook: (_, {title, author}) => {
            const book = {id: String(Books.length + 1), title: title, author: author};
            Books.push(book);
            return book;
        }
    }
}

const startServer = async () => {
    const app = express()
    const server = new ApolloServer({ typeDefs, resolvers })

    await server.start()

    server.applyMiddleware({ app })

    const PORT = 4000

    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}${server.graphqlPath}`)
        console.log('Open GraphQL Playground to start querying your API')
    })
}

startServer()