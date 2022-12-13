/* eslint-disable eqeqeq */
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton } from "@mui/material";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import { Button, FormGroup, TextField } from "@mui/material";
import { React, useEffect, useState } from "react";
import FormControlDireccion from "../Form's/FormControlCP";

export default function AlertDialogUpdateDireccion(props) {
  const [Direcciones, setDirecciones] = useState([]);
  const [Dir, setDir] = useState([]);
  const [Nombre, setNombre] = useState(1);
  const [ApellidoP, setApellidoP] = useState("");
  const [ApellidoM, setApellidoM] = useState("");
  const [Correo, setCorreo] = useState("");
  const [open, setOpen] = useState(false);
  const [Data, setData] = useState({
    CLAVE: "",
    NOMBRE: "",
    APELLIDO_PAT: "",
    APELLIDO_MAT: "",
    CORREO: "",
    ID: "",
  });

  useEffect(() => {
    fetch("http://localhost:5000/direccion")
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        setDirecciones(responseJson);
        // console.log(responseJson);
      });
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSetData = () => {
    setData({
      CLAVE: props.data.CLAVE,
      NOMBRE: Nombre,
      APELLIDO_PAT: ApellidoP,
      APELLIDO_MAT: ApellidoM,
      CORREO: Correo,
      ID_DIR: Dir,
    });
    console.log(Data);
  };

  const handleSQL = () => {
    fetch("http://localhost:5000/Cliente", {
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
        if (response.rowsAffected == 1) {
          handleClose();
          window.location.reload(false); //refresh
        }
      });
  };

  return (
    <>
      <IconButton aria-label="delete" onClick={handleClickOpen}>
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
        <DialogTitle id="alert-dialog-title">
          Modificar a cliente llamado {props.data.NOMBRE}
        </DialogTitle>
        <DialogContent>
          <FormGroup>
            <TextField
              fullWidth
              sx={{ mt: 2 }}
              label={props.data.NOMBRE}
              onChange={(event) => setNombre(event.target.value)}
            />
            <TextField
              fullWidth
              sx={{ mt: 2 }}
              label={props.data.APELLIDO_PAT}
              onChange={(event) => setApellidoP(event.target.value)}
            />
            <TextField
              fullWidth
              sx={{ mt: 2 }}
              label={props.data.APELLIDO_MAT}
              onChange={(event) => setApellidoM(event.target.value)}
            />
            <TextField
              fullWidth
              sx={{ mt: 2 }}
              label={props.data.CORREO}
              onChange={(event) => setCorreo(event.target.value)}
            />
            <FormControlDireccion
              nombre={"Codigo Postal"}
              opciones={Direcciones.rows}
              funcion={(hijo) => {
                setDir(hijo);
              }}
            />
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onFocus={handleSetData} onClick={handleSQL} autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
