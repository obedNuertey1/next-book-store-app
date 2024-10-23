"use client";
import {Box, Typography} from "@mui/material";
import {useEffect, useState} from "react";

export default function Home() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    (async ()=>{
      const res = await fetch("/api/books");
      if(!res.ok){
        return;
      }
      const data = await res.json();
      console.log({data});
    })()
  }, []);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Typography variant="h1" component="h1" gutterBottom>
          Welcome to Next.js!
        </Typography>
      </Box>
    </>
  );
}
