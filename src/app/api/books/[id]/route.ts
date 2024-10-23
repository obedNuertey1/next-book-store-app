import BookController from "@/lib/controllers/books-controller";
import {NextRequest} from "next/server";
import {MongooseConnect} from "@/lib/mongoose";

const db = new MongooseConnect(process.env.MONGO_URI!);
const Book = new BookController(db);

export async function GET(req: NextRequest, {params}: {params: {id: string}}) {
    return await Book.getBookById(req, {params});
}

export async function PUT(req: NextRequest, {params}: {params: {id: string}}){
    return await Book.updateBook(req, {params});
}