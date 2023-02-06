import { Grid, Typography } from '@mui/material';
import React from 'react'
import { useFetch } from '../../custom-hooks/fetchData';

export default function ExampleUseDebugValue() {
    const data = useFetch("https://api.adviceslip.com/advice");
    return (
      <Grid
        container
        direction="column"
        alignContent={"flex-start"}
        alignItems={"flex-start"}
        spacing={2}
      >
        <Grid item>
          <Typography variant="h4">
            {data && data.slip ? data.slip.advice : "Loading new advice..."}
          </Typography>
        </Grid>
      </Grid>
    );
}
