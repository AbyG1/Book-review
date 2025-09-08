export const typeDefs = `#graphql 

  type Book {
    id: ID!
    title: String!
    author: String!
    bestseller: Boolean
  }

 

  type Query {
  
  getBooks: [Book]
  
  }




  input newBookInput {
    title: String!
    author: String!
    bestseller: Boolean
  }

  input updateBookInput {
    title: String
    author: String
    bestseller: Boolean
  }



  type Mutation {
    addBook(newBook: newBookInput!): Book
    updateBook(id: ID!, book: updateBookInput! ): Book
  }

`