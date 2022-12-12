/* eslint-disable eqeqeq */
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton } from "@mui/material";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import { Button, FormGroup, TextField } from "@mui/material";
import { React, useEffect, useState } from "react";
import FormControlDireccion from "../Form's/FormControlDireccion";

export default function AlertDialogUpdateDireccion(props) {
  const [Direcciones, setDirecciones] = useState([]);
  const [Nombre, setNombre] = useState(1);
  const [Pagina_Web, setPagina_Web] = useState("");
  const [Lada, setLada] = useState("");
  const [Numero_Tel, setNumero_Tel] = useState("");
  const [Extension, setExtension] = useState("");
  const [Dir, setDir] = useState([]);

  const [open, setOpen] = useState(false);
  const [Data, setData] = useState({
    CLAVE: "",
    NOMBRE: "",
    PAGINA_WEB: "",
    LADA: "",
    NUMERO_TEL: "",
    EXTENSION: "",
    ID_DIR: "",
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
      PAGINA_WEB: Pagina_Web,
      LADA: parseInt(Lada),
      NUMERO_TEL: parseInt(Numero_Tel),
      EXTENSION: parseInt(Extension),
      ID_DIR: Dir,
    });
    console.log(Data);

    fetch("http://localhost:5000/Sucursal", {
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
        window.location.reload(false); //refresh
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
        <DialogTitle id="alert-dialog-title">Agregar un nueva sucursal</DialogTitle>
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
              label={props.data.PAGINA_WEB}
              onChange={(event) => setPagina_Web(event.target.value)}
            />
            <TextField
              fullWidth
              sx={{ mt: 2 }}
              label={props.data.LADA}
              onChange={(event) => setLada(event.target.value)}
            />
            <TextField
              fullWidth
              sx={{ mt: 2 }}
              label={props.data.NUMERO_TEL}
              onChange={(event) => setNumero_Tel(event.target.value)}
            />
            <TextField
              fullWidth
              sx={{ mt: 2 }}
              label={props.data.EXTENSION}
              onChange={(event) => setExtension(event.target.value)}
            />
            <FormControlDireccion
              nombre={props.data.CODIGO_POSTAL}
              opciones={Direcciones.rows}
              funcion={(hijo) => {
                setDir(hijo);
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
