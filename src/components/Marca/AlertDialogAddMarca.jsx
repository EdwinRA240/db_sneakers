import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Button, FormGroup, TextField } from "@mui/material";
import { React, useState } from "react";

export default function AlertDialog() {
  const [open, setOpen] = useState(false);
  const [Marca, setMarca] = useState(1);
  const [Data, setData] = useState({
    ID: "",
    MARCA: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSetData = () => {
    setData({
      ID: 1,
      MARCA: Marca,
    });
    console.log(JSON.stringify(Data));

    fetch("http://localhost:5000/marca", {
      method: "POST",
      body: JSON.stringify(Data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => {
        console.log("Success:", response);
        handleClose();
        window.location.reload(false); //refresh
      });
  };

  return (
    <>
      <IconButton aria-label="delete" onClick={handleClickOpen}>
        <AddIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth={"sm"}
      >
        <DialogTitle id="alert-dialog-title">Agregar una nueva Marca</DialogTitle>
        <DialogContent>
          <FormGroup>
            <TextField
              fullWidth
              sx={{ mt: 2 }}
              label="Marca"
              onChange={(event) => setMarca(event.target.value)}
            />
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleSetData} autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
