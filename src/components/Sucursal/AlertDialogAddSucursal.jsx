import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Button, FormGroup, TextField } from "@mui/material";
import { React, useEffect, useState } from "react";
import FormControlDireccion from "../Form's/FormControlDireccion";

export default function AlertDialogAddDireccion() {
  const [Direcciones, setDirecciones] = useState([]);
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
      CLAVE: "CL",
      NOMBRE: Nombre,
      APELLIDO_PAT: ApellidoP,
      APELLIDO_MAT: ApellidoM,
      CORREO: Correo,
      ID_DIR: Dir,
    });
    console.log(Data);

    fetch("http://localhost:5000/Cliente", {
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
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth={true}
        maxWidth={"sm"}
      >
        {/* {console.log(DatosHijo)} */}
        <DialogTitle id="alert-dialog-title">Agregar un nuevo cliente</DialogTitle>
        <DialogContent>
          <FormGroup>
            <TextField
              fullWidth
              sx={{ mt: 2 }}
              label="Nombre"
              onChange={(event) => setNombre(event.target.value)}
            />
            <TextField
              fullWidth
              sx={{ mt: 2 }}
              onChange={(event) => setApellidoP(event.target.value)}
              label="ApellidoP"
            />
            <TextField
              fullWidth
              sx={{ mt: 2 }}
              label="ApellidoM"
              onChange={(event) => setApellidoM(event.target.value)}
            />
            <TextField
              fullWidth
              sx={{ mt: 2 }}
              label="Correo"
              onChange={(event) => setCorreo(event.target.value)}
            />
            <FormControlDireccion
              nombre={"Codigo Postal"}
              opciones={Direcciones.rows}
              funcion={(hijo)=> {setDir(hijo)}}
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
