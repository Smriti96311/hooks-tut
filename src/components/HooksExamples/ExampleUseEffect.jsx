import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'

export default function ExmapleUseEffect() {
  const [url] = useState('https://api.adviceslip.com/advice');
  const [msg, setMsg] = useState("");
  
  useEffect(() => {
    const interval = setInterval(() => {
        fetch(url).then(res=>res.json()).then(data=>setMsg(data.slip.advice))
    }, 3000);

    return () => {
        clearInterval(interval);
    }
  }, [url])

  return (
    <Grid
      container
      direction="column"
      alignContent={"flex-start"}
      alignItems={"flex-start"}
      spacing={2}
    >
      <Grid item>
        <Typography variant="h4">{msg}</Typography>
      </Grid>
    </Grid>
  );
}