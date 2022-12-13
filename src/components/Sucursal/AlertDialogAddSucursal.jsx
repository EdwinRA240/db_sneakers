import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Button, FormGroup, TextField } from "@mui/material";
import { React, useEffect, useState } from "react";
import FormControlDireccion from "../Form's/FormControlCP";

export default function AlertDialogAddDireccion() {
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
      CLAVE: "",
      NOMBRE: Nombre,
      PAGINA_WEB: Pagina_Web,
      LADA: parseInt(Lada),
      NUMERO_TEL: parseInt(Numero_Tel),
      EXTENSION: parseInt(Extension),
      ID_DIR: Dir,
    });
    console.log(Data);
  };
  const handleSQL = () => {
    fetch("http://localhost:5000/Sucursal", {
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
        <DialogTitle id="alert-dialog-title">Agregar un nueva sucursal</DialogTitle>
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
              onChange={(event) => setPagina_Web(event.target.value)}
              label="Pagina_Web"
            />
            <TextField
              fullWidth
              sx={{ mt: 2 }}
              label="Lada"
              onChange={(event) => setLada(event.target.value)}
            />
            <TextField
              fullWidth
              sx={{ mt: 2 }}
              label="Numero_Tel"
              onChange={(event) => setNumero_Tel(event.target.value)}
            />
            <TextField
              fullWidth
              sx={{ mt: 2 }}
              label="Extension"
              onChange={(event) => setExtension(event.target.value)}
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
