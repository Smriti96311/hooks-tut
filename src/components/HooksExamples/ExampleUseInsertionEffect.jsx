import { Grid } from "@mui/material";
import { useInsertionEffect, useState } from "react";

export default function ExampleUseInsertionEffect() {
  const [selected, setSelected] = useState({
    option1: false,
    option2: false,
    option3: false,
  });

  useInsertionEffect(() => {
    const rule = `.option-selected {background-color : #6096B4;color : black;}`;
    const styleElement = document.createElement("style");
    styleElement.innerHTML = rule;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, [selected.option1, selected.option2, selected.option3]);

  return (
    <Grid
      container
      direction="row"
      alignContent={"flex-start"}
      alignItems={"flex-start"}
      spacing={2}
    >
      <Grid item>
        <div
          onClick={() =>
            setSelected({ ...selected, option1: !selected.option1 })
          }
          className={selected.option1 ? "option-selected option" : "option"}
        >
          Option 1
        </div>
      </Grid>
      <Grid item>
        <div
          onClick={() =>
            setSelected({ ...selected, option2: !selected.option2 })
          }
          className={selected.option2 ? "option-selected option" : "option"}
        >
          Option 2
        </div>
      </Grid>
      <Grid item>
        <div
          onClick={() =>
            setSelected({ ...selected, option3: !selected.option3 })
          }
          className={selected.option3 ? "option-selected option" : "option"}
        >
          Option 3
        </div>
      </Grid>
    </Grid>
  );
}
