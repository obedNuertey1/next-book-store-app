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

    public async addBook(req:NextApiRequest, res:NextApiResponse){
        console.log("This route will add a book");
        const {name, author, description, price, image, available} = req.body;
        let book:any;
        try{
            book = await Book.create({name, author, description, price, image, available});
        }catch(e){
            console.error(e);
        }
        if(!book){
            return res.status(404).json({message: "Book not added"});
        }
        return res.status(200).json(book);
    }
    
    public async getBookById(req:NextApiRequest, res:NextApiResponse){
        console.log("This route will get a book by id");
        const {id} = req.query;
        let book:any;
        try{
            book = await Book.findById(id);

        } catch(e){
            console.log(e);
        }
        if(!book){
            return res.status(404).json({message: "Book not found"});
        }
        return res.status(200).json(book);
    }

    public async updateBook(req:NextApiRequest, res:NextApiResponse){
        console.log("This route will update a book");
        const {id} = req.query;
        const {name, author, description, price, image, available} = req.body;
        let book:any;
        try{
            book = await Book.findByIdAndUpdate(id, {name, author, description, price, image, available});
        }catch(e){
            console.log(e);
        }
        if(!book){
            return res.status(404).json({message: "Unable to update book"});
        }
        return res.status(200).json({book});
    }

    
}