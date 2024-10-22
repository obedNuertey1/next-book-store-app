import Image from "next/image";
import {Box, Typography} from "@mui/material";

export default function Home() {
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
