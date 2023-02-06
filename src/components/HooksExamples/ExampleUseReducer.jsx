import React, { useReducer } from 'react';
import { Grid, Typography,Button } from "@mui/material";

const reducer = (state, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  } else if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  throw Error("Unknow Action");
};

export default function ExampleUseReducer() {
    const [state, dispatch] = useReducer(reducer, { counter : 0})
  return (
    <Grid
      container
      direction="column"
      alignContent={"flex-start"}
      alignItems={"flex-start"}
      spacing={2}
    >
      <Grid item>
        <Typography variant="h4">{state.counter}</Typography>
      </Grid>
      <Grid item>
        <Button onClick={() => dispatch({ type: "increment" })}>
          Increment Counter
        </Button>
      </Grid>
      <Grid item>
        <Button onClick={() => dispatch({ type: "decrement" })}>
          Decrement Counter
        </Button>
      </Grid>
    </Grid>
  );
}
