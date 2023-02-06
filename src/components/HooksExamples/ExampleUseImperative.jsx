import { Button, Grid, Typography } from '@mui/material';
import React, { useRef } from 'react'
import CustomInput from '../../common/customInput';

export default function ExampleUseImperative() {
  const inputRef = useRef(null);
  return (
    <Grid
      container
      direction="column"
      alignContent={"flex-start"}
      alignItems={"flex-start"}
      spacing={2}
    >
      <Typography>UseImperative Example</Typography>
      <Grid item>
        <CustomInput ref={inputRef} value={"Some text"} />
      </Grid>
      <Grid item>
        <Button variant="contained" onClick={() => inputRef.current.alertHi()}>
          Focus
        </Button>
      </Grid>
    </Grid>
  );
}
