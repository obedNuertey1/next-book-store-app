"use client";
import axios from 'axios';
import {useEffect, useState} from 'react';
import Book from '@/app/components/Book/Book';
import "./Book.css"

const URL:string = `/api/books`

const fetchHandler = async () => {
  return await axios.get(URL).then((response) => {
    return response
});
}

const Books = () => {
  const [books, setBooks] = useState([]);
  const fetcher = () => {
    fetchHandler().then((res:any)=>{
        console.log(res.data)
      setBooks(res.data);
    })
  }
  useEffect(()=>{
    fetcher();
  }, []);
//   console.log(books)
  
  return (
    <div className='mb-6'>
      <ul>
        {books.map((elem:any, index:number) => (
          <li className='book' key={index}>
            <Book book={elem} refetchHandler={fetcher} />
          </li>
        ))}
      </ul>
    </div>
  );
};  

export default Books;