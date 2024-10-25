import React from "react";
import svg404 from "@/app/assets/page-not-found.svg";
import Image from 'next/image';
import Link from "next/link";
import { Box, Grid2 as Grid, Button, Typography } from "@mui/material";

function Custom404(){
    return (
        <div className='flex flex-col justify-center items-center h-[80vh]'>
            <div className="">
                <Box sx={{flexGrow: 1}}>
                    <Grid container spacing={2} sx={{alignItems: "center", justifyContent: "center"}}>
                        <Grid size={8} className="flex flex-row justify-center items-center">
                            <Image src={svg404} alt='404 image' className='w-40 h-40' />
                        </Grid>
                        <Grid size={8} className="flex flex-row justify-center items-center">
                        <Box className='flex flex-col justify-center items-center'>
                            <Button variant="contained" LinkComponent={Link} href="/" className='btn btn-info btn-base-1'>Go to Home</Button>
                            <Typography variant="h6" className='text-center'>404 - Page Not Found</Typography>
                        </Box>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    );
}

Custom404.getInitialProps = async (ctx:any)=>{
    return {statusCode:ctx.res ? ctx.res.statusCode : ctx.err ? ctx.err.statusCode : null}
}

export default Custom404;