<<<<<<< Updated upstream
import { Grid, TextField } from '@mui/material';
import React, { useState, useTransition } from 'react'

export default function ExampleUseTransition() {
  const [isPending, startTransition] = useTransition();
  const [inp, setInp] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setInp(e.target.value);

    startTransition(() => {
      const l = [];
      for (let i = 0; i < 20000; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  }

  return (
    <Grid
      container
      direction="column"
      alignContent={"center"}
      alignItems={"center"}
      spacing={2}
    >
      <Grid item>
        <TextField value={inp} onChange={handleChange} />
        <Grid container>
          {isPending ? (
            <>Loading</>
          ) : (
            list.map((item, index) => (
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
                key={index}
              >
                {item}
              </Grid>
            ))
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
=======
import { Grid, TextField } from '@mui/material';
import React, { useState, useTransition } from 'react'

export default function ExampleUseTransition() {
  const [isPending, startTransition] = useTransition();
  const [inp, setInp] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setInp(e.target.value);

    startTransition(() => {
      const l = [];
      for (let i = 0; i < 20000; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  };

  return (
    <Grid
      container
      direction="column"
      alignContent={"center"}
      alignItems={"center"}
      spacing={2}
    >
      <Grid item>
        <TextField value={inp} onChange={handleChange} />
        <Grid container>
          {isPending ? (
            <>Loading</>
          ) : (
            list.map((item, index) => (
              <Grid item className={"list"} key={index}>
                {item}
              </Grid>
            ))
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
>>>>>>> Stashed changes
