import { Grid } from '@mui/material';
import React, { useMemo, useState } from 'react'

export default function ExampleUseMemo() {
    const [inp, setInp] = useState(2);
    const [darkMode, setDarkMode] = useState(false);
    // const computedValue = heavyComputation(inp);
    const computedValue = useMemo(() => {
      return heavyComputation(inp);
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
        <input
          type="number"
          value={inp}
          onChange={(e) => setInp(parseInt(e.target.value))}
        />
        <h4>{computedValue}</h4>
        <button onClick={() => setDarkMode(!darkMode)}>
          Toggle Background Color
        </button>
      </Grid>
    );
}

const heavyComputation = ( someNum ) => {
    for (let i = 0; i < 2000000000; i++){ 
    }
    return someNum * 2;
}