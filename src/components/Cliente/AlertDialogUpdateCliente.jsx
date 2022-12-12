/* eslint-disable eqeqeq */
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton } from "@mui/material";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import { Button, FormGroup, TextField } from "@mui/material";
import { React, useEffect, useState } from "react";
// import FormControlEstados from "../Form´s/FormControlEstados";

export default function AlertDialogUpdateDireccion(props) {
  const [Dir, setDir] = useState([]);
  const [Nombre, setNombre] = useState(1);
  const [ApellidoP, setApellidoP] = useState("");
  const [ApellidoM, setApellidoM] = useState("");
  const [Correo, setCorreo] = useState("");
  // const [Alcal_Mun, setAlcal_Mun] = useState("");
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
        setDir(responseJson);
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
        {/* {console.log(DatosHijo)} */}
        <DialogTitle id="alert-dialog-title">
          Modificar a cliente llamado {props.data.NOMBRE}
        </DialogTitle>
        <DialogContent>
          <FormGroup>
            {/* <FormControlEstados
              nombre={"Estado"}
              opciones={Estados.rows}
              funcion={(hijo)=> {setEstado(hijo)}}
            /> */}
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
            <TextField
              fullWidth
              sx={{ mt: 2 }}
              // label={props.data.DIRECCION_ID}
              label="DIRECCION_ID"
              onChange={(event) => setDir(event.target.value)}
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
