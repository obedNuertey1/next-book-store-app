import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import React from 'react';
import Link from "next/link";

const Header = () => { 
  const [value, setValue] = React.useState(0);
  return (
    <AppBar role="header" sx={{backgroundColor: "#232F3D"}} position="sticky">
      <Toolbar>
        <Link href={"/"} style={{color: "unset"}} >
          <Typography component="p">
            <LibraryBooksIcon />
          </Typography>
        </Link>
        <Tabs 
        sx={{ml: 'auto'}}
        textColor="inherit" indicatorColor='secondary' value={value} onChange={(_, val)=>{
          setValue(val);
        }}>
          {/* @ts-ignore */}
          <Tab LinkComponent={Link} href="/add" label='Add book' />
          {/* @ts-ignore */}
          <Tab LinkComponent={Link} href="/books" label='Books' />
          {/* @ts-ignore */}
          <Tab LinkComponent={Link} href="/about" label='About Us' />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;