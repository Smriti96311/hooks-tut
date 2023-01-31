import { Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { getMessage } from '../../common/getMessage';

export default function ExmapleUseState() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(30);
  const [msg, setMsg] = useState(() => getMessage());

  return (
    <Grid
      container
      direction="column"
      alignContent={"flex-start"}
      alignItems={"flex-start"}
      spacing={2}
    >
      <Grid item>
        <TextField
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>
      <Grid item>
        <TextField
          placeholder="Enter your Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </Grid>
      <Grid item>
        <Button variant="contained" onClick={() => name && setMsg(name+ `, age ${age}, have a Good Day!!`)}>
          Show Advice
        </Button>
      </Grid>
      <Grid item>
        <Typography variant="h4">
         {msg} 
        </Typography>
      </Grid>
    </Grid>
  );
}

