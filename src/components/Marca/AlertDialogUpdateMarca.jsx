import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton } from "@mui/material";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import { Button, FormGroup, TextField } from "@mui/material";
import { React, useState } from "react";

export default function AlertDialogUpdateDireccion(props) {
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
      ID: props.data.ID,
      MARCA: Marca,
    });
    console.log(JSON.stringify(Data));

    fetch("http://localhost:5000/Marca", {
      method: "PUT",
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
        window.location.reload(false);
      });
  };

  return (
    <>
      <IconButton aria-label="Update" onClick={handleClickOpen}>
        <UpgradeIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth={true}
        maxWidth={"sm"}
      >
        <DialogTitle id="alert-dialog-title">Remplazar Marca</DialogTitle>
        <DialogContent>
          <FormGroup>
            <TextField
              fullWidth
              sx={{ mt: 2 }}
              label={props.data.MARCA}
              onChange={(event) => {
                setMarca(event.target.value);
                setData({
                  ID: props.data.ID,
                });
              }}
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
