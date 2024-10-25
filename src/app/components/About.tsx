"use server";
import { Box, Link, Typography } from "@mui/material";
import "./About.css";

const About = () => {
  return (
    <div>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Typography
        variant="h2" sx={{fontFamily:"fantasy"}}>This is a Book Store Application</Typography>
        <Link href="https://github.com/obedNuertey1/next-book-store-app" target="_blank" rel="noreferrer">Get the Code</Link>
        <Typography variant="h3">Technologies Used</Typography>
        <ul style={{listStyleType: "none", alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "row"}} className="tech-list">
          <li>React</li>
          <li>Typescript</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>Express</li>
          <li>Material UI</li>
        </ul>
      </Box>
    </div>
  );
};

export default About;