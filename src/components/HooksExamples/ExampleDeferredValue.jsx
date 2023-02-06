<<<<<<< Updated upstream
import { Grid, TextField } from "@mui/material";
import React, { useDeferredValue, useEffect, useMemo, useState } from "react";

export const List = ({ inp }) => {
  const LIST_SIZE = 20000;
  const deferredValue = useDeferredValue(inp);

  useEffect(() => {
    console.log(`input: ${inp} \n deferred value : ${deferredValue}`);
  }, [inp, deferredValue]);

  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(
        <Grid
          item
          style={{
            fontSize: "20px",
            textAlign: "center",
            borderRadius: "10px",
            background: "rgb(246 207 207)",
            padding: "10px",
            margin: "4px",
          }}
          key={i}
        >
          {deferredValue}
        </Grid>
      );
    }

    return l;
  }, [deferredValue]);

  return list;
};

export default function ExampleDeferredValue() {
  const [inp, setInp] = useState("...");

  return (
    <Grid
      container
      direction="column"
      alignContent={"center"}
      alignItems={"center"}
      spacing={2}
    >
      <Grid item>
        <TextField value={inp} onChange={(e) => setInp(e.target.value)} />
      </Grid>
      <Grid item>
        <Grid container>
          <List inp={inp} />
        </Grid>
      </Grid>
    </Grid>
  );
}
=======
import { Grid, TextField } from "@mui/material";
import React, { useDeferredValue, useEffect, useMemo, useState } from "react";

export default function ExampleDeferredValue() {
  const [inp, setInp] = useState("...");

  return (
    <Grid
      container
      direction="column"
      alignContent={"center"}
      alignItems={"center"}
      spacing={2}
    >
      <Grid item>
        <TextField value={inp} onChange={(e) => setInp(e.target.value)} />
      </Grid>
      <Grid item>
        <Grid container>
          <List inp={inp} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export const List = ({ inp }) => {
  const LIST_SIZE = 20000;
  const deferredValue = useDeferredValue(inp);

  useEffect(() => {
    console.log(`input: ${inp} \n deferred value : ${deferredValue}`);
  }, [inp, deferredValue]);

  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(
        <Grid item className={"list"} key={i}>
          {deferredValue}
        </Grid>
      );
    }

    return l;
  }, [deferredValue]);

  return list;
};
>>>>>>> Stashed changes
