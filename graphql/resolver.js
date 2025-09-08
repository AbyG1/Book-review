import Book from '../models/bookSchema.js'

export const resolvers =  {

  Query: {

    getBooks: (_,args,contetxt) => {

    }

  },



  Mutation: {

    addBook: async(parent,args,context) => {

        const book = await Book.create({
            title: args.newBook.title,
            author: args.newBook.author,
            bestseller: args.newBook.bestseller
        })

        return book
    },

    updateBook: async(parent,args,context) => {

        const book = await Book.findById(args.id)
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

    }






  }



}




