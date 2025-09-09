export const typeDefs = `#graphql 

  type Book {
    id: ID!
    title: String!
    author: Author!
    bestseller: Boolean

  }
 
  type BookResponse {
    book: [Book!]!
    message: String
  
  }

  type Author {
    id: ID!
    name: String!
    book: [Book]!
  }

  type AuthorResponse {
    author: Author!
    message: String
  }


  type Query {
    Books: BookResponse!
    Book(id: ID!): Book!  
    author(id: ID!): AuthorResponse!
  }


  input newBookInput {
    title: String!
    author: ID!
    bestseller: Boolean
  }

  input updateBookInput {
    title: String
    author: ID
    bestseller: Boolean
  }


  input authorInput {
    name: String!
  }


  type Mutation {
    addBook(newBook: newBookInput!): Book!
    updateBook(id: ID!, book: updateBookInput! ): Book
    deleteBook(id: ID!): Book

    addAuthor(author: authorInput!): Author
  
    }

`