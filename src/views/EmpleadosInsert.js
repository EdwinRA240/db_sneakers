import { Button, FormGroup, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { React, useEffect, useState } from "react";
import FormControl from "../components/FormControl";
import UpgradeIcon from "@mui/icons-material/Upgrade";

const EmpleadosInsert = () => {
  // const [Empleados, setEmpleados] = useState([]);
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
    // fetch("http://localhost:5000/empleados")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((responseJson) => {
    //     setEmpleados(responseJson);
    //     console.log(responseJson);
    //   });

    fetch("http://localhost:5000/estados")
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        setEstados(responseJson);
        console.log(responseJson);
      });
  }, []);

  const handleInsert = (event) => {
    console.log(Data);
  };

  return (
    <>
      <Container maxWidth="sm" sx={{ py: 4 }}>
        <FormGroup
          onClick={handleInsert}
          // onChange={() => {
          //   console.log(Data);
          // }}
        >
          <Typography>DIRECCION</Typography>
          <FormControl
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
            onClick={() => {
              setData({
                ID: "DIR1",
                ESTADO_ID: Estado,
                ALCAL_MUN: Municipio,
                CODIGO_POSTAL: Codigo_Postal,
                CALLE: Calle,
                NUMERO_EXT: No_Exterior,
                NUMERO_INT: No_Interior,
              });
            }}
          >
            Insert
          </Button>
        </FormGroup>
      </Container>
    </>
  );
};

export default EmpleadosInsert;
