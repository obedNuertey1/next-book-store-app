import mongoose, {Document, Model, Schema} from "mongoose";

interface IBook extends Document{
    name: string;
    author: string;
    description: string;
    price: number;
    image: string;
    available: boolean;
}

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
    },
    description: {
        type: String,
        required: true,
    },
    available: {
        type: Boolean,
        required: true,
    }
});

export default (mongoose.models.Book as Model<IBook>) || mongoose.model<IBook>("Book", bookSchema);