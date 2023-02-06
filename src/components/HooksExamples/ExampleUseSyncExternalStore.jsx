import React, { useSyncExternalStore } from 'react';
import { todoStore } from '../../external-store';
import { Grid, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function ExampleUseSyncExternalStore() {
    const todos = useSyncExternalStore(
      todoStore.subscribe,
      todoStore.getSnapshot
    );

    return (
      <Grid
        container
        direction="column"
        alignContent={"flex-start"}
        alignItems={"flex-start"}
        spacing={2}
      >
        <Grid item>
          <Button variant="contained" onClick={() => todoStore.addTodo()}>
            <AddIcon />
          </Button>
          <br />
          <br />
          {todos.length > 0 &&
            todos.map((item, index) => <div key={item.id}>{item.text}</div>)}
        </Grid>
      </Grid>
    );
}
