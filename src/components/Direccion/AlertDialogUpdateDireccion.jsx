import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton } from "@mui/material";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import { Button, FormGroup, TextField } from "@mui/material";
import { React, useEffect, useState } from "react";
import FormControlEstados from "../Form's/FormControlEstados";

export default function AlertDialogUpdateDireccion(props) {
  const [open, setOpen] = useState(false);
  const [Estados, setEstados] = useState([]);
  const [Estado, setEstado] = useState(1);
  const [Municipio, setMunicipio] = useState("");
  const [Codigo_Postal, setCodigo_Postal] = useState("");
  const [Calle, setCalle] = useState("");
  const [No_Exterior, setNo_Exterior] = useState("");
  const [No_Interior, setNo_Interior] = useState("");
  // const [DatosHijo, setDatosHijo] = useState("");
  const [Data, setData] = useState({
    ID: props.data.ID,
    ESTADO_ID: "",
    ALCAL_MUN: "",
    CODIGO_POSTAL: "",
    CALLE: "",
    NUMERO_EXT: "",
    NUMERO_INT: "",
  });

  // const hijoAPadre = (Datos) => {
  //   setEstado(Datos);
  // };

  useEffect(() => {
    fetch("http://localhost:5000/estados")
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        setEstados(responseJson);
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
      ID: props.data.ID,
      ESTADO_ID: parseInt(Estado),
      ALCAL_MUN: Municipio,
      CODIGO_POSTAL: parseInt(Codigo_Postal),
      CALLE: Calle,
      NUMERO_EXT: parseInt(No_Exterior),
      NUMERO_INT: parseInt(No_Interior),
    });
    console.log(JSON.stringify(Data));

    fetch("http://localhost:5000/direccion", {
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
        {/* {console.log(DatosHijo)} */}
        <DialogTitle id="alert-dialog-title">Agregar una nueva direccion</DialogTitle>
        <DialogContent>
          <FormGroup>
            <FormControlEstados
              nombre={props.data.ESTADO_ID}
              opciones={Estados.rows}
              funcion={(hijo) => {
                setEstado(hijo);
              }}
            />
            <TextField
              fullWidth
              sx={{ mt: 2 }}
              label={props.data.ALCAL_MUN}
              id="Municipio"
              onChange={(event) => setMunicipio(event.target.value)}
            />
            <TextField
              fullWidth
              sx={{ mt: 2 }}
              onChange={(event) => setCodigo_Postal(event.target.value)}
              label={props.data.CODIGO_POSTAL}
              id="Codigo_Postal"
            />
            <TextField
              fullWidth
              sx={{ mt: 2 }}
              label={props.data.CALLE}
              id="Calle"
              onChange={(event) => setCalle(event.target.value)}
            />
            <TextField
              fullWidth
              sx={{ mt: 2 }}
              label={props.data.NUMERO_EXT}
              id="No_Exterior"
              onChange={(event) => setNo_Exterior(event.target.value)}
            />
            <TextField
              fullWidth
              sx={{ mt: 2 }}
              label={props.data.NUMERO_INT}
              id="No_Interior"
              onChange={(event) => setNo_Interior(event.target.value)}
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
