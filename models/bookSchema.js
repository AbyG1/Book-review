import mongoose, { model } from "mongoose"
const {Schema, modal } = mongoose


const bookSchema = new Schema( 
    {
        title: String,
        author: String,
        bestseller: Boolean,
    },
    {
        timestamps: true, 
    }
)

const Book = model('Book',bookSchema)

export default Book