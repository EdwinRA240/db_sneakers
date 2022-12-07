import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect(props) {
  const [value, setvalue] = React.useState("");

  const handleChange = (event) => {
    setvalue(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, mt: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.nombre}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={props.nombre}
          onChange={handleChange}
        >
          {props.opciones?.map((e)=> (<MenuItem value={e.ID}>{e.ESTADO}</MenuItem>)
          )}
        </Select>
      </FormControl>
    </Box>
  );
}
