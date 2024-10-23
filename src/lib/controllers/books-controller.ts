import Book from "../models/Book";
import { NextRequest, NextResponse } from "next/server";
import {MongooseConnect} from "../mongoose";

export default class BooksController {
    constructor(private db: MongooseConnect){};

    public async getAllBooks(req: NextRequest) {
        await this.db.connect();
        console.log("This route will provide all the books");
        let books:any;
        try{
            books = await Book.find();
        }catch(e){
            console.error(e);
        }
        if(!books){
            return NextResponse.json({message: "No books found"}, {status: 404})
        }
        return NextResponse.json(books);
    }

    public async addBook(req:NextRequest){
        await this.db.connect();
        console.log("This route will add a book");
        const {name, author, description, price, image, available} = await req.json();
        let book:any;
        try{
            book = await Book.create({name, author, description, price, image, available});
        }catch(e){
            console.error(e);
        }
        if(!book){
            return NextResponse.json({message: "Book not added"}, {status: 404});
        }
        return NextResponse.json({book}, {status: 200});
    }
    
    public async getBookById(req:NextRequest, {params}: {params: {id: string}}){
        await this.db.connect();
        console.log("This route will get a book by id");
        const {id} =  params;
        let book:any;
        try{
            book = await Book.findById(id);

        } catch(e){
            console.log(e);
        }
        if(!book){
            return NextResponse.json({message: "Book not found"}, {status: 404})
        }
        return NextResponse.json({book}, {status: 200});
    }

    public async updateBook(req:NextRequest, {params}: {params: {id: string}}){
        await this.db.connect();
        console.log("This route will update a book");
        const {id} = params;
        const {name, author, description, price, image, available} = await req.json();
        let book:any;
        try{
            book = await Book.findByIdAndUpdate(id, {name, author, description, price, image, available});
        }catch(e){
            console.log(e);
        }
        if(!book){
            return NextResponse.json({message: "Unable to update book"}, {status: 404});
        }
        return NextResponse.json({book}, {status: 200});
    }

    public async deleteBook(req:NextRequest, {params}: {params: {id: string}}){
        await this.db.connect();
        console.log("This route will delete a book");
        const {id} = params;
        let book:any;
        try{
            book = await Book.findByIdAndDelete(id);
        }catch(e){
            console.error(e);
        }
        if(!book){
            return NextResponse.json({message: "Unable to delete book"}, {status: 404});
        }
        return NextResponse.json({message: "Book deleted successfully"}, {status: 200});
    }
}