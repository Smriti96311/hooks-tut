import { Button, Grid } from "@mui/material";
import React from "react";
import { useTheme, useUpdateTheme } from "../../common/ThemeProvider";

export default function ExampleUseContext() {
  const theme = useTheme();
  const updateTheme = useUpdateTheme();

  return (
    <Grid>
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        className={theme ? "themebox dark" : "themebox light"}
        sx={{
          height: "200px",
          mb:2.5
        }}
      >
        SHOWING CURRENT THEME COLOR
      </Grid>
      <Grid>
        <Button variant={"contained"} onClick={updateTheme}>Toggle Theme</Button>
      </Grid>
    </Grid>
  );
}
