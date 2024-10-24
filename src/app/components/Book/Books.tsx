"use client";
import axios from 'axios';
import {useEffect, useState} from 'react';
import Book from './Book';
import "./Book.css"

const URL:string = `/api/books`

const fetchHandler = async () => {
  return await axios.get(URL).then((response) => (
    response.data
  ));
}

const Books = () => {
  const [books, setBooks] = useState([]);
  const fetcher = () => {
    fetchHandler().then((data:any)=>{
      setBooks(data.books);
    })
  }
  useEffect(()=>{
    fetcher();
  }, []);
  console.log(books)
  
  return (
    <div>
      <ul>
        {books.map((book:any, index:number) => (
          <li className='book' key={index}>
            <Book book={book} refetchHandler={fetcher} />
          </li>
        ))}
      </ul>
    </div>
  );
};  

export default Books;