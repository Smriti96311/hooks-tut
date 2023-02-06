import { Info } from "@mui/icons-material";
import { Grid, Button } from "@mui/material";
import React, { useEffect, useState, useRef, useLayoutEffect } from "react";

export default function ExampleUseLayoutEffect() {
  const [show, setShow] = useState(false);
  const btnRef = useRef();
  const tooltipRef = useRef();

  useEffect(() => {
    if (btnRef.current == null || tooltipRef.current == null) return;

    const { left, top, bottom, height } =
      btnRef.current.getBoundingClientRect();

    let tooltipXCoordinate = left;
    let tooltipYCoordinate = top - height;
    if (tooltipYCoordinate < 0) tooltipYCoordinate = bottom;

    tooltipRef.current.style.left = `${tooltipXCoordinate}px`;
    tooltipRef.current.style.top = `${tooltipYCoordinate+50}px`;
  }, [show]);

  return (
    <Grid
      container
      direction="column"
      alignContent={"flex-start"}
      alignItems={"flex-start"}
      spacing={2}
    >
      <Grid item>
        <Button ref={btnRef} onClick={() => setShow(!show)}>
          <Info fontSize="large" />
        </Button>
      </Grid>
      {show && (
        <Grid
          item
          style={{ position: "absolute", top:60 , left: 40 }}
          ref={tooltipRef}
        >
          Hey, you just saw a tooltip
        </Grid>
      )}
    </Grid>
  );
}
