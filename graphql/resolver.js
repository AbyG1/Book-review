
import Book from '../models/bookSchema.js'
import Author from '../models/authorSchema.js'

export const resolvers =  {

  Query: {

    Books: async(_,args,context) => {
      const books = await Book.find()
      
      if(books.length === 0){
        return{
          book:[],
          message: "No books found"
        }
      }

      return {
        book: books,
        message:"successfully fetched"
      }
    },

    
    Book: async(_,args,context) => {
      const book = await Book.findById(args.id) 
      if(!book){
        throw new Error("Book not found");
      }
      return book
    },
   
    author: async(parent,args,context) => {
      const author = await Author.findById(args.id)
      if(!author){
        throw new Error("Author not found")
      }

      return {
        author,
        messege: "successfully fetched"
      }


    },

  




  },

  Book: {
    author: async(parent,args) => {
      const author = await Author.findById(parent.author)
      return author
    }
  },

 Author: {
  book: async(parent,args) => {
    const book = Book.find({author:parent.id})
    return book
  }

 },





  Mutation: {

    addBook: async(parent,args,context) => {

        const bookExists = await Book.exists({title:args.newBook.title})
        if(bookExists){
          throw new Error("Book already exist")
        }

        const book = await Book.create({
            title: args.newBook.title,
            author: args.newBook.author,
            bestseller: args.newBook.bestseller

        })

        return await book.populate("author")
    },

    updateBook: async(parent,args,context) => {

        const book = await Book.findById(args.id)

        if (!book) {
          throw new Error("Book not found");
        }

        if(args.book.title){
         book.title =  args.book.title   
        }

        if(args.book.author){
          book.author = args.book.author
        }

        if(args.book.bestseller !== undefined){
            book.bestseller = args.book.bestseller
        }

        await book.save()

        return await Book.findById(args.id) 

    },

    deleteBook: async(parent, args, context) => {
        const book = await Book.findByIdAndDelete(args.id)
        if (!book) {
          throw new Error("Book not found");
        }
        return book
    },

     addAuthor: async(_,args) => {

       const authorExists = await Author.exists({name:args.author.name})
        if(authorExists){
          throw new Error("Author already exist")
        }


      const author = await Author.create({
        name: args.author.name
      })

      return author

    }



    


  }



}




