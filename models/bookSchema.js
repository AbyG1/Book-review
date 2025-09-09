import mongoose from "mongoose"
const {Schema, model } = mongoose


const bookSchema = new Schema( 
    {
        title: {
            type: String,
            required: true
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: "Author"
        },

        bestseller: Boolean,
    },
    {
        timestamps: true, 
    }
)

const Book = model('Book',bookSchema)

export default Book