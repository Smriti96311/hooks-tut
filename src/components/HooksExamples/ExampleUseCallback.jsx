import { TextField, Button, Grid } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";

export default function ExampleUseCallback() {
  const [inp, setInp] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const getMultiplicationTable = useCallback(() => {
    let table = [];
    for (let i = 1; i <= 10; i++) 
      table.push(<div>{inp} * {i} = {inp * i}</div>);
    return table;
  }, [inp]);

  return (
    <Grid
      container
      direction="column"
      alignContent={"flex-start"}
      alignItems={"flex-start"}
      spacing={2}
      className={darkMode ? "themebox dark" : "themebox light"}
    >
      <Grid item>
        <TextField type="number" value={inp} onChange={(e) => e.target.value >= 10
              ? alert("Enter a value less than 10")
              : setInp(e.target.value)
          }
        />
      </Grid>
      <Grid item><Button onClick={() => setDarkMode(!darkMode)}>Toggle current Theme</Button></Grid>
      <Grid item><Table getMultiplicationTable={getMultiplicationTable} /></Grid>
    </Grid>
  );
}

export const Table = ({ getMultiplicationTable }) => {
  const [table, setTable] = useState([]);

  useEffect(() => {

    setTable(getMultiplicationTable());
    console.log("multiplication function got called");

  }, [getMultiplicationTable]);

  return (
    <ul>
      {table.length > 0 &&
        table.map(
            (item, index) => (
          <React.Fragment key={index}>{item}</React.Fragment>
        ))
      }
    </ul>
  );
};
