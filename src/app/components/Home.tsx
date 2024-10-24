"use server";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        {/* @ts-ignore */}
        <Button LinkComponent={Link} to={"/books"} sx={{mt: 15, background: "orangered"}} variant="contained">
          <Typography>VIEW ALL BOOKS</Typography>
        </Button>
      </Box>
    </div>
  );
};

Home.name = "Home";

export default Home;
