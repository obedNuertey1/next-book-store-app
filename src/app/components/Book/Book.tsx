"use client";
import { Button } from "@mui/material";
import './Book.css';
import Link from "next/link";
import axios from "axios";

const Book = (props:any) => {
  // @ts-ignore
  const {_id, name, author, description, price, image} = props.book;
  const {refetchHandler} = props;
  const URL = `/api/books/${_id}`;
  const deleteHandler = async () =>{
    await axios.delete(URL).then((response)=>response.data).then(()=>refetchHandler());
  }
  
  return (
    <div className="next-card">
      <img width={200} height={200} src={image} alt={name} />
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h2>GH₵ {price}</h2>
      <div>
        {/* @ts-ignore */}
        <Button LinkComponent={Link} href={`/books/${_id}`} sx={{mt: "auto"}}>Update</Button>
        <Button sx={{mt: "auto"}} onClick={deleteHandler}>Delete</Button>
      </div>
    </div>
  );
};


export default Book;