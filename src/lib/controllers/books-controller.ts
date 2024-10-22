import Book from "../models/Book";
import { NextApiRequest, NextApiResponse } from "next";

export default class BooksController {
    constructor(){};

    public async getAllBooks(req: NextApiRequest, res: NextApiResponse) {
        console.log("This route will provide all the books");
        let books:any;

        try{
            books = await Book.find();
        }catch(e){
            console.error(e);
        }
        if(!books){
            return res.status(404).json({message: "No books found"});
        }
        return res.status(200).json(books);
    }

    
}