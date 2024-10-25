import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  return (
    <div className='flex-1 w-screen h-screen items-center justify-center'>
        <Box className="w-full h-full" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: "center" }}>
        <CircularProgress className='text-slate-900' size={80}/>
        </Box>
    </div>
  );
}
