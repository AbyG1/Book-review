import mongoose from "mongoose";
const {model,Schema} = mongoose


const authorSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },

    }
)

const Author = model('Author',authorSchema)

export default Author