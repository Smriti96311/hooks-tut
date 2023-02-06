import React, { useEffect, useRef, useState } from "react";
import { Grid, Typography, TextField } from "@mui/material";

export default function ExampleUseRef() {
//   const [renderCount, setRenderCount] = useState(0);
  const [inp, setInp] = useState("");
const renderCount = useRef(0);

  useEffect(() => {
    // setRenderCount(renderCount + 1);
    renderCount.current = renderCount.current + 1;
  });

  return (
    <Grid
      container
      direction="column"
      alignContent={"flex-start"}
      alignItems={"flex-start"}
      spacing={2}
    >
      <Grid item>
        <TextField value={inp} onChange={(e) => setInp(e.target.value)} />
      </Grid>
      <Grid item>
        <Typography>Component rendered {renderCount.current} times</Typography>
      </Grid>
    </Grid>
  );
}
