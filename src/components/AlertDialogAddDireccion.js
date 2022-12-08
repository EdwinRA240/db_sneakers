import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Button, FormGroup, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { React, useEffect, useState } from "react";
import FormControlEstados from "../components/FormControlEstados";
import UpgradeIcon from "@mui/icons-material/Upgrade";


export default function AlertDialogAddDireccion(props) {
  const [open, setOpen] = useState(false);
  const [Estados, setEstados] = useState([]);
  const [Estado, setEstado] = useState(1);
  const [Municipio, setMunicipio] = useState("");
  const [Codigo_Postal, setCodigo_Postal] = useState("");
  const [Calle, setCalle] = useState("");
  const [No_Exterior, setNo_Exterior] = useState("");
  const [No_Interior, setNo_Interior] = useState("");
  const [Data, setData] = useState({
    ID: "",
    ESTADO_ID: "",
    ALCAL_MUN: "",
    CODIGO_POSTAL: "",
    CALLE: "",
    NUMERO_EXT: "",
    NUMERO_INT: "",
  });

  useEffect(() => {
    fetch("http://localhost:5000/estados")
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        setEstados(responseJson);
        console.log(responseJson);
      });
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    fetch("http://localhost:5000/direccion", {
      method: "DELETE",
      body: JSON.stringify(props.data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));

    handleClose();
  };

  const handleSetData = () => {
    setData({
      ID: "DIR70",
      ESTADO_ID: parseInt(Estado),
      ALCAL_MUN: Municipio,
      CODIGO_POSTAL: parseInt(Codigo_Postal),
      CALLE: Calle,
      NUMERO_EXT: parseInt(No_Exterior),
      NUMERO_INT: parseInt(No_Interior),
    });
    console.log(JSON.stringify(Data));

    fetch("http://localhost:5000/direccion", {
      method: "POST",
      body: JSON.stringify(Data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
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
      >
        <DialogTitle id="alert-dialog-title">Confirmacion</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ¿Esta seguro de eliminar la direccion del estado {props.data.ESTADO_ID}?
            <Container maxWidth="sm" sx={{ py: 4 }}>
              <FormGroup
              // onClick={handleInsert}
              // onChange={() => {
              //   console.log(Data);
              // }}
              >
                <Typography>DIRECCION</Typography>
                <FormControlEstados
                  nombre={"Estado"}
                  opciones={Estados.rows}
                  onChange={(event) => setEstado(event.target.value)}
                />
                <TextField
                  fullWidth
                  sx={{ mt: 2 }}
                  label="Alcaldia/Municipio"
                  id="Municipio"
                  onChange={(event) => setMunicipio(event.target.value)}
                />
                <TextField
                  fullWidth
                  sx={{ mt: 2 }}
                  onChange={(event) => setCodigo_Postal(event.target.value)}
                  label="Codigo Postal"
                  id="Codigo_Postal"
                />
                <TextField
                  fullWidth
                  sx={{ mt: 2 }}
                  label="Calle"
                  id="Calle"
                  onChange={(event) => setCalle(event.target.value)}
                />
                <TextField
                  fullWidth
                  sx={{ mt: 2 }}
                  label="No. Exterior"
                  id="No_Exterior"
                  onChange={(event) => setNo_Exterior(event.target.value)}
                />
                <TextField
                  fullWidth
                  sx={{ mt: 2 }}
                  label="No. Interior"
                  id="No_Interior"
                  onChange={(event) => setNo_Interior(event.target.value)}
                />
                <Button
                  sx={{ mt: 1 }}
                  variant="contained"
                  endIcon={<UpgradeIcon />}
                  onClick={handleSetData}
                >
                  Insert
                </Button>
              </FormGroup>
            </Container>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleDelete} autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
