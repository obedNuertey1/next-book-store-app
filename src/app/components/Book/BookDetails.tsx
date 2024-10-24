import { Box, Button, Checkbox, FormControlLabel, FormLabel, IconButton, Snackbar, TextField, useMediaQuery } from "@mui/material";
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { SnackbarCloseReason } from '@mui/material/Snackbar';
import { useNavigate } from "react-router-dom";
import useWaiting from "../../hooks/waiting";

type bookState = {
  name: string;
  author: string;
  description: string;
  price: number;
  available: boolean;
  image: string;
}



const sendRequest = async (URL:string, book:bookState | null):Promise<any> => {
  const response = await axios.put(URL, book);
  console.log(response);
  return response;
}

const BooksDetails = ({params}: {params: {id: string}}) => {
  const id = params.id;
  const URL = `/api/books/${id}`;
  const [book, setBook] = useState<bookState | null>(null);
  useEffect(()=>{
    (async ()=>{
      await axios.get(`${URL}`).then((response)=>{
        console.log("Hello from useEffect");
        console.log(response.data);
        setBook(response?.data?.book);
      })
    })();
    // console.log({book_name:book.name});
  }, [id]);
  const [waiting, stopWaiting] = useWaiting(1500);
  const router = useNavigate();
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const matches = useMediaQuery('(max-width:600px)');


  useEffect(()=>{
    console.log({book});
    return ()=>{
      stopWaiting();
    }
  },[submitted])

  
  const handleChange = (e:any) => {
    setBook((prevState:any)=>({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  }

  const handleSubmit = async(e:any) => {
    e.preventDefault();
    console.log({book});
    setSubmitted((prev:boolean)=>(!prev))
    sendRequest(URL, book).then((response:any)=>{
      console.log(response.data);
      setOpen(true);
    }).catch((e)=>{
      setError(e.response.data.message);
    })
    setBook({
      name: "",
      author: "",
      description: "",
      price: 0,
      available: false,
      image: "",
    })
    setSubmitted((prev:boolean)=>(!prev))
    setOpen(true);
    await waiting();
    router('/books');
  };
  
  const handleClose = (
    _: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      {/* <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button> */}
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <>
    {book && 
      <form onSubmit={handleSubmit}>
      <Box 
        display={"flex"} 
        flexDirection={"column"} 
        justifyContent={"center"}
        maxWidth={matches?350:700}
        alignContent={"center"}
        alignSelf={"center"}
        marginLeft={"auto"}
        marginRight={"auto"}
        marginTop={10}
      >
        <FormLabel htmlFor="name">Name</FormLabel>
        <TextField margin="normal" id="name" fullWidth variant="outlined" name="name" 
        value={book?.name}
        onChange={handleChange}
        />
        <FormLabel htmlFor="author">Author</FormLabel>
        <TextField margin="normal" id="author" fullWidth variant="outlined" name="author" 
          onChange={handleChange}
          value={book?.author}
        />
        <FormLabel htmlFor="name">Description</FormLabel>
        <TextField margin="normal" id="description" fullWidth variant="outlined" name="description" 
          onChange={handleChange}
          value={book?.description}
        />
        <FormLabel htmlFor="price">Price</FormLabel>
        <TextField type="number" margin="normal" id="price" fullWidth variant="outlined" name="price" 
          onChange={handleChange}
          value={book?.price}
        />
        <FormLabel htmlFor="image">Image Url</FormLabel>
        <TextField margin="normal" id="image" fullWidth variant="outlined" name="image" 
          onChange={handleChange}
          value={book?.image}
        />
        <FormControlLabel control={<Checkbox checked={book?.available} onChange={(e)=>{
          setBook((prevState:any)=>({
            ...prevState,
            available: e.target.checked
          }))
        }} />} label="Available" />
        <Button variant="contained" type="submit">Update Book</Button>
      </Box>
    </form>
    }
    <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={!error?"Updated":"failed to update"}
        action={action}
        anchorOrigin={{
          vertical: matches?'top':'bottom',
          horizontal: matches?'center':'left',
        }}
      />
    </>
  );
};

BooksDetails.name = "BooksDetails";

export default BooksDetails;