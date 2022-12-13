import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton } from "@mui/material";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import { Button, FormGroup, TextField } from "@mui/material";
import { React, useEffect, useState } from "react";
import FormControlCP from "../Form's/FormControlCP";
import FormControlSucursal from "../Form's/FormControlSucursal";
import FormControlCargo from "../Form's/FormControlCargo";

export default function AlertDialog(props) {
  const [CargoEpls, setCargoEpls] = useState([]);
  const [Sucursales, setSucursales] = useState([]);
  const [Direcciones, setDirecciones] = useState([]);
  const [Dir, setDir] = useState([]);
  const [Nombre, setNombre] = useState(1);
  const [ApellidoP, setApellidoP] = useState("");
  const [ApellidoM, setApellidoM] = useState("");
  const [Correo, setCorreo] = useState("");
  const [CargoEpl, setCargoEpl] = useState("");
  const [SucursalClave, setSucursalClave] = useState("");
  const [open, setOpen] = useState(false);
  const [Data, setData] = useState({
    CLAVE: "",
    NOMBRE: "",
    APELLIDO_PAT: "",
    APELLIDO_MAT: "",
    CORREO: "",
    CARGO_EPL: "",
    SUCURSAL_CLAVE: "",
    DIRECION_ID: "",
  });

  useEffect(() => {
    fetch("http://localhost:5000/CargoEpl")
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        setCargoEpls(responseJson);
      });

    fetch("http://localhost:5000/Sucursal")
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        setSucursales(responseJson);
      });

    fetch("http://localhost:5000/direccion")
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        setDirecciones(responseJson);
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
      CARGO_EPL: parseInt(CargoEpl),
      SUCURSAL_CLAVE: SucursalClave,
      DIRECION_ID: Dir,
    });
    console.log(Data);
  };
  const handleSQL = () => {
    fetch("http://localhost:5000/Empleado", {
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
        <DialogTitle id="alert-dialog-title">Actualizar empleado</DialogTitle>
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
            <FormControlCargo
              nombre={props.data.CARGO}
              opciones={CargoEpls.rows}
              funcion={(hijo) => {
                setCargoEpl(hijo);
              }}
            />
            <FormControlSucursal
              nombre={props.data.NOMBRE_S}
              opciones={Sucursales.rows}
              funcion={(hijo) => {
                setSucursalClave(hijo);
              }}
            />
            <FormControlCP
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
          <Button onFocus={handleSetData} onClick={handleSQL} autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
