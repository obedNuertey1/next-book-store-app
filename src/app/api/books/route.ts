import BookController from "@/lib/controllers/books-controller";
import {NextRequest} from "next/server";
import {MongooseConnect} from "@/lib/mongoose";

const db = new MongooseConnect(process.env.MONGO_URI!);
const Book = new BookController(db);

export async function GET(req: NextRequest) {
    return await Book.getAllBooks(req);
}